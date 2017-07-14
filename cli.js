#!/usr/bin/env node
'use strict';

const meow = require('meow');
const configPluginXml = require('./');

const cli = meow({
	help: [`
		Usage
      See https://github.com/hypery2k/cordova-plugin-xml
		  $ cordova-plugin-xml <action> <args>
    Options
      --config Config path
	`]
});

try {
	const config = configPluginXml(cli.flags.config);
	const action = cli.input.shift();
	const args = cli.input;

  if (!config[action]) throw new Error(`Action ${action} not found`);

	config[action].apply(null, args);
} catch (err) {
	console.error(err.message);
	cli.showHelp(-1);
}
