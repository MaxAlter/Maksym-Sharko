import React from 'react';
import LinkCustom from '../Link/LinkCustom';
import routes from '../helpers/routes';
import st from './NavBar.module.css';

const NavBar = () => {
  return (
    <>
      <nav className={st.container}>
        <ul className={st.nav_list}>
          <li className={st.nav_list_item}>
            <LinkCustom to={routes.HOME} exact text={'HOME'}></LinkCustom>
          </li>
          <li className={st.nav_list_item}>
            <LinkCustom to={routes.ABOUT_ME} text={'ABOUT'}></LinkCustom>
          </li>
          <li className={st.nav_list_item}>
            <LinkCustom to={routes.RESUME} text={'RESUME'}></LinkCustom>
          </li>
          <li className={st.nav_list_item}>
            <LinkCustom to={routes.CONTACTS} text={'CONTACTS'}></LinkCustom>
          </li>
          <li className={st.nav_list_item}>
            <LinkCustom to={routes.PROJECTS} text={'PROJECTS'}></LinkCustom>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
