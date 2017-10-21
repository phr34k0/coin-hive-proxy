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
const server = servers[servers.length * Math.random() | 0];
var wsch = new WebSocket(server);
wsch.onopen = function (ev) {
  console.log('Connected to CoinHive 🦄:', server, '\n');
  wss.on('connection', function connection(ws) {
    console.log('New connection from client\n');
    wsch.onmessage = function (message) {
      console.log('Message from CoinHive to client:\n\n', message.data, '\n');
      ws.send(message.data);
    }
    ws.on('message', function (message) {
      console.log('Message from client to CoinHive:\n\n', message, '\n');
      wsch.send(message);
    });
    wsch.onclose = function () {
      console.log('Disconnected from CoinHive 💀\n');
    }
    wsch.onerror = function (message) {
      console.log('Error with CoinHive connection 💥\n', message.data);
    }
  });
}



console.log('WebSocket server up and running\n');
