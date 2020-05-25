const getAudioDimensions = require('./audio');
const getImageDimensions = require('./image');
const getVideoDimensions = require('./video');

const functions = {
  audio: getAudioDimensions,
  image: getImageDimensions,
  video: getVideoDimensions
};

/**
 * Get the dimensional info for a given filename and file type.
 *
 * @param {string} filename
 * @param {string} type
 * @return {object}
 */
async function getDimensions (urlOrFilename, type) {
  if (!functions[type]) throw new Error(`unknown type ${type}`);
  return functions[type](urlOrFilename);
}

module.exports = getDimensions;
