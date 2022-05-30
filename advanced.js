/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */


unitedKingdom = [
    {
        name: "Scotland",
        capital: "Edinburgh",
        population: 5454000,
        touristAttractions: [
            "Stirling Castle",
            "Loch Ness"
        ]
    },
    {
        name: "England",
        capital: "London",
        population: 55980000
    },
    {
        name: "Wales",
        capital: "Swansea",
        population: 3163000,
        touristAttractions: [
            "Snowdonia"
        ]
    },
    {
        name: "Northern Ireland",
        capital: "Belfast",
        population: 1885000,
        touristAttractions: [
            "Titanic Museum",
            "Giant's Causeway"
        ]
    }
]


/**
 * Q1. Add some tourist attractions to England
 */

// some tourist attractions
touristAttractionsArray=["The British Museum", "Windsor Castle", "Chester Zoo","Cantenbury Cathedral"]

// at index 1, or could do at index where location name = "England" and add tourist attractions at this index

touristAttractions = unitedKingdom[unitedKingdom.findIndex(location => location.name === "England")].touristAttractionsArray=["The British Museum", "Windsor Castle", "Chester Zoo","Cantenbury Cathedral"]

// print to console
console.log(unitedKingdom);



// **
//  * Q2. Change the capital of Wales to "Cardiff"
//  */

// find where name wales is 
unitedKingdom[unitedKingdom.findIndex(country => country.name === "Wales")].capital = "Cardiff";
// print to the console
console.log(unitedKingdom);



/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */


// finding the required index using the name 
// using object.keys() method to return all keys in this unitedkindom index
northernIrelandKeys = Object.keys(unitedKingdom[unitedKingdom.findIndex(country => country.name === "Northern Ireland")])

// print to console
console.log("The keys are: " + northernIrelandKeys)




/**
 * Q4. Use an if statement to compare the population of Scotland to the other countries and print out if it is the biggest, smallest or somewhere in the middle.
 */


// notes: need to gain access to value of the population keys 


// if the population of scoland is greater 

 iScotland= unitedKingdom[unitedKingdom.findIndex(country => country.name === "Scotland")]
 iEngland = unitedKingdom[unitedKingdom.findIndex(country => country.name === "England")]
 iWales = unitedKingdom[unitedKingdom.findIndex(country => country.name === "Wales")]
 iNorthernIreland = unitedKingdom[unitedKingdom.findIndex(country => country.name ==="Northern Ireland")]

 if (iScotland > iEngland.population && iWales && iNorthernIreland)

// print "population is greater"
{ console.log( "Scotland has the highest population")}

// if the population of scotland is less than 
else if (iScotland < iEngland.population && iWales && iNorthernIreland)

// print "population is less than"

{console.log("Scotland has the smallest population")}
// given that the above conditions fail implies scotland population is somewhere in the middle
else{console.log("Scotland's population is somewhere in the middle")}

