import { ethers } from "hardhat";

async function main() {
    // Replace with your deployed contract address from your local deployment
    const contractAddress = "0x1234567890abcdef1234567890abcdef12345678"; // <-- Use your real contract address here
    const [deployer] = await ethers.getSigners();

    const MySimpleNFT = await ethers.getContractFactory("MySimpleNFT");
    const contract = MySimpleNFT.attach(contractAddress);

    // Use the deployer's address for local testing
    await contract.mintItem(deployer.address, "https://your-metadata-uri.com/1.json");
    console.log("NFT minted to:", deployer.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});