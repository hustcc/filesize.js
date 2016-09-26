/**
  Copyright (c) 2016 hustcc
  License: MIT 
  https://github.com/hustcc/filesize.js
**/
/* jshint expr: true */
!function (root, factory) {
  if (typeof module === 'object' && module.exports)
    module.exports = factory();
  else
    root.filesize = factory();
}(typeof window !== 'undefined' ? window : this, 
function () {
  // see https://zh.wikipedia.org/zh-cn/Mebibyte
  var builtInSpecs = {
    // power is 1024
    // jedec, see http://www.jedec.org/
    
    // IEC: International Electrotechnical Commission
    // power = 1024
    // from https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E7%94%B5%E5%B7%A5%E5%A7%94%E5%91%98%E4%BC%9A
    // from http://www.electropedia.org/iev/iev.nsf/index?openform&part=112
    iec: '_Ki_Mi_Gi_Ti_Pi_Ei_Zi_Yi',
    // SI: Système International d'Unités
    // power = 1000
    // from https://zh.wikipedia.org/wiki/%E5%9B%BD%E9%99%85%E5%8D%95%E4%BD%8D%E5%88%B6
    si: '_K_M_G_T_P_E_Z_Y'
  };
  /**
   *  filesize( bytes, fixed, units ) -> String
   *  - bytes (Number): the bytes number should be formated.
   *  - fixed (Number): the decimal number length.
   *  - units (String / Array): the unit of formated string. Can be `iec` or `jedec`, or customize.
   *  
   *  return the formated string of filesize
  **/
  return function(bytes, fixed, spec) {
      bytes = Math.abs(bytes);
      // set default parameter `fixed`, default is 1.
      if (!fixed && fixed !== 0) fixed = 1;

      // only spec is `si`, the power is 1000.
      var power = 'si' == spec ? 1e3 : 1024, 
        loop = 0;

      // the default spec is `jedec` (jedec's unit is same with si.)
      if (! builtInSpecs[spec]) spec = 'si'; // 
      
      // calculate
      while (bytes >= power) {
        bytes /= power;
        ++ loop;
      }
      return bytes.toFixed(fixed) + ' ' + builtInSpecs[spec].split('_')[loop] + 'b';
  };
});