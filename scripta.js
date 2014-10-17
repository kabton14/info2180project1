window.onload = function () {
	

	$("listbutton").onclick = list;
	$("ssearch").onclick = _search;
	$("addbutton").onclick = add;
	$("clear").onclick = clearDisplay;
	
}


/***************************Adress Book**************************************/



var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};



var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    //console.log(person.firstName + " " + person.lastName);
    return person.firstName + " " + person.lastName
}

function list() {
	
	document.getElementById("displayparagraph").innerHTML = "";	
	document.getElementById("displayphone").innerHTML = "";
	document.getElementById("displayemail").innerHTML = "";
		
	
	var contactsLength = contacts.length;
	var str = "";
	for (var i = 0; i < contactsLength; i++) {
		//printPerson(contacts[i])
		 str += printPerson(contacts[i])+ "<br/>" ;

	}
	document.getElementById("displayparagraph").innerHTML = str;
}

/*Create a search function
then call it passing "Jones"*/

function _search(){
	
	document.getElementById("displayparagraph").innerHTML = "";	
	document.getElementById("displayphone").innerHTML = "";
	document.getElementById("displayemail").innerHTML = "";
	
	var name = document.getElementById("nameinput").value;
	var str = "";
	var phone = "";
	var email = "";
    var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		if(name === contacts[i].lastName){
		//printPerson(contacts[i]);
		str += printPerson(contacts[i])+ "<br/>" ;
		phone += contacts[i].phoneNumber + "<br/>" ;
		phone += contacts[i].email + "<br/>" ;

	}
	document.getElementById("displayparagraph").innerHTML = str;
	document.getElementById("displayphone").innerHTML = phone;
	document.getElementById("displayemail").innerHTML = email;
	
	
	document.getElementById("nameinput").value = "";
		
	}
	
}

//search("Jones");


function add(){
	
    var firstname = document.getElementById("firstname").value;
    var lastname = document.getElementById("lastname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    
    
    contacts[contacts.length] = {
    firstName: firstname,
    lastName: lastname,
    phoneNumber: phone,
    email: email
}

 alert("Contact successfully created");
 
 document.getElementById("firstname").value = "";
 document.getElementById("lastname").value = "";
 document.getElementById("email").value ="";
 document.getElementById("phone").value = "";
 }
 

//add("John", "Brown", "email@email.com", "555-0123");

//list();

function clearDisplay(){

	document.getElementById("displayparagraph").innerHTML = "";	
	document.getElementById("displayphone").innerHTML = "";
	document.getElementById("displayemail").innerHTML = "";
	
	
}
