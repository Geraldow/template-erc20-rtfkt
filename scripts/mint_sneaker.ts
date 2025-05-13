import { ethers } from "hardhat";

async function main() {
    const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
    const [deployer] = await ethers.getSigners();

    const MySimpleNFT = await ethers.getContractFactory("MySimpleNFT");
    const contract = MySimpleNFT.attach(contractAddress);

    // Mint a sneaker NFT with its metadata URI
    await contract.mintItem(deployer.address, "https://your-server.com/metadata/sneaker1.json");
    console.log("Sneaker NFT minted!");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});