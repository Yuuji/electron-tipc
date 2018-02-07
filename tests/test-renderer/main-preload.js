var tipc = require('../../');

var isServerFunction = function() {
	return true;
};

var ipc = tipc.ipcMain(isServerFunction);

ipc.on('rendererTest', function(event) {
	event.sender.send('rendererTestReply', {
		test: 123,
		test2: true,
		test3: 'test'
	});
});