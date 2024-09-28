import * as dotenv from "dotenv";
import "hardhat-typechain";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-etherscan";
import "@nomicfoundation/hardhat-foundry";
import { HardhatUserConfig } from "hardhat/config";

dotenv.config();

const accounts = process.env.DEV_KEY !== undefined ? [process.env.DEV_KEY] : [];

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
      viaIR: true,
      metadata: {
        bytecodeHash: "none",
      },
    },
  },
  paths: {
    sources: "./src",
  },
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
    arbitrum: {
      url: `https://arbitrum-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    optimismKovan: {
      url: `https://optimism-kovan.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    optimism: {
      url: `https://optimism-mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
    },
    base: {
      url: process.env.BASE_RPC || "",
      accounts,
      chainId: 8453,
      // gas: 500000,
      // gasPrice: 100,
    },
    baseGoerli: {
      url: process.env.BASE_GOERLI_RPC,
      accounts,
      chainId: 84531,
      // gas: 500000,
      // gasPrice: 100,
    },
    scroll: {
      url: process.env.SCROLL_RPC,
      accounts,
      chainId: 534352,
    },
    scrollSepolia: {
      url: process.env.SCROLL_SEPOLIA_RPC,
      accounts,
      chainId: 534351,
    },
    mode: {
      url: process.env.MODE_RPC,
      accounts,
      chainId: 34443,
    },
    modeTestnet: {
      url: process.env.MODE_TESTNET_RPC,
      accounts,
      chainId: 919,
    },
  },
  etherscan: {
    apiKey: {
      scrollSepolia: "abc",
      scroll: process.env.SCROLL_SCAN_API_KEY || "",
      mode: "mode",
    },
    customChains: [
      {
        network: "scrollSepolia",
        chainId: 534351,
        urls: {
          apiURL: "https://sepolia-blockscout.scroll.io/api",
          browserURL: "https://sepolia-blockscout.scroll.io/",
        },
      },
      {
        network: "scroll",
        chainId: 534352,
        urls: {
          apiURL: "https://api.scrollscan.com/api",
          browserURL: "https://scrollscan.com/",
        },
      },
      {
        network: "sepolia",
        chainId: 11155111,
        urls: {
          apiURL: "https://ethereum-sepolia-rpc.publicnode.com",
          browserURL: "https://sepolia.etherscan.io/",
        },
      },
      {
        network: "kairos",
        chainId: 1001,
        urls: {
          apiURL: "https://public-en.kairos.node.kaia.io",
          browserURL: "https://baobab.klaytnscope.com/",
        },
      },
      {
        network: "mode",
        chainId: 34443,
        urls: {
          apiURL: "https://api.routescan.io/v2/network/mainnet/evm/34443/etherscan",
          browserURL: "https://modescan.io",
        },
      },
    ],
  },
};

export default config;
