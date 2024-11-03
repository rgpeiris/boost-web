import { MASK_STRING } from './constants';

/**
 * Mask a string value, revealing only the last four characters.
 * @param {string} stringValue - The original string to mask.
 * @returns {string} The masked string or an empty string if input is invalid.
 */
export const maskString = (stringValue: string): string => {
  if (stringValue) {
    const sliced = stringValue.slice(-4);
    const mask = MASK_STRING + sliced;
    return mask;
  }
  return '';
};
