// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MySneakersAsNFT is ERC721URIStorage, Ownable {
    uint256 private _currentTokenId;

    constructor(address initialOwner)
        ERC721("My Sneakers #1 as NFT", "MSN")
        Ownable(initialOwner)
    {}

    function mintItem(address recipient, string memory metadataURI)
        public
        onlyOwner
    {
        _currentTokenId++;
        uint256 newItemId = _currentTokenId;

        _safeMint(recipient, newItemId);
        _setTokenURI(newItemId, metadataURI);
    }
}