import { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import doc from "./pravila.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class DocumentsItem5 extends Component {
  state = { numPages: null, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <>
        <p className="doc_h1">Правила внутреннего распорядка СНТ «РАДАР»</p>
        <div className="doc__container">
          <nav className="doc__nav">
            <button className="doc__button" onClick={this.goToPrevPage}>Назад</button>
            <button className="doc__button" onClick={this.goToNextPage}>Вперед</button>
          </nav>

          <div  className="doc__wrapper" >
            <Document style={{ width: 400 }} file={doc} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page style={{ width: 400 }} pageNumber={pageNumber} width={400} />
            </Document>
          </div>

          <p className="doc__text">
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </>
    );
  }
}

export default DocumentsItem5;
