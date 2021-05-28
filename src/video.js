const ffprobe = require('ffprobe-client');
const ffprobePath = require('./ffprobe-path');

/**
 * Get rotation info from a video streams metadata
 *
 * @param {object} streamMetadata
 * @return {number}
 */
function getVideoRotation (streamMetadata) {
  const { rotation, side_data_list: sideDataList = [] } = streamMetadata;
  const { rotation: sideDataRotation } = sideDataList.find(sideData => sideData.rotation) || {};
  return rotation || sideDataRotation || 0;
}

/**
 * Get dimensional info from a video
 *
 * @param {string} urlOrFilename
 * @return {object} { width, height, duration }
 */
async function getVideoDimensions (urlOrFilename) {
  const metadata = await ffprobe(urlOrFilename, { path: ffprobePath });
  const stream = metadata.streams.find(s => s.codec_type === 'video');
  if (!stream) throw new Error('video stream not found');
  const rotation = getVideoRotation(stream);
  const { width, height, duration = (metadata.format && metadata.format.duration) || 0 } = stream;

  if (duration <= 0) {
    console.error('Duration was not found correctly for the video. Metadata: ', metadata);
    throw new Error(`Duration (${duration}) of video ('${urlOrFilename}') was calculated to be zero or less or not found at all. It may exist on another property or is an invalid video. See logs for metadata.`);
  }

  return Math.abs(rotation % 180) === 90
    ? { width: height, height: width, duration: parseFloat(duration) }
    : { width, height, duration: parseFloat(duration) };
}

module.exports = getVideoDimensions;
