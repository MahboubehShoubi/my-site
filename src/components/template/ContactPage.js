import Link from "next/link";
import style from "@/template/ContactPage.module.css";

import { FaWhatsapp } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { LuLinkedin } from "react-icons/lu";
import { FiPhoneCall } from "react-icons/fi";
import { TfiEmail } from "react-icons/tfi";

function ContactPage() {
  return (
    <div className={style.contactContainer}>
      <p className={style.titleText}>ارتباط با من</p>
      <div className={style.borderBottom}></div>
      <div className={style.socialMediaBox}>
        <div className={style.socialMediaItemBox}>
          <a className={style.socialMediaItem} href="tel:+989119047974">
            <FiPhoneCall />
            <span>09119047974</span>
          </a>
        </div>
        <div className={style.socialMediaItemBox}>
          <a
            className={style.socialMediaItem}
            // href="https://web.whatsapp.com/send?phone=989119047974"
            href ="https://wa.me/989119047974"
            target="_blank"
            rel="noreferrer"
          >
            <FaWhatsapp />
            <span>WahtsApp</span>
          </a>
        </div>
        <div className={style.socialMediaItemBox}>
          <a
            className={style.socialMediaItem}
            href="https://github.com/MahboubehShoubi"
            target="_blank"
            rel="noreferrer"
          >
            <VscGithub />
            <span>GitHub</span>
          </a>
        </div>

        <div className={style.socialMediaItemBox}>
          <a
            className={style.socialMediaItem}
            href="https://www.linkedin.com/in/mahboobeh-shoubi/"
            target="_blank"
            rel="noreferrer"
          >
            <LuLinkedin />
            <span>Linkedin</span>
          </a>
        </div>
        <div className={style.socialMediaItemBox}>
          <a className={style.socialMediaItem} href="mailto:mahboobeh.shoubi.65@gmail.com">
            <TfiEmail />
            <span>mahboobeh.shobi.65@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
