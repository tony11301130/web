import Link from "next/link";
import { getPublishedPosts } from "@/lib/notion";
import styles from "./page.module.css";
import React from 'react';

// Revalidate every 60 seconds
export const revalidate = 60;

export const metadata = {
    title: "案例介紹 | Simpro Cloud Technology",
    description: "成功案例與最新的資安趨勢分享",
};

export default async function CasesPage() {
    const posts = await getPublishedPosts();

    return (
        <main className={styles.main}>
            <div className="container">
                <h1 className={styles.title}>案例介紹</h1>
                <p className={styles.description}>
                    成功案例與最新的資安趨勢分享
                </p>

                <section className={styles.grid}>
                    {posts.length === 0 ? (
                        <div className={styles.emptyState}>
                            <h2>暫無文章</h2>
                            <p>目前沒有可顯示的案例。</p>
                        </div>
                    ) : (
                        posts.map((post: any) => (
                            <Link key={post.id} href={`/blog/${post.slug}`} className={styles.card}>
                                <h2 className={styles.cardTitle}>{post.title}</h2>
                                <p className={styles.cardSummary}>{post.summary}</p>
                                <div className={styles.cardMeta}>{post.date}</div>
                            </Link>
                        ))
                    )}
                </section>
            </div>
        </main>
    );
}
