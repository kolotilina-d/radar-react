import BackButton from "./BackButton";
import doc from "./prisv_adr.pdf";

function DocumentsItem6() {
  return (
    <>
      <BackButton />
      <h2 className="doc_h1">Присвоенные адреса участкам в СНТ «РАДАР»</h2>
      <div className="doc__container">
        <img src="/post_po_adr.jpg" alt="document" className="img_of_doc" />
      </div>
      <div className="wrapper">
        <a
          href={doc}
          target="_blank"
          rel="noreferrer"
          download="Присвоенные_адреса.pdf"
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
