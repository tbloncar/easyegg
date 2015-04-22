easyegg.js
----------

Inspired by [Egg.js](http://thatmikeflynn.com/egg.js/), easyegg.js is a
JavaScript library that provides a simple API for creating Easter eggs on
your websites.

### Installation

Include the library in your project.

    ...
    <script src="/js/easyegg.min.js"></script>
    ...

### Usage

The `easyegg` module exposes two methods: `easyegg.on()` and `easyegg.register()`.

Use `easyegg.on()` to bind a callback function to a key combination. Key names
should be expressed in English (see `keyMap` in source) and delimited by the pipe (`|`)
character. Alternatively, one can specify a "registered" or pre-seeded code name to bind the callback's execution to the corresponding code. Lastly, one can provide a regular, non-delimited string code; this will result in a grapheme-by-grapheme matching algorithm.

	// Bind to delimited key sequence
	easyegg.on('up|right|down|left', function() {
		console.log('You cracked the egg!');
	});
	
	// Bind to pre-seeded named code
	easyegg.on('konami', function() {
		console.log('You entered the Konami code!');
	});
	
	// Register a named code and bind to it
	easyegg.register('tyson', '0073735963');
	easyegg.on('tyson', function() {
		console.log('You unlocked Mike Tyson!');
	});
	
	// Bind to grapheme-by-grapheme key sequence
	easyegg.on('helloworld', function() {
		console.log('You typed "helloworld"!');
	});
	
There are two pre-seeded named codes: `"konami"` and `"turok"`.
	
### License

Copyright (c) 2015 Travis Loncar.

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

