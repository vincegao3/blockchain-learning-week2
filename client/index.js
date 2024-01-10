const axios = require('axios');
const niceList = require('../utils/niceList.json');
const MerkleTree = require('../utils/MerkleTree');

const serverUrl = 'http://localhost:1225';

async function main() {
  const randomIndex = Math.floor(Math.random() * niceList.length);
  const name = niceList[randomIndex];
  const merkleTree = new MerkleTree(niceList);

  const requestBody = {
    proof : merkleTree.getProof(randomIndex),
    name : name
  }

  const { data: gift } = await axios.post(`${serverUrl}/gift`, requestBody);

  console.log({ gift });
}

main();