require("@nomicfoundation/hardhat-toolbox");
const {vars} = require("hardhat/config")
const CELOSCAN_API_KEY= vars.get("CELOSCAN_API_KEY")
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.28",
  defaultNetwork: "hardhat",
  
  networks:{
    'alfajores':{
      url: "https://alfajores-forno.celo-testnet.org",
      accounts:vars.has("PRIVATE_KEY")  ? [vars.get("PRIVATE_KEY")] :[],
      chainId: 44787
    }
  },

   etherscan: {
        apiKey: {
            alfajores: "<CELOSCAN_API_KEY>",
        },
        customChains: [
            {
                network: "alfajores",
                chainId: 44787,
                urls: {
                    apiURL: "https://api-alfajores.celoscan.io/api",
                    browserURL: "https://alfajores.celoscan.io",
                },
            },
        ]
   }

};
