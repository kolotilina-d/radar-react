import { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import doc from "./egrul.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class DocumentsItem2 extends Component {
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
        <p className="doc_h1">Свидетельство о внесении в ЕГРЮЛ от 06.12.2002 г.</p>
        <div className="doc__container">
          <div className="doc__wrapper" style={{ width: 600 }}>
            <Document file={doc} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={400} />
            </Document>
          </div>
          <nav>
            <button className="doc__button" onClick={this.goToPrevPage}>
              Назад
            </button>
            <button className="doc__button" onClick={this.goToNextPage}>
              Вперед
            </button>
          </nav>
          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </>
    );
  }
}

export default DocumentsItem2;

