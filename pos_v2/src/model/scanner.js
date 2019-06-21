function Scanner(inputs) {
    this.inputs = inputs;
}

Scanner.prototype.getBarcodes = function () {
    let barcodes = [];
    for (let i = 0; i < this.inputs.length; i++) {
        let barcodeArray = this.inputs[i].split('-');

        let barcode = barcodeArray[0];
        let count = parseFloat(barcodeArray[1]) || 1;

        for (let x = 0; x < count; x++) {
            barcodes.push(barcode);
        }
    }

    return barcodes;
};

