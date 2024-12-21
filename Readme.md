# Simon Game with MemeCoin Integration

A fun and interactive Simon game built on the Mantle network, with players staking MemeCoins to advance levels and withdraw winnings. Players can interact with the contract via their Mantle address, and their progress is tracked on-chain.

## Features

- Players stake MemeCoins to start and advance in the game.
- The game supports multiple players simultaneously.
- Players can withdraw their winnings after completing levels.
- The smart contract ensures secure transactions and game logic.

## Contract Details

- **Contract Address**: `0x6B634BB83C02d3fdCB8dF6B87404cdea10B47bF3`
- **Network**: Mantle Sepolia Testnet

## Deployment

- **Contract Address**: [View on Explorer](https://sepolia.mantlescan.xyz/address/0x6B634BB83C02d3fdCB8dF6B87404cdea10B47bF3)
- **Coin Used**: MNT

## How It Works

- **Starting the Game**: Players start by staking MemeCoins. Each correct level advance doubles the stake.
- **Advancing Levels**: Players can advance to the next level by matching the sequence of colors. If they choose to stake more, their stakes are doubled.
- **Withdrawing**: Players can withdraw their winnings after completing any level by choosing to end the game. The MemeCoins are sent directly to their wallet.

## Smart Contract Functions

- `startGame()`: Starts a new game and initializes the player's state.
- `advanceLevel(bool stakeMore)`: Advances the level by either staking more MemeCoins or withdrawing the player's winnings.
- `withdrawUnstaked()`: Allows players to withdraw their initial stake if they choose to end the game early.

## How to Play

1. **Start the Game**: Click on the "Start Game" button to begin. A random color sequence will be shown to you.
2. **Advance Levels**: After successfully matching the sequence, click on "Advance Level" to move to the next level. Your stake doubles with each level.
3. **Withdraw**: If you want to end the game, click on "Withdraw" to receive your winnings.

## Interacting with the Contract

This project interacts with the Mantle blockchain through MetaMask or another Mantle-compatible wallet. Ensure your wallet is connected to the Mantle Sepolia Testnet before playing.

## Screenshots

<img width="1440" alt="Screenshot 2024-12-21 at 8 37 41 PM" src="https://github.com/user-attachments/assets/56018f78-9d75-4c25-adaf-dd4c60811318" />
<img width="1440" alt="Screenshot 2024-12-17 at 7 31 29 PM" src="https://github.com/user-attachments/assets/d1040ebe-eca4-4788-9a95-7556931f32d5" />



