import React from "react";
import { NavLink } from "react-router-dom";
import st from "./link.module.css";

const LinkCustom = ({ to, text }) => {
  return (
    <>
      <NavLink to={to} exact className={st.link} activeClassName={st.active}>
        {text}
      </NavLink>
    </>
  );
};

export default LinkCustom;
