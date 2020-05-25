const sharp = require('sharp');
const got = require('got');

/**
 * Get image metadata.
 *
 * @param {string} urlOrFilename
 * @return {object}
 */
async function getMetadata (urlOrFilename) {
  if (!/^https?:\/\//.test(urlOrFilename)) return sharp(urlOrFilename).metadata();
  const buffer = await got(urlOrFilename).buffer();
  return sharp(buffer).metadata();
}

/**
 * Get the dimensional info for an image
 *
 * @param {string} urlOrFilename
 * @return {object} { width, height }
 */
async function getImageDimensions (urlOrFilename) {
  const { width, height, orientation } = await getMetadata(urlOrFilename);
  // Fix the height and width if the orientation is > 4
  // 1-4 are flipped either horizontally or vertically so dimensions don't change
  // 5-8 are all rotated 90 or 270 with or without flipping so need to be swapped.
  // @see http://sylvana.net/jpegcrop/exif_orientation.html
  return orientation > 4 ? { width: height, height: width } : { width, height };
}

module.exports = getImageDimensions;
