const hre = require("hardhat");

async function main() {
  const PokeMart = await hre.ethers.getContractFactory("PokeMart");
  const pokeMart = await PokeMart.deploy();
  await pokeMart.deployed();
  console.log("PokeMart deployed to:", pokeMart.address);

  const NFT = await hre.ethers.getContractFactory("NFT");
  const nft = await NFT.deploy(pokeMart.address);
  await nft.deployed();
  console.log("nft deployed to:", nft.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });