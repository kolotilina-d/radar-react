import { Link, Route, Routes } from "react-router-dom";
import "./index.css";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Contacts from "./components/Contacts";
import Documents from "./components/Documents";
import FireSafety from "./components/Fire-safety";
import Energy from "./components/Energy";
import Requisites from "./components/Requisites";
import Dues from "./components/Dues";
import DocumentsItem1 from "./components/DocumentsItem1";
import DocumentsItem2 from "./components/DocumentsItem2";
import DocumentsItem3 from "./components/DocumentsItem3";
import DocumentsItem4 from "./components/DocumentsItem4";
import DocumentsItem5 from "./components/DocumentsItem5";

function App() {
  return (
    <div className="App">
      <>
        <header className="header" name={"/"}>
          <ul className="header__navigation">
            <li className="header__item">
              <Link to="/" className="header__link">
                Главная
              </Link>
            </li>
            <li className="header__item">
              <Link to="/documents" className="header__link">
                Документы
              </Link>
            </li>
            <li className="header__item">
              <Link to="/contacts" className="header__link">
                Контакты
              </Link>
            </li>
            {/* <li className="header__item">
              <Link to="/gallery" className="header__link">
                Галерея
              </Link>
            </li> */}
          </ul>
        </header>
        <section className="heading">
          <h1 className="heading__name">
            САДОВОДЧЕСКОЕ НЕКОММЕРЧЕСКОЕ ТОВАРИЩЕСТВО &quot;РАДАР&quot;
          </h1>
        </section>
        <nav className="menu">
          <Link className="menu__link" to="/requisites">
            <li className="menu__item">Реквизиты товарищества</li>
          </Link>
          <Link className="menu__link" to="/energy">
            <li className="menu__item">Энергоснабжение</li>
          </Link>
          <Link className="menu__link" to="/fire-safety">
            <li className="menu__item">Пожарная безопасность</li>
          </Link>
          <Link className="menu__link" to="/dues">
            <li className="menu__item">Членские взносы</li>
          </Link>
        </nav>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/documents" element={<Documents />} />
          <Route path="/fire-safety" element={<FireSafety />} />
          <Route path="/energy" element={<Energy />} />
          <Route path="/requisites" element={<Requisites />} />
          <Route path="/dues" element={<Dues />} />
          <Route path="/doc1" element={<DocumentsItem1/>} />
          <Route path="/doc2" element={<DocumentsItem2/>} />
          <Route path="/doc3" element={<DocumentsItem3/>} />
          <Route path="/doc4" element={<DocumentsItem4/>} />
          <Route path="/doc5" element={<DocumentsItem5/>} />
        </Routes>
        <Footer />
        <section>
          <div className="popup popup_rates">
            <div className="popup__container">
              <h2 className="popup__title">Lorem, ipsum.</h2>
              <span className="popup__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                tempore tempora ullam. Suscipit, ratione accusantium? Eos, dolor
                quaerat ea, quas ad reprehenderit ratione vero debitis animi
                aperiam odio nihil quam.
              </span>
            </div>
          </div>
        </section>
      </>
    </div>
  );
}

export default App;
