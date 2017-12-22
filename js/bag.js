var bag = {
  popup: document.getElementById('bag-popup'),
  products: [],
  getTotalPrice: function() {
    bag.products.price;
  },
  updateTotal: function() {
    var totalPrice = this.getTotalPrice();
    totalDiv.innerHTML = totalPrice;
  }
}
