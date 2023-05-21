require("@nomicfoundation/hardhat-toolbox");
require('dotenv')
const PRIVATE_KEY = process.env.PRIVATE_KEY
const APP_URL = process.env.APP_URL
/** @type import('hardhat/config').HardhatUserConfig */

module.exports = {

  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: `https://eth-sepolia.g.alchemy.com/v2/G2mZbNMDezU55rm8RcRWgLLkjwPkO5gh`,
      accounts: [`715bc7236c3055d52f15fb9ce99cc5d70862805b30d10e04c13b303eb62c3e56`]
    }
  }
};
