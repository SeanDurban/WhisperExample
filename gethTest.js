var Web3 = require('web3');
var web3 = new Web3( new Web3.providers.WebsocketProvider("ws://localhost:8545"));
web3.eth.subscribe('newBlockHeaders', function(error, result){
  if (!error){
    console.log(error);
  }
 }).on("data", function(blockHeader){
    // will return the block number.
   console.log(blockHeader.number);
});
