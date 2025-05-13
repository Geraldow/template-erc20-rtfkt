import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  const ContractFactory = await ethers.getContractFactory("MySneakersAsNFT");
  // Pasamos la dirección del desplegador como 'initialOwner' al constructor
  const contract = await ContractFactory.deploy(deployer.address);

  await contract.waitForDeployment();
  const contractAddress = await contract.getAddress();
  console.log("MySneakersAsNFT deployed to:", contractAddress);

  // --- Mintear un token de ejemplo ---
  const recipient = deployer.address; // Mintear al mismo desplegador
  const metadataURL = "https://your-json-metadata-url.com/1.json"; // ¡RECUERDA CAMBIAR ESTO!

  console.log(`Minting NFT to ${recipient} with URI ${metadataURL}...`);
  try {
    const tx = await contract.mintItem(recipient, metadataURL);
    await tx.wait();
    console.log("NFT Minted! Tx hash:", tx.hash);

    // Consultar la URI del token minteado (asumiendo ID 1)
    const uri = await contract.tokenURI(1);
    console.log("Token URI for ID 1:", uri);

  } catch (e) {
    console.error("Error minting NFT:", e);
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });