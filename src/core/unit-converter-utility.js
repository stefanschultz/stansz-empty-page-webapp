/**
 * @author Stefan Schultz (Software Schultz)
 * 
 * Converter utilities for various units.
 */
import {
  UNIT_INCH,
  UNIT_PIXEL,
  UNIT_MILLIMETER
} from '../shared/models/PageObject.model';

// If you use an A4-sized page (which is 8.27 × 11.69 inches or 210 × 297 mm), its dimensions are rounded off to 595 × 842 points (pt in short):
export const millimeterToPoint = 2.83465; // 2,83465 pt = 1 mm, e.g.: 210 mm * 2,83465 pt = 595,2765 pt
export const pointToMillimeter = 0.352778; // 1 pt = 0,352778 mm, e.g.: 595,2765 pt : 0,352778 mm = 210 mm

export const inchToPoint = 72; // 72 points = 1 inch
export const pointToInch = 0.0138889; // 1 pt = 0,0138889 in

// Point: Points are traditionally used in print media (anything that is to be printed on paper, etc.). One point is equal to 1/72 of an inch. Points are much like pixels, in that they are fixed-size units and cannot scale in size.
// Pixel: A pixel is the smallest element of an image that can be individually processed in a video display system.
export const pixelToPoint = 72; // 1 px = 0,75 pt
export const pointToPixel = 0.0138889; // 1 pt = 1.3333333333333333 px

/**
 * Convert millimeter to point.
 * 
 * @param {*} mm 
 * @returns 
 */
export function convertMillimeterToPoint(mm) {
  return mm * millimeterToPoint;
};

/**
 * Convert point to millimeter.
 * 
 * @param {*} pt 
 * @returns 
 */
export function convertPointToMillimeter(pt) {
  return pt / pointToMillimeter;
};

/**
 * Convert inch/zoll to point.
 * 
 * @param {*} inch 
 * @returns 
 */
export function convertInchToPoint(inch) {
  return inch * inchToPoint;
};

/**
 * Convert point to inch/zoll.
 * 
 * @param {*} pt 
 * @returns 
 */
export function convertPointToInch(pt) {
  return pt / pointToInch;
};

/**
 * Convert pixel to point.
 * 
 * @param {*} pixel 
 * @returns 
 */
export function convertPixelToPoint(pixel) {
  return pixel * pixelToPoint;
};

/**
 * Convert point to pixel.
 * 
 * @param {*} pixel 
 * @returns 
 */
export function convertPointToPixel(pt) {
  return pt / pointToPixel;
};

/**
 * Calculate width by given unit to point unit.
 * 
 * @param {*} unit 
 * @param {*} value 
 * @returns 
 */
export function calculateWidthOrHeightByPointUnit(unit, value) {
  let result = 1;
  
  if (UNIT_MILLIMETER === unit) { // millimeter to point
    result = convertMillimeterToPoint(value);
  } else if (UNIT_INCH === unit) { // inch/zoll to point
    result = convertInchToPoint(value);
  } else if (UNIT_PIXEL === unit) { // pixel to point
    result = convertPixelToPoint(value);
  }

  return result;
};