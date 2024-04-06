//question1
console.log("hello world!");


//question2
let myName = "alina";
let message = "do you wanna hangout tonight?";
console.log(myName+" "+message);


//Question3
let personName: string = "John wick";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", toTitleCase(personName));
function toTitleCase(str: string): string {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}


//Question4
let quote: string = "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve";
let author: string = "Quaid e Azam Muhammad Ali Jinnah";
console.log(`"${quote}" - ${author}`);


//Question5
let quaid_e_azam: string = "Quaid-e-Azam Muhammad Ali Jinnah";
let quote: string = "Failure is a word unknown to me.";
console.log(`${quaid_e_azam} once said, "${quote}"`);


//Question6
let name_with_whitespace: string = "\t \n John Wick \t\n";
console.log("Name with whitespace:");
console.log(name_with_whitespace);
let stripped_name: string = name_with_whitespace.trim();
console.log("\nStripped name:");
console.log(stripped_name);


//question7
// Addition operation
console.log("Addition:");
console.log(5 + 3);  // Outputs: 8

// Subtraction operation
console.log("\nSubtraction:");
console.log(10 - 2); // Outputs: 8

// Multiplication operation
console.log("\nMultiplication:");
console.log(4 * 2);  // Outputs: 8

// Division operation
console.log("\nDivision:");
console.log(16 / 2); // Outputs: 8



//Question8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);



//Question9
let favoriteNumber: number = 10;
let message: string = `My favorite number is ${favoriteNumber}.`;
console.log(message);



//Question10
// Program by [Aima Aman]
// Date: [30-3-24]

// Addition operation
console.log(5 + 3);

// Subtraction operation
console.log(10 - 2);

// Multiplication operation
console.log(4 * 2);

// Division operation
console.log(16 / 2);


// Program by [Aima Aman]
// Date: [30-3-24]

// Store your favorite number in a variable
let favoriteNumber: number = 10;

// Create a message revealing your favorite number
let message: string = `My favorite number is ${favoriteNumber}.`;

// Print the message
console.log(message);



//Question11
let names: string[] = ["Sumaiya", "Samreen", "Ayesha", "Aleena"];
console.log("Names of my friends:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}



//Question12
let names: string[] = ["Sumaiya", "Samreen", "Ayesha", "Aleena"];
console.log("Greetings to my friends:");
for (let i = 0; i < names.length; i++) {
    console.log(`Hello, ${names[i]}! Have a great day!`);
}



//Question13
let modesOfTransportation: string[] = ["Kawasaki Ninja H2R", "Toyota Corolla", "BMX bikes"];
for (let i = 0; i < modesOfTransportation.length; i++) {
    console.log(`I would like to own a ${modesOfTransportation[i]}.`);
}




//Question14
let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}



//question15

let newGuests: string[] = ["Sana", "Subhan", "Ahsan", "Aayat"];
console.log("Updated Invitations to Dinner:");
for (let i = 0; i < newGuests.length; i++) {
    console.log(`Dear ${newGuests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}





//Question14 part1
let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}
let cantMakeIt: string = "Alina";
console.log(`${cantMakeIt} can't make it to the dinner.`);



//Question14 part2
let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya"];

console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima aman]`);
}

let cantMakeIt: string = "Alina";
let newPerson: string = "Amaan";

let indexOfGuestWhoCantMakeIt: number = guests.indexOf(cantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPerson;
}

console.log("\nUpdated Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima aman]`);
}




//Question14 part3
let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya"];

console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

let cantMakeIt: string = "Alina";

let newPerson: string = "Amaan";

let indexOfGuestWhoCantMakeIt: number = guests.indexOf(cantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPerson;
}

console.log("\nSecond Set of Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nPlease don't forget to join us for dinner tomorrow night. We look forward to seeing you!\nBest regards,\n[Aima Aman]`);
}




//Question16
let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya"];

console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

let cantMakeIt: string = "Alina";

let newPerson: string = "Amaan";

let indexOfGuestWhoCantMakeIt: number = guests.indexOf(cantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPerson;
}

let newGuests: string[] = ["Umaima", "Huzaima", "Safeet", "Zarmeen"];

guests.push(...newGuests);

console.log("\nAdditional Invitations to Dinner:");
for (let i = 0; i < newGuests.length; i++) {
    console.log(`Dear ${newGuests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[AimaAman]`);
}



//Question16 part1

let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya"];

console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

let cantMakeIt: string = "Alina";

let newPerson: string = "Amaan";

let indexOfGuestWhoCantMakeIt: number = guests.indexOf(cantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPerson;
}

let newGuests: string[] = ["Umaima", "Huzaima", "Safeet", "Zarmeen"];

guests.push(...newGuests);

console.log("\nAdditional Invitations to Dinner:");
for (let i = 0; i < newGuests.length; i++) {
    console.log(`Dear ${newGuests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

console.log("\nGood news! We have found a bigger dinner table. See you all soon!");





//Question16 part 2


let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya"];

// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

// Name of the new guest to add to the beginning of the array
let newGuest: string = "Ali";

// Add the new guest to the beginning of the array
guests.unshift(newGuest);

// Name of the guest who can't make it
let cantMakeIt: string = "Alina";

// Name of the new person you are inviting
let newPerson: string = "Amaan";

// Replace the name of the guest who can't make it with the name of the new person
let indexOfGuestWhoCantMakeIt: number = guests.indexOf(cantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPerson;
}

// Names of three new guests to invite to dinner
let newGuests: string[] = ["Umaima", "Huzaima", "Safeet", "Zarmeen"];

// Add new guests to the dinner invitation list
guests.push(...newGuests);

// Print invitations for the new guests
console.log("\nAdditional Invitations to Dinner:");
for (let i = 0; i < newGuests.length; i++) {
    console.log(`Dear ${newGuests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

// Print a message informing people that a bigger dinner table has been found
console.log("\nGood news! We have found a bigger dinner table. See you all soon!");




//Question16 part 3

let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya"];

// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

// Name of the new guest to add to the middle of the array
let newGuestMiddle: string = "Ali";

// Add the new guest to the middle of the array
guests.splice(Math.ceil(guests.length / 2), 0, newGuestMiddle);

// Name of the new guest to add to the end of the list
let newGuestEnd: string = "Zoya";

// Append the new guest to the end of the list
guests.push(newGuestEnd);

// Print a new set of invitation messages for each person in the list
console.log("\nUpdated Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}




//Question17
let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya"];

// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

// Name of the new guest to add to the middle of the array
let newGuestMiddle: string = "Ali";

// Add the new guest to the middle of the array
guests.splice(Math.ceil(guests.length / 2), 0, newGuestMiddle);

// Name of the new guest to add to the end of the list
let newGuestEnd: string = "Zoya";

// Append the new guest to the end of the list
guests.push(newGuestEnd);

// Print a new set of invitation messages for each person in the list
console.log("\nUpdated Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

// Print a message saying that only two people can be invited for dinner
console.log("\nUnfortunately, we can only invite two people for dinner.");



//17part2 and part3
let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya", "Ali", "Zoya"];

// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

// Print a message saying that only two people can be invited for dinner
console.log("\nUnfortunately, we can only invite two people for dinner.");

// Remove guests from the list one at a time until only two names remain
while (guests.length > 2) {
    let removedGuest: string | undefined = guests.pop(); // Remove the last guest from the list
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
    }
}

// Print the final list of guests who are invited to dinner
console.log("\nFinal List of Guests Invited to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, you are still invited to dinner.`);
}







//17 part 4

let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya", "Ali", "Zoya"];

// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

// Print a message saying that only two people can be invited for dinner
console.log("\nUnfortunately, we can only invite two people for dinner.");

// Remove guests from the list one at a time until only two names remain
while (guests.length > 2) {
    let removedGuest: string | undefined = guests.pop(); // Remove the last guest from the list
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest}, we can't invite you to dinner.`);
    }
}

// Remove the last two names from the list to have an empty list
guests.pop();
guests.pop();

// Print the list to make sure it's empty
console.log("\nList of Guests at the End of the Program:");
console.log(guests); // Should output an empty array []





//question18


let placesToVisit: string[] = [
    "Paris, France",
    "Santorini, Greece",
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Serengeti National Park, Tanzania"
];

console.log("Places I'd Like to Visit:");
for (let i = 0; i < placesToVisit.length; i++) {
    console.log(`${i + 1}. ${placesToVisit[i]}`);
}




//parts1,2,3,4

let locations: string[] = [
    "Paris, France",
    "Santorini, Greece",
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Serengeti National Park, Tanzania"
];

// Print the array in its original order
console.log("Original Order:");
console.log(locations);

// Print the array in alphabetical order without modifying the actual list
console.log("\nAlphabetical Order:");
console.log([...locations].sort());

// Show that the array is still in its original order
console.log("\nOriginal Order (Still Intact):");
console.log(locations);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log([...locations].sort().reverse());

// Show that the array is still in its original order
console.log("\nOriginal Order (Still Intact):");
console.log(locations);

// Reverse the order of the list
locations.reverse();
// Print the array to show that its order has changed
console.log("\nReversed Order:");
console.log(locations);

// Reverse the order of the list again
locations.reverse();
// Print the list to show it’s back to its original order
console.log("\nOriginal Order (After Second Reverse):");
console.log(locations);

// Sort the array so it’s stored in alphabetical order
locations.sort();
// Print the array to show that its order has been changed
console.log("\nAlphabetical Order:");
console.log(locations);

// Sort to change the array so it’s stored in reverse alphabetical order
locations.sort((a, b) => b.localeCompare(a));
// Print the list to show that its order has changed
console.log("\nReverse Alphabetical Order:");
console.log(locations);



//question19


let guests: string[] = ["Ayesha", "Alina", "Samreen", "Sumaiya"];

// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear ${guests[i]},\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]`);
}

// Print a message indicating the number of people being invited to dinner
console.log(`\nYou are inviting ${guests.length} people to dinner.`);




//question20


// Array containing famous rivers
let rivers: string[] = [
    "Nile River (Africa)",
    "Amazon River (South America)",
    "Yangtze River (China)",
    "Mississippi River (North America)",
    "Ganges River (India)",
    "Indus River (Pakistan)",
    "Danube River (Europe)",
    "Volga River (Russia)",
    "Mekong River (Asia)",
    "Rhine River (Europe)"
];

// Print the list of rivers
console.log("List of Famous Rivers:");
for (let river of rivers) {
    console.log(river);
}

// Array containing famous mountains
let mountains: string[] = [
    "Mount Everest (Nepal/Tibet)",
    "K2 (Pakistan/China)",
    "Kangchenjunga (Nepal/India)",
    "Mount Kilimanjaro (Tanzania)",
    "Mount Fuji (Japan)",
    "Mount McKinley/Denali (USA)",
    "Mount Elbrus (Russia)",
    "Matterhorn (Switzerland/Italy)",
    "Mont Blanc (France/Italy)",
    "Mount Cook (New Zealand)"
];

// Print the list of mountains
console.log("List of Famous Mountains:");
for (let mountain of mountains) {
    console.log(mountain);
}

// Array containing famous countries
let countries: string[] = [
    "United States",
    "China",
    "India",
    "Brazil",
    "Russia",
    "Canada",
    "Australia",
    "Argentina",
    "France",
    "Germany"
];

// Array containing famous cities
let cities: string[] = [
    "New York City (USA)",
    "Tokyo (Japan)",
    "London (UK)",
    "Paris (France)",
    "Singapore (Singapore)",
    "Dubai (UAE)",
    "Hong Kong (China)",
    "Los Angeles (USA)",
    "Rome (Italy)",
    "Sydney (Australia)"
];

// Array containing famous languages
let languages: string[] = [
    "English",
    "Mandarin Chinese",
    "Hindi",
    "Spanish",
    "French",
    "Arabic",
    "Bengali",
    "Russian",
    "Portuguese",
    "German"
];

// Print the list of countries
console.log("List of Famous Countries:");
for (let country of countries) {
    console.log(country);
}

// Print the list of cities
console.log("\nList of Famous Cities:");
for (let city of cities) {
    console.log(city);
}

// Print the list of languages
console.log("\nList of Famous Languages:");
for (let language of languages) {
    console.log(language);
}



//question21

// Define TypeScript objects representing famous landmarks
let landmarks: { name: string, location: string, description: string }[] = [
    {
        name: "Eiffel Tower",
        location: "Paris, France",
        description: "The Eiffel Tower is a wrought-iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower."
    },
    {
        name: "Statue of Liberty",
        location: "New York City, USA",
        description: "The Statue of Liberty is a colossal neoclassical sculpture on Liberty Island in New York Harbor in New York City, in the United States."
    },
    {
        name: "Great Wall of China",
        location: "China",
        description: "The Great Wall of China is a series of fortifications made of stone, brick, tamped earth, wood, and other materials, generally built along an east-to-west line across the historical northern borders of China to protect the Chinese states and empires against the raids and invasions of the various nomadic groups."
    }
];

// Print information about each landmark
console.log("Information about Famous Landmarks:");
for (let landmark of landmarks) {
    console.log(`Name: ${landmark.name}`);
    console.log(`Location: ${landmark.location}`);
    console.log(`Description: ${landmark.description}\n`);
}



//question22


// Define an array of fruits
let fruits: string[] = ["Apple", "Banana", "Orange"];

// Try to access an element at an index that doesn't exist
// This will cause an array index error
console.log(fruits[3]); // Accessing index 3, which is out of bounds

// The above line will cause an array index error, so it needs to be corrected
// We can correct it by accessing an index within the bounds of the array

// Correcting the error
console.log("Corrected Access:");
console.log(fruits[2]); // Accessing index 2, which is within bounds




//question23

let number = 10;
let string = 'hello';
let booleanTrue = true;
let booleanFalse = false;

// Test 1: Is number equal to 10?
console.log("Is number == 10? I predict True.");
console.log(number == 10);

// Test 2: Is string equal to 'hello'?
console.log("Is string == 'hello'? I predict True.");
console.log(string == 'hello');

// Test 3: Is booleanTrue equal to true?
console.log("Is booleanTrue == true? I predict True.");
console.log(booleanTrue == true);

// Test 4: Is booleanFalse equal to false?
console.log("Is booleanFalse == false? I predict True.");
console.log(booleanFalse == false);

// Test 5: Is number not equal to 5?
console.log("Is number != 5? I predict True.");
console.log(number != 5);

// Test 6: Is string not equal to 'world'?
console.log("Is string != 'world'? I predict True.");
console.log(string != 'world');

// Test 7: Is booleanTrue equal to booleanFalse?
console.log("Is booleanTrue == booleanFalse? I predict False.");
console.log(booleanTrue == booleanFalse);

// Test 8: Is number greater than 5?
console.log("Is number > 5? I predict True.");
console.log(number > 5);

// Test 9: Is number less than or equal to 10?
console.log("Is number <= 10? I predict True.");
console.log(number <= 10);

// Test 10: Is booleanFalse equal to false?
console.log("Is booleanFalse == true? I predict False.");
console.log(booleanFalse == true);




//question24


let string1 = 'hello';
let string2 = 'world';
let number1 = 5;
let number2 = 10;
let array = [1, 2, 3, 4, 5];

// Tests for equality and inequality with strings
console.log("Test for equality with strings:");
console.log(string1 == 'hello'); // True
console.log(string1 != 'world'); // True
console.log(string1 == string2); // False
console.log(string1 != string2); // True

// Tests using the lower case function
console.log("\nTest using the lower case function:");
console.log(string1.toLowerCase() == 'hello'); // True
console.log(string2.toLowerCase() == 'world'); // True

// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("\nNumerical tests:");
console.log(number1 == 5); // True
console.log(number1 != 10); // True
console.log(number2 > number1); // True
console.log(number1 < number2); // True
console.log(number2 >= 10); // True
console.log(number1 <= 5); // True

// Tests using "and" and "or" operators
console.log("\nTests using 'and' and 'or' operators:");
console.log(number1 == 5 && number2 == 10); // True
console.log(number1 == 5 || number2 == 5); // True
console.log(number1 == 10 && number2 == 5); // False
console.log(number1 == 10 || number2 == 5); // False

// Test whether an item is in an array
console.log("\nTest whether an item is in an array:");
console.log(array.includes(3)); // True
console.log(array.includes(6)); // False

// Test whether an item is not in an array
console.log("\nTest whether an item is not in an array:");
console.log(!array.includes(6)); // True
console.log(!array.includes(3)); // False



//question25
//version1
// Assigning a value to the variable alien_color
let alien_color: string = 'green';

// Checking if the alien's color is green
if (alien_color == 'green') {
    // Printing a message if the condition is true
    console.log("Congratulations! You just earned 5 points.");
}



//version 2

// Assigning a value to the variable alien_color
let alien_color: string = 'yellow';

// Checking if the alien's color is green
if (alien_color == 'green') {
    // Printing a message if the condition is true
    console.log("Congratulations! You just earned 5 points.");
}




//question26

//version 1
// Assigning a value to the variable alien_color
let alien_color: string = 'green';

// Checking if the alien's color is green
if (alien_color == 'green') {
    // Printing a message if the condition is true
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    // Printing a message if the condition is false
    console.log("Congratulations! You just earned 10 points for shooting an alien that is not green.");
}


//version 2
// Assigning a value to the variable alien_color
let alien_color: string = 'red';

// Checking if the alien's color is green
if (alien_color == 'green') {
    // Printing a message if the condition is true
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else {
    // Printing a message if the condition is false
    console.log("Congratulations! You just earned 10 points for shooting an alien that is not green.");
}





//question 27


//version 1
// Assigning a value to the variable alien_color
let alien_color: string = 'green';

// Checking the color of the alien and printing the appropriate message
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}



//version 2

// Assigning a value to the variable alien_color
let alien_color: string = 'yellow';

// Checking the color of the alien and printing the appropriate message
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}





//version 3


// Assigning a value to the variable alien_color
let alien_color: string = 'red';

// Checking the color of the alien and printing the appropriate message
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
} else if (alien_color == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
} else if (alien_color == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}






//question 28

let age: number = 30;

// Determine the person's stage of life using an if-else chain
if (age < 2) {
    console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
} else {
    console.log("The person is an elder.");
}



//question 29

let favorite_fruits: string[] = ["banana", "apple", "strawberry"];

// Write five if statements to check for certain fruits in the array
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

if (favorite_fruits.includes("apple")) {
    console.log("You really like apples!");
}

if (favorite_fruits.includes("orange")) {
    console.log("You really like oranges!");
}

if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberries!");
}

if (favorite_fruits.includes("mango")) {
    console.log("You really like mangoes!");
}



//question 30

// Array of usernames
let usernames: string[] = ["admin", "ayesha", "ali", "sana", "aliya"];

// Loop through the array and print greetings
for (let username of usernames) {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
}




//question 31

let usernames: string[] = ["admin", "ayesha", "ali", "sana", "aliya"];

// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (let username of usernames) {
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        } else {
            console.log(`Hello ${username}, thank you for logging in again.`);
        }
    }
} else {
    console.log("We need to find some users!");
}




//question 32

let current_users: string[] = ["john", "alice", "eric", "susan", "mike"];

// List of new usernames
let new_users: string[] = ["john", "jane", "peter", "susan", "michael"];

// Loop through the new_users list to check for uniqueness
for (let new_user of new_users) {
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    let lowercase_new_user = new_user.toLowerCase();
    
    // Check if the lowercase new username is already in the current_users list
    if (current_users.map(user => user.toLowerCase()).includes(lowercase_new_user)) {
        console.log(`The username '${new_user}' is not available. Please enter a new username.`);
    } else {
        console.log(`The username '${new_user}' is available.`);
    }
}




//question 33
let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Loop through the array
for (let number of numbers) {
    // Use an if-else chain inside the loop to print the proper ordinal ending for each number
    if (number === 1) {
        console.log(`${number}st`);
    } else if (number === 2) {
        console.log(`${number}nd`);
    } else if (number === 3) {
        console.log(`${number}rd`);
    } else {
        console.log(`${number}th`);
    }
}


//question 34

// Array of favorite pizza names
let pizzas: string[] = ["Pepperoni", "Margherita", "BBQ Chicken"];

// Loop through the array to print the name of each pizza
for (let pizza of pizzas) {
    console.log(pizza);
}

console.log("\n");

// Modify the loop to print a sentence using the name of the pizza
for (let pizza of pizzas) {
    console.log(`I like ${pizza} pizza.`);
}

console.log("\n");

// Add a line stating how much you like pizza
console.log("I really love pizza!");





//question 35


// Array of animals
let animals: string[] = ["dog", "cat", "rabbit"];

// Loop through the array to print the name of each animal
for (let animal of animals) {
    console.log(animal);
}

console.log("\n");

// Modify the loop to print a statement about each animal
for (let animal of animals) {
    console.log(`A ${animal} would make a great pet.`);
}

console.log("\n");

// Add a line stating what these animals have in common
console.log("Any of these animals would make a great pet!");






//question 36

// Define the make_shirt function
function make_shirt(size: string, message: string): void {
    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}

// Call the make_shirt function
make_shirt("medium", "Hello, world!");









//question 37

// Define the make_shirt function with default parameters
function make_shirt(size: string = "large", message: string = "I love TypeScript"): void {
    console.log(`You ordered a ${size} shirt with the message: "${message}".`);
}

// Call the make_shirt function with default parameters
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello, OpenAI!"); // Small shirt with custom message



//question 38

// Define the describe_city function with a default parameter for country
function describe_city(city: string, country: string = "Pakistan"): void {
    console.log(`${city} is in ${country}.`);
}

// Call the describe_city function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");


//question 39

// Define the city_country function
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}

// Call the city_country function with city-country pairs and print the returned value
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));


// question 40

// Define the make_album function with an optional parameter for the number of tracks
function make_album(artist: string, title: string, tracks?: number): { artist: string, title: string, tracks?: number } {
    let album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}

// Call the make_album function to create three dictionaries representing different albums
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12);
let album3 = make_album("Artist3", "Album3", 8);

// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);



// question 41

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the show_magicians function with the array of magician's names
show_magicians(magician_names);


// question 42 

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function to modify the array of magicians
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the make_great function to modify the array of magician's names
let great_magicians = make_great(magician_names);

// Call the show_magicians function to see the modified list
show_magicians(great_magicians);


//question 43 

// Define the show_magicians function
function show_magicians(magicians: string[]): void {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define the make_great function to modify a copy of the array of magicians
function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    for (let magician of magicians) {
        great_magicians.push(`the Great ${magician}`);
    }
    return great_magicians;
}

// Array of magician's names
let magician_names: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// Call the make_great function with a copy of the array of magician's names
let great_magicians = make_great([...magician_names]); // Creating a copy of the array using spread operator

// Call the show_magicians function with the original array and the modified array
console.log("Original Magicians:");
show_magicians(magician_names);

console.log("\nMagicians with 'the Great' added:");
show_magicians(great_magicians);


// question 44
// Define the make_sandwich function that accepts a variable number of arguments
function make_sandwich(...items: string[]): void {
    console.log("Making a sandwich with the following items:");
    for (let item of items) {
        console.log("- " + item);
    }
    console.log("Enjoy your sandwich!");
}

// Call the make_sandwich function with different numbers of arguments
make_sandwich("Ham", "Cheese", "Lettuce", "Tomato");
make_sandwich("Turkey", "Swiss cheese", "Mustard");
make_sandwich("Peanut butter", "Jelly");




//question 45

// Define the carInfo function that stores information about a car in an object
function carInfo(manufacturer: string, model: string, ...options: [string, any][]): object {
    let car: { [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    // Loop through the options and store them in the car object
    for (let option of options) {
        car[option[0]] = option[1];
    }

    return car;
}

// Call the carInfo function with required information and additional name-value pairs
let myCar = carInfo("Toyota", "Camry", ["color", "red"], ["year", 2022]);

// Print the object returned by the function
console.log(myCar);
