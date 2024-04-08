

import BackButton from "./BackButton";
import doc from "./egrul.pdf";

function DocumentsItem6() {
  return (
    <>
    <BackButton/>
      <h2 className="doc_h1">Свидетельство о внесении в ЕГРЮЛ от 06.12.2002 г.</h2>
      <div className="doc__container">
        <img
          src="/Свидетельство о постановке на налоговый учет.jpg"
          alt="document"
          className="img_of_doc"
        />
      </div>
      <div className="wrapper">
        <a
          href={doc}
          target="_blank"
          rel="noreferrer"
          download="egrul.pdf"
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
