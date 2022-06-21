const SHA256 = require('crypto-js/sha256')

class Block {
    constructor(index = 0, previousHash = null,data = 'Genesis Block') {
        this.index = index
        this.previousHash = previousHash
        this.data = data
        this.time = new Date()
        this.hash = this.generateHash()
    }

    generateHash() {
        return SHA256(this.index + this.previousHash + JSON.stringify(this.data) + this.time).toString()
    }
}

module.exports = Block