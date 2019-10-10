import fileSize from '../src';

describe('fileSize.js', () => {
  let bytes, i, unit;
  const jedec = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];
  const si = ['', 'k', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'];

  test('jedec', () => {
    // test `bytes`, default spec `jedec`
    bytes = 1.98765;

    for (i = 0; i < jedec.length; i++) {
      unit = jedec[i];
      expect(fileSize(bytes)).toBe('2.0 ' + unit + 'b'); // default fixed = 1
      expect(fileSize(bytes, undefined, 'jedec')).toBe('2.0 ' + unit + 'b'); // default fixed = 1
      expect(fileSize(bytes, 2, 'not_exist_spec')).toBe('1.99 ' + unit + 'b'); // default spec = 'jedec'

      expect(fileSize(bytes, 4)).toBe('1.9876 ' + unit + 'b'); // test fixed = 3
      bytes *= 1024;
    }
  });

  test('si', () => {
    // test spec `si`
    bytes = 1.23456;
    for (i = 0; i < si.length; i++) {
      unit = si[i];
      expect(fileSize(bytes, undefined, 'si')).toBe('1.2 ' + unit + 'b');

      expect(fileSize(bytes, 4, 'si')).toBe('1.2346 ' + unit + 'b'); // test fixed = 3
      bytes *= 1000;
    }
  });

  test('iec', () => {
    // test spec `iec`
    bytes = 1.98765;
    const iec = ['', 'Ki', 'Mi', 'Gi', 'Ti', 'Pi', 'Ei', 'Zi', 'Yi'];
    for (i = 0; i < iec.length; i++) {
      unit = iec[i];
      expect(fileSize(bytes, undefined, 'iec')).toBe('2.0 ' + unit + 'b');

      expect(fileSize(bytes, 3, 'iec')).toBe('1.988 ' + unit + 'b'); // test fixed = 3
      bytes *= 1024;
    }
  });

  test('other', () => {
    // test negative
    bytes = -1.98765;
    for (i = 0; i < jedec.length; i++) {
      unit = jedec[i];
      expect(fileSize(bytes)).toBe('2.0 ' + unit + 'b'); // default fixed = 1
      expect(fileSize(bytes, undefined, 'jedec')).toBe('2.0 ' + unit + 'b'); // default fixed = 1
      expect(fileSize(bytes, 2, 'not_exist_spec')).toBe('1.99 ' + unit + 'b'); // default spec = 'jedec'

      expect(fileSize(bytes, 4)).toBe('1.9876 ' + unit + 'b'); // test fixed = 3
      bytes *= 1024;
    }
    // bytes
    expect(fileSize(123456)).toBe('120.6 Kb');
    // fixed
    expect(fileSize(123456, 0)).toBe('121 Kb');
    expect(fileSize(123456, 4)).toBe('120.5625 Kb');
    // spec, jedec / iec / si
    expect(fileSize(123456, 2, 'iec')).toBe('120.56 Kib');
    expect(fileSize(123456, 0, 'si')).toBe('123 kb');
  });
});
