import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import doc from "../components/03.09.2024.pdf";
import doc2 from "../components/собрание.pdf";

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
          <h1 style={{ textAlign: "center" }}>Важные объявления</h1>
        </div>
        <div className="main__wrapper">
          <div className="important">
            <ul className="important__list">
              <li className="important__item">
                <div style={{ textAlign: "center", fontSize: '1.8rem' }}>
                  <p>
                    Уважаемые садоводы! Поздравляю Вас с Наступающим Новым
                    годом!!!!
                  </p>
                  Пусть Новый год, что наступает,
                  <br /> Вам все желания исполняет <br /> И пусть наполнит
                  светлый дом <br />
                  Уютом, счастьем и добром!
                  <br /> Любви взаимной и достатка,
                  <br /> Комфорта, радости, порядка. <br />
                  Друзей надежных, ярких встреч, <br />
                  Все приумножить и сберечь!
                </div>
                <p>
                  Напоминаю о необходимости соблюдать правила пожарной
                  безопасности, правила внутреннего распорядка СНТ, не
                  заказывать большегрузную технику до апреля 2025 года, погасить
                  имеющиеся задолженности по оплате членских взносов,
                  восстановить разрушенный оголовник по ул. Лунинской (участки
                  60 и 76), восстановить дорогу по ул. Тенистой (110),
                  восстановить дорогу по ул. Дальневосточной (участок 24).
                  Председатель СНТ «РАДАР» Колотилин Дмитрий Владимирович.
                </p>
              </li>
              <li className="important__item">
                <p>
                  Уважаемые садоводы, по итогам проведенного 03.11.2024 г.
                  очередного собрания членов СНТ «РАДАР», информируем об
                  утверждении сметы на 2025 год, проведении противопожарного
                  инструктажа, обсуждении общих вопросов.
                </p>
                <p>
                  Срок оплаты взносов за 2025 год установлен не позднее
                  01.04.2025 г. Сумма 740,00 руб. за одну сотку членский взнос,
                  260,00 руб. за одну сотку целевой взнос. Всего за участок 6
                  соток сумма взносов 6 000,00 руб.
                </p>
                <p>
                  Протокол очередного общего собрания членов СНТ «РАДАР» от
                  03.11.2024 г.
                </p>
              </li>
              <li className="important__item">
                Уважаемые садоводы, по итогам проведенного 19.10.2024 г.
                собрания Правления СНТ «РАДАР», информируем о проведении
                очередного общего собрания членов СНТ «РАДАР» 03.11.2024 г.
                <a
                  href={doc2}
                  target="_blank"
                  rel="noreferrer"
                  className="link_to_doc"
                >
                  Открыть документ
                </a>
              </li>
              <li className="important__item">
                <p>
                  Уважаемые садоводы! С 01.07.2024 г. организована работа по
                  подключению частных домов и земельных участков в СНТ «РАДАР» к
                  сети интернет с использованием оптоволоконного кабеля.
                  Провайдер ТИС ДИАЛОГ, заявки возможно направлять по телефону:
                  +79062310821 — Ольга.
                </p>
              </li>
              <li className="important__item">
                <p style={{ color: "#ff0000", textAlign: "center" }}>
                  ДОГАЗИФИКАЦИЯ ЗАРЕГИСТРИРОВАННЫХ ЖИЛЫХ ДОМОВ В СНТ
                </p>
                <p style={{ color: "#ff0000", textAlign: "center" }}>
                  ВНИМАНИЕ!!! ЗАЯВКУ НА ДОГАЗИФИКАЦИЮ НЕОБХОДИМО ПОДАВАТЬ С
                  ПРИСВОЕННЫМ АДРЕСОМ ДОМОВЛАДЕНИЮ И ЗЕМЕЛЬНОМУ УЧАСТКУ,
                  ПОСТАНОВЛЕНИЕ О ПРИСВОЕНИИ АДРЕСОВ УЧАСТКАМ, РАЗМЕЩЕНО В
                  РАЗДЕЛЕ УЧРЕДИТЕЛЬНЫЕ ДОКУМЕНТЫ, ПРИСВОЕНИЕ АДРЕСА
                  ДОМОВЛАДЕНИЮ ДЕЛАЕТСЯ КАЖДЫМ САМОСТОЯТЕЛЬНО!!!
                </p>
              </li>
              <li className="important__item">
                <p style={{ lineHeight: "1.4em" }}>
                  По итогам проведенного Внеочередного общего собрания членов
                  СНТ «РАДАР» 22.06.2024 г. необходимая информация передана в
                  Администрацию Зеленоградского городского округа и
                  Правительство Калининградской области.
                </p>
                <p style={{ color: "blue" }}>
                  <NavLink to="/gaz"> Подробности по ссылке</NavLink>
                </p>
              </li>
              <li className="important__item">
                <p>
                  Ответ Правительства Калининградской области о ремонте
                  дорожного покрытия путепровода.
                  <a
                    href={doc}
                    target="_blank"
                    rel="noreferrer"
                    className="link_to_doc"
                  >
                    Открыть документ
                  </a>
                </p>
              </li>
              <li className="important__item">
                <p>
                  Внимание! Скоро введут значительные штрафы за не освоенные
                  земельные участки:
                  <a
                    style={{ marginLeft: "10px" }}
                    rel="noreferrer"
                    href="https://reader.rbc.ru/share/WiHorBhu4BxdePxT8"
                    target="_blank"
                  >
                    https://reader.rbc.ru
                  </a>
                  <p>
                    Прошу своевременно производить окос для избежания претензий
                    и изъятия.
                  </p>
                </p>
              </li>

              <li className="important__item">
                <p>
                  «Уважаемые садоводы, на общем собрании Правления СНТ «РАДАР»
                  07.04.2024 г. принято решение не проводить Общее собрание
                  членов СНТ «РАДАР» в весенний период 2024 г.
                </p>
              </li>
              <p className="important__item">
                Напоминаем о необходимости оплаты членских взносов за 2024 год
                до 01.05.2024 г.
              </p>
              <p className="important__item">
                Просим своевременно окашивать земельные участки и прилегающие
                дренажные канавы.
              </p>
              <p className="important__item">
                Заявки на установку фонарей направляются Председателю СНТ
                «РАДАР».
              </p>

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
