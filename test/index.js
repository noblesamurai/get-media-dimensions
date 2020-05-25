const expect = require('chai').expect;
const path = require('path');
const getMediaDimensions = require('..');

describe('get media dimensions (index)', function () {
  it('should return image dimensions', async function () {
    const filename = path.resolve(__dirname, 'fixtures/portrait_1.jpg');
    const dimensions = await getMediaDimensions(filename, 'image');
    expect(dimensions).to.deep.equal({ width: 1200, height: 1800 });
  });

  it('should return video dimensions', async function () {
    const filename = path.resolve(__dirname, 'fixtures/video.mp4');
    const dimensions = await getMediaDimensions(filename, 'video');
    expect(dimensions).to.deep.equal({ width: 50, height: 28, duration: 30 });
  });

  it('should return audio dimensions', async function () {
    const filename = path.resolve(__dirname, 'fixtures/audio.mp3');
    const dimensions = await getMediaDimensions(filename, 'audio');
    expect(dimensions.duration).to.be.closeTo(46, 0.2);
  });

  it('should throw an error if type is unknown', async function () {
    const filename = path.resolve(__dirname, 'fixtures/video.mp4');
    await expect(getMediaDimensions(filename, 'fish')).to.be.rejectedWith('unknown type');
  });
});
