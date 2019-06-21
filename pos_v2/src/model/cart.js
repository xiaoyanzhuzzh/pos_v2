function Cart(barcodes) {
    this.barcodes = barcodes;
    this.cartItems = [];
}

Cart.prototype.get = function () {
    let getItem = function (barcode) {
        let items = loadAllItems();
        for (let i = 0; i < items.length; i++) {
            if (items[i].barcode === barcode) {
                return items[i];
            }
        }
    };

    let isExist = function (currentBarcode, cartItems) {
        for (let i = 0; i < cartItems.length; i++) {
            let barcode = cartItems[i].item.barcode;
            if (barcode === currentBarcode) {
                cartItems[i].itemNumber++;
                return true;
            }
        }
        return false;
    };


    for (let i = 0; i < this.barcodes.length; i++) {
        if (!isExist(this.barcodes[i], this.cartItems)) {
            let cartitem = new CartItem(getItem(this.barcodes[i]), 1, 0);
            this.cartItems.push(cartitem);

        }
    }

    return this.cartItems;
};
