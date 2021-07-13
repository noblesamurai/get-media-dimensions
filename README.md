# get-media-dimensions

> get video, image or audio dimensions

## Installation

This module is installed via npm:

```bash
$ npm install get-media-dimensions
```

## API

### getMediaDimensions(urlOrFilename, type) ⇒ <code>object</code>

Get the dimensional info for a given filename and file type.

| Parameter       | Type   | Description                                       |
| :-------------- | :----- | :------------------------------------------------ |
| `urlOrFilename` | string | either a remote url or a local filename.          |
| `type`          | string | the type of media (`audio`, `image`, or `video`). |

#### Examples

_Get video dimensions._

> ```js
> const getMediaDimensions = require('get-media-dimensions');
>
> // get video dimensions = { width, height, duration }
> const dimensions = await getMediaDimensions('./video.mp4');
> const dimensions = await getMediaDimensions('https://somewhere.com/video.mp4');
> ```

_Get image dimensions._

> ```js
> // get image dimensions = { width, height }
> const dimensions = await getMediaDimensions('./image.jpg', 'image');
> const dimensions = await getMediaDimensions('https://somewhere.com/image.jpg', 'image');
> ```

_Get audio dimensions._

> ```js
> // get audio dimensions = { duration }
> const dimensions = await getMediaDimensions('./audio.mp3', 'audio');
> const dimensions = await getMediaDimensions('https://somewhere.com/audio.mp3', 'audio');
> ```

## Contributing

### Prerequisites

```
$ pip install pre-commit
```

### Installation

```
$ pre-commit install --install-hooks
```

## License

The BSD License

Copyright (c) 2020, Andrew Harris

All rights reserved.

Redistribution and use in source and binary forms, with or without modification,
are permitted provided that the following conditions are met:

- Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

- Redistributions in binary form must reproduce the above copyright notice, this
  list of conditions and the following disclaimer in the documentation and/or
  other materials provided with the distribution.

- Neither the name of the copyright holder nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR
ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON
ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
