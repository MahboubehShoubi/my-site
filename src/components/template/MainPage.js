import styles from "@/template/MainPage.module.css";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineDoubleLeft } from "react-icons/ai";

function MainPage() {
  return (
    <div className={styles.container}>
      <div className={styles.logoBox}>
        <Image
          className={styles.logo}
          src="/logo/Main-Logo.png"
          width={1000}
          height={700}
          alt="logo"
        />
      </div>
      <div className={styles.mainContext}>
        <p className={styles.titleName}>محبوبه شوبی هستم</p>
        <p className={styles.title2Text}>برنامه نویس و توسعه دهنده وب سایت </p>
        <p className={styles.description}>
          برنامه نویس و فارغ التحصیل رشته مهندسی کامپیوتر که تخصصم در زمینه
          توسعه و پیاده سازی سایت‌های فروشگاهی، شرکتی، شخصی و ...
        </p>

        <Link className={styles.contactLink} href="/contact">
          <span> ارتباط با من</span>
          <AiOutlineDoubleLeft />
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
