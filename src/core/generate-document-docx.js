/**
 * @author Stefan Schultz (Software Schultz)
 * 
 * Generator for Word documents with file extension "docx".
 */
import {
  Document,
  PageOrientation,
  Paragraph,
  Packer
} from 'docx';
import { saveAs } from 'file-saver';
import {
  DEFAULT_FILE_NAME,
  DEFAULT_DOCUMENT_NAME,
  DEFAULT_BACKGROUND_COLOR,
} from '../shared/models/PageObject.model';

export function generateDocumentDocx(pageObject) {
  console.log('pageObject:', pageObject);
  if (pageObject) {
    const doc = new Document({
      background: {
        color: DEFAULT_BACKGROUND_COLOR
      },
      title: DEFAULT_DOCUMENT_NAME,
      sections: [{
        size: {
          orientation: PageOrientation.PORTRAIT
        },
        children: [new Paragraph('Hello World')]
      }]
    });

    Packer.toBlob(doc)
      .then(blob => {
        console.log('blob:', blob);
        saveAs(blob, DEFAULT_FILE_NAME + '.docx');
        console.log('Document created successfully.');
      })
  } else {
    console.log('Problem by generating DOCX document.');
  }
}