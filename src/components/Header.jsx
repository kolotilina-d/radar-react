import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <ul className="header__navigation">
        <li className="header__item" >
          <Link to="/main" className="header__link">
            Главная
          </Link>
        </li>
        <li className="header__item">
          <Link to="/contacts" className="header__link">
            Контакты
          </Link>
        </li>
        <li className="header__item">
          <Link to="/documents" className="header__link">
            Документы
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
