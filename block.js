const SHA256 = require("crypto-js/sha256");

class Block{
    constructor(data, preHash = '') {
        this.data = data;
        this.preHash = preHash;
        this.hash = this.computeHash()
    }
    // 根据data 以及 preHash 计算出当前区块的 hash值
    computeHash() {
        return SHA256(this.data + this.preHash).toString();
    }
}

module.exports = Block;