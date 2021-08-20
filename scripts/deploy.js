const hre = require("hardhat");

async function main() {
  const PokeMart = await hre.ethers.getContractFactory("PokeMart");
  const PokeMart = await PokeMart.deploy();
  await PokeMart.deployed();
  console.log("PokeMart deployed to:", PokeMart.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(PokeMart.address);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });