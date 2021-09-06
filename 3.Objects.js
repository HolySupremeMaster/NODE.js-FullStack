// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObj = {"message": "Hello, earthling! I bring peace."};

// Log the message 
console.log(myObj.message);
// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const holy = {"HolySupremeMaster":"Umit", "Age":26}
console.log(holy);


// --------------------------------------
// Exercise 3 - Add a property 

const stackOverflow = {"Property": 20, isAllowed:true};

// make a rule called isAllowed and let the value be true
 console.log(stackOverflow.isAllowed);

// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = {"description": "The best song in the world."}

// remove the property "description" and add a property called "about" that should say "Just a tribute." 

delete thisSong.description ; 

thisSong.about="Just a tribute";

console.log(thisSong);


