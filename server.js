const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 1289 });
var servers = [
  "wss://jesus.goodolddownloads.com/01",
  "wss://jesus.goodolddownloads.com/02",
  "wss://jesus.goodolddownloads.com/03",
  "wss://jesus.goodolddownloads.com/04",
  "wss://jesus.goodolddownloads.com/05",
  "wss://jesus.goodolddownloads.com/06",
  "wss://jesus.goodolddownloads.com/07",
  "wss://jesus.goodolddownloads.com/08",
  "wss://jesus.goodolddownloads.com/09",
  "wss://jesus.goodolddownloads.com/09",
  "wss://jesus.goodolddownloads.com/10",
  "wss://jesus.goodolddownloads.com/11",
  "wss://jesus.goodolddownloads.com/12",
  "wss://jesus.goodolddownloads.com/13",
  "wss://jesus.goodolddownloads.com/14",
  "wss://jesus.goodolddownloads.com/15",
  "wss://jesus.goodolddownloads.com/16",
  "wss://jesus.goodolddownloads.com/17",
  "wss://jesus.goodolddownloads.com/18",
  "wss://jesus.goodolddownloads.com/19",
  "wss://jesus.goodolddownloads.com/20"
];
wss.on('connection', function connection(ws) {
  console.log('New connection from client\n');
  var chserver = servers[servers.length * Math.random() | 0];
  var chws = new WebSocket(chserver);
  chws.onmessage = function (message) {
    console.log('Message from ' + chserver + ' to client:\n\n', message.data, '\n');
    if (ws.readyState == ws.OPEN)
      ws.send(message.data);
    else {
      console.log('Close inactive/slow connection\n');
      chws.terminate();
      ws.terminate();
    }
  }
  ws.on('message', function (message) {
    console.log('Message from client to ' + chserver + ':\n\n', message, '\n');
    chws.onopen = function (ev) {
      console.log('Connected to ' + chserver + ' 🦄\n');
      chws.send(message);
    }
    if (chws.readyState == chws.OPEN)
      chws.send(message);
  });
  chws.onclose = function () {
    console.log('Disconnected from ' + chserver + ' 💀\n');
  }
  chws.onerror = function (message) {
    console.log('Error with ' + chserver + ' connection 💥\n', message.data);
  }
});

console.log('WebSocket server up and running\n');alkerjtlkdjfg
