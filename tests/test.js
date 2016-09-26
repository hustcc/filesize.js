'use strict';
var test = require('tape');
var filesize = require('..');

test('filesize.js show be tested', function (t) {
  // test `bytes`, default spec `jedec`
  var bytes = 1.98765;
  var jedec = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  var i, unit;
  for (i = 0; i < jedec.length; i++) {
    unit = jedec[i];
    t.equal(filesize(bytes), '2.0 ' + unit + 'b');  // default fixed = 1
    t.equal(filesize(bytes, null, 'jedec'), '2.0 ' + unit + 'b'); // default fixed = 1
    t.equal(filesize(bytes, 2, 'not_exist_spec'), '1.99 ' + unit + 'b'); // default spec = 'jedec'

    t.equal(filesize(bytes, 4), '1.9876 ' + unit + 'b'); // test fixed = 3
    bytes *= 1024;
  };

  // test spec `si`
  bytes = 1.23456;
  for (i = 0; i < jedec.length; i++) {
    unit = jedec[i];
    t.equal(filesize(bytes, null, 'si'), '1.2 ' + unit + 'b');

    t.equal(filesize(bytes, 4, 'si'), '1.2346 ' + unit + 'b'); // test fixed = 3
    bytes *= 1000;
  };

  // test spec `iec`
  bytes = 1.98765;
  var iec = ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi', 'Yi'];
  for (i = 0; i < iec.length; i++) {
    unit = iec[i];
    t.equal(filesize(bytes, null, 'iec'), '2.0 ' + unit + 'b');

    t.equal(filesize(bytes, 3, 'iec'), '1.988 ' + unit + 'b'); // test fixed = 3
    bytes *= 1024;
  };


  // test negative
  bytes = -1.98765;
  for (i = 0; i < jedec.length; i++) {
    unit = jedec[i];
    t.equal(filesize(bytes), '2.0 ' + unit + 'b');  // default fixed = 1
    t.equal(filesize(bytes, null, 'jedec'), '2.0 ' + unit + 'b'); // default fixed = 1
    t.equal(filesize(bytes, 2, 'not_exist_spec'), '1.99 ' + unit + 'b'); // default spec = 'jedec'

    t.equal(filesize(bytes, 4), '1.9876 ' + unit + 'b'); // test fixed = 3
    bytes *= 1024;
  };
  // bytes
  t.equal(filesize(123456), '120.6 Kb');
  // fixed
  t.equal(filesize(123456, 0), '121 Kb');
  t.equal(filesize(123456, 4), '120.5625 Kb');
  // spec, jedec / iec / si
  t.equal(filesize(123456, 2, 'iec'), '120.56 Kib');
  t.equal(filesize(123456, 0, 'si'), '123 Kb');
  t.end();
});