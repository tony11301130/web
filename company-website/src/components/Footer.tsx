import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <div className={styles.section}>
                        <h3>Simpro 科技</h3>
                        <p>
                            專注於資安產品代理與服務<br />
                            為企業提供全方位的網路安全解決方案
                        </p>
                    </div>
                    <div className={styles.section}>
                        <h3>聯絡資訊</h3>
                        <p>
                            電話：02 8786 0988<br />
                            Email：tony@simpro.com.tw<br />
                            地址：110臺北市信義區基隆路一段432號7號樓之8
                        </p>
                    </div>
                </div>
                <div className={styles.copyright}>
                    &copy; {new Date().getFullYear()} Simpro Technology Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
}
