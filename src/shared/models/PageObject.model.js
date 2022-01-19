/**
 * @author Stefan Schultz (Schultz Software)
 * 
 * Page object model holds all necessary information
 * about size (width, height), resoultion and many more.
 */
export const UNIT_MILLIMETER_FULLNAME = 'Millimeter';
export const UNIT_INCH_FULLNAME = 'Inch'; // english=Inch, german=Zoll
export const UNIT_PIXEL_FULLNAME = 'Pixel';

export const UNIT_MILLIMETER = 'mm';
export const UNIT_INCH = 'in'; // english=Inch, german=Zoll
export const UNIT_PIXEL = 'px';

export const FILE_EXTENSION_PDF = 'pdf';
export const FILE_EXTENSION_DOCX = 'docx';
export const FILE_EXTENSION_PNG = 'png';
export const FILE_EXTENSION_JPG = 'jpg';
export const FILE_EXTENSION_JPEG = 'jpeg';

export const PAGE_ORIENTATION_PORTRAIT_SHORTCUT = 'p';
export const PAGE_ORIENTATION_LANDSCAPE_SHORTCUT = 'l';

export const PAGE_ORIENTATION_PORTRAIT = 'portrait';
export const PAGE_ORIENTATION_LANDSCAPE = 'landscape';

export const MIN_WIDTH_AND_HEIGHT = 1;
export const MAX_WIDTH_AND_HEIGHT = 9999;

export const DEFAULT_UNIT = UNIT_MILLIMETER;
export const DEFAULT_PAGE_WIDTH = 100;
export const DEFAULT_PAGE_HEIGHT = 100;
export const DEFAULT_PAGE_ORIENTATION = PAGE_ORIENTATION_PORTRAIT_SHORTCUT;
export const DEFAULT_PAGE_RESOLUTION = 96;
export const DEFAULT_FILE_FORMAT = FILE_EXTENSION_PDF;
export const DEFAULT_FILE_NAME = 'empty_page';
export const DEFAULT_OUTPUT_PATH = './';
export const DEFAULT_DOCUMENT_NAME = 'Empty Page';
export const DEFAULT_BACKGROUND_COLOR = '#FFFFFF';

export default class PageObject {
  unit = null; // null | 'mm' | 'in' | 'pt' | 'px' ==> mm==Millimeter, in==Inch/Zoll, pt==Point, px==Pixel
  pageWidth = null; // null | 1
  pageHeight = null; // null | 1
  // resolution: null, // null | 72 ==> 72 or 96 dpi/ppi
  pageOrientation = null; // null | 'p' | 'l' ==> p==portrait, l==landscape
  fileFormat = null; // null | 'pdf' | 'docx' | 'odt' | 'jpeg' | 'jpg' | 'png'
  fileName = null; // null | 'empty_page' ==> if nothing is set, then is default name set
  // outputPath = null; // null | './' ==> if nothing is set, then is default root path

  constructor() {
    this.dummyValues();
  }

  reset() {
    this.unit = null; // null | 'mm' | 'in' | 'pt' | 'px' ==> mm==Millimeter, in==Inch/Zoll, pt==Point, px==Pixel
    this.pageWidth = null; // null | 1
    this.pageHeight = null; // null | 1
    // this.resolution: null, // null | 72 ==> 72 or 96 dpi/ppi
    this.pageOrientation = null; // null | 'p' | 'l' ==> p==portrait, l==landscape
    this.fileFormat = null; // null | 'pdf' | 'docx' | 'odt' | 'jpeg' | 'jpg' | 'png'
    this.fileName = null; // null | 'empty_page' ==> if nothing is set, then is default name set
    // this.outputPath =null; // null | './' ==> if nothing is set, then is default root path
  }

  dummyValues() {
    this.unit = DEFAULT_UNIT; // null | 'mm' | 'in' | 'pt' | 'px' ==> mm==Millimeter, in==Inch/Zoll, pt==Point, px==Pixel
    this.pageWidth = DEFAULT_PAGE_WIDTH; // null | 1
    this.pageHeight = DEFAULT_PAGE_HEIGHT; // null | 1
    // this.resolution = 96, // null | 72 ==> 72 or 96 dpi/ppi
    this.pageOrientation = DEFAULT_PAGE_ORIENTATION; // null | 'p' | 'l' ==> p==portrait, l==landscape
    this.fileFormat = DEFAULT_FILE_FORMAT; // null | 'pdf' | 'docx' | 'odt' | 'jpeg' | 'jpg' | 'png'
    this.fileName = DEFAULT_FILE_NAME; // null | 'empty_page' ==> if nothing is set, then is default name set
    // this.outputPath = null; // null | './' ==> if nothing is set, then is default root path
  }
}