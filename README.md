# WhisperExample
Test environment for the Web3 framework in Nodejs. Specifically experimenting with Whisper and shh API

## Requirements
Install all project dependencies.
```
npm install
```
Requires a Geth (Go Ethereum) node connected and synchronised to a blockchain. This node must be enabled with whisper and expose a WS API for usage with the Web3.
```
geth -rinkeby --fast --shh --ws --wsport 8545 --wsaddr 0.0.0.0 --wsorigins "*" --wsapi "eth,web3,shh,net"
```
