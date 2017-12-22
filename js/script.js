var bagCounter = 0;
//create nodes

var addToBag = document.getElementById("bagCounterId");
var mainId = document.getElementById("main");
var compareContainer = document.getElementById("compareContainer");
var bagIconPopup = document.getElementById("bagIconContainer");
var bagDivPopup = document.getElementById("bag-popup");


//create products objects
function getProducts() {
  return [{
    //category: "Biciclete"
	img: "https://giantcdn-qu2qwwv2de7wv85rz.stackpathdns.com/remote/www.giant-bicycles.com/_upload_us/bikes/models/xxl/2016/Trance-275-3-Black.jpg",
	name: "Giant Trance 27.5 2016",
	price: 6999,
  },{
    //category: "Biciclete",
	img: "https://www.kross.pl/sites/default/files/styles/bike_big/public/bikes/2017/trail/dust_2_0_black_lime_matte.png",
	name: "Kross Dust 2.0 2017",
	price: 6290,
  }];
}
//insert product inside to an element
function renderProduct(product) {
  var nodeSection = document.createElement("section");
  var nodeArticle = document.createElement("article");
  var node1 = document.createElement("h5");
  var node2 = node1.cloneNode(false);
  var textProductName = document.createTextNode(product.name);

  var textProductPrice = document.createTextNode(product.price + " lei");

  var buttonNode = document.createElement("button");
  var myImage = new Image(200,150);  //Image(width, height) //equivalent to document.createElement('img')
	myImage.src = product.img;
	myImage.alt = "Image can't be loaded!";
	myImage.className = "ProductImage";
  var checkBoxNode = document.createElement("input");
	checkBoxNode.type = "checkbox";
	checkBoxNode.className = "compareButtonClass";
	checkBoxNode.id = "compareButtonId";


  buttonNode.addEventListener('click', addToBagFunction);

  nodeSection.appendChild(nodeArticle);
  nodeArticle.appendChild(myImage);
  nodeArticle.appendChild(checkBoxNode);
  nodeArticle.appendChild(node1);
  nodeArticle.appendChild(node2);
  nodeArticle.appendChild(buttonNode);

  buttonNode.textContent = "Add to Bag!";

  node1.appendChild(textProductName);
  node2.appendChild(textProductPrice);
  mainId.appendChild(nodeSection);
}



//create a number of elements equal to the # of products
function init() {
  var products = getProducts();
  for (i = 0; i < products.length; i++) {
	renderProduct(products[i]);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  init();

  addToBag.innerHTML = bagCounter;
  bagIconContainer.addEventListener('click', popupFunction);

  //EventListener for showing the compareContainer when one checkbox is checked
	var compareButton = document.getElementsByClassName('compareButtonClass');
	  for (var i=0; i < compareButton.length; i++) {
		  compareButton[i].addEventListener("change", function(event) {
			if(event.target.checked) {
				compareContainer.style.visibility = "visible";
				var product_img_div = document.createElement('div');
				var product_img = new Image(50,40);

			}
			if(event.target.checked == false) {
				compareContainer.style.visibility = "hidden";
			}
		  });
	  }
});


//function for incrementing the Bag when the button is pressed using -event delegation-
  var addToBagFunction = function(event) {
	  if (event.target.innerHTML = "Add to Bag!") {
		  bagCounter++;
      bag.products.push(getProducts()[1].price);
	  }
	  addToBag.textContent = bagCounter;
  };

//function to see the total price when click on bag
var popupFunction = function() {
  bagDivPopup.classList.toggle("show");
};

