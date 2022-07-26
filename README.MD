
# Blockchain Title Managment
This is a decentralized real estate marketplace offering fractional tokenized ownership of real estate. zk-Snarks was used to create a verification system which proves ownership of title without revealing sensitive information about the property. 

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

### Steps to run tests

```
$ truffle test
```

or

```
$ npm test
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


![detestnet_forSale](https://user-images.githubusercontent.com/67720949/180366353-c943363b-98bd-4959-b860-f484d66fd032.png)


![propertytoken_purchase](https://user-images.githubusercontent.com/67720949/180366339-c855861d-1653-43ab-9394-525003af0909.png)


# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates](https://testnets.opensea.io/collection/decentralizedrealestate)


