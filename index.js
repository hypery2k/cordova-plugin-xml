'use strict';

const xmlpoke = require('xmlpoke');
const packageJSON = require(process.cwd() + '/package.json');

console.log(process.cwd())

function configpluginxml(inFile) {
  const defaultFile = 'plugin.xml';
  const packageFile = 'package.json';
  const file = inFile || defaultFile;

  function poke(cb) {
    // https://github.com/mikeobrien/node-xmlpoke/issues/3
    xmlpoke(file, xml => cb(xml.addNamespace('p', 'http://apache.org/cordova/ns/plugins/1.0')));
  }

  function set(xpath, val) {
    poke(xml => xml.setOrAdd(xpath, val));
  }

  function setVersion(xpath, val) {
    poke(xml => xml.setOrAdd(xpath, val || packageJSON.version));
  }

  return {
    setVersion: setVersion.bind(null, '/p:plugin/@version'),
    withPoke: poke,
  }
}


module.exports = configpluginxml;
