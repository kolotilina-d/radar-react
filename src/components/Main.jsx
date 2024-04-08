import { useState } from "react";
import { HashLink } from "react-router-hash-link";

function Main() {
  const [isOpen, setIsOpen] = useState(true);
  function handleClick() {
    if (isOpen === false) {
      setIsOpen(true);
    } else setIsOpen(false);
  }
  return (
    <div className="main_section">
      <section className="intro" id="about">
        <div className="mark">
          <HashLink smooth to="#about" className="mark__top"></HashLink>
        </div>
        <h2 className="intro__title">
          Добро пожаловать на сайт СНТ &#171;РАДАР&#187;
        </h2>
        <div className="main__wrapper">
          <img
            className="main__img"
            src="СХЕМА.jpg"
            alt="схема садового общества"
          />
        </div>
      </section>
      <section className="main">
        <div className="main__title">
          <h2 style={{ textAlign: "center" }}>Важные объявления</h2>
        </div>
        <div className="main__wrapper">
          <div className="important">
            <ul className="important__list">
              <li className="important__item" style={{ textAlign: "center" }}>
                ВНИМАНИЕ ПРОТИВОПОЖАРНЫЙ РЕЖИМ !!!
              </li>
              <div className="important__img">
                <img src="./приказ1.png" alt="ПРОТИВОПОЖАРНЫЙ РЕЖИМ" />
                <img src="./приказ2.png" alt="ПРОТИВОПОЖАРНЫЙ РЕЖИМ" />
              </div>
              <li className="important__item">
                Уважаемые садоводы! С 09.01.2024 г. организована работа по
                освещению СНТ &#171;РАДАР&#187; в рамках исполнения утвержденной
                сметы и работ на 2024 г.
              </li>
              <li className="important__item">
                Уважаемые садоводы! Убедительная просьба не заказывать доставку
                большегрузной техникой строительных и инертных материалов на
                участки в пределах СНТ &#171;РАДАР&#187; в период с ноября по
                апрель. Дороги разбиваются и не могут быть восстановлены за счет
                взносов СНТ в рамках утверждаемой сметы. В случае доставки
                строительных и инертных материалов в указанный период,
                обязанность по восстановлению дорожного покрытия будет возложена
                на собственника земельного участка.
              </li>
              <li className="important__item">
                Вечером в понедельник, 25 декабря 2023 года, случился крупный
                пожар в дачном обществе «ЦБЗ-1» в Калининграде. Подробности
                происшествия можно прочитать по ссылке:
                <a
                  href="https://ruwest.ru/news/137168/"
                  target="_blank"
                  rel="noreferrer"
                >
                  новости Калининграда
                </a>
                . Просьба соблюдать пожарную безопасность.
              </li>
              <li className="important__item">
                Ответ по дорожному покрытию моста от 28.11.2023г.
                <div
                  className={
                    isOpen ? "answer__wrapper" : "answer__wrapper_open"
                  }
                >
                  <button
                    className="answer__button"
                    onClick={() => handleClick()}
                  >
                    <img
                      src="answer.jpg"
                      alt="ответ по дорожному покрытию моста часть 1"
                      className={isOpen ? "smallImg" : "bigImg"}
                    />
                  </button>
                  <button
                    className="answer__button"
                    onClick={() => handleClick()}
                  >
                    <img
                      src="answer2.jpg"
                      alt="ответ по дорожному покрытию моста часть 2"
                      className={isOpen ? "smallImg" : "bigImg"}
                    />
                  </button>
                  <button
                    className="answer__button"
                    onClick={() => handleClick()}
                  >
                    <img
                      src="answer3.jpg"
                      alt="ответ по дорожному покрытию моста часть 3"
                      className={isOpen ? "smallImg" : "bigImg"}
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Main;
