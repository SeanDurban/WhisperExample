var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/rEAnHU4M7phvJSOkBu3T"));
var shh = web3.shh;
var appName = "My silly app!";
var myName = "Gav Would";
//var myIdentity = web3.shh.newIdentity();
var myIdentity =0x000011
web3.shh.post({
  "from": myIdentity,
  "topics": [ web3.utils.fromAscii(appName) ],
  "payload": [ web3.utils.fromAscii(myName), web3.utils.fromAscii("What is your name?") ],
  "ttl": 100,
  "priority": 1000
});

var replyWatch = web3.shh.subscribe("messages",{
  "topics": [ web3.utils.fromAscii(appName), myIdentity ],
  "to": myIdentity
}, function(err,m,sub) {
  console.log(m);
});
// could be "topic": [ web3.fromAscii(appName), null ] if we wanted to filter all such
// messages for this app, but we'd be unable to read the contents.

/*
var broadcastWatch = shh.watch({ "topic": [ web3.fromAscii(appName) ] });
broadcastWatch.arrived(function(m)
{
  if (m.from != myIdentity)
  {
    // new message m: someone's asking for our name. Let's tell them.
    var broadcaster = web3.toAscii(m.payload).substr(0, 32);
    console.log("Broadcast from " + broadcaster + "; replying to tell them our name.");
    shh.post({
      "from": eth.key,
      "to": m.from,
      "topics": [ eth.fromAscii(appName), m.from ],
      "payload": [ eth.fromAscii(myName) ],
      "ttl": 2,
      "priority": 500
    });
  }
});
*/
