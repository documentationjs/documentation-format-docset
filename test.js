'use strict';

var test = require('tape'),
  docset = require('./');

test('docset', function (t) {
  t.ok(docset({ name: 'foo', version: 'bar'}));
  t.end();
});
