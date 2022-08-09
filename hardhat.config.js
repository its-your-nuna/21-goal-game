require('@nomiclabs/hardhat-waffle');
require("dotenv").config({ path: ".env" });

module.exports = {
  solidity: '0.8.4',
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  devtool: 'source-map',
  networks: {
    rinkeby: {
      chainId: 4,
      url: process.env.QUICKNODE_API_KEY_URL,
      accounts: [process.env.RINKEBY_PRIVATE_KEY],
    },
    // mainnet: {
    //   chainId: 1,
    //   url: process.env.PROD_QUICKNODE_KEY,
    //   accounts: [process.env.PRIVATE_KEY],
    // },
  },
};
/*
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
  devtool: 'source-map',
};*/