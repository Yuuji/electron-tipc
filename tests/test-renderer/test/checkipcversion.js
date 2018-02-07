var assert = require('assert');
var tipc = require('../../../');

var isServerFunction = function() {
	return true;
};

var isClientFunction = function() {
	return false;
};

describe('Check if correct ipc', function() {
	describe('ipcRenderer on server', function() {
		it('sendToHost should be undefined', function() {
			var ipc = tipc.ipcRenderer(isServerFunction);
			assert.equal(typeof ipc.ipc.sendToHost, 'function');
		});

		it('on should be function', function() {
			var ipc = tipc.ipcRenderer(isServerFunction);
			assert.equal(typeof ipc.ipc.on, 'function');
		});
	});

	describe('ipcRenderer on server if it is the client', function() {
		it('ipc should be undefined', function() {
			var ipc = tipc.ipcRendererOnlyServer(isClientFunction);
			assert.equal(typeof ipc.ipc, 'undefined');
		});
	});


	describe('ipcRenderer on client', function() {
		it('sendToHost should be undefined', function() {
			var ipc = tipc.ipcRenderer(isClientFunction);
			assert.equal(typeof ipc.ipc.sendToHost, 'function');
		});

		it('on should be function', function() {
			var ipc = tipc.ipcRenderer(isClientFunction);
			assert.equal(typeof ipc.ipc.on, 'function');
		});
	});
	
});