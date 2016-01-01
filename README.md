:egg: easyegg.js
----------

Easyegg provides a simple API for creating keystroke-enabled
Easter eggs on websites.

### Installation

Install easyegg with npm:

    npm install --save easyegg

No `npm`? Grab `easyegg.min.js` from `dist/` and include it in your project.
No dependencies are needed, and `easyegg` is made global.

### Usage

The `easyegg` API exposes two methods: `easyegg.on` and `easyegg.register`.

[View Demo](http://codepen.io/tbloncar/pen/xZKELe)

#### easyegg.on

Use `easyegg.on` to bind a callback function to a key sequence. Key names
should be expressed in English (see `keyMap` in source) and delimited by the pipe (`|`)
character. Alternatively, one can provide a regular, non-delimited string code;
this will result in a grapheme-by-grapheme matching algorithm.

```js
// Bind to delimited key sequence
easyegg.on('up|right|down|left', function() {
  console.log('You cracked the egg!');
});

// Bind to grapheme-by-grapheme key sequence
easyegg.on('helloworld', function() {
  console.log('You typed "helloworld"!');
});
```
#### easyegg.register

One can also specify a "registered" or pre-seeded code name to bind
the callback's execution to the corresponding key sequence. Below, we register
the Mike Tyson key sequence ("0073735963") under the name "tyson". This gives
us a nice, human-readable string for `easyegg.on`.

```js
// Register a named code and bind to it
easyegg.register('tyson', '0073735963');
easyegg.on('tyson', function() {
  console.log('You unlocked Mike Tyson!');
});
```
There are two pre-seeded code names:
["konami"](https://en.wikipedia.org/wiki/Konami_Code) and
["turok"](http://www.urbandictionary.com/define.php?term=bewareoblivionisathand).

```js
// Bind to pre-seeded named code
easyegg.on('konami', function() {
  console.log('You entered the Konami code!');
});
```
### Alternatives

Mike Flynn and Rob McVey created [Egg.js](http://thatmikeflynn.com/egg.js/)
(long before this project existed). Easyegg was inspired by their efforts.

### License

Copyright (c) 2016 Travis Loncar.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies
of the Software, and to permit persons to whom the Software is furnished to do
so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

