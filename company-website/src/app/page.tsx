import styles from "./page.module.css";
import React from 'react';

export const metadata = {
  title: "Simpro Cloud Technology | 專業資安代理",
  description: "專注於資安產品代理與服務，為企業提供全方位的網路安全解決方案",
};

export default function Home() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroContent}`}>
          <h1>關於 Simpro 科技</h1>
          <p>專注於資安產品代理與服務<br />為企業提供全方位的網路安全解決方案</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.sectionTitle}>公司簡介</h2>
          <div className={styles.aboutContent}>
            <p>
              Simpro 科技成立於 2021 年，致力於提供最先進的網路安全解決方案。我們代理全球頂尖的資安產品，並擁有一支經驗豐富的專業技術團隊，協助客戶建構堅固的資安防禦體系。
              <br /><br />
              面對日益嚴峻的網路威脅，我們深知傳統的防禦手段已不足以應對。因此，Simpro 專注於引進具備主動防禦、AI 智能分析與自動化回應能力的下一代資安產品，確保企業的關鍵資產獲得最佳保護。
            </p>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className={`${styles.section} ${styles.bgAlt}`}>
        <div className="container">
          <h2 className={styles.sectionTitle}>我們的優勢</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <span className={styles.cardIcon}>🛡️</span>
              <h3>專業可靠</h3>
              <p>嚴選全球頂尖資安品牌，提供經過市場驗證的高品質解決方案。</p>
            </div>
            <div className={styles.card}>
              <span className={styles.cardIcon}>🎯</span>
              <h3>精準服務</h3>
              <p>深入了解客戶需求，提供量身打造的資安規劃與建議。</p>
            </div>
            <div className={styles.card}>
              <span className={styles.cardIcon}>👨‍💻</span>
              <h3>專家團隊</h3>
              <p>擁有原廠認證的技術團隊，提供完整的導入、建置與維運支援。</p>
            </div>
            <div className={styles.card}>
              <span className={styles.cardIcon}>🚀</span>
              <h3>業界領先</h3>
              <p>掌握最新資安趨勢，持續引進最具前瞻性的防護技術。</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.section}>
        <div className="container">
          <div className={styles.missionGrid}>
            <div className={styles.missionBox}>
              <h3>我們的使命</h3>
              <p>
                成為企業最值得信賴的資安夥伴，透過創新的技術與專業的服務，守護客戶的數位資產，讓企業能夠無後顧之憂地專注於核心業務發展。
              </p>
            </div>
            <div className={styles.missionBox}>
              <h3>我們的願景</h3>
              <p>
                建構一個安全、可信賴的數位環境，推動台灣資安產業的發展，並成為亞太地區最具影響力的加值服務代理商 (VAD)。
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
