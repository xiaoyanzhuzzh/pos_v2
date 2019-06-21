//TODO: Please write code in this file.
function printInventory(inputs) {
    var scanner = new Scanner(inputs);
    var pos = new Pos(scanner);
    var expectText = pos.getExpectText(pos.proCalculator.getProNumber());
    console.log(expectText);
}
