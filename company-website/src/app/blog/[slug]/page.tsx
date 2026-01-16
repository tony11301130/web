import { getPostBySlug, getPageBlocks } from "@/lib/notion";
import Link from "next/link";
import styles from "../../page.module.css";

// Revalidate every 60 seconds
export const revalidate = 60;

// Simple Block Renderer
const BlockRenderer = ({ block }: { block: any }) => {
    const { type, id } = block;
    const value = block[type];

    switch (type) {
        case "paragraph":
            return <p className={styles.text}>{value.rich_text[0]?.plain_text}</p>;
        case "heading_1":
            return <h1>{value.rich_text[0]?.plain_text}</h1>;
        case "heading_2":
            return <h2>{value.rich_text[0]?.plain_text}</h2>;
        case "heading_3":
            return <h3>{value.rich_text[0]?.plain_text}</h3>;
        case "bulleted_list_item":
            return <li>{value.rich_text[0]?.plain_text}</li>;
        case "image":
            const src = value.type === "external" ? value.external.url : value.file.url;
            const caption = value.caption[0]?.plain_text || "";
            return (
                <figure>
                    <img src={src} alt={caption} style={{ maxWidth: "100%" }} />
                    {caption && <figcaption>{caption}</figcaption>}
                </figure>
            );
        default:
            return null; // Unsupported block types
    }
};

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = await getPostBySlug(slug);

    if (!post) {
        return <div>Post not found</div>;
    }

    const blocks = await getPageBlocks(post.id);

    return (
        <article className={styles.main}>
            <Link href="/" className={styles.backLink}>&larr; Back to Home</Link>
            <header className={styles.header}>
                <h1>{post.title}</h1>
                <small>{post.date}</small>
            </header>
            <div className={styles.content}>
                {blocks.map((block: any) => (
                    <BlockRenderer key={block.id} block={block} />
                ))}
            </div>
        </article>
    );
}
