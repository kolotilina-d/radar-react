import BackButton from "./BackButton";
import doc from "./pravila.pdf";

function DocumentsItem6() {
  return (
    <>
      <BackButton />
      <h2 className="doc_h1">Правила внутреннего распорядка СНТ «РАДАР»</h2>
      <div className="doc__container">
        <img src="/pravila.png" alt="document" className="img_of_doc" />
      </div>
      <div className="wrapper">
        <a
          href={doc}
          target="_blank"
          rel="noreferrer"
          download="Правила_внутреннего_распорядка.pdf"
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
