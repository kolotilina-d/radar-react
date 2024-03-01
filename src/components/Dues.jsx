export default function Dues() {
  return (
    <div>
      <div className="requisites">
        <ul className="requisites__list">
          <li className="requisites__item_imp">Полное наименование</li>
          <li className="requisites__item">
            ТОВАРИЩЕСТВО СОБСТВЕННИКОВ НЕДВИЖИМОСТИ САДОВОДЧЕСКОЕ НЕКОММЕРЧЕСКОЕ
            ТОВАРИЩЕСТВО &#171;РАДАР&#187;
          </li>
          <li className="requisites__item_imp">Сокращенное наименование</li>
          <li className="requisites__item">СНТ &#171;РАДАР&#187;</li>
          <li className="requisites__item_imp">ИНН/КПП</li>{" "}
          <li className="requisites__item">3918006587 / 391801001</li>
          <li className="requisites__item_imp">ОГРН</li>
          <li className="requisites__item">1053909031263</li>
          <li className="requisites__item_imp">Расчётный счет</li>
          <li className="requisites__item">40703810400000025156</li>
          <li className="requisites__item_imp">Корреспондентский счет</li>
          <li className="requisites__item">30101810800000000701</li>
          <li className="requisites__item_imp">БИК банка</li>
          <li className="requisites__item">042748701</li>
          <li className="requisites__item_imp">Банк</li>
          <li className="requisites__item">
            КБ «ЭНЕРГОТРАНСБАНК» (АО) г. Калининград
          </li>
        </ul>
        <div className="dues__wrapper">
          <h3 className="item__subtitle" style={{textAlign: "center"}}>
            СРОК ОПЛАТЫ И РАЗМЕР ВЗНОСОВ ЗА 2024 г.
          </h3>
          <p className="text">
            Срок оплаты установлен не позднее 01.05.2024 г. Сумма 740,00 руб. за
            одну сотку членский взнос, 260,00 руб. за одну сотку целевой взнос.
            Всего за участок 6 соток сумма взносов 6 000,00 руб.
          </p>{" "}
          <p className="text">
            Протокол очередного общего собрания членов СНТ &#171;РАДАР&#187; от
            28.10.2023 г.
          </p>
        </div>
      </div>
      <div className="dues__wrapper">
        <h3 className="item__subtitle" style={{textAlign: "center"}}>СРОК ОПЛАТЫ И РАЗМЕР ВЗНОСОВ ЗА 2023 г.</h3>
        <p className="text">
          Срок оплаты установлен не позднее 30.06.2023 г. Сумма 800,00 руб. за
          одну сотку членский взнос, 200,00 руб. за одну сотку целевой взнос.
          Всего за участок 6 соток сумма взносов 6 000,00 руб.
        </p>
        <p className="text">
          Протокол очередного общего собрания членов СНТ &#171;РАДАР&#187; от
          22.04.2023 г.
        </p>
      </div>
    </div>
  );
}
