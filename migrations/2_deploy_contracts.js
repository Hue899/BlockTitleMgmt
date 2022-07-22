// migrating the appropriate contracts
var ERC721MintableComplete = artifacts.require('ERC721Mintable');
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier.sol");

module.exports = function(deployer) {
  deployer.deploy(ERC721MintableComplete)
  deployer.deploy(SolnSquareVerifier);
};
