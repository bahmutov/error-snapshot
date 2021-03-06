# error-snapshot

> Checks if given function throws an expected error (by saving snapshot)

[![NPM][npm-icon] ][npm-url]

[![Build status][ci-image] ][ci-url]
[![semantic-release][semantic-image] ][semantic-url]
[![js-standard-style][standard-image]][standard-url]

## Install

Requires [Node](https://nodejs.org/en/) version 6 or above.

```sh
npm install --save-dev error-snapshot
```

Bring a snapshot function, for example [snap-shot-it][snap-shot-it]

```sh
npm install --save-dev snap-shot-it
```

## Use

When checking if a function throws an error as expected when called

```js
const snapshot = require('snap-shot-it')
const errorSnapshot = require('error-snapshot')(snapshot)
it('snapshots error', () => {
  const fn = () => {
    throw new Error('A test error')
  }
  errorSnapshot(fn)
})
```

First time the test runs, it will save error message snapshot. If the
function does NOT throw an error, or if the error has a different message,
it throws an error. The error message is saved into a snapshot file
using [snap-shot-it][snap-shot-it].

By default, the error message and the constructor name is saved, but
you can specify additional properties to pick.

## Example

```js
// basic
it('snapshots error', () => {
  const fn = () => {
    throw new Error('A test error')
  }
  errorSnapshot(fn)
})
// saved snapshot
exports['snapshots error 1'] = {
  "name": "Error",
  "message": "A test error"
}
```

```js
// extra properties
it('snapshots extra properties by name', () => {
  const fn = () => {
    const e = new Error('A test error')
    e.foo = 42
    e.bar = 'some bar prop'
    throw e
  }
  errorSnapshot(fn, 'foo', 'bar')
})
// saved snapshot
exports['snapshots extra properties by name 1'] = {
  "name": "Error",
  "message": "A test error",
  "foo": 42,
  "bar": "some bar prop"
}
```

For more examples, see [test file](src/error-snapshot-spec.js) and
the [snapshots](__snapshots__/error-snapshot-spec.js)

[snap-shot-it]: https://github.com/bahmutov/snap-shot-it

### Small print

Author: Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt; &copy; 2017

* [@bahmutov](https://twitter.com/bahmutov)
* [glebbahmutov.com](https://glebbahmutov.com)
* [blog](https://glebbahmutov.com/blog)

License: MIT - do anything with the code, but don't blame me if it does not work.

Support: if you find any problems with this module, email / tweet /
[open issue](https://github.com/bahmutov/error-snapshot/issues) on Github

## MIT License

Copyright (c) 2017 Gleb Bahmutov &lt;gleb.bahmutov@gmail.com&gt;

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

[npm-icon]: https://nodei.co/npm/error-snapshot.svg?downloads=true
[npm-url]: https://npmjs.org/package/error-snapshot
[ci-image]: https://travis-ci.org/bahmutov/error-snapshot.svg?branch=master
[ci-url]: https://travis-ci.org/bahmutov/error-snapshot
[semantic-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
[semantic-url]: https://github.com/semantic-release/semantic-release
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[standard-url]: http://standardjs.com/
