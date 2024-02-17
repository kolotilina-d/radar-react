import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__place">
          <h2 className="footer__title">СНТ «РАДАР» Месторасположение</h2>
          <span className="footer__item">
          СНТ «РАДАР», Зеленоградский муниципальный округ,
            Калининградская область
          </span>
          <span className="footer__item">Координаты: 54.933859, 20.041136</span>
        </div>
        <div className="footer__container">
        <iframe
          title="myFrame"
          src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d13776.777975865303!2d20.024784982143526!3d54.93538243414119!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTTCsDU2JzAxLjkiTiAyMMKwMDInMjguMSJF!5e1!3m2!1sru!2sru!4v1686828081086!5m2!1sru!2sru"
          width={400}
          height={350}
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          passive= "true"
        />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
