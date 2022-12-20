class Receipt {
  constructor() {
    this.text = ''
    this.numberOfA = 0
    this.numberOfB = 0
    this.total = 0
    this.numberOfSku = new Map([['A', 0],['B', 0],['C', 0],['D', 0]])
  }

  getText() {
    return this.text + "Total: " + this.total
  }

  scanned(sku, basePrice, discountNumber = undefined, discountValue = undefined){
    this.numberOfSku.set(sku, this.numberOfSku.get(sku) + 1)
    const discountDiff = basePrice - discountValue
    const multiBuyCost = basePrice * discountNumber - discountValue
    this.text += `${sku}: ${basePrice}`
    if (this.numberOfSku.get(sku) % discountNumber == 0 && discountNumber && discountValue) {
      this.text += ` - ${discountValue} (${discountNumber} for ${multiBuyCost})`
      this.total += discountDiff
    } else {
      this.total += basePrice
    }
    this.text += '\n'
  }

  scannedA() {
    this.scanned('A', 50, 5, 30)
  }

  scannedB() {
    this.scanned('B', 30, 2, 15)
  }

  scannedC() {
    this.scanned('C', 20)
  }

  scannedD() {
    this.scanned('D', 15)
  }
}

module.exports = {
  Receipt
}