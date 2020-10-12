const ffprobe = require('ffprobe-client');
const ffprobePath = require('./ffprobe-path');

/**
 * Get the dimensional info for an audio file.
 *
 * @param {string} urlOrFilename
 * @return {object} { duration }
 */
async function getAudioDimensions (urlOrFilename) {
  const metadata = await ffprobe(urlOrFilename, { path: ffprobePath });
  const stream = metadata.streams.find(s => s.codec_type === 'audio');
  if (!stream) throw new Error('audio stream not found');
  return { duration: parseFloat(stream.duration) };
}

module.exports = getAudioDimensions;
