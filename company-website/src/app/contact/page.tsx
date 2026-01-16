import styles from "./page.module.css";
import React from 'react';

export const metadata = {
    title: "聯絡我們 | Simpro Cloud Technology",
    description: "我們期待與您合作，為您提供專業的資安解決方案",
};

export default function ContactPage() {
    return (
        <main className={styles.main}>
            <div className="container">
                <h1 className={styles.title}>聯絡我們</h1>
                <p className={styles.description}>
                    我們期待與您合作，為您提供專業的資安解決方案
                </p>

                <div className={styles.card}>
                    <div className={styles.infoGrid}>
                        <div className={styles.infoItem}>
                            <span className={styles.label}>公司地址 Office</span>
                            <span className={styles.value}>110臺北市信義區基隆路一段432號7號樓之8</span>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.label}>聯絡電話 Phone</span>
                            <span className={styles.value}>02 8786 0988</span>
                        </div>

                        <div className={styles.infoItem}>
                            <span className={styles.label}>電子郵件 Email</span>
                            <a href="mailto:tony@simpro.com.tw" className={styles.value} style={{ textDecoration: 'underline' }}>
                                tony@simpro.com.tw
                            </a>
                        </div>
                    </div>

                    {/* Optional: Add a subtle CTA or note */}
                    <div style={{ marginTop: '3rem', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
                        服務時間：週一至週五 09:00 - 18:00
                    </div>
                </div>
            </div>
        </main>
    );
}
