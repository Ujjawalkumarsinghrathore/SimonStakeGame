const contractAddress = "0x8f20Ac76687d921cF3098cb1Db8f2F1ac3a15fdd";
const memeCoinAddress = "0xeF8B8538688770a1e4C6501021A1791bBb91d053";
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
		"inputs": [],
		"name": "withdrawUnstaked",
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
		"name": "ENTRY_FEE",
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
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "claimTokens",
		"outputs": [],
		"stateMutability": "nonpayable",
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
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mint",
		"outputs": [],
		"stateMutability": "nonpayable",
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
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
	}
]

let web3;
let simonGameContract;
let memeCoinContract;
let userAccount;
let stake=0;

// Simon Game Variables
let sequence = [];
let userSequence = [];
let level = 0;

window.onload = async () => {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);

        try {
            // Request wallet access
            await ethereum.request({ method: "eth_requestAccounts" });
            userAccount = (await web3.eth.getAccounts())[0];

            // Initialize contracts
            simonGameContract = new web3.eth.Contract(contractABI, contractAddress);
            memeCoinContract = new web3.eth.Contract(memeCoinABI, memeCoinAddress);

            document.getElementById("message").textContent = "Connected to wallet.";
            updateStats();
        } catch (error) {
            alert("Error connecting to wallet: " + error.message);
        }
    } else {
        alert("Please install MetaMask to use this application.");
    }
};

// Claim initial MemeCoins
document.getElementById("claimTokens").addEventListener("click", async () => {
    try {
        await memeCoinContract.methods.claimTokens(web3.utils.toWei("100", "ether")).send({ from: userAccount });
        document.getElementById("message").textContent = "Successfully claimed 100 MemeCoins!";
        updateStats();
    } catch (error) {
        document.getElementById("message").textContent = `Error: ${error.message}`;
    }
});

// Start a new Simon game
document.getElementById("startGame").addEventListener("click", async () => {
	stake=1e18;
    try {
		await memeCoinContract.methods.approve(contractAddress, 1e18).send({ from: userAccount });
        await simonGameContract.methods.startGame().send({ from: userAccount });

        level = 0;
        sequence = [];
        userSequence = [];
        startSimonGame();
        document.getElementById("simonGrid").classList.remove("hidden");
        toggleGameButtons(false);

        document.getElementById("message").textContent = `Game started! Level ${level} initiated.`;
        updateStats();
    } catch (error) {
        document.getElementById("message").textContent = `Error starting game: ${error.message}`;
    }
});

// Advance to the next level
document.getElementById("advanceLevel").addEventListener("click", async () => {
    try {
		await memeCoinContract.methods.approve(contractAddress, 50e18).send({ from: userAccount });
        await simonGameContract.methods.advanceLevel(true).send({ from: userAccount });

        startSimonGame();
        document.getElementById("message").textContent = `Advanced to level ${level}! Coins staked.`;
        updateStats();
    } catch (error) {
        document.getElementById("message").textContent = `Error advancing level: ${error.message}`;
    }
});

// Withdraw winnings and end the game
document.getElementById("withdraw").addEventListener("click", async () => {
    try {
        await simonGameContract.methods.advanceLevel(false).send({ from: userAccount });

        resetGameState();
        document.getElementById("message").textContent = "Winnings withdrawn! Game over.";
        updateStats();
    } catch (error) {
        document.getElementById("message").textContent = `Error withdrawing: ${error.message}`;
    }
});

// Core game logic
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

    if (userSequence[index] !== sequence[index]) {
        document.getElementById("message").textContent = "Wrong sequence! Game over.";

        try {
            await simonGameContract.methods.resetGame().send({ from: userAccount });
            resetGameState();
            updateStats();
        } catch (error) {
            document.getElementById("message").textContent = `Error resetting game: ${error.message}`;
        }

        return;
    }

    if (userSequence.length === sequence.length) {
        document.getElementById("message").textContent = "Correct sequence! Advance to the next level.";
        toggleGameButtons(false);
    }
}

// Utility functions
async function updateStats() {
    try {
        const balance = await memeCoinContract.methods.balanceOf(userAccount).call();
        document.getElementById("balance").textContent = `${web3.utils.fromWei(balance, 'ether')} MemeCoins`;

        const stake = await simonGameContract.methods.playerStake(userAccount).call();
        document.getElementById("stake").textContent = `${web3.utils.fromWei(stake, 'ether')} MemeCoins`;

        const winnings = stake * 2;
        document.getElementById("winnings").textContent = `${web3.utils.fromWei(winnings.toString(), 'ether')} MemeCoins`;
    } catch (error) {
        console.error("Error updating stats:", error);
    }
}

function toggleGameButtons(disable) {
    document.getElementById("advanceLevel").disabled = disable;
    document.getElementById("withdraw").disabled = disable;
}

function resetGameState() {
    sequence = [];
    userSequence = [];
    level = 0;
    document.getElementById("simonGrid").classList.add("hidden");
    toggleGameButtons(true);
}
