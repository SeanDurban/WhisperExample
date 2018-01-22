var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.WebsocketProvider('ws://localhost:8545'));
var shh  =web3.shh;
var identities = [];
var subscription = null;
var symKeyID = null;
var signature = null;

Promise.all([
    web3.shh.generateSymKeyFromPassword('testingSymKey').then((id) => {symKeyID = id;}),
  //  web3.shh.newSymKey().then((id) => {identities.push(id);}),
    web3.shh.newKeyPair().then((id) => {identities.push(id);signature=id;})
]).then(function() {
  console.log('Keys created');
  var ts ='0xffddaa11';
  web3.shh.subscribe('messages', {
      symKeyID: symKeyID,
      topics: ['0xffddaa11', '0xafddaa11','0xbfddaa11']
  }).on('data', (res) => {
      console.log("Received: ", web3.utils.hexToAscii(res.payload));
  });
}).then(function() {
  console.log('subscribed to messages');
    web3.shh.post({
        symKeyID: symKeyID, // encrypts using the sym key ID
        sig: identities[1], // signs the message using the keyPair ID
        ttl: 20,
        topic: '0xbfddaa11',
        payload: web3.utils.asciiToHex('Hello World2!'),
        powTime: 3,
        powTarget: 0.5
    }, (err, res) => {
      if(err){
        console.log("err post: ",err);
      }
    })
});
