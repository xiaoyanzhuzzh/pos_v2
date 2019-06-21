function Scanner(inputs) {
    this.inputs = inputs;
}

Scanner.prototype.getBarcodes = function () {
    var barcodes = [];
    for (var i = 0; i < this.inputs.length; i++) {
        var barcodeArray = this.inputs[i].split('-');

        var barcode = barcodeArray[0];
        var count = parseFloat(barcodeArray[1]) || 1;

        for (var x = 0; x < count; x++) {
            barcodes.push(barcode);
        }
    }

    return barcodes;
};

