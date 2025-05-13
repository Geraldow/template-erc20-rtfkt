import { ethers } from "hardhat";

async function main() {
    const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
    const MySneakersAsNFT = await ethers.getContractFactory("MySneakersAsNFT");
    const contract = MySneakersAsNFT.attach(contractAddress);

    const owner = await contract.ownerOf(1);
    const uri = await contract.tokenURI(1);

    console.log("Owner of token 1:", owner);
    console.log("Metadata URI of token 1:", uri);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});