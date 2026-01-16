import { cache } from 'react';

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const DATABASE_ID = process.env.NOTION_DATABASE_ID;

export type BlogPost = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  date: string;
  status: "Published" | "Draft";
};

// Helper for Fetch API
async function fetchNotion(endpoint: string, method: 'GET' | 'POST' = 'GET', body?: any) {
  const headers = {
    'Authorization': `Bearer ${NOTION_TOKEN}`,
    'Content-Type': 'application/json',
    'Notion-Version': '2022-06-28',
  };

  const options: RequestInit = {
    method,
    headers,
    next: { revalidate: 60 }, // Cache for 60 seconds
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  const res = await fetch(`https://api.notion.com/v1${endpoint}`, options);

  if (!res.ok) {
    const error = await res.text();
    console.error('Notion API Error:', error);
    throw new Error(`Notion API Failed: ${res.statusText}`);
  }

  return res.json();
}

// 1. Get all published posts
export const getPublishedPosts = cache(async (): Promise<BlogPost[]> => {
  if (!DATABASE_ID) return [];

  try {
    const response = await fetchNotion(`/databases/${DATABASE_ID}/query`, 'POST', {

      sorts: [
        {
          timestamp: "created_time",
          direction: "descending",
        },
      ],
    });
    return response.results.map((page: any, index: number) => {
      // Debugging: Log property names to find the correct Title property
      if (index === 0) {
        console.log("Debugging Notion Properties:", JSON.stringify(Object.keys(page.properties), null, 2));
      }
      return {
        id: page.id,
        slug: page.id,
        title: page.properties.Name?.title[0]?.plain_text || "Untitled",
        summary: page.properties.Summary?.rich_text[0]?.plain_text || "",
        date: page.properties.Date?.date?.start || new Date().toISOString(),
        status: "Published",
      };
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
});

// 2. Get single post by ID
// Note: We keep the function name 'getPostBySlug' for compatibility with the existing page route,
// but the 'slug' argument is now expected to be a Page ID.
export const getPostBySlug = cache(async (pageId: string) => {
  if (!DATABASE_ID) return null;

  try {
    const page = await fetchNotion(`/pages/${pageId}`, 'GET');

    if (!page || page.object !== 'page') return null;

    return {
      id: page.id,
      title: (page as any).properties.Name?.title[0]?.plain_text || "Untitled",
      date: (page as any).properties.Date?.date?.start || "",
    };
  } catch (error) {
    console.error("Error fetching page:", error);
    return null;
  }
});

// 3. Get page blocks (content)
export const getPageBlocks = cache(async (pageId: string) => {
  const response = await fetchNotion(`/blocks/${pageId}/children`, 'GET');
  return response.results;
});
