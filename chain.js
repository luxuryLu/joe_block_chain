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
    // check valid
    checkValid() {
        for (let i = 0; i < this.chain.length; i++) {
            const now_block = this.chain[i];
            const ifHashRight = now_block.checkHash();
            if(!ifHashRight) {
                console.log('block 被修改过了');
                return false;
            }
            if (i > 0) {
                const before_block = this.chain[i - 1];
                if (before_block.hash !== now_block.preHash) {
                    console.log('chain 断裂');
                    return false;
                }
            }
        }
        console.log('chain 合法');
        return true;
    }
}

module.exports = Chain;
