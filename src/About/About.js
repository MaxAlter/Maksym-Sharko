import React from 'react';

import st from './About.module.css';

const About = () => {
  return (
    <>
      <div className={st.container}>
        <div className={st.content}>
          <h3 className={st.title}>About me</h3>
          <ul className={st.title_list}>
            <li className={st.title_list_one}>
              <h4 className={st.title_list_one_title}>Who am I?</h4>
              <ul>
                <li>
                  <p>
                    &#10625; A new person in the IT industry striving to achieve
                    enviable results!
                  </p>
                  <p>
                    &#10625; I’m not afraid to take responsibility if the result
                    is worth
                  </p>

                  <p>
                    I feel comfortable when I feel calm, friendly. warmth and
                    hospitality, I want to work in an atmosphere where. Sharing
                    creative ideas is paramount, support discussions and joint
                    decision-making.
                  </p>
                  <p>
                    Respect is very important to me among the staff i like tasks
                    which require individual creativity. I work best with a team
                    I appreciate honesty and work ethics
                  </p>
                </li>
              </ul>
            </li>
            <li className={st.title_list_two}>
              <h4 className={st.title_list_two_title}>Why me?</h4>
              <ul>
                <p className={st.title_list_two_title_item}>
                  I can assume that these qualities will help me to be
                  successful in achieving my goal!
                </p>
                <li>
                  <p> &#10625; Discipline</p>
                  <p> &#10625; Adherence to deadlines</p>
                  <p> &#10625; analytic skills</p>
                  <p> &#10625; focus on results</p>
                  <p> &#10625; desire to master new technologies and tools</p>
                  <p> &#10625; good communication skills</p>
                </li>
              </ul>
            </li>
            <li className={st.title_list_three}>
              <h4 className={st.title_list_three_title}>why front-end?</h4>
              <ul>
                <li>
                  <p>
                    &#10625; I like to work with the publicly visible side of
                    the web application / site - animate the web designer's
                    layout
                  </p>
                  <p>
                    &#10625; front-end is an interesting and ambiguous process
                    where you can experiment and see
                  </p>
                  <p>&#10625; front-end - every day learn something new</p>
                </li>
              </ul>
            </li>
            <li className={st.title_list_four}>
              <h4 className={st.title_list_three_title}>Hobbies</h4>
              <ul>
                <li>
                  <p>&#10192; workout room</p>
                  <p>&#10192; boxing</p>
                  <p>&#10192; bicycle holiday</p>
                  <p>&#10192; camping</p>
                  <p>&#10192; kayaking</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default About;
