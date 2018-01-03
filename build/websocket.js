var WebSocketServer = require('ws').Server
	wss = new WebSocketServer({
		port: 8088,
		verifyClient: socketVerify
	})

function socketVerify ( info ) {
	console.log(info.orign);
	console.log(info.req.t)
	console.log(info.secure)
	return true
}

wss.broadcast = function broadcast ( s, ws) {
	wss.clients.forEach(function each (client){
		if ( s == 1 ) {
			client.send(ws.name + ':' + ws.msg)
		} else {
			client.send(ws + 'exit web chat')
		}
	})
}

wss.on('connection', function (ws) {
	console.log('在线人数：' + wss.clients.length);
	ws.send('你是第' + wss.clients.length + '位')
	ws.on('message', function (jsonStr, flags) {
		var obj = eval('(' + jsonStr + ')')
		this.user = obj
		if (typeof this.user.msg != 'undefined') {
			wss.broadcast(1, obj)
		}
	})
	ws.on('close', function (close) {
		try{
			wss.broadcast(0, this.user.name)
		} catch (e) {
			console.log('刷新页面了');
		}
	})
})