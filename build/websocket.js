const util = require('util')
const WebSocket = require('ws')
const wss = new WebSocket.Server({
		port: 8088,
		verifyClient: socketVerify
	})

function socketVerify ( info ) {
	//console.log('info:' + util.inspect(info));
	return true
}

wss.broadcast = function broadcast ( s, ws) {
	wss.clients.forEach(function each (client){
		// 发送消息
		if ( s == 1 ) {
			client.send(ws.name + ':' + ws.msg)
		} else {// 退出聊天室
			client.send(ws + 'exit web chat')
		}
	})
}

wss.on('connection', function (ws) {
	//console.log('在线人数：' + util.inspect(wss.clients));
	//ws.send('你是第' + util.inspect(wss.clients) + '位')
	ws.send('你是第1位')
})

wss.on('message', function (jsonStr, flags) {
	var obj = eval('(' + jsonStr + ')')
	this.user = obj
	if (typeof this.user.msg != 'undefined') {
		wss.broadcast(1, obj)
	}
})

wss.on('close', function (close) {
	try{
		wss.broadcast(0, this.user.name)
	} catch (e) {
		console.log('刷新页面了');
	}
})