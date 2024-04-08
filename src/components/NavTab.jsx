import React from "react";
import { NavLink } from "react-router-dom";

function NavTab({ active, handleCloseNavTab, setIsNavActive }) {
  const toggleMenu = () => setIsNavActive((isOpen) => !isOpen);
  return (
    <div className="navTab">
      <div
        className={active ? "navTab__wrapper" : "navTab__wrapper-inactive"}
        onClick={() => setIsNavActive(false)}
      >
        <button className="navTab__close" onClick={() => handleCloseNavTab()} />
        <nav className="navTab__list" onClick={(e) => e.stopPropagation()}>
          <NavLink
            onClick={toggleMenu}
            to="/requisites"
            className={({ isActive }) =>
              isActive ? "navTab__link-active" : "navTab__link"
            }
          >
            Реквизиты товарищества
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/dues"
            className={({ isActive }) =>
              isActive ? "navTab__link-active" : "navTab__link"
            }
          >
            Членские взносы
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/fire-safety"
            className={({ isActive }) =>
              isActive ? "navTab__link-active" : "navTab__link"
            }
          >
            Пожарная безопасность
          </NavLink>
          <NavLink
            onClick={toggleMenu}
            to="/energy"
            className={({ isActive }) =>
              isActive ? "navTab__link-active" : "navTab__link"
            }
          >
            Энергоснабжение
          </NavLink>
          <div className="navTab__profile"></div>
        </nav>
      </div>
    </div>
  );
}

export default NavTab;
