const contractAddress = "0x0e2fbBA88C5E526f5160Af1b9Ad79a20130b2216";
const abiGB89ERC721 = JSON.parse('[{"inputs":[{"internalType":"address payable","name":"_burnerAddress","type":"address"},{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"burnerAddress","outputs":[{"internalType":"address payable","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"curves","outputs":[{"internalType":"uint160","name":"leftPart","type":"uint160"},{"internalType":"uint160","name":"rightPart","type":"uint160"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint160","name":"leftPart","type":"uint160"},{"internalType":"uint160","name":"rightPart","type":"uint160"}],"name":"mint","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"mintPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address payable","name":"_burnerAddress","type":"address"}],"name":"setBurnerAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_mintPrice","type":"uint256"}],"name":"setMintPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint160","name":"leftPart","type":"uint160"},{"internalType":"uint160","name":"rightPart","type":"uint160"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"updateScreen","outputs":[],"stateMutability":"nonpayable","type":"function"}]')

const price = 50000000000000000000n;
const initialSupply = 256;

let provider, signer;

const W = 22;
const H = 14;
let grid = [];
let leftCode = null;
let rightCode = null;

async function connectWallet() {
    window.ethereum
        .request({method: 'eth_requestAccounts'})
        .then(() => {
            provider = new ethers.providers.Web3Provider(window.ethereum);
            signer = provider.getSigner();

            provider.listAccounts().then((accounts) => {
                if (accounts.length > 0) {
                    $("#connectBtn").text('Wallet Connected').removeClass('btn-warning').addClass('btn-success');
                    onPageLoad();
                } else {
                    console.log("ERROR: Unable to retrieve accounts");
                }
            });
        })
        .catch((error) => {
            if (error.code === 4001) {
              // EIP-1193 userRejectedRequest error
              console.log('Please connect to Sparrow/MetaMask.');
            } else {
              console.error(error);
            }
        });
};

function updateTokensLeft() {
    contract = new ethers.Contract(contractAddress, abiGB89ERC721, signer)

    contract.totalSupply()
        .then((result) => {
            let nbLeft = initialSupply - parseInt(result);
            if (nbLeft > 0) {
                $(".tokens-left").text(`${nbLeft.toLocaleString('en-US')} tokens left`);
            } else {
                $(".tokens-left").text(`Sold out!`);
                $(".mint button").hide();
            }
        })
        .finally(_ => { setTimeout(updateTokensLeft, 3000); });
}

async function mintToken() {
    console.log(`Trying to buy one token.`)
    $(".status-message").text(`Minting...`);

    contract = new ethers.Contract(contractAddress, abiGB89ERC721, signer)
    try {
        const result = await contract.mint(leftCode, rightCode, { value: price })
        const receipt = await result.wait()

        if (receipt) {
            $(".status-message").html(`<i class="fa fa-check"></i> Congrats!`);
        } else {
            $(".status-message").html(`<i class="fa fa-exclamation-circle"></i> Mint operation failed`);
        }
    } catch(err) {
        if (err.code === 4001) {
            // EIP-1193 userRejectedRequest error
            console.log('Please connect to Sparrow/MetaMask.');
            $(".status-message").text(`Mint operation cancelled`);
          } else {
            console.error(error);
          }
    }
}

// Reload
function onPageLoad() {
    if (!window.ethereum) {
        $("#connectBtn").text('Sparrow or Metamask not installed').removeClass('btn-warning').addClass('btn-danger');
        return;
    }
    if (!provider) {
        connectWallet();
        return
    }
    updateTokensLeft();
}

$(document).ready(function () {
    // Main.js
    for (let i = 0; i < H; i++) {
        $('#screen').append(`<tr data-i="${i}"></tr>`);
        for (let j = 0; j < W; j++) {
          $('#screen tr').last().append(`<td data-j="${j}" class="off"></td>`);
        }
    }

    function drawGrid() {
        for (let i = 0; i < H; i++) {
          for (let j = 0; j < W; j++) {
            $(`tr[data-i=${i}] td[data-j=${j}]`).removeClass().addClass(grid[i][j] ? 'on' : 'off');
          }
        }
    }

    function resetGrid() {
        grid = [];
        for (let i = 0; i < H; i++) {
          const row = [];
          for (let j = 0; j < W; j++) {
            row.push(false);
          }
          grid.push(row);
        }
    }

    function updateGrid() {
        resetGrid();
        const xMin = Number($('#x-min').val());
        const xMax = Number($('#x-max').val());
        const yMin = Number($('#y-min').val());
        const yMax = Number($('#y-max').val());
        const nbPointsPerPixel = 16;
        const pixelWidth = (xMax-xMin) / W;
        for (let j = 0; j < W; j++) {
          for (let jIdx = 1; jIdx <= nbPointsPerPixel; jIdx++) {
            const x = xMin + j * pixelWidth + (jIdx / (nbPointsPerPixel + 1)) * pixelWidth;
            const f = new Function('x', 'return ' + $('#user-function').val());
            const y = f(x);
            if (y !== undefined && y < yMax && y > yMin) {
              const i = H - 1 - Math.floor(H * (y - yMin) / (yMax - yMin));
              grid[i][j] = true;
            }
          }
        }
    }

    function gridToPairOfUint160() {
        let gridR = grid.map((val, index) => [grid].map(row => row[index]).reverse());
        grid2R = gridR[0].map((val, index) => gridR.map(row => row[index]).reverse())[0];
        let leftPart = 0n;
        let rightPart = 0n;
        for (let i = 0; i < 14; i++) {
          for (let j = 0; j < 22; j++) {
            const power = BigInt(13 - i) + 14n * BigInt(j % 11);
            const diff = grid2R[i][j] ? (2n ** power) : 0n;
            if (j < 11) {
              leftPart += diff;
            } else {
              rightPart += diff;
            }
          }
        }
        leftCode = leftPart.toString();
        rightCode = rightPart.toString();
        return `${leftCode}, ${rightCode}`;
    }

    function gridFromPairOfUint160(inputString) {
        resetGrid();
        let [_, leftPart, rightPart] = inputString.match(/([0-9]*) *, *([0-9]*)/);
        leftPart = BigInt(leftPart);
        rightPart = BigInt(rightPart);
        leftCode = leftPart.toString();
        rightCode = rightPart.toString();
        for (let j = 0; j < 11; j++) {
          for (let i = 0; i < 14; i++) {
            const leftLsb = leftPart % 2n;
            const rightLsb = rightPart % 2n;
            leftPart /= 2n;
            rightPart /= 2n;
            grid[i][j] = leftLsb ? true : false;
            grid[i][j + 11] = rightLsb ? true : false;
          }
        }
        drawGrid();
    }

    function onFunctionChange() {
        try {
          $('#screen-code').val('');
          resetGrid();
          updateGrid();
          drawGrid();
          $('#screen-code').val(gridToPairOfUint160());
        } catch (e) {
          console.log('Invalid function:', e);
        }
    }

    function onScreenCodeChange() {
        gridFromPairOfUint160($('#screen-code').val());
    }

    onFunctionChange();
    $('#x-min').on('input', onFunctionChange);
    $('#x-max').on('input', onFunctionChange);
    $('#y-min').on('input', onFunctionChange);
    $('#y-max').on('input', onFunctionChange);
    $('#user-function').on('input', onFunctionChange);
    $('#screen-code').on('input', onScreenCodeChange);

    $(".mint button").click(mintToken);
    onPageLoad()
});
