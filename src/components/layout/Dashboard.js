import styles from "@/layout/Dashboard.module.css";
import Image from "next/image";
import Link from "next/link";
function Dashboard() {
  return (
    <div className={styles.dashboardMain}>
      <Image
        className={styles.profile}
        src="/image/profile.jpg"
        width={1000}
        height={800}
        alt="profile"
      />
      <ul className={styles.menu}>
        <li>
          <Image
            className={styles.logoMin}
            src="/logo/Main-Logo.png"
            width={1000}
            height={700}
            alt="logo"
          />
        </li>
        <li className={styles.listMenu}>
          <Link href="/">صفحه اصلی</Link>
        </li>
        <li className={styles.listMenu}>
          <Link href="/">درباره من</Link>
        </li>
        <li className={styles.listMenu}>
          <Link href="/">خدمات</Link>
        </li>
        <li className={styles.listMenu}>
          <Link href="/">نمونه کارها</Link>
        </li>
        <li className={styles.listMenu}>
          <Link href="/contact">ارتباط با من</Link>
        </li>
      </ul>
    </div>
  );
}

export default Dashboard;
