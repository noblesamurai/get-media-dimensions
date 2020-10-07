const ffprobe = require('ffprobe-client');

/**
 * Get the dimensional info for an audio file.
 *
 * @param {string} urlOrFilename
 * @return {object} { duration }
 */
async function getAudioDimensions (urlOrFilename, options) {
  const metadata = await ffprobe(urlOrFilename, { path: options.ffprobePath });
  const stream = metadata.streams.find(s => s.codec_type === 'audio');
  if (!stream) throw new Error('audio stream not found');
  return { duration: parseFloat(stream.duration) };
}

module.exports = getAudioDimensions;
