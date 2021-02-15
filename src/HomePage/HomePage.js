import React from 'react';
import st from './HomePaje.module.css';
// my photo
import Avatar from '../Img/main-photo.png';
import SocialNetworks from '../SocialNetworks/SocialNetworks';

const HomePage = () => {
  return (
    <>
      <div className={st.container}>
        <div className={st.content}>
          <div className={st.content_box}>
            <div className={st.content_avatar}>
              <img
                src={Avatar}
                alt="photo bg logo"
                width="350px"
                height="470px"
              />
            </div>
            <div className={st.content_title}>
              <p className={st.title}>
                hello I'm <br />
                Maksym Sharko
                <br /> junior front-end
              </p>
              <SocialNetworks />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
