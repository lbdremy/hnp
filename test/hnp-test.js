'use strict';

/**
 * Module dependencies
 */

var hnp = require('./../');
var mocha = require('mocha');
var assert = require('assert');

/**
 * Test suite
 */

describe('hnp', function () {
	var object = {
		a : {
			b : {
				c : {
					d : 1
				}
			}
		}
	};
	describe('(object, path) - with a null object given', function () {
		it('should return false', function () {
			assert.equal(hnp(null, 'a'), false);
		});
	})
	describe('(object, path) - with a single property path', function () {
		it('should have the property', function () {
			assert.equal(hnp(object, 'a'), true);
		});
	})
	describe('(object, path) - with a nested path', function () {
		it('should have the property', function () {
			assert.equal(hnp(object, 'a.b.c'), true);
		});
	})
	describe('(object, path) - with a single property path using bracket', function () {
		it('should have the property', function () {
			assert.equal(hnp(object, '["a"]'), true);
		});
	})
	describe('(object, path) - with a nested path using brackets', function () {
		it('should have the property', function () {
			assert.equal(hnp(object, '["a"]["b"]["c"]'), true);	
		});
	})
	describe('(object, path) - with a nested path using dot and brackets', function () {
		it('should have the property', function () {
			assert.equal(hnp(object, 'a["b"].c["d"]'), true);
		});
	});

	describe('(object, path) - with a single property path', function () {
		it('should not have the property', function () {
			assert.equal(hnp(object, 'f'), false);
		});
	})
	describe('(object, path) - with a nested path', function () {
		it('should not have the property', function () {
			assert.equal(hnp(object, 'a.b.f'), false);
		});
	})
	describe('(object, path) - with a single property path using bracket', function () {
		it('should not have the property', function () {
			assert.equal(hnp(object, '["f"]'), false);
		});
	})
	describe('(object, path) - with a nested path using brackets', function () {
		it('should not have the property', function () {
			assert.equal(hnp(object, '["a"]["b"]["f"]'), false);	
		});
	})
	describe('(object, path) - with a nested path using dot and brackets', function () {
		it('should not have the property', function () {
			assert.equal(hnp(object, 'a["b"].c["f"]'), false);
		});
	});
});