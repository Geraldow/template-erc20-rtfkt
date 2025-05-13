import { ethers } from "hardhat";
import * as fs from "fs";

async function main() {
    // Replace with your deployed contract address
    const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";
    const MySneakersAsNFT = await ethers.getContractFactory("MySneakersAsNFT");
    const contract = MySneakersAsNFT.attach(contractAddress);

    // Set how many tokens you want to export (e.g., 10)
    const totalTokens = 10;
    const nfts = [];

    for (let tokenId = 1; tokenId <= totalTokens; tokenId++) {
        try {
            const owner = await contract.ownerOf(tokenId);
            const uri = await contract.tokenURI(tokenId);
            nfts.push({ tokenId, owner, uri });
        } catch (e) {
            // Token does not exist
            break;
        }
    }

    fs.writeFileSync("exported_nfts.json", JSON.stringify(nfts, null, 2));
    console.log("NFT data exported to exported_nfts.json");
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});