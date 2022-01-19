/**
 * @author Stefan Schultz (Software Schultz)
 * 
 * Generator for PNG (images) documents with file extension "png".
 */
import { createCanvas } from 'canvas';
import { saveAs } from 'file-saver';
import {
  DEFAULT_FILE_NAME,
  DEFAULT_BACKGROUND_COLOR,
  PAGE_ORIENTATION_PORTRAIT_SHORTCUT
} from '../shared/models/PageObject.model';

export function generateDocumentPng(pageObject) {
  console.log('pageObject:', pageObject);
  if (pageObject) {
    const width = (pageObject.pageOrientation === PAGE_ORIENTATION_PORTRAIT_SHORTCUT ? pageObject.pageWidth : pageObject.pageHeight);
    const height = (pageObject.pageOrientation === PAGE_ORIENTATION_PORTRAIT_SHORTCUT ? pageObject.pageHeight : pageObject.pageWidth);

    const canvas = createCanvas(width, height);
    const context = canvas.getContext('2d');

    context.fillStyle = DEFAULT_BACKGROUND_COLOR;
    context.fillRect(0, 0, width, height);
    
    const dataURL = canvas.toDataURL('image/png');
    console.log('data URL:', dataURL);
    saveAs(dataURL, DEFAULT_FILE_NAME + '.png');
    console.log('Document created successfully.');
  } else {
    console.log('Problem by generating PNG document.');
  }
}