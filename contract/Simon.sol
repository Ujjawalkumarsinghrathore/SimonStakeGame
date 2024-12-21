// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

interface IMemeCoin {
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function transfer(address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
}

contract SimonStakeGame {
    address public memeCoinAddress;
    mapping(address => uint256) public playerStake;
    address public owner;

    constructor(address _memeCoinAddress) {
        memeCoinAddress = _memeCoinAddress;
        owner = msg.sender;
    }

    function startGame() external {
        require(playerStake[msg.sender] == 0, "Game already in progress.");
        require(
            IMemeCoin(memeCoinAddress).transferFrom(msg.sender, address(this), 1e18),
            "Failed to stake 10 Meme Coins."
        );
        playerStake[msg.sender] = 1e18;
    }

    function advanceLevel(bool stakeMore) external {
        uint256 currentStake = playerStake[msg.sender];
        require(currentStake > 0, "No active game found.");
        
        uint256 newStake = currentStake * 2;

        if (stakeMore) {
            // Player chooses to stake more, so double the current stake
            IMemeCoin(memeCoinAddress).transferFrom(msg.sender, address(this), currentStake);
            playerStake[msg.sender] = newStake;
        } else {
            // Player chooses to withdraw winnings
            

            // Ensure the player has sufficient funds
            uint256 balance = IMemeCoin(memeCoinAddress).balanceOf(address(this));
            require(balance <= currentStake, "Contract does not have enough MemeCoins to pay out.");

            // Transfer the winnings (newStake)
            bool success = IMemeCoin(memeCoinAddress).transfer(msg.sender, currentStake);
            require(success, "Failed to withdraw winnings.");
            playerStake[msg.sender] = 0;
        }
    }


    function withdrawUnstaked() external {
        uint256 currentStake = playerStake[msg.sender];
        require(currentStake > 0, "No active stake to withdraw.");
        playerStake[msg.sender] = 0;
        require(
            IMemeCoin(memeCoinAddress).transfer(msg.sender, currentStake),
            "Failed to withdraw stake."
        );
    }
    function resetGame() external {
        require(playerStake[msg.sender] > 0, "No active game to reset.");
        
        uint256 stakedAmount = playerStake[msg.sender];
        playerStake[msg.sender] = 0; // Reset stake
        
        require(
            IMemeCoin(memeCoinAddress).transfer(msg.sender, stakedAmount),
            "Failed to return staked amount."
        );  
    }

}

