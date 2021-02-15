import React from 'react';
import st from './Contact.module.css';

import Avatar from '../Img/main-photo.png';

const Contact = () => {
  return (
    <div className={st.container}>
      <div className={st.content}>
        <h3 className={st.title}>contacts</h3>
        <ul className={st.contact_list}>
          <div className={st.contact_list_bg}>
            <li className={st.contact_list_avatar}>
              <img
                src={Avatar}
                alt="photo bg logo"
                className={st.avatar}
              />
            </li>
            <ul className={st.contact_list_info}>
              <li className={st.contact_list_item}>Maksym Sharko</li>
              <li className={st.contact_list_item}>Ukraine / Kyiv</li>
              <li className={st.contact_list_item}>
                <a
                  href="tel:+380990040478"
                  className={st.social_link}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact me on Phone"
                >
                  +38 099-004-04-78
                </a>
              </li>
              <li className={st.contact_list_item}>
                <a
                  className={st.social_link}
                  href="mailto:sharko.maxim.v@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact me on Email"
                >
                  sharko.maxim.v@gmail.com
                </a>
              </li>
              <li className={st.contact_list_item}>
                <a
                  className={st.social_link}
                  href="https://www.linkedin.com/in/maxim-sharko"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact me on Linkedin"
                >
                  linkedin.com/in/maxim-sharko
                </a>
              </li>
              <li className={st.contact_list_item}>
                <a
                  className={st.social_link}
                  href="https://github.com/MaxAlter"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Contact me on github"
                >
                  github.com/MaxAlter
                </a>
              </li>
              <li className={st.contact_list_item}>
                <a
                  href="https://drive.google.com/file/d/1OWzTaVNKK-UiokoolEnp3_1i_R0goAuz/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="download me CV file"
                  className={st.btn}
                  download
                >
                  download CV
                </a>
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Contact;
