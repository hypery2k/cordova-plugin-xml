# cordova-plugin-xml

Edit cordova plugin.xml from the command line or via API. Based on this [node package](https://github.com/mikeobrien/node-xmlpoke).

## Install
```
npm install --save-dev cordova-plugin-xml
```
or global:
```
npm install -g cordova-plugin-xml
```

## CLI Usage
```
cordova-plugin-xml <action> <args>
```

## CLI examples
```
cordova-plugin-xml setVersion 1.2.3
```

## lib examples
```
require('cordova-plugin-xml')().setVersion('123')
require('cordova-plugin-xml')('/path/to/config.xml').setVersion('123')
```

## Use xmlpoke directly
```
const cordovaXml = require('cordova-plugin-xml')();
cordovaXml.withPoke(xml => xml.add("/w:widget/w:platform[@name='android']/something", xml.XmlString('<text>hey</text>')));
```
See [node-xmlpoke](https://github.com/mikeobrien/node-xmlpoke) for more info.

## Related
https://github.com/ragingwind/cordova-config-cli - Inspiration. However this one mutates the XML doc more
