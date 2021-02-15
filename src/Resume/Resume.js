import React from 'react';

import st from './Resume.module.css';

const Resume = () => {
  return (
    <>
      <div className={st.container}>
        <div className={st.content}>
          <h3 className={st.title}>resume</h3>
          <ul className={st.resume_title}>
            <li className={st.resume_title_list}>
              <h4 className={st.resume_title_item}>career objective</h4>
              <ul>
                <p> Front-end Developer</p>
                <li>
                  <p> &#128160; GOAL</p>
                  &#10625; Start a career as a Junior Front-end Developer and
                  master relevant skills for further development
                </li>
              </ul>
            </li>
            <li className={st.resume_title_list}>
              <h4 className={st.resume_title_item}>education</h4>
              <ul>
                <h5>
                  &#10625; GOIT TECHNOLOGY COURSES FullStack Developer | July
                  2019 - September 2020
                </h5>
                <li>
                  <a
                    className={st.resule_link}
                    href="https://drive.google.com/file/d/1EWSZT5iTSAFoGP84AF1Qio4_QcNCIkxC/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="watch certificate about the GoIT course"
                  >
                    watch certificate
                  </a>
                </li>
              </ul>
            </li>
            <li className={st.resume_title_list}>
              <h4 className={st.resume_title_item}>technical skills</h4>
              <ul className={st.skills_list}>
                <div className={st.skills}>
                  <h4 className={st.skills_title}>FRONTEND</h4>
                  <li>JavaScript</li>
                  <li>React / Redux</li>
                  <li>HTML 5</li>
                  <li>CSS 3 / SCSS</li>
                  <li>NPM / Yarn</li>
                  <li>Photoshop /Avacode</li>
                  <li>WebPack / Gulp</li>
                  <li>RESTful API</li>
                  <li>Git / GitHub</li>
                  <li>Angular 2+/ Rx.js (one test project)</li>
                  <div className={st.skills}>
                    <h4 className={st.skills_title}>BACKEND</h4>
                    <li>Node.js</li>
                    <li>MongoDB / MongoDB Atlas</li>
                    <li>Express.js</li>
                    <li>Postman</li>
                  </div>
                </div>
                <div className={st.skills}>
                  <h4 className={st.skills_title}> FRAMEWORKS / LIBRARY </h4>
                  <li>react-thunk</li>
                  <li>react-router</li>
                  <li>react-middleware</li>
                  <li>react-paginate</li>
                  <li>react-modal</li>
                  <li>react-media</li>
                  <li>redux-persist</li>
                  <li>axios / fetch</li>
                  <li>handlebars</li>
                  <li>mongoose</li>
                  <li>morgan</li>
                  <li>multer</li>
                  <li>yargs</li>
                  <li>bcryptjs</li>
                  <li>mailgen</li>
                </div>
              </ul>
            </li>
            <li className={st.resume_title_list}>
              <h4 className={st.resume_title_item}>languages</h4>
              <ul>
                <li>&#10625; Engish - Pre-Intermediate</li>
                <li> &#10625; Russian - Native</li>
                <li>&#10625; Ukrainian - Native</li>
              </ul>
            </li>
            <li className={st.resume_title_list}>
              <h4 className={st.resume_title_item}> Additional education</h4>
              <ul>
                <li> &#10625; University of NTU | 2006 - 2010</li>
                <p>Automotive Faculty</p>
              </ul>
            </li>
            <li className={st.resume_title_list_work}>
              <h4 className={st.resume_title_item}>Work Experience</h4>
              <ul>
                <li>
                  &#10625; "OILER"
                  <p>Repair shop administrator | DEC 2018 - MAR 2020</p>
                </li>
                <li>
                  &#10625; "ELECTROTRADE SERVICE BOSCH"
                  <p>Logistics Manager | DEC 2017 - DEC 2018</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
