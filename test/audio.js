const expect = require('chai').expect;
const path = require('path');
const getAudioDimensions = require('../src/audio');

const AUDIO_FILES = ['audio.opus', 'audio.mp3'];

describe('get audio dimensions', function () {
  it('should return dimensions for local files', async function () {
    for (const file of AUDIO_FILES) {
      const filename = path.resolve(__dirname, 'fixtures', file);
      const dimensions = await getAudioDimensions(filename);
      expect(dimensions.duration).to.be.closeTo(46, 0.2);
    }
  });

  it('should return dimensions for remote urls', async function () {
    for (const file of AUDIO_FILES) {
      const url = `${this.host}/${file}`;
      const dimensions = await getAudioDimensions(url);
      expect(dimensions.duration).to.be.closeTo(46, 0.2);
    }
  });

  it('should reject with an error for a bad local file', async function () {
    const filename = path.resolve(__dirname, 'fixtures/does_not_exist.mp3');
    await expect(getAudioDimensions(filename)).to.be.rejected();
  });

  it('should reject with an error for a bad remote url', async function () {
    const url = `${this.host}/does_not_exists.mp3`;
    await expect(getAudioDimensions(url)).to.be.rejected();
  });
});
