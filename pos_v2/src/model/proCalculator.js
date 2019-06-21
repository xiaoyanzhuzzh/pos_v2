function ProCalculator(cartItems) {
    this.cartItems = cartItems;
}

ProCalculator.prototype.getPromotionbars = function () {
    let allPromotions = loadPromotions();

    let allProBars;
    for (let i = 0; i < allPromotions.length; i++) {
        if (allPromotions[i].type == 'BUY_TWO_GET_ONE_FREE') {
            allPromBars = allPromotions[i].barcodes;
            break;
        }
    }
    return allPromBars;
};

ProCalculator.prototype.getProNumber = function () {
    let allProBars = this.getPromotionbars();
    for (let j = 0; j < allProBars.length; j++) {
        for (let k = 0; k < this.cartItems.length; k++) {
            if (allProBars[j] === this.cartItems[k].item.barcode) {
                this.cartItems[k].proNumber = parseInt(this.cartItems[k].itemNumber / 3);
            }
        }

    }
    return this.cartItems;
};
