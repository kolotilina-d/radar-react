import pdf1 from "./fs1.pdf";
import pdf2 from "./fs2.pdf";
import pdf3 from "./fs3.pdf";
import pdf4 from "./fs4.pdf";
export default function FireSafety() {
  return (
    <div className="main">
      <div className="fire-safety">
        <h1 className="fire-safety__title">Пожарная безопасность</h1>
        <div className="fire-safety__image"></div>
        <h2 className="fire-safety__subtitle">
          Пожарная безопасность - состояние защищенности личности, имущества,
          общества и СНТ от пожаров.
        </h2>
      </div>
      <span className="fire-saferty__text_important">
        Требования к садоводам СНТ по пожарной безопасности
      </span>
      <ul className="fire-saferty__text">
        Садоводы ОБЯЗАНЫ&nbsp;
        <li className="fire-saferty__item">
          обеспечивать к&nbsp;началу пожароопасного периода наличие
          на&nbsp;собственных земельных участках емкостей с&nbsp;водой или
          огнетушителя;
        </li>
        <li className="fire-saferty__item">
          &nbsp;обеспечивать минимальные (согласно норм пожарной безопасности)
          противопожарные расстояния между строениями, расположенными
          на&nbsp;соседних земельных участках;
        </li>
        <li className="fire-saferty__item">
          &nbsp;очищать земельный участок, в&nbsp;том числе в&nbsp;пределах
          противопожарных расстояний между объектами, от&nbsp;горючих отходов,
          мусора, тары и&nbsp;сухой растительности;
        </li>
        <li className="fire-saferty__item">
          &nbsp;проводить очистку дымоходов и&nbsp;печей от&nbsp;сажи,
          обеспечивать побелку дымовых труб и&nbsp;стен, в&nbsp;которых проходят
          дымовые каналы;
        </li>
        <li className="fire-saferty__item">
          &nbsp;располагать газовые баллоны для бытовых газовых приборов вне
          зданий в&nbsp;пристройках из&nbsp;негорючих материалов у&nbsp;глухого
          простенка стены (за&nbsp;исключением 1&nbsp;баллона объемом
          не&nbsp;более 5&nbsp;литров, подключенного к&nbsp;газовой плите
          заводского изготовления);
        </li>
        <li className="fire-saferty__item">
          &nbsp;при обнаружении пожара или признаков горения немедленно сообщить
          об&nbsp;этом по&nbsp;телефону в&nbsp;пожарную охрану (при этом
          необходимо назвать адрес объекта, место возникновения пожара,
          а&nbsp;также сообщить свою фамилию) и&nbsp;принять посильные меры
          по&nbsp;эвакуации людей и&nbsp;тушению пожара.
        </li>
      </ul>
      <ul className="fire-saferty__text">
        Садоводам ЗАПРЕЩЕНО&nbsp;
        <li className="fire-saferty__item">
          устраивать свалки горючих отходов; &nbsp;эксплуатировать
          электропровода и&nbsp;кабели с&nbsp;видимыми нарушениями изоляции,
          а&nbsp;также неисправные электроприборы, применять самодельные
          электронагревательные приборы;
        </li>
        <li className="fire-saferty__item">
          &nbsp;оставлять без присмотра включенными в&nbsp;электрическую сеть
          электроприборы, в&nbsp;том числе находящиеся в&nbsp;режиме ожидания,
          за&nbsp;исключением приборов, которые должны находиться
          в&nbsp;круглосуточном режиме работы в&nbsp;соответствии
          с&nbsp;инструкцией завода-изготовителя;
        </li>
        <li className="fire-saferty__item">
          пользоваться неисправными газовыми приборами;
        </li>
        <li className="fire-saferty__item">
          &nbsp;использовать для хозяйственных и&nbsp;производственных целей
          запас воды, предназначенный для нужд пожаротушения;
        </li>
        <li className="fire-saferty__item">
          &nbsp;сжигать отходы и&nbsp;тару в&nbsp;местах, находящихся
          на&nbsp;расстоянии менее 50&nbsp;метров от&nbsp;объектов;
        </li>
        <li className="fire-saferty__item">
          &nbsp;эксплуатировать печи и&nbsp;другие отопительные приборы без
          противопожарных разделок (отступок) от&nbsp;горючих конструкций, пред
          топочных листов, оставлять топящиеся печи, без присмотра.
        </li>
        (по&nbsp;материалам сайта МЧС РФ&nbsp;mchs.gov.ru)
      </ul>
      <div className="wrapper_for_docs" style={{ textAlign: "center" }}>
        <div className="fire__img">
          <div className="pdf-div">
            <h2>Удостоверение о повышении квалификации от 16.03.2023 г.</h2>
            <div className="doc__container">
              <img
                src="/повышение_квалиф.jpg"
                alt="document"
                className="img_of_doc"
              />
            </div>
            <div className="wrapper">
              <a
                href={pdf2}
                target="_blank"
                rel="noreferrer"
                download="udostoverenie.pdf"
                className="link_to_doc"
              >
                Скачать документ
              </a>
              <a
                href={pdf2}
                target="_blank"
                rel="noreferrer"
                className="link_to_doc"
              >
                Открыть документ
              </a>
            </div>
          </div>
          <div className="pdf-div">
            <h2>Инструкция о мерах пожарной безопасности</h2>
            <div className="doc__container">
              <img
                src="/инструкции.png"
                alt="document"
                className="img_of_doc"
              />
            </div>
            <div className="wrapper">
              <a
                href={pdf1}
                target="_blank"
                rel="noreferrer"
                download="instrukcia.pdf"
                className="link_to_doc"
              >
                Скачать документ
              </a>
              <a
                href={pdf1}
                target="_blank"
                rel="noreferrer"
                className="link_to_doc"
              >
                Открыть документ
              </a>
            </div>
          </div>
          <div className="pdf-div">
            <h2>Памятка по правилам пожарной безопасности</h2>
            <div className="doc__container">
              <img src="/памятка.png" alt="document" className="img_of_doc" />
            </div>
            <div className="wrapper">
              <a
                href={pdf4}
                target="_blank"
                rel="noreferrer"
                download="pamjatka.pdf"
                className="link_to_doc"
              >
                Скачать документ
              </a>
              <a
                href={pdf4}
                target="_blank"
                rel="noreferrer"
                className="link_to_doc"
              >
                Открыть документ
              </a>
            </div>
            <div className="pdf-div">
              <h2>
                Приказ о назначении ответственных лиц за пожарную безопасность
              </h2>
              <div className="doc__container">
                <img src="/приказ.png" alt="document" className="img_of_doc" />
              </div>
              <div className="wrapper">
                <a
                  href={pdf3}
                  target="_blank"
                  rel="noreferrer"
                  download="приказ.pdf"
                  className="link_to_doc"
                >
                  Скачать документ
                </a>
                <a
                  href={pdf3}
                  target="_blank"
                  rel="noreferrer"
                  className="link_to_doc"
                >
                  Открыть документ
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
