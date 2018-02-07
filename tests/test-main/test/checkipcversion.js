var assert = require('assert');
var tipc = require('../../../');

var isServerFunction = function() {
	return true;
};

var isClientFunction = function() {
	return false;
};

describe('Check if correct ipc', function() {
	describe('ipcMain on server', function() {
		it('sendToHost should be undefined', function() {
			var ipc = tipc.ipcMain(isServerFunction);
			assert.equal(typeof ipc.ipc.sendToHost, 'undefined');
		});

		it('on should be function', function() {
			var ipc = tipc.ipcMain(isServerFunction);
			assert.equal(typeof ipc.ipc.on, 'function');
		});
	});

	describe('ipcMain on server if it is the client', function() {
		it('ipc should be undefined', function() {
			var ipc = tipc.ipcMainOnlyServer(isClientFunction);
			assert.equal(typeof ipc.ipc, 'undefined');
		});
	});


	describe('ipcMain on client', function() {
		it('sendToHost should be undefined', function() {
			var ipc = tipc.ipcMain(isClientFunction);
			assert.equal(typeof ipc.ipc.sendToHost, 'undefined');
		});

		it('on should be function', function() {
			var ipc = tipc.ipcMain(isClientFunction);
			assert.equal(typeof ipc.ipc.on, 'function');
		});
	});
});