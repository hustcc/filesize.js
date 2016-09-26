# filesize.js

> **filesize.js** is a simple `browserjs` / `nodejs` library to make filesize **human-readable**. e.g. 20.4 Kb.

[![Build Status](https://travis-ci.org/hustcc/filesize.js.svg?branch=master)](https://travis-ci.org/hustcc/filesize.js) [![npm](https://img.shields.io/npm/v/filesize.js.svg?style=flat-square)](https://www.npmjs.com/package/filesize.js) [![npm](https://img.shields.io/npm/dt/filesize.js.svg?style=flat-square)](https://www.npmjs.com/package/filesize.js) [![npm](https://img.shields.io/npm/l/filesize.js.svg?style=flat-square)](https://www.npmjs.com/package/filesize.js)


# 1. Install

> npm install filesize.js

Then import it.

```js
var filesize = require('filesize.js');

//or

import filesize from 'filesize.js';
```

Or import it with `<script>` tag.

```html
<script type="text/javascript" src="filesize.min.js"></script>
```

Then use `filesize` API.

```js
var fs = filesize(123456789); // fs = '117.7 Mb'
```


# 2. Detail Usage

The unique API is: **filesize(bytes, fixed=1, spec='jedec');**.

 - bytes: Number of filesize.
 - fixed: Number of decimal, default is `1`.
 - spec: String of filesize spec, default is `jedec`.

```js
// bytes.
filesize(123456); 				// '120.6 Kb'

// fixed, `1` is default.
filesize(123456, 0); 			// '121 Kb'
filesize(123456, 4); 			// '1120.5625 Kb'

// specs, `jedec` / `iec / si`.
// `jedec` is default.
filesize(123456, 2, 'iec'); 	// '120.56 Kib'
filesize(123456, 0, 'si'); 		// '123 Kb'
```


# 3. Test

> npm install

> npm test


# 4. Spec

 - [jedec](http://www.jedec.org/): Unit is ```['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']```, and the power is **1024**.
 - [iec](http://www.electropedia.org/iev/iev.nsf/index?openform&part=112): Unit is ```['b', 'Kib', 'Mib', 'Gib', 'Tib', 'Pib', 'Eib', 'Zib', 'Yib']```, and the power is **1024**.
 - [si](https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E5%8D%95%E4%BD%8D%E5%88%B6): Unit is ```['b', 'Kb', 'Mb', 'Gb', 'Tb', 'Pb', 'Eb', 'Zb', 'Yb']```, and the power is **1000**.

More specs **waiting for your issues / pull requests**.


# 5. LICENSE

MIT
