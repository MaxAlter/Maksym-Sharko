import React from "react";

import st from "./SocialNetworks.module.css";

import { ReactComponent as Linkedin } from "../Img/icons/linkedin.svg";
import { ReactComponent as Email } from "../Img/icons/email.svg";
import { ReactComponent as Phone } from "../Img/icons/phone.svg";

const SocialNetworks = () => {
  return (
    <>
      <div className={st.container}>
        <ul className={st.social_networks}>
          <li className={st.social_item}>
            <a
              className={st.social_link}
              href="https://www.linkedin.com/in/maxim-sharko"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact me on Linkedin"
            >
              <Linkedin />
            </a>
          </li>
          <li className={st.social_item}>
            <a
              className={st.social_link}
              href="mailto:sharko.maxim.v@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Contact me on Email"
            >
              <Email />
            </a>
          </li>
          <li className={st.social_item}>
            <a
              href="tel:+380990040478"
              className={st.social_link}
              target="_blank"
              rel="noopener noreferrer"
              title="Contact me on Phone"
            >
              <Phone />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SocialNetworks;
