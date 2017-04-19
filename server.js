const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const request = require('request');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/public/index.html');
});


http.listen(4000, function () {
    console.log('listening on *:4000');
});