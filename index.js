'use strict';

const path = require('path');
const fs = require('fs');
const xmlpoke = require('xmlpoke');
const packageJSON = require(process.cwd() + '/package.json');

function configpluginxml(inFile) {
  const defaultFile = 'plugin.xml';
  const packageFile = 'package.json';
  const file = inFile || defaultFile;

  console.log(file);

  function poke(cb) {
    let xmlContent = fs.readFileSync(path.resolve(file), 'utf8');
    // https://github.com/mikeobrien/node-xmlpoke/issues/3
    let updatedContent = xmlpoke(xmlContent, xml => cb(xml.addNamespace('p', 'http://apache.org/cordova/ns/plugins/1.0')));
    updatedContent = updatedContent.replace(' xmlns:android=""', '');
    fs.writeFileSync(path.resolve(file), updatedContent, 'utf8');
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
