# filesize.js

> **filesize.js** is a nano(350 b) library to make file size bytes **human-readable**. e.g. 20.4 Kb.

[![Build Status](https://travis-ci.org/hustcc/filesize.js.svg?branch=master)](https://travis-ci.org/hustcc/filesize.js)
[![npm](https://img.shields.io/npm/v/filesize.js.svg?style=flat-square)](https://www.npmjs.com/package/filesize.js)
[![npm](https://img.shields.io/npm/dm/filesize.js.svg)](https://www.npmjs.com/package/filesize.js)
[![npm](https://img.shields.io/npm/l/filesize.js.svg)](https://www.npmjs.com/package/filesize.js)


## Install

> npm install filesize.js



## Usage

The unique API is: **fileSize(bytes[, fixed=1, spec='jedec']);**.

 - `bytes`: Number of file size bytes.
 - `fixed`: Number of decimal, default is `1`.
 - `spec`: String of file size spec, default is `jedec`.

```js
// bytes.
filesize(123456); 				// '120.6 Kb'

// fixed, `1` is default.
filesize(123456, 0); 			// '121 Kb'
filesize(123456, 4); 			// '1120.5625 Kb'

// specs, `jedec` / `iec / si`.
// `jedec` is default.
filesize(123456, 2, 'iec'); 	// '120.56 Kib'
filesize(123456, 0, 'si'); 		// '123 kb'
```


## Test

> npm install

> npm test


## Spec

 - [jedec](http://www.jedec.org/): Unit is `['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']`, and the power is **1024**.
 - [iec](http://www.electropedia.org/iev/iev.nsf/index?openform&part=112): Unit is `['b', 'Kib', 'Mib', 'Gib', 'Tib', 'Pib', 'Eib', 'Zib', 'Yib']`, and the power is **1024**.
 - [si](https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E5%8D%95%E4%BD%8D%E5%88%B6): Unit is `['b', 'kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']`, and the power is **1000**.

More specs **waiting for your issues / pull requests**.


## LICENSE

MIT@[hustcc](https://github.com/hustcc).
