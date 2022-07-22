// SPDX-License-Identifier: MIT
pragma solidity >= 0.5.2;



import "./ERC721Mintable.sol";
import './verifier.sol';

interface ZokVerifier { 
    struct Proof {
        Pairing.G1Point a;
        Pairing.G2Point b;
        Pairing.G1Point c;
    }

    function verifyTx(Proof calldata proof, uint256[2] calldata input)
        external
        view
        returns (bool r);
}

contract SolnSquareVerifier is PropertyToken {
    ZokVerifier verifier;

    constructor (address verifierAddress) PropertyToken() public{ 
        verifier = ZokVerifier(verifierAddress);
    }

    struct Solution {
        address solver;
        uint256 index;
        
    }


    Solution[] solutions;

    //  define a mapping to store unique solutions submitted
    mapping(uint256=> Solution) solutionMap;

    event SolutionAdded(address solver, uint256 index);


    function addSolution(address _solver, uint256 _tokenId) public {
        solutions.push(Solution(_solver, _tokenId));
        solutionMap[_tokenId] = Solution(_solver, _tokenId);
    
        emit SolutionAdded(_solver, _tokenId);
   
    }

     struct Proof {
        uint256[2] a;
        uint256[2][2] b;
        uint256[2] c;
    }

    
    function mintNFT(
        address _to,
        uint256 tokenId,
        ZokVerifier.Proof memory proof,
        uint256[2] memory input) public {
        

        //  - make sure the solution is unique (has not been used before)
        require(
            solutionMap[tokenId].solver == address(1),
            "Solution is not unique."
        );
        // mint new NFT only after the solution has been verified
        require(
            verifier.verifyTx(proof, input),
            "Verfication Failed. Cant mint new token."
        );

        addSolution(msg.sender, tokenId);
        _mint(msg.sender, tokenId);
    } 
} 






























/*interface ZokVerifier {
    struct Proof {
        Pairing.G1Point a;
        Pairing.G2Point b;
        Pairing.G1Point c;
    }

    function verifyTx(Proof calldata proof, uint256[2] calldata input)
        external
        view
        returns (bool r);
}


contract SolSquareVerifier is PropertyToken {    //contract inherits from Verifier and PropertyToken
    ZokVerifier private verifierContract;
    struct Solution {   // define a solutions struct that can hold an index & an address
        uint256 token_id;
        address addr;
        bytes32 index;
        bool isAdded;
}

    

Solution[]  solutions; // define a solutions array that can hold up to 10 solutions


mapping(uint256 => Solution) solutionMap;    // define a mapping of uint256 to Solution

mapping(bytes32 => bool) private solutionIndexMap;    // define a mapping of bytes32 to bool



event SolutionAdded(bytes32 key, address addr, uint256 token_id); // an event to emit when a solution is added

constructor (address verifierAddress, string memory name, string memory symbol)
    public{
    PropertyToken(name, symbol);
        verifierContract = ZokVerifier(verifierAddress);
    }



function addSolution(     //  a function to add the solutions to the array and emit the event
        uint256 token_id, 
        address addr, 
        uint256[2] memory a,
        uint256[2][2] memory b,
        uint256[2] memory c,
        uint256[2] memory input)
         public {
            bytes32 generatedKey= generateKey(a, b, c, input); // generate the key for the solution
            require(!solutionIndexMap[generatedKey], "Solution already exists"); 
            bool isProofValid = verifyTx(a, b, c, input); // verify the proof
            require(isProofValid, "Proof is not valid");

            Solution memory solutionX = Solution({  // create a new solution struct
                isAdded: true,
                addr: addr,
                index: generatedKey,
                token_id: token_id
            });

            solutionMap[token_id] = solutionX;
            solutionIndexMap[generatedKey] = true;
            emit SolutionAdded(generatedKey, addr, token_id);  

}


function generateKey(       
    uint256[2] memory a, 
    uint256[2][2] memory b,
    uint256[2] memory c,
    uint256[2] memory input) internal view returns (bytes32) {
       return keccak256(abi.encodePacked(a, b, c, input));
}


                                                                                      
function mintNFT(address to, uint256 tokenId) public returns (bool){    
    
       return super.mintNFT(to, tokenId);

    } 
    
}  */
        

  


























