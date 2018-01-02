var totalDiv = document.getElementById('totalPrice');
var bag = {
  price: 0,
  popup: document.getElementById('bag-popup'),
  products: [],
  getTotalPrice: function() {
    var lastProductIndex = this.products.length - 1;
    this.products.forEach(function(p){
      //price += p.price;
      bag.price += bag.products[lastProductIndex].price;
    })
    return this.price;
  },
  updateTotal: function() {
    var totalPrice = this.getTotalPrice();
    totalDiv.innerHTML = totalPrice;
  }
}
