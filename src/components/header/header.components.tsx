import React from "react";
import { NavLink } from "react-router-dom";
import "./header.components.scss";

export const Header = (): JSX.Element => {
  return (
    <div className="header">
      <nav className="header__navList">
        <NavLink
          to={"/createPost"}
          className={
            ({ isActive }) =>
              isActive ? "header__navItem header__navItem_active" : "header__navItem"
          }
        >
          Создать запись
        </NavLink>

        <NavLink
          to={"/allPosts"}
          className={
            ({ isActive }) =>
              isActive ? "header__navItem header__navItem_active" : "header__navItem"
          }
        >
          Записи
        </NavLink>
      </nav>
    </div>
  )
}
