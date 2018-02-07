var assert = require('assert');
var should = require('should');
var tipc = require('../../../');

var isServerFunction = function() {
	return true;
};

var isClientFunction = function() {
	return false;
};

describe('Check if ipc communication works', function() {
	describe('check send function', function() {
		it('check communication', function(done) {
			var ipc = tipc.ipcRenderer(isServerFunction);
			ipc.once('rendererTestReply', function(event, response) {
				response.should.be.type('object');
				response.should.have.ownProperty('test').equal(123);
				response.should.have.ownProperty('test2').equal(true);
				response.should.have.ownProperty('test3').equal('test');
				done();
			});

			ipc.send('rendererTest')
		});
	});
});