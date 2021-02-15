import React from 'react';
import st from './Projects.module.css';
// img progects
import Image_img from '../Img/img-project/6VShoYo.png';
import Movie_img from '../Img/img-project/nqmIoEt.png';
import Raschitalochka_img from '../Img/img-project/pm4DHlf.png';
import Children from '../Img/img-project/children2.png';

const Projects = () => {
  return (
    <>
      <div className={st.container}>
        <div className={st.content}>
          <h3 className={st.title}>PROJECTS</h3>
          <ul className={st.project}>
            {/* Raschitalochka */}
            <li className={st.project_list}>
              <p className={st.project_list_title}>&#128160; Raschitalochka</p>
              <ul className={st.project_desc}>
                <img src={Image_img} className={st.content_img} />
                <li className={st.project_desc_list}>
                  <p className={st.desc_title}>
                    Full-fledged application to control your own currency
                    movements. <br /> Consists of frontend and backend
                  </p>
                  <p className={st.desc_title}>
                    &#10752; Adaptive & Responsive
                  </p>
                  <p className={st.desc_title}>
                    &#10752; React/ Redux/Express/Node.js/ JavaScript
                  </p>

                  <div className={st.project_link}>
                    <p className={st.project_link_title}>
                      <a
                        className={st.project_link_item}
                        href="https://github.com/MaxAlter/raschitalochka_client"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="link to github"
                      >
                        Detail on github
                      </a>
                    </p>
                    <p className={st.project_link_title}>
                      <a
                        className={st.project_link_item}
                        href="https://raschitalochka-goit.netlify.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="link to project"
                      >
                        Watch the project
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </li>
            {/* Search Image */}
            <li className={st.project_list}>
              <p className={st.project_list_title}>&#128160; Search Image </p>
              <ul className={st.project_desc}>
                <img src={Raschitalochka_img} className={st.content_img} />
                <li className={st.project_desc_list}>
                  <p className={st.desc_title}>
                    React app to search images by the <br />
                    keywords pixabay.com/api infinitely scroll and view a large
                    image
                  </p>
                  <p className={st.desc_title}>
                    &#10752; Not adapted for the device
                  </p>
                  <p className={st.desc_title}>
                    &#10752; React / JavaScript / handlebar / webpack-cli
                  </p>
                  <div className={st.project_link}>
                    <p className={st.project_link_title}>
                      <a
                        className={st.project_link_item}
                        href="https://github.com/MaxAlter/GoIt-Project_Image-Finder"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="link to github"
                      >
                        Detail on github
                      </a>
                    </p>
                    <p className={st.project_link_title}>
                      <a
                        className={st.project_link_item}
                        href="https://maxalter.github.io/GoIt-Project_Image-Finder/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="link to project"
                      >
                        Watch the project
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </li>
            {/* Search Movie */}
            <li className={st.project_list}>
              <p className={st.project_list_title}>&#128160; Search Movie</p>
              <ul className={st.project_desc}>
                <img src={Movie_img} className={st.content_img} />
                <li className={st.project_desc_list}>
                  <p className={st.desc_title}>
                    React app for searching movies by keywords
                    api.themoviedb.org <br />
                    and viewing suggestions by rating
                  </p>
                  <p className={st.desc_title}>
                    &#10752; Not adapted for the device
                  </p>
                  <p className={st.desc_title}>&#10752; React / JavaScript</p>
                  <div className={st.project_link}>
                    <p className={st.project_link_title}>
                      <a
                        className={st.project_link_item}
                        href="https://github.com/MaxAlter/Search-movies"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="link to github"
                      >
                        Detail on github
                      </a>
                    </p>
                    <p className={st.project_link_title}>
                      <a
                        className={st.project_link_item}
                        href="https://maxalter.github.io/Search-movies/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="link to project"
                      >
                        Watch the project
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </li>
            {/*Best Children */}
            <li className={st.project_list}>
              <p className={st.project_list_title}>&#128160; Best Children</p>
              <ul className={st.project_desc}>
                <img src={Children} className={st.content_img} />
                <li className={st.project_desc_list}>
                  <p className={st.desc_title}>
                    A landing page for kids who want to join the IT industry and
                    help
                    <br /> build their success story
                  </p>

                  <p className={st.desc_title}>
                    &#10752; Adaptive & Responsive
                  </p>
                  <p className={st.desc_title}>
                    &#10752; HTML /SCSS / JavaScript / Gulp
                  </p>
                  <div className={st.project_link}>
                    <p className={st.project_link_title}>
                      <a
                        className={st.project_link_item}
                        href="https://github.com/MaxAlter/Best_Children"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="link to github"
                      >
                        Detail on github
                      </a>
                    </p>
                    <p className={st.project_link_title}>
                      <a
                        className={st.project_link_item}
                        href="https://sergiimostepan.github.io/Enokentiy_BEST/project/build/"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="link to project"
                      >
                        Watch the project
                      </a>
                    </p>
                  </div>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Projects;
