"use client";
import "pdfjs-dist/build/pdf.worker.entry";
import { useState } from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

const PDFViewerComponent = ({ file }: { file: string }) => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }: { numPages: any }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      <Document file={file} onLoadSuccess={onDocumentLoadSuccess}>
        {Array.from(new Array(numPages), (el, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1} />
        ))}
      </Document>
    </div>
  );
};

export default PDFViewerComponent;
