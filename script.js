window.onload = function () {
	

	//$("listbutton").onclick = list;
	//$("ssearch").onclick = _search;
	//$("addbutton").onclick = add;
	
	
	$("scan1").onclick = cashRegister.scan;
	$("void_button").onclick = cashRegister.voidLastTransaction;
	$("button").onclick = cashRegister.applyStaffDiscount;
	$("discount_btn").onclick = addmember;
	
	//Populating staff discount list:
	for (var x = 0; employees.length; x++) {
	AddItem(employees[x]._name,employees[x]._name);

}

}




//***************************Cash Register********************************************************



function StaffMember(_name,discountPercent){
    this._name = _name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Osama bin Laden",20);

var employees = [sally,bob,me];

function addmember(){
	
    var _name = document.getElementById("emp_name").value;
    var discount = document.getElementById("emp_discount").value;
    
    
    employees[employees.length] = new StaffMember(_name,discount);


	alert("Member successfully added.");
	
	AddItem(employees[employees.length-1]._name,employees[employees.length-1]._name);
	
	document.getElementById("emp_name").value="";
	document.getElementById("emp_discount").value="";
}



var cashRegister = {
    sum:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.sum += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
        
        document.getElementById("output").innerHTML = "-->$"+this.sum.toFixed(2);
        
        
    },
    scan: function(){
    	
    		var item = document.getElementById("item_list").value;
    		var quantity = document.getElementById("item_qty").value;
    		
        switch (item){
        case "eggs": cashRegister.add(0.98 * quantity); break;
        case "milk": cashRegister.add(1.23 * quantity); break;
        case "magazine": cashRegister.add(4.99 * quantity); break;
        case "chocolate": cashRegister.add(0.45 * quantity); break;
        }
        return true;
        

    },
    voidLastTransaction : function(){
        cashRegister.sum -= cashRegister.lastTransactionAmount;
        cashRegister.lastTransactionAmount = 0;
        document.getElementById("output").innerHTML = "-->$"+ cashRegister.sum;
       
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function(){
        
        var sname = document.getElementById("staff_select").value;
		      
        cashRegister.sum = cashRegister.sum - (0.01 * discount(sname)  * cashRegister.sum);
        document.getElementById("output").innerHTML = "-->$"+ cashRegister.sum.toFixed(2);
        
        
    }
    
};

//cashRegister.scan('eggs',1);
//cashRegister.scan('milk',1);
//cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
//cashRegister.applyStaffDiscount(me);

// Show the total bill
//console.log('Your bill is '+cashRegister.total.toFixed(2));

 function AddItem(Text,Value)

    {
    	

        // Create an Option object        
        var opt = document.createElement("option");
     		// Add an Option object to Drop Down/List Box
        document.getElementById("staff_select").options.add(opt);
        // Assign text and value to Option object
        opt.text = Text;
        opt.value = Value;

    }
    
    
var discount = function (empname) {
	
	for(var i = 0; i < employees.length; i++){
			if(employees[i]._name === empname)	{
			return parseInt(employees[i].discountPercent);
			}
	}
};
	




