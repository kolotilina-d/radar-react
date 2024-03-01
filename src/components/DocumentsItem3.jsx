import BackButton from "./BackButton";
import doc from "./vibor_predsedatelia.pdf";

function DocumentsItem6() {
  return (
    <>
    <BackButton/>
      <h2 className="doc_h1">
        Протокол о выборе Председателя от 29.10.2022 г.
      </h2>
      <div className="doc__container">
        <img
          src="/Протокол_от_29.10.2022.jpg"
          alt="document"
          className="img_of_doc"
        />
      </div>
      <div className="wrapper">
        <a
          href={doc}
          target="_blank"
          rel="noreferrer"
          download="Протокол_от_29.10.2022.pdf"
          className="link_to_doc"
        >
          Скачать документ
        </a>
        <a href={doc} target="_blank" rel="noreferrer" className="link_to_doc">
          Открыть документ
        </a>
      </div>
    </>
  );
}
export default DocumentsItem6;
