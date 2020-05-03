const SHA256 = require("crypto-js/sha256");

class Block{
    constructor(data, preHash = '') {
        this.data = data;
        this.preHash = preHash;
        this.hash = this.computeHash();
        this.nonce = 0;
    }
    // 根据data 以及 preHash 计算出当前区块的 hash值
    computeHash() {
        return SHA256(this.data + this.preHash + this.nonce).toString();
    }
    checkHash() {
        return SHA256(this.data + this.preHash).toString() === this.hash;
    }
    // POW
    mineBlock(difficulty) {
        while (this.hash.substring(0, difficulty) !== Array(difficulty + 1).join("0")) {
            this.nonce++;
            this.hash = this.computeHash();
        }
    }
}

module.exports = Block;