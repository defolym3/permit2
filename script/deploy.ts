import { ethers } from "hardhat";

async function main() {
  const signer = (await ethers.getSigners())[0];

  const Permit2 = await ethers.getContractFactory("Permit2", signer);
  const instance = await Permit2.deploy();
  await instance.deployed();
  console.log(`Permit2 deployed at: ${instance.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
