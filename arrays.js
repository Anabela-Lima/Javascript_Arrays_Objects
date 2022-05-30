/**
 * In these tasks you will need to manipulate the array below in order to answer the questions. Some answers will require you to store the result in a variable, others will need you to inspect the whole array.
 */

stations = ["Dundee", "Edinburgh", "North Berwick", "Newcastle", "York", "Leeds", "Doncaster", "Peterborough"];

/**
 * Q1.
 * The East Coast Main Line doesn't stop at Peterborough! Add London Kings Cross to the end of the array to complete the line.
 */

stations.push("London Kings Cross")
console.log(stations);



/**
 * Q2.
 * It doesn't go as far as Dundee either, so remove it from the start of the array.
 */

// splice removes element at specific index- starting at 0, remove 1 element- that'll be dundee
stations.splice(0,1)
console.log(stations);



/**
 * Q3.
 * How many stations are on the line?
 */

stationCount = stations.length

console.log("There are " + stationCount + " stations.");



/**
 * Q4.
 * Which station is the third stop?
 */

// 3rd station will be at index 1 less since we start at 0, 3-1 =2 
 thirdStation= stations[2]

console.log("The third station is " + thirdStation);



/**
 * Q5.
 * Someone put the wrong Berwick on the timetable! Update "North Berwick" to "Berwick-upon-Tweed".
 */

// updating the value of element at index 1 which was Berwick
stations [1] = "Berwick-upon-Tweed"

console.log(stations);



/**
 * Q6.
 * How did Leeds get on there? Better remove it.
 */


// starting at index 4 remove 1 
 stations.splice(4,1)   
console.log(stations);



/**
 * Q7.
 * We forgot about Darlington! Add it to the route between Newcastle and York.
 */

// splice(index to be inserted, delete x items, value to be inserted)
stations.splice(3,0, "Darlington")
console.log(stations);



/**
 * Q8.
 * Is Durham one of the stops?
 */


stoppingAtDurham = stations.includes("Durham")

console.log(stoppingAtDurham);

// got false result


/**
 * Q9.
 * If we are stopping at Durham, print "Yay Durham!" to the terminal. If not print "Aww...".
 */

if(stoppingAtDurham == true){console.log("Yay Durham!")}else{ console.log("Aww...")};