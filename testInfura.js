var Web3 = require('web3');
var web3 = Web3.build(new HttpService("https://rinkeby.infura.io/rEAnHU4M7phvJSOkBu3T"));
var web3ClientVersion = web3.web3ClientVersion().send();
System.out.println(web3ClientVersion.getWeb3ClientVersion());
