const expect = require('chai').expect;
const path = require('path');
const getVideoDimensions = require('../src/video');
const { path: ffprobePath } = require('ffprobe-static');

const VIDEO_FILES = ['video.mp4', 'video_cw.mp4', 'video_ccw.mp4'];
const DIMENSIONS = { width: 50, height: 28, duration: 30 };

describe('get video dimensions', function () {
  it('should return dimensions for local files', async function () {
    for (const file of VIDEO_FILES) {
      const filename = path.resolve(__dirname, 'fixtures', file);
      const dimensions = await getVideoDimensions(filename, { ffprobePath });
      expect(dimensions).to.deep.equal(DIMENSIONS);
    }
  });

  it('should return dimensions for remote urls', async function () {
    for (const file of VIDEO_FILES) {
      const url = `${this.host}/${file}`;
      const dimensions = await getVideoDimensions(url, { ffprobePath });
      expect(dimensions).to.deep.equal(DIMENSIONS);
    }
  });

  it('should reject with an error for a bad local file', async function () {
    const filename = path.resolve(__dirname, 'fixtures/does_not_exist.mp4');
    await expect(getVideoDimensions(filename, { ffprobePath })).to.be.rejected();
  });

  it('should reject with an error for a bad remote url', async function () {
    const url = `${this.host}/does_not_exists.mp4`;
    await expect(getVideoDimensions(url, { ffprobePath })).to.be.rejected();
  });
});
