async function main() {
  const [deployer] = await ethers.getSigners();

  console.log("Deploying contracts with the account:", deployer.address);
  console.log("Account balance:", (await deployer.getBalance()).toString());
  
  // Get the ContractFactories and Signers here.
  const NFT = await ethers.getContractFactory("NFT");
  const Marketplace = await ethers.getContractFactory("Marketplace");

  // deploy contracts
  const marketplace = await Marketplace.deploy(1);
  // await marketplace.deployed();
  // console.log("Marketplace contract deployed to:", marketplace.address);

  const nft = await NFT.deploy();
  // await nft.deployed();
  // console.log("NFT contract deployed to:", nft.address);

  // Save copies of each contracts abi and address to the frontend.
  saveFrontendFiles(marketplace , "Marketplace");
  saveFrontendFiles(nft , "NFT");
}

function saveFrontendFiles(contract, name) {
 console.log(contract.address)
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });