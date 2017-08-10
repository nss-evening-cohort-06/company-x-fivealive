
var allEmployees = [];

var employee1 = {
  image: "../images/caitlin.jpeg",
  imageAlt: "employee",
  name: "Caitlin Murnick",
  title: "CFO",
  bio: "Caitlin is learning JavaScript and the struggle is real.  Maybe one day I won't be running to catch up to the short bus."
};
var employee2 = {
  image: "./images/___________.jpg",
  imageAlt: "image",
  name: "Caitlin Murnick",
  title: "COO",
  bio: "dlkajdlfkjadskfj"
};
var employee3 = {
  image: "./images/___________.jpg",
  imageAlt: "image",
  name: "Caitlin Murnick",
  title: "COO",
  bio: "dlkajdlfkjadskfj"
};
  
allEmployees.push(employee1);
allEmployees.push(employee2);
allEmployees.push(employee3);


function buildDomString(employee) {
    var domString = "";

    domString +=      '<section class=employeeSeparate>'
   domString +=             '<div class="image">';
  domString +=                 '<img src="'+ employee.image +'" alt="' + employee.imageAlt + '">';
  domString +=              '</div>';
  domString +=              '<div class="name">';
  domString +=                '<h1>' + employee.name + '</h1>' ;
   domString +=             '</div>';
	domString +=              '<div class="title">';
  domString +=                '<h2><p>' + employee.title + '</p></h2>';
   domString +=             '</div>';
  domString +=              '<div class="description">';
  domString +=                   '<p>' + employee.bio + '</p>';
  domString +=               ' </div>';
  domString +=        '</section>'

	// domString += '<img src="' + employee.image + '" alt="employeePic">';
	// domString +=		'<h1>' + employee.name + '</h1>';
	// domString +=		'<h2>' + employee.title + '</h2>';
	// domString +=			'<section id="bio">' + employee.bio + '</section>';


	return domString;
}

function printProductArrayToDom(productArray) {
  var employeeContainer = document.getElementById("peeps");
  
  for (var i = 0; i < productArray.length; i++) {
// loop through the product and use the function buildDomString to generate hTML and insert into the page index html  @ the product container tab
      var currentProduct = productArray[i];
      var productDomString = buildDomString(currentProduct);
    
     employeeContainer.innerHTML += productDomString;
  }
}

printProductArrayToDom(allEmployees);

