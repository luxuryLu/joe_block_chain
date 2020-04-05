const SHA256 = require("crypto-js/sha256");

class Block{
    constructor(data, preHash = '') {
        this.data = data;
        this.preHash = preHash;
        this.hash = this.computeHash()
    }
    computeHash() {
        return SHA256(this.data + this.preHash);
    }
}