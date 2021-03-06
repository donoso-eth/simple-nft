//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "hardhat/console.sol";

//learn more: https://docs.openzeppelin.com/contracts/3.x/erc721

// GET LISTED ON OPENSEA: https://testnets.opensea.io/get-listed/step-two

contract SimpleNftContract is ERC721URIStorage, ERC721Enumerable, Ownable {
    using Counters for Counters.Counter;
    Counters.Counter public _tokenIds;
    
    constructor() ERC721("Simple NFT Contract", "SNC") {
        // _setBaseURI("https://ipfs.io/ipfs/");
    }

    function _beforeTokenTransfer(
        address from,
        address to,
        uint256 tokenId
    ) internal override(ERC721, ERC721Enumerable) {
        super._beforeTokenTransfer(from, to, tokenId);
    }

        function tokenURI(uint256 tokenId) public view override (ERC721,ERC721URIStorage) returns (string memory) {
        require(_exists(tokenId), "ERC721URIStorage: URI query for nonexistent token");


        return super.tokenURI(tokenId);
    }

    function supportsInterface(bytes4 interfaceId)
        public
        view
        virtual
        override(ERC721, ERC721Enumerable)
        returns (bool)
    {
        return  super.supportsInterface(interfaceId);
    }

    function _burn(uint256 tokenId)
        internal
        virtual
        override(ERC721, ERC721URIStorage)
    {
        super._burn(tokenId);

        // if (bytes(_tokenURIs[tokenId]).length != 0) {
        //     delete _tokenURIs[tokenId];
        // }
    }

    function mintItem(address to, string memory _tokenURI)
        public
        onlyOwner
        returns (uint256)
    {
        _tokenIds.increment();
        uint256 id = _tokenIds.current();
        _mint(to, id);
        _setTokenURI(id, _tokenURI);

        return id;
    }
}
