import { HardhatUserConfig } from "hardhat/config"; // Esta línea causa el error si TS no encuentra 'hardhat/config'
import "@nomicfoundation/hardhat-toolbox";

const config: HardhatUserConfig = {
  solidity: "0.8.20", // Asegúrate que coincida con tu contrato
  networks: {
    hardhat: {}, // Red de prueba local por defecto
  },
};

export default config;