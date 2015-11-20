var express = require('express'),
	app		= express(),
	http	= require('http'),
	httpServer = http.Server(app),
	webSocketer = require('socket.io')(httpServer),
	port = process.env.PORT || 3000

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index.html')
})

httpServer.listen(port, function() {
	console.log('listening on port', port)
})