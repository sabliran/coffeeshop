//ADD MULTIPLE APPENDS TO ITEMS
//ADD TABLES!
//MAKE UNDO BUTTON WORK!


// This function add foods to the list
// First it takes old food from localStorage, appends the new one
// and saves the full list for later use. At the end it also
// show the full list in a specied html element
//
// @param {string} newFood - A food to add to our list
// @return {undefined}

//initialize the fucking list
document.write (localStorage.getItem("foodList"));

         	// if ( localStorage.getItem( localStorage.key( "foodList" ) )) === null  {
			// document.write ("empty");


//trying to save list by tables
//function table () {
//var tables = localStorage.getItem("table1","");





function add (newFood) {


	// Take old orders from localStorage
	var oldList = localStorage.getItem("foodList");
	 
	if (oldList === null )
	{
		// Our full list shall be only the new food
		var fullList = newFood;  

	} 
	else
	{

var itemo = (prompt("how many " + newFood , "1"));
		// Our full list shall be the old orders + the new food
		var fullList = ' <b> ' + oldList + ' </br> ' +itemo + 'x '+newFood; 
		
	
	}
	



	// Save the new variable (fullList) with old and new orders
    localStorage.setItem("foodList", fullList);

 

    // select the html div with id "result"
	var resultEl = selectBox("result");

	// change the text of div to new list (with old and new) and bananas
	resultEl.innerHTML = fullList;
	refreshh ();

	// the following element does not exist yet
	// for later use
	 // var totalsEl = selectBox("totals");

	// not working - shows only and alert
	// can be used for debugging
	 // alert(newFood);

	 // not working - changes whole page to white
	 // document.write(newFood);

}
 function undo () {
	 storage.removeItem(foodList, fullList);
	refreshh ();
}


 function DeleteFood () {
	var diagrafi = localStorage.clear();
	refreshh ();		
}


function refreshh () {
	location.reload();
}















// This function selects an HTML element and returns it
//
// @param {string} id - The id of the element we want to retrieve
// @return {Object} The retrieved HTML element
function selectBox ( id ) {
	//alert(id);
	var el = document.getElementById(id);
	return el;
}


	function appear () {
	document.write( localStorage.getItem( localStorage.key( "foodList" ) ));
	if ( localStorage.getItem( localStorage.key( "foodList" ) ) === null ) {
		alert ("You didn't order anything!!!!!");
		 window.history.back();
		
	}

}

