'use strict';

const xmlpoke = require('xmlpoke');

module.exports = configxml;

function configxml(inFile) {
  const defaultFile = 'plugin.xml';
  const file = inFile || defaultFile;

  function poke(cb) {
    // https://github.com/mikeobrien/node-xmlpoke/issues/3
    xmlpoke(file, xml => cb(xml.addNamespace('w', 'http://www.w3.org/ns/widgets')));
  }

  function set(xpath, val) {
    poke(xml => xml.setOrAdd(xpath, val));
  }

  return {
    setVersion: set.bind(null, '/p:plugin/@version'),
    withPoke: poke,
  }
}
