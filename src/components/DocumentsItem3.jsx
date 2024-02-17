import { Component } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import doc from "./vibor_predsedatelia.pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
class DocumentsItem3 extends Component {
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
        <p className="doc_h1">Протокол о выборе Председателя от 29.10.2022 г.</p>
        <div className="doc__container">
          <nav>
          <button className="doc__button" onClick={this.goToPrevPage}>Назад</button>
            <button className="doc__button" onClick={this.goToNextPage}>Вперед</button>
          </nav>

          <div className="doc__wrapper" style={{ width: 400 }}>
            <Document file={doc} onLoadSuccess={this.onDocumentLoadSuccess}>
              <Page pageNumber={pageNumber} width={400} />
            </Document>
          </div>

          <p>
            Page {pageNumber} of {numPages}
          </p>
        </div>
      </>
    );
  }
}

export default DocumentsItem3;
