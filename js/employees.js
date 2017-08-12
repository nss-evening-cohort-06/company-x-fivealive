
var allEmployees = [];

var employee1 = {
  image: "../images/ken.jpg",
  imageAlt: "KenPicture",
  name: "Ken Lewis",
  title: "Co-Founder",
  bio: "Ken is the Head Puba.  He does a great job of helping everyone and keeping us in line. In a way, he's used the Toddler Tether on us."
};
var employee2 = {
  image: "../images/kelly.jpg",
  imageAlt: "image",
  name: "Kelly Stoops",
  title: "Co-Founder",
  bio: "Kelly is a teacher and used her knowledge of how to keep children in line while creating this product. "
};
var employee3 = {
  image: "../images/caitlin.jpg",
  imageAlt: "caitinImage",
  name: "Caitlin Murnick",
  title: "Co-Founder",
  bio: "Caitlin is learning JavaScript and the struggle is real.  Maybe one day she won't be running to catch up to the short bus."
};

var employee4 = {
  image: "../images/adam.jpg",
  imageAlt: "adamImage",
  name: "Adam Smith",
  title: "Co-Founder",
  bio: "Adam was a great asset in creating The Toddler Tether because of his ability to create logos and successful marketing campaigns."
};

var employee5 = {
  image: "../images/juno.jpg",
  imageAlt: "junoImage",
  name: "Juno",
  title: "Co-Founder",
  bio: "As a graphic artist and Community College development teacher, Juno brings many years of marketing and design experience which was extremely valuable in planning the Toddler Tether ."
};
  
allEmployees.push(employee1);
allEmployees.push(employee2);
allEmployees.push(employee3);
allEmployees.push(employee4);
allEmployees.push(employee5);


function buildDomString(employee) {
    var domString = "";

    domString +=      '<section class=employeeSeparate>'
   domString +=             '<div class="imageEmployees">';
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

