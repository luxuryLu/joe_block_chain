const Chain = require('./chain');

const myChain = new Chain();
myChain.addBlock('第二个区块');
myChain.addBlock('第三个区块');
console.log(myChain)
console.log('---------------------------------------------------------')
myChain.checkValid();
console.log('---------------------------------------------------------')
// myChain.chain[1].data = '第二个区块被篡改';
// myChain.checkValid();
myChain.chain[1].data = '第二个区块被篡改';
myChain.chain[1].hash = myChain.chain[1].computeHash();
myChain.checkValid();