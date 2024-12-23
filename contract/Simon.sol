// SPDX-License-Identifier: MIT
pragma solidity ^0.8.23;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract SimonStakeGame {
    address public memeCoinAddress;
    mapping(address => uint256) public playerStake;
    address public owner;
    uint256 public constant ENTRY_FEE = 1 * 10**18;

    constructor(address _memeCoinAddress) {
        memeCoinAddress = _memeCoinAddress;
        owner = msg.sender;
    }

    function startGame() external {
        require(playerStake[msg.sender] == 0, "Game already in progress.");
        require(
            IERC20(memeCoinAddress).transferFrom(msg.sender, address(this), ENTRY_FEE),
            "Failed to stake 10 Meme Coins."
        );
        playerStake[msg.sender] = 1e18;
    }

    function advanceLevel(bool stakeMore) external {
        uint256 currentStake = playerStake[msg.sender];
        require(currentStake > 0, "No active game found.");
        
        uint256 newStake = currentStake * 2;

        if (stakeMore) {
            require(
                IERC20(memeCoinAddress).transferFrom(msg.sender, address(this), currentStake),
                "Failed to stake additional Meme Coins."
            );
            playerStake[msg.sender] = newStake;
        } else {
            uint256 balance = IERC20(memeCoinAddress).balanceOf(address(this));
            require(balance >= currentStake, "Contract does not have enough MemeCoins to pay out.");
            require(
                IERC20(memeCoinAddress).transfer(msg.sender, currentStake),
                "Failed to withdraw winnings."
            );
            playerStake[msg.sender] = 0;
        }
    }

    function withdrawUnstaked() external {
        uint256 currentStake = playerStake[msg.sender];
        require(currentStake > 0, "No active stake to withdraw.");
        playerStake[msg.sender] = 0;
        require(
            IERC20(memeCoinAddress).transfer(msg.sender, currentStake),
            "Failed to withdraw stake."
        );
    }

    function resetGame() external {
        uint256 currentStake = playerStake[msg.sender];
        require(currentStake > 0, "No active game to reset.");
        playerStake[msg.sender] = 0;
        require(
            IERC20(memeCoinAddress).transfer(msg.sender, currentStake),
            "Failed to return staked amount."
        );
    }
}
