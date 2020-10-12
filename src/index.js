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
 * @example <caption>Get video dimensions.</caption>
 * ```js
 * const getMediaDimensions = require('get-media-dimensions');
 *
 * // get video dimensions = { width, height, duration }
 * const dimensions = await getMediaDimensions('./video.mp4');
 * const dimensions = await getMediaDimensions('https://somewhere.com/video.mp4');
 * ```
 *
 * @example <caption>Get image dimensions.</caption>
 * ```js
 * // get image dimensions = { width, height }
 * const dimensions = await getMediaDimensions('./image.jpg', 'image');
 * const dimensions = await getMediaDimensions('https://somewhere.com/image.jpg', 'image');
 * ```
 *
 * @example <caption>Get audio dimensions.</caption>
 * ```js
 * // get audio dimensions = { duration }
 * const dimensions = await getMediaDimensions('./audio.mp3', 'audio');
 * const dimensions = await getMediaDimensions('https://somewhere.com/audio.mp3', 'audio');
 * ```
 *
 * @kind function
 * @name getMediaDimensions
 * @param {string} urlOrFilename either a remote url or a local filename.
 * @param {string} type the type of media (`audio`, `image`, or `video`).
 * @return {object}
 */
async function getMediaDimensions (urlOrFilename, type) {
  if (!functions[type]) throw new Error(`unknown type ${type}`);
  return functions[type](urlOrFilename);
}

module.exports = getMediaDimensions;
