/**
 * @author Stefan Schultz (Software Schultz)
 * 
 * Generator for PDF documents with file extension "pdf".
 */
// import PDFDocument from 'pdfkit';
import { jsPDF } from 'jspdf';
import { calculateWidthOrHeightByPointUnit } from './unit-converter-utility';
import { DEFAULT_FILE_NAME } from '../shared/models/PageObject.model';

export function generateDocumentPdf(pageObject) {
  console.log('pageObject:', pageObject);
  if (pageObject) {
    let width = calculateWidthOrHeightByPointUnit(pageObject.unit, pageObject.pageWidth);
    let height = calculateWidthOrHeightByPointUnit(pageObject.unit, pageObject.pageHeight);

    // Create a document.
    const doc = new jsPDF({
      orientation: pageObject.pageOrientation,
      unit: pageObject.unit,
      format: [width, height]
    });

    // Save document
    doc.save(DEFAULT_FILE_NAME + '.pdf');
  } else {
    console.log('Problem by generating PDF document.');
  }
}

/* export const generateDocumentPdf = function generateDocumentPdf(pageObject) {
  console.log('pageObject:', pageObject);
  if (pageObject) {
    // Create a document.
    const doc = new PDFDocument({
      autoFirstPage: false
    });

    // stream to write PDF
    let stream = doc.pipe(blobStream());

    // add stuff to PDF here using methods described below...
    let width = calculateWidthOrHeightByPointUnit(pageObject.unit, pageObject.pageWidth);
    let height = calculateWidthOrHeightByPointUnit(pageObject.unit, pageObject.pageHeight);
    doc.addPage({
      layout: pageObject.pageOrientation === 'p' ? 'portrait' : 'landscape' , // landscape, portrait
      size: [width, height] // [width, height]
    });
  
    // finalize the PDF and end the stream
    doc.end();

    let saveData = (function () {
      let a = document.createElement("a");
      document.body.appendChild(a);
      a.style = "display: none";
      return function (blob, fileName) {
          let url = window.URL.createObjectURL(blob);
          a.href = url;
          a.download = fileName;
          a.click();
          window.URL.revokeObjectURL(url);
      };
    }());

    stream.on('finish', function() {
      const blobURL = stream.toBlobURL('application/pdf');
      console.log('blob URL:', blobURL);
      // saveAs(blobURL, DEFAULT_FILE_NAME + '.pdf');
      saveData(blobURL, DEFAULT_FILE_NAME + '.pdf');
      console.log('Document created successfully.');
    });
  } else {
    console.log('Problem by generating PDF document.');
  }
} */