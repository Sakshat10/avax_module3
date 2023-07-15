const { ethers } = require("hardhat");

async function main() {
  // Compile the contract
  const Token = await ethers.getContractFactory("MyToken");

  // Deploy the contract
  console.log("Deploying Token contract...");
  const token = await Token.deploy("MyToken", "MTK", 10);

  // Wait for the contract deployment confirmation
  await token.waitForDeployment();

  console.log("Token contract deployed to:", token.target);
  // console.log("Contract owner:", await token.owner());
}

// Run the deployment script
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });