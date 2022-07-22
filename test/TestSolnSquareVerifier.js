const SolnSquareVerifier = artifacts.require('./SolnSquareVerifier.sol');
const Verifier = artifacts.require('./Verifier.sol');
const {proof, inputs} = require('./proof');



contract('SolnSquareVerifier', accounts => {
        beforeEach(async () => {
            this.verifier = await Verifier.new();
            this.contract = await SolnSquareVerifier.new(this.verifier.address);
        })  



it('Test if a new solution can be added for contract - SolnSquareVerifier', async () => {
await this.contract.addSolution(accounts[1], 1);
let events = await this.contract.getPastEvents('SolutionAdded');
assert.equal(events.length, 1);
});


it('Test if an ERC721 token can be minted for contract - SolnSquareVerifier', async () => {
    //const tokenId = 1902;
    await this.contract.mintNFT(tokenId, Proof1.proof, Proof1.inputs);
    let data = (await this.contract.getPastEvents('Transfer'))[1].returnValues;
    let totalSupply = await this.contract.totalSupply();

    assert.equal(data.tokenId, tokenId.toString());
    assert.equal(data.to, accounts[1]);
    assert.equal(totalSupply, 1);

    })
});

