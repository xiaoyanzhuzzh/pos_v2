function CartItem(item,itemNumber,proNumber){
    this.item = item;
    this.itemNumber = itemNumber || 0;
    this.proNumber = proNumber || 0;
    this.subtotal = 0;
    this.saveSutotal = 0;
}


    CartItem.prototype.getItem = function () {
      return this.item = this.item;
    };

    CartItem.prototype.getSubtotal = function (){
      return this.subtotal = (this.itemNumber-this.proNumber)*this.item.price;
    };

    CartItem.prototype.getSaveSubtotal = function () {
      return this.saveSubtotal = this.proNumber*this.item.price;
    };
