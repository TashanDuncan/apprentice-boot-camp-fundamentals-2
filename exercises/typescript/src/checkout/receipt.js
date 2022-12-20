class Receipt {
  constructor() {
    this.text = ''
    this.numberOfA = 0
    this.numberOfB = 0
    this.total = 0
  }

  getText() {
    return this.text + "Total: " + this.total
  }

  scanned(sku, basePrice, discountNumber, discountValue){
    const discountDiff = basePrice - discountValue
    const multiBuyCost = basePrice * discountNumber - discountValue
    this.text += `${sku}: ${basePrice}`
    if (++this.numberOfA % discountNumber == 0) {
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
    this.text += 'B: 30'
    if (++this.numberOfB % 2 == 0) {
      this.text += ' - 15 (2 for 45)'
      this.total += 15
    } else {
      this.total += 30
    }
    this.text += '\n'
  }

  scannedC() {
    this.text += 'C: 20\n'
    this.total += 20
  }

  scannedD() {
    this.text += 'D: 15\n'
    this.total += 15
  }
}

module.exports = {
  Receipt
}