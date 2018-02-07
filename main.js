var ipc = function(isServerFunction, onlyIfServer, isRenderer) {
	this.serverMode = isServerFunction();
	this.onlyIfServer = onlyIfServer;
	this.justDummyFunctions = false;
	this.ipc;

	if (this.onlyIfServer && !this.serverMode) {
		this.justDummyFunctions = true;
	} else if (isRenderer) {
		this.ipc = require('electron').ipcRenderer;
	} else {
		this.ipc = require('electron').ipcMain;
	}
}

ipc.prototype.on = function() {
	if (this.justDummyFunctions) {
		return;
	}

	this.ipc.on.apply(this.ipc, arguments);
};

ipc.prototype.once = function() {
	if (this.justDummyFunctions) {
		return;
	}

	this.ipc.once.apply(this.ipc, arguments);
};


ipc.prototype.removeListener = function() {
	if (this.justDummyFunctions) {
		return;
	}

	this.ipc.removeListener.apply(this.ipc, arguments);
};

ipc.prototype.removeAllListeners = function() {
	if (this.justDummyFunctions) {
		return;
	}

	this.ipc.removeAllListeners.apply(this.ipc, arguments);
};

ipc.prototype.send = function() {
	if (this.justDummyFunctions) {
		return;
	}

	this.ipc.send.apply(this.ipc, arguments);
};


module.exports = {
	ipcMain: function(isServerFunction) {
		return new ipc(isServerFunction, false, false);
	},
	ipcMainOnlyServer: function(isServerFunction) {
		return new ipc(isServerFunction, true, false);
	},
	ipcRenderer: function(isServerFunction) {
		return new ipc(isServerFunction, false, true);
	},
	ipcRendererOnlyServer: function(isServerFunction) {
		return new ipc(isServerFunction, true, true);
	}
}