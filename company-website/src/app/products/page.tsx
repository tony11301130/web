import { products } from "@/data/products";
import styles from "./page.module.css";
import React from 'react';

export const metadata = {
    title: "產品介紹 | Simpro Cloud Technology",
    description: "代理國際知名資安品牌，提供專業的網路安全解決方案",
};

export default function ProductsPage() {
    return (
        <main className={styles.main}>
            <div className="container">
                <h1 className={styles.title}>產品介紹</h1>
                <p className={styles.description}>
                    代理國際知名資安品牌，提供專業的網路安全解決方案
                </p>

                <div className={styles.grid}>
                    {products.map((product) => (
                        <div key={product.id} className={styles.card}>
                            <h2 className={styles.cardTitle}>{product.name}</h2>
                            <p className={styles.cardDescription}>{product.description}</p>
                            <ul className={styles.features}>
                                {product.features.map((feature, index) => (
                                    <li key={index}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
