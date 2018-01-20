var Web3 = require('web3');
var sleep = require('sleep');
//var web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));
var web3 = new Web3(new Web3.providers.WebsocketProvider("ws://localhost:8545"));
var shh  =web3.shh;
var identities = [];
var subscription = null;


Promise.all([
    web3.shh.newSymKey().then((id) => {identities.push(id);}),
    web3.shh.newKeyPair().then((id) => {identities.push(id);})

]).then(function() {
  console.log('Keys created');
  web3.shh.subscribe('messages', {
      symKeyID: identities[0],
      topics: ['0xffddaa11']
  }, function(error, message, subscription){
      console.log('e', error);
      console.log('m:', message);
      }
  );

}).then(function() {
  console.log('subscribed to messages');
    web3.shh.post({
        symKeyID: identities[0], // encrypts using the sym key ID
        sig: identities[1], // signs the message using the keyPair ID
        ttl: 30,
        topic: '0xffaadd11',
        payload: '0xffffffdddddd1122',
        powTime: 5,
        powTarget: 0.9
    })
}).then(() => {
//  sleep.sleep(100); //This is just temporary to see if message comes through
});
