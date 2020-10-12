try {
  // `ffprobe-static` is optional dep.
  module.exports = require('ffprobe-static').path;
} catch {
  module.exports = 'ffprobe'; // Otherwise just use version in path.
}
