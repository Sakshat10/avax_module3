# MyToken Contract

The `MyToken` contract is an ERC-20 compatible token contract implemented in Solidity. It allows for the creation of a custom token with a specified name, symbol, and initial total supply. The contract includes functionalities such as minting new tokens, transferring tokens between addresses, and burning tokens.

## Contract Details

### Variables

- `name` (string): The name of the token.
- `symbol` (string): The symbol of the token.
- `totalSupply` (uint256): The total supply of tokens in circulation.
- `balanceOf` (mapping): A mapping that tracks the token balance of each address.

### Events

- `Transfer` event: Fired when tokens are transferred from one address to another.
- `Burn` event: Fired when tokens are burned (destroyed).

### Modifiers

- `onlyOwner`: A modifier that restricts certain functions to be executed only by the contract owner.

### Constructor

- `constructor`: Initializes the contract by setting the token name, symbol, total supply, and assigning the total supply to the contract owner.

### Functions

- `mint`: Mints new tokens and adds them to the specified address. This function can only be called by the contract owner.
- `transfer`: Transfers tokens from the caller's address to the specified address.
- `burn`: Burns (destroys) a specified amount of tokens from the caller's address.

## `transferFrom` Function

The `transferFrom` function allows a designated spender to transfer tokens from the specified `from` address to the `to` address.

### Signature

```solidity
function transferFrom(address from, address to, uint256 amount) public


## License

The `MyToken` contract is licensed under the MIT license.
