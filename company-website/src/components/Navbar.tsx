import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.container}`}>
                <Link href="/" className={styles.logo}>
                    Simpro<span className={styles.logoAccent}>Tech</span>
                </Link>
                <ul className={styles.navLinks}>
                    <li>
                        <Link href="/" className={styles.link}>
                            首頁
                        </Link>
                    </li>
                    <li>
                        <Link href="/products" className={styles.link}>
                            產品介紹
                        </Link>
                    </li>
                    <li>
                        <Link href="/cases" className={styles.link}>
                            案例介紹
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact" className={styles.link}>
                            聯絡我們
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
