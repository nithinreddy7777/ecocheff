const contractAddress = '0x...'; // deployed contract address
const contractAbi = [...]; // ABI of the deployed contract
const web3 = new Web3(Web3.givenProvider || 'http://localhost:8545'); // connect to a local Ethereum node or injected provider

const realEstateContract = new web3.eth.Contract(contractAbi, contractAddress);

async function registerProperty() {
    const price = document.getElementById('price').value;
    const accounts = await web3.eth.getAccounts();
    await realEstateContract.methods.registerProperty(price).send({ from: accounts[0] });
    document.getElementById('message').innerText = 'Property registered successfully!';
}

async function buyProperty() {
    const propertyId = document.getElementById('propertyId').value;
    const buyPrice = document.getElementById('buyPrice').value;
    const accounts = await web3.eth.getAccounts();
    await realEstateContract.methods.buyProperty(propertyId).send({ from: accounts[0], value: buyPrice });
    document.getElementById('message').innerText = 'Property bought successfully!';
}
