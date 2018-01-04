module.exports = class Hardware{
    constructor(id , name , price, currency, miningEarnings, upgradeEarnings, count){ 
        this.id = id;
        this.name = name;
        this.price = price;
        this.currency = currency;
        this.miningEarnings = miningEarnings;
        this.upgradeEarnings = upgradeEarnings;
        this.count = count;
    }
};