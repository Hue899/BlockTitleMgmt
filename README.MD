
# Blockchain Title Managment

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Node.js runtime environment is required.

### Installing

Install all required dependencies

```
$ npm install
```

Install truffle

```
$ npm install -g truffle
```

### Steps to run a local ethereum network, and deploy your token contract to this local network

1) Open a Terminal window, and make sure you are inside your project directory

2) Run the command `truffle develop` (to run a local ethereum network)

3) Use the command `compile` (to compile your solidity contract files)

4) Use the command `migrate --reset --network development` (to deploy your contract to the locally running ethereum network)

5) Use the command `test` (to unit tests the contract)

## Zocrates integrateion

__Zokrates__ is invoked in docker with the following command. Steps below have already been done, they are here just for documentation purpose.

Replace the ```<absolute path>``` with your path to the project.

```
../../../../zokrates compile -i square.code
```

```
../../../../zokrates setup
```

```
../../../../zokrates compute-witness 
```

```
../../../../zokrates generate-proof
```

```
../../../../zokrates export-verifier
```

## Rinkeby network

__Verifier__ contract address

```
0x5B38Da6a701c568545dCfcB03FcB875f56beddC4
```

__SolnSquareVerifier__ contract address

```
0xd9145CCE52D386f254917e481eB44e9943F39138
```



## OpenSea assets

[https://testnets.opensea.io/collection/detestnet](https://testnets.opensea.io/collection/detestnet)


![Detestnet Tokenized Property](https://github.com/hue899/BlockTitleMgmt.git/detestnet_forSale.png?raw=true)

![Property Purchase](https://github.com/hue899/BlockTitleMgmt.git/propertytoken_purchase.png?raw=true)



# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates](https://testnets.opensea.io/collection/decentralizedrealestate)


