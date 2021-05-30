import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf/dist/esm/entry.webpack';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';

import samplePdf from '../../../Utilities/docs/resume.pdf';
import './Resume.scss';

const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

function Resume(): JSX.Element {
  const [, setNumPages] = useState<number | null>(1);
  const [pageNumber] = useState<number>(1);

  function onDocumentLoadSuccess({ numPages }:{numPages:number}):void {
    setNumPages(numPages);
  }

  return (
    <div className="resumeCon">
      <div className="resumeHeader">
        <h4>05. </h4>
        <h2>My Resume</h2>
      </div>
      <div className="resumeContent">
        <h2>
          Feel free to download my resume
          <a href={samplePdf} rel="noreferrer" target="_blank">here</a>
        </h2>
      </div>
      <div className="resumeHolder">
        <Document
          file={samplePdf}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          <Page pageNumber={pageNumber} />
        </Document>
      </div>
    </div>
  );
}

export default Resume;
