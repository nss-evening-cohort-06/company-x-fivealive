//define array allProducts
var allProducts = [];

//define products
var product1 = {
  name: "The 'Original' Tether",
  imagePath: "../images/original.jpg",
  imageAlt: "Product: Original Tether",
  price: 21.95,
  description: "This original tether is the product that started it all. It's made from the same material thats kept the most unruly of dogs at bay for years.",
  material: "High Strength Nylon",
  tetherStrength: "45 MPa",
  comfortRating: 3,
  soldOut: false
};
var product2 = {
  name: "The Wrist Tether",
  imagePath: "../images/wrist.jpg",
  imageAlt: "Product: Wrist Tether",
  price: 15.99,
  description: "The wrist teather is a great travel teather. It fits comfortably in you pocket for when your kid gets unruly",
  material: "High Density Plastic Polymer",
  tetherStrength: "20 MPa",
  comfortRating: 2,
  soldOut: false
};
var product3 = {
  name: "The Team Tether",
  imagePath: "../images/team.jpg",
  imageAlt: "Product: Team Tether",
  price: 35.95,
  description: "Keep all the kids in line. This team teather is great for large families.",
  material: "High Strength Nylon",
  tetherStrength: "45 MPa",
  comfortRating: 1,
  soldOut: false
};
var product4 = {
  name: "The Designer Tether",
  imagePath: "../images/designer.jpg",
  imageAlt: "Product: Designer Tether",
  price: 145.00,
  description: "Tether in style and carry your toddler like a purse. Who says you can't look good and mom hard?",
  material: "Bonded leather",
  tetherStrength: "12 MPa",
  comfortRating: 5,
  soldOut: false
};
var product5 = {
  name: "The Heavy Duty Walker",
  imagePath: "../images/walker.jpg",
  imageAlt: "Product: The Walker",
  price: 21.95,
  description: "The tether for your toddler with strength. Both you and your toddler can get a resistance workout!",
  material: "Woven Nylon and Carbon Fiber",
  tetherStrength: "5650 MPa",
  comfortRating: 4,
  soldOut: false
};
var product6 = {
  name: "The Backpack Tether",
  imagePath: "../images/backpack.jpg",
  imageAlt: "Product: Backpack Tether",
  price: 21.95,
  description: "Don't let your child get away without doing some of the work. With the tether backpack you can keep your kid in line and use them as a pack mule.",
  material: "High Strength Nylon",
  tetherStrength: "30 Mpa",
  comfortRating: 2,
  soldOut: false
};
var product7 = {
  name: "The Twin Tether",
  imagePath: "../images/twin.jpg",
  imageAlt: "Product: Another",
  price: 21.95,
  description: "Blessed with twins? Keep them both in line with the twin tether",
  material: "High Strength Nylon",
  tetherStrength: "45 MPa",
  comfortRating: 3,
  soldOut: false
};
var product8 = {
  name: "The Yard Tether",
  imagePath: "../images/yard.jpg",
  imageAlt: "Product: And Another",
  price: 21.95,
  description: "Kids need outdoor time, but you can't be expected to watch them. Our newest product the yard tether will get your kids out of the house and set your mind at ease.",
  material: "Woven Nylon",
  tetherStrength: "50 MPa",
  comfortRating: 2,
  soldOut: false
};

//push the products into the array
allProducts.push(product1);
allProducts.push(product2);
allProducts.push(product3);
allProducts.push(product4);
allProducts.push(product5);
allProducts.push(product6);
allProducts.push(product7);
allProducts.push(product8);


//Get the element with the id of product container and define variable productContainer 
var productContainer = document.getElementById("product-container");


//build a prodcut card using information from the product array
function buildDomString(product) {
var domString = "";

    domString +=  '<section class="product">';
    domString +=    '<div class="title">';
    domString +=      '<h2>' + product.name + '</h2>';
    domString +=    '</div>';
    domString +=    '<div class="image">';
    domString +=      '<img src="' + product.imagePath + '" alt="' + product.imageAlt + '">';
    domString +=    '</div>';
    domString +=    '<div class="description">';
    domString +=      '<h6>$' + product.price + '</h6>';
    domString +=      '<p>' + product.description + '</p>';
    domString +=      '<h4> Tether Material:</h4><p>' + product.material + '</p>';
    domString +=      '<h4> Tether Strength:</h4><p>' + product.tetherStrength + '</p>';
      if (product.comfortRating === 1) {
    domString +=      '<h4> Comfort Rating: </h4>  <img class="comfortIcn" src="../images/comfortemoji/1.png"';
      } else if (product.comfortRating === 2) {
    domString +=      '<h4> Comfort Rating: </h4>  <img class="comfortIcn" src="../images/comfortemoji/2.png"';
      } else if (product.comfortRating === 3) {
    domString +=      '<h4> Comfort Rating: </h4>  <img class="comfortIcn" src="../images/comfortemoji/3.png"';
    } else if (product.comfortRating === 4) {
    domString +=      '<h4> Comfort Rating: </h4>  <img class="comfortIcn" src="../images/comfortemoji/3.png"';
    } else {
    domString +=      '<h4> Comfort Rating: </h4>  <img class="comfortIcn" src="../images/comfortemoji/5.png"';
    }
    domString +=    '</div>';
      if (product.soldOut) {
    domString +=   '<div class="sold-out">';
    domString +=       '<img src="../images/soldout.jpg" alt="Sold Out">';
    domString +=    '</div>';
    }
    domString +=  '</section>';
    return domString;
}

 // Loop through the products and use the function build dom string to generate html and insert into the page index.html at the element with id product-container
function printProductArrayToDom(productArray) {
  for (var i = 0; i < productArray.length; i++) {
    var currentProduct = productArray[i];
    var productDomString = buildDomString(currentProduct);
    productContainer.innerHTML += productDomString;
  }
}

//Pass all products to the fucntion printProductArraytoDom
printProductArrayToDom(allProducts);



