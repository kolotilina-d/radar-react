import React from "react";
import { Link } from "react-router-dom";

export default function Energy() {
  return (
    <div className="energy">
      <span className="energy__title">
        ПОДКЛЮЧЕНИЕ УЧАСТКА К ЭЛЕКТРОЭНЕРГИИ
      </span>
      <a
        rel="noreferrer"
        href="http://energoset.info/contacts/"
        target="_blank"
        className="energy__link"
      >
        http://energoset.info/contacts/
      </a>
      <span className="energy__title">
        ЗАКЛЮЧЕНИЕ ДОГОВОРА ЭНЕРГОСНАБЖЕНИЯ, ПЕРЕДАЧА ПОКАЗАНИЙ, ОПЛАТА
      </span>
      <a
        className="energy__link"
        href="http://electroset.info/population/"
        target="_blank"
        rel="noreferrer"
      >
        http://electroset.info/population/
      </a>
    </div>
  );
}
