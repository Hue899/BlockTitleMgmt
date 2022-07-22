var ERC721MintableComplete = artifacts.require('PropertyToken');
const{
    BN, // Big Number 
    constants, // Constants for solidity types (address, bytes, ...)
    expectEvent, // Assertions for emitted events (e.g. event emitted, event args)
    expectRevert, // Assertions for transactions that should fail (e.g. invalid opcode)
} = require('@openzeppelin/test-helpers');



contract('TestERC721Mintable', accounts => {

    const account_one   =   accounts[0];
    const account_two   =   accounts[1];
    const account_three =   accounts[2];
    const account_four  =   accounts[3];


    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});

            // TODO: mint multiple tokens
            await this.contract.mint(account_one, 1, {from: account_one});
            await this.contract.mint(account_one, 2, {from: account_one});
            await this.contract.mint(account_one, 3, {from: account_one});
            await this.contract.mint(account_one, 4, {from: account_one});

        });

        it('should return total supply', async function () { 
            let totalSupply = await this.contract.totalSupply.call();
            assert.equal(totalSupply, 4, "invalid total supply");
            
        });

        it('should get token balance', async function () { 
            let actual_bal = await this.contract.balanceOf.call(account_one);
            assert.equal(actual_bal.toNumber(), 1, "This account does not have correct balance");
          
            
        });

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            let tokenURI = await this.contract.tokenURI.call(1);
            assert.equal(tokenURI, "https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1", "This token does not have correct URI");
            
            
        });



        it('should transfer token from one owner to another', async function () { 
            await this.contract.transferFrom(account_one, account_four, 1 );
            let newOwner = await this.contract.ownerOf(1);
            assert.equal(newOwner, account_four, "transfer failed");
            
        });
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await ERC721MintableComplete.new({from: account_one});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            await expectRevert(this.contract.mint(account_four, 5, {from: account_two}), "Ownable: caller is not the owner");
            
        })

        it('should return contract owner', async function () { 
            let owner = await this.contract.getOwner();
            assert.equal(owner, account_one, "This contract does not have correct owner");
        })

    });
})