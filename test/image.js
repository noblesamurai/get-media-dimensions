const expect = require('chai').expect;
const path = require('path');
const getImageDimensions = require('../src/image');

const IMAGE_FILES = ['portrait_1.jpg', 'portrait_3.jpg', 'portrait_6.jpg', 'portrait_8.jpg'];
const DIMENSIONS = { width: 1200, height: 1800 };

describe('get image dimensions', function () {
  it('should return dimensions for local files', async function () {
    for (const file of IMAGE_FILES) {
      const filename = path.resolve(__dirname, 'fixtures', file);
      const dimensions = await getImageDimensions(filename);
      expect(dimensions).to.deep.equal(DIMENSIONS);
    }
  });

  it('should return dimensions for remote urls', async function () {
    for (const file of IMAGE_FILES) {
      const url = `${this.host}/${file}`;
      const dimensions = await getImageDimensions(url);
      expect(dimensions).to.deep.equal(DIMENSIONS);
    }
  });

  it('should reject with an error for a bad local file', async function () {
    const filename = path.resolve(__dirname, 'fixtures/does_not_exist.jpg');
    await expect(getImageDimensions(filename)).to.be.rejected();
  });

  it('should reject with an error for a bad remote url', async function () {
    const url = `${this.host}/does_not_exists.jpg`;
    await expect(getImageDimensions(url)).to.be.rejected();
  });
});
