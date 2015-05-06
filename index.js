'use strict';

var combine = require('stream-combiner'),
  docset = require('./docset.js'),
  htmlOutput = require('documentation/streams/output/html.js');

function docsetFormat(options) {
  return combine([htmlOutput({
    hideSidebar: true,
    name: options.name,
    version: options.version
  }), docset({
    name: options.name,
    version: options.version
  })]);
}

module.exports = docsetFormat;
