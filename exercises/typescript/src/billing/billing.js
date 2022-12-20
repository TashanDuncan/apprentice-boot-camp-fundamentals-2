class Customer {
  constructor(isDealer,adverts,products){
    this.adverts = adverts
    this.isDealer = isDealer
    this.products = products
  }

  bill() {

    let total = 0
    if(this.isDealer){
      total += this.adverts * 50
      if (this.products) {
        total += this.products * 10
      }
    }
    else
    {
      total += this.adverts * 20
      if (this.products) {
        total += this.products * 10
      }
    }

    return total
  }
}

module.exports = {
  Customer
}