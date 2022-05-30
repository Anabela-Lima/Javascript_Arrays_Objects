family = ["mum", "dad", "dora", "crem", "paula", "carla"]

// remove carla
family.pop()
console.log(family)

// remove dad
family.splice(1,1)
console.log("removed dad: " + family)

// add phillip
family.unshift("phillip")
console.log("added phillip to start of of array: " + family)

// remove paula
family.pop()
console.log("removed paula from end of list: " + family)

// add jamie, paula to end of list
family[4]="jamie"
console.log("added jamie to end of list: " + family)

// add paula to end of list 
family[5] = "paula"
console.log("added paula to end of list: " + family)

// add carla between crem and jamie
family.splice(4,0,"carla")
console.log("added carla betweeen crem and jamie: " + family)

// add dad to beginning of list 
family.unshift("dad")
console.log("added dad to beginning of list " + family)

// if statement: if family includes crem

if (family.includes("crem"))
{console.log("crem is in the house")}
else{console.log("she is probably at work")};

// if statement: if family includes phillip
if(family.includes("phillip"))
{console.log("boo phillip is in the house!")} 
else { console.log ("phillip is not home")}

// if statement 2 conditions
if (family.length > 7  && family.includes("mum"))
{console.log("yay we have a full house, time for some barbeque")}
else {"There are " + family.length + "in the house lets save the barbeque for the weekend"};

// if statement and a method

 if (family.length == 8)
 { family.push("new baby boy") + console.log ("sister had a baby boy")}
 else {console.log("no new additions yet!")}

 

 // for loops  -- printing each element in array 

 for( i = 0 ; i <= family.length -1 ; i++)
 {console.log(" Family memebers:  " + family[i])}

 // printing family array list backwards 

 for (i= family.length -1 ; i>= 0 ; i-- )

 { console.log( family[i])}

 // using for loop to print index of each element 

 for(item in family){
     console.log(" family index " + item)
 }

 // random function to get a random element from family list

//  Use Math. random() function to get the random number between(0-1, 1 exclusive).
// Multiply it by the array length to get the numbers between(0-arrayLength).
// Use Math. floor() to get the index ranging from(0 to arrayLength-1).


luckyMember = Math.floor(Math.random() * family.length);
console.log(" The lucky memeber is: " + luckyMember, family[luckyMember]);


// while loop

while(true)    // keep looping for as long as seconds does not satisfy condition
{seconds = Math.random(); 
console.log(seconds); 
if(seconds> 0.8)    // if seconds is greater 0.8 
 {break}}           // break the loop 


//  objects- creating an object with properties + usign for loop to iterate through key and value + print to console

bag = {name: "Longchamp", founder: "Jean Cassegrain", owner: true, ownerName:"Ana", price: 80};  
for(key in bag) // for each key in object bag
{value = bag [key];  // the value is equals to key value in bag
console.log(`The ${key} is ${value}`);} // print to the console each key i.e. property + its value

// lets add an extra property to Bag 

bag.Expensive = false;
console.log(bag);

// add an extra property with array 

bag.items= ["purse", "phone", "makeup", "wipes", "car keys", "pen", "notebook", "Extra gum", "glasses"]
console.log(bag)

// change property value of object - change bag owner from Ana to Ana paula

bag.ownerName = "Ana paula"
console.log(bag)

// delete last item added to bag
bag.items.pop()
console.log(bag)

// add new item to the bag - i.e. to top of bag = top of list 
bag.items.unshift("Roberto Cavalli perfume")
console.log(bag)

// checking the number of elements  in an object property that uses an array
if (bag.items.length > 10 )
{console.log("bag is full")}
else (bag.items.splice(5,0,"charger") + console.log(bag))


