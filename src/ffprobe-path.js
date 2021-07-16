const ffprobe = require('node-ffprobe-installer');

try {
  // `ffprobe-static` is optional dep.
  module.exports = ffprobe.path;
} catch {
  module.exports = 'ffprobe'; // Otherwise just use version in path.
}
