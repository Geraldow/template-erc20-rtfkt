// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AGYToken is ERC20, Ownable {

    address public platformAddress;
    event PaymentReleased(address indexed to, uint256 amount, string reason);

    constructor(uint256 initialSupply, address _platformAddress) ERC20("AgUnity Token", "AGY") Ownable(msg.sender) {
        require(_platformAddress != address(0), "Invalid platform address");
        platformAddress = _platformAddress;
        mint(msg.sender, initialSupply * (10 ** decimals()));
    }

    modifier onlyPlatform() {
        require(msg.sender == platformAddress, "Only the platform can execute this function");
        ;
    }

    function releasePayment(address to, uint256 amount, string calldata reason) external onlyPlatform {
        require(to != address(0), "Invalid address");
        _transfer(owner(), to, amount);
        emit PaymentReleased(to, amount, reason);
    }

    function updatePlatformAddress(address newPlatform) external onlyOwner {
        require(newPlatform != address(0), "Invalid address");
        platformAddress = newPlatform;
    }
}