export default function Contacts() {
  return (
    <section className="contacts">
      <h2 className="contacts__title">Контакты</h2>
      <ul className="contacts__list">
        <span className="contacts__item contacts__item_title">
          Председатель
        </span>
        <li className="contacts__item">Колотилин Дмитрий Владимирович </li>
        <li className="contacts__phone">+79216127921</li>
        <span className="contacts__item contacts__item_title">Правление</span>
        <li className="contacts__item">Адилханов Сахиба Сейфула оглы </li>
        <li className="contacts__phone">+79114585311</li>

        <li className="contacts__item">Кайзер Яна Эдуардовна </li>
        <li className="contacts__phone">+79118560823</li>

        <li className="contacts__item">Пантелеенко Иван Юрьевич </li>
        <li className="contacts__phone">+79632924050</li>

        <span className="contacts__item contacts__item_title">
          Ревизионная комиссия
        </span>
        <li className="contacts__item">
          Председатель ревизионной комиссии Базик Валерий Васильевич
        </li>
        <li className="contacts__phone">+79316021020</li>

        <li className="contacts__item">
          Член ревизионной комиссии Пузыренко Евгения Викторовна
        </li>
        <li className="contacts__phone">+79097757013</li>

        <li className="contacts__item">
          Член ревизионной комиссии Будавас Виктор Альбертович
        </li>
        <li className="contacts__phone">+79114744589</li>
      </ul>
      <span className="contacts__subtitle">
        C уважением, Правление СНТ &quot;Радар&quot;
      </span>
    </section>
  );
}
