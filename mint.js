const HDWalletProvider = require("truffle-hdwallet-provider");
const web3 = require("web3");
const MNEMONIC = "pony false mouse modify dutch version sausage point step pumpkin coast skill";
const INFURA_KEY = "efc3bad43329c4048971c98879e1b9819";
const CONTRACT_ADDRESS = "00x5B38Da6a701c568545dCfcB03FcB875f56beddC4";
const OWNER_ADDRESS = "0x36E879673d8D7466E4324268ae3C69C95Ab4E674";
const NETWORK = "rinkeby";
const contract = require('../build/contracts/SolnSquareVerifier.json');
const ABI = contract.abi;
async function main() {
    console.log("start main");
    const provider = new HDWalletProvider(MNEMONIC, `https://${NETWORK}.infura.io/v3/${INFURA_KEY}`)
    const web3Instance = new web3(provider)
    console.log("finished set provider ");
    if (CONTRACT_ADDRESS) {
        //check abi and address
        console.log("CONTRACT_ADDRESS :" + CONTRACT_ADDRESS);
        console.log("ABI :" + ABI);
        const token = new web3Instance.eth.Contract(ABI, CONTRACT_ADDRESS, { gasLimit: "4500000" })
        const zokratesProof =require("../../zokrates/code/square/proof.json");
      
        console.log("zokratesProof :" + JSON.stringify(zokratesProof.proof.a));
       
        try {
            const tokenId = 1;           
            console.log("OWNER_ADDRESS "+ OWNER_ADDRESS + "\n");           
            let tx2 = await token.methods
            //.mint(zokratesProof.proof.a,zokratesProof.proof.b,zokratesProof.proof.c,zokratesProof.proof.inputs,OWNER_ADDRESS, tokenId)
            .mint(OWNER_ADDRESS,1)
            .send({ from: OWNER_ADDRESS });
            
            console.log("Minted item. Transaction: " + tx2.transactionHash);
        } catch (e) {
            console.log("error into minted function " + e);
        }
        //}
        // mint token without proof
        /*
        try {
        const tokenId = 2;
        console.log("OWNER_ADDRESS " + OWNER_ADDRESS + "\n");
        let tx3 = await token.methods
            .mint(OWNER_ADDRESS, tokenId)
            .send({ from: OWNER_ADDRESS });
        console.log("Minted item. Transaction: " + tx3.transactionHash);
        } catch (e) {
        console.log("error into minted function " + e);
        }
        // mint to 10 token without proof
        for(var countMint = 3; countMint<=10; countMint++){
        try {
            const tokenId = countMint;
            console.log("OWNER_ADDRESS " + OWNER_ADDRESS + "\n");
            let tx = await token.methods
            .mint(
                OWNER_ADDRESS, 
                tokenId)
            .send({ from: OWNER_ADDRESS });
            console.log("Minted item. Transaction: " + tx.transactionHash);
        } catch (e) {
            console.log("error into minted function " + e);
        }
        
        }
        */
    }
}   
main()