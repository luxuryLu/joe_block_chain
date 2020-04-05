const Block = require('./block');

class Chain {
    constructor() {
        this.chain = [];
        this.createGenesisBlock();
    }
    // 生成第一个区块/创世块
    createGenesisBlock() {
        const firstBlock = new Block('first Block');
        this.chain.push(firstBlock);
    }
    // 添加一个新区块
    addBlock(newBlockData) {
        const lastBlock = this.chain[this.chain.length - 1];
        const prevHash = lastBlock.hash;
        const newBlock = new Block(newBlockData, prevHash);
        this.chain.push(newBlock);
    }
}


const myChain = new Chain();
myChain.addBlock('第二个区块');
console.log(myChain)