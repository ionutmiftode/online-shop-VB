var price = 0;
var totalDiv = document.getElementById('totalPrice');
var bag = {
  popup: document.getElementById('bag-popup'),
  products: [],
  getTotalPrice: function() {
    console.log(this);
    console.log(this.products);
    this.products.forEach(function(p){
      price += p.price;
      console.log(p.price);
      })
      return price;
      console.log(price);
  },
  updateTotal: function() {
    var totalPrice = this.getTotalPrice();
    console.log(this);
    console.log(this.getTotalPrice());
    totalDiv.innerHTML = totalPrice;
    console.log(totalPrice);
  }
}
