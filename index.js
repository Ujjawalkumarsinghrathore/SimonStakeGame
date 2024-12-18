const contractAddress = "0x4DeFeddE452447272b6C8E0021771AC7d2B6aAC2";
const memeCoinAddress = "0xBfc3E43693040067F0497C8cf445c46681c451BB";
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "bool",
				"name": "stakeMore",
				"type": "bool"
			}
		],
		"name": "advanceLevel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "resetGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "startGame",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_memeCoinAddress",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [],
		"name": "withdrawUnstaked",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "memeCoinAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "playerStake",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

const memeCoinABI = [
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "allowance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientAllowance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "balance",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "needed",
				"type": "uint256"
			}
		],
		"name": "ERC20InsufficientBalance",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "approver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidApprover",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "receiver",
				"type": "address"
			}
		],
		"name": "ERC20InvalidReceiver",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSender",
		"type": "error"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "ERC20InvalidSpender",
		"type": "error"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "claimInitialTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	}
]


let web3;
let simonGameContract;
let userAccount;
let memeCoinContract;

window.onload = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        
        // Request access to user's Ethereum accounts
        await ethereum.request({ method: "eth_requestAccounts" });
        
        // Get the user's account address
        userAccount = (await web3.eth.getAccounts())[0];
        
        // Initialize the Simon Game contract
        simonGameContract = new web3.eth.Contract(contractABI, contractAddress);
        memeCoinContract = new web3.eth.Contract(memeCoinABI, memeCoinAddress);
        // Display connected status
        document.getElementById("message").textContent = "Connected to wallet.";
        
        // Update stats on load
        updateStats(); 
    } else {
        alert("Please install MetaMask.");
    }
};

// Initialize the MemeCoin contract


// Simon Game Variables
let sequence = [];
let userSequence = [];
let level = 0;


document.getElementById("claimTokens").addEventListener("click", async () => {
    try {
        await memeCoinContract.methods.claimInitialTokens().send({ from: userAccount });
        document.getElementById("message").textContent = "Successfully claimed 100 MemeCoins!";
    } catch (error) {
        document.getElementById("message").textContent = `Error: ${error.message}`;
    }
});
document.getElementById("startGame").addEventListener("click", async () => {
    try {
        await simonGameContract.methods.startGame().send({ from: userAccount });
        
        startSimonGame();
        document.getElementById("simonGrid").classList.remove("hidden");

        document.getElementById("advanceLevel").disabled = false;
        document.getElementById("withdraw").disabled = false;
        document.getElementById("message").textContent = `Level ${level} started! Coins staked.`;
        updateStats();
    } catch (error) {
        document.getElementById("message").textContent = `Error: ${error.message}`;
    }
});

document.getElementById("advanceLevel").addEventListener("click", async () => {
    try {
        await simonGameContract.methods.advanceLevel(true).send({ from: userAccount });
        updateStats();startSimonGame();
        document.getElementById("message").textContent = `Level ${level} started! Coins staked.`;
    } catch (error) {
        document.getElementById("message").textContent = `Error: ${error.message}`;
    }
});

document.getElementById("withdraw").addEventListener("click", async () => {
    try {
        // Call advanceLevel with false to withdraw winnings
        await simonGameContract.methods.advanceLevel(false).send({ from: userAccount });
        updateStats(); // Update stats to reflect withdrawal
        
        document.getElementById("message").textContent = "Winnings withdrawn! Game over.";
        document.getElementById("simonGrid").classList.add("hidden");
        document.getElementById("advanceLevel").disabled = true;
        document.getElementById("withdraw").disabled = true;

        // Reset game state
        sequence = [];
        userSequence = [];
        level = 0;
    } catch (error) {
        document.getElementById("message").textContent = `Error withdrawing: ${error.message}`;
    }
});

function startSimonGame() {
    level++;
    userSequence = [];
    sequence.push(randomColor());
    playSequence();
}

function randomColor() {
    const colors = ["red", "green", "blue", "yellow"];
    return colors[Math.floor(Math.random() * colors.length)];
}

function playSequence() {
    let index = 0;
    const interval = setInterval(() => {
        if (index < sequence.length) {
            flashButton(sequence[index]);
            index++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

function flashButton(color) {
    const button = document.getElementById(color);
    button.style.opacity = "1";
    setTimeout(() => {
        button.style.opacity = "0.5";
    }, 500);
}

document.querySelectorAll(".simon-button").forEach((button) => {
    button.addEventListener("click", (e) => {
        const color = e.target.id;
        userSequence.push(color);
        checkSequence();
    });
});

async function checkSequence() {
    const index = userSequence.length - 1;

    // Check if the user's input matches the sequence
    if (userSequence[index] !== sequence[index]) {
        document.getElementById("message").textContent = "Wrong sequence! Game over. Resetting the game...";

        try {
            // Call the resetGame function on the contract
            await simonGameContract.methods.resetGame().send({ from: userAccount });
            
            // Update stats and reset the UI
            updateStats();
            document.getElementById("simonGrid").classList.add("hidden");
            // document.getElementById("resetGame").classList.add("hidden");
            document.getElementById("advanceLevel").disabled = true;
            document.getElementById("withdraw").disabled = true;

            sequence = []; // Clear the Simon game sequence
            userSequence = []; // Clear the user's sequence
        } catch (error) {
            document.getElementById("message").textContent = `Error resetting the game: ${error.message}`;
        }

        return;
    }

    // If the user completes the sequence correctly
    if (userSequence.length === sequence.length) {
        document.getElementById("message").textContent = "Correct sequence! Advance to the next level.";
        document.getElementById("advanceLevel").disabled = false;
    }
}


async function updateStats() {
    try {
        // Fetch the user's MemeCoin balance from the MemeCoin contract
        const balance = await memeCoinContract.methods.balanceOf(userAccount).call();
        console.log('MemeCoin balance:', balance);  // Debug log
        document.getElementById("balance").textContent = `${web3.utils.fromWei(balance, 'ether')} MemeCoins`;

        // Fetch the user's current stake from the Simon game contract
        const stake = await simonGameContract.methods.playerStake(userAccount).call();
        console.log('Current Stake:', stake);  // Debug log
        document.getElementById("stake").textContent = `${web3.utils.fromWei(stake, 'ether')} MemeCoins`;

        // Calculate and display the potential winnings
        const winnings = stake * 2; // Next level doubles the stake
        document.getElementById("winnings").textContent = `${web3.utils.fromWei(winnings.toString(), 'ether')} MemeCoins`;
    } catch (error) {
        console.error("Error updating stats:", error);
    }
}
