class Product {
  constructor(sku, basePrice, discountNumber = undefined, discountValue = undefined) {
    this.sku = sku
    this.basePrice = basePrice,
    this.discountNumber = discountNumber,
    this.discountValue = discountValue
    this.discountDiff = this.basePrice - this.discountValue
    this.multiBuyCost = this.basePrice * this.discountNumber - this.discountValue
    this.baseOutput = `${this.sku}: ${this.basePrice}`
    this.discountOutput = ` - ${this.discountValue} (${this.discountNumber} for ${this.multiBuyCost})`
  }

}
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

  scanned(product){
    this.numberOfSku.set(product.sku, this.numberOfSku.get(product.sku) + 1)
    this.text += product.baseOutput
    if (this.numberOfSku.get(product.sku) % product.discountNumber == 0 && product.discountNumber && product.discountValue) {
      this.text += product.discountOutput
      this.total += product.discountDiff
    } else {
      this.total += product.basePrice
    }
    this.text += '\n'
  }

  scannedA() {
    const product = new Product('A', 50, 5, 30)
    this.scanned(product)
  }

  scannedB() {
    const product = new Product('B', 30, 2, 15)
    this.scanned(product)
  }

  scannedC() {
    const product = new Product('C', 20)
    this.scanned(product)
  }

  scannedD() {
    const product = new Product('D', 15)

    this.scanned(product)
  }
}

module.exports = {
  Receipt
}