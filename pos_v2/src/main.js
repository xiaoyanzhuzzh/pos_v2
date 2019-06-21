//TODO: Please write code in this file.
function printInventory(inputs) {
    let scanner = new Scanner(inputs);
    let pos = new Pos(scanner);
    let expectText = pos.getExpectText(pos.proCalculator.getProNumber());
    console.log(expectText);
}
