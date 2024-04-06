var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
//question1
console.log("hello world!");
//question2
var myName = "alina";
var message = "do you wanna hangout tonight?";
console.log(myName + " " + message);
//Question3
var personName = "John wick";
console.log("Lowercase:", personName.toLowerCase());
console.log("Uppercase:", personName.toUpperCase());
console.log("Titlecase:", toTitleCase(personName));
function toTitleCase(str) {
    return str.toLowerCase().replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    });
}
//Question4
var quote = "With faith, discipline and selfless devotion to duty, there is nothing worthwhile that you cannot achieve";
var author = "Quaid e Azam Muhammad Ali Jinnah";
console.log("\"".concat(quote, "\" - ").concat(author));
//Question5
var quaid_e_azam = "Quaid-e-Azam Muhammad Ali Jinnah";
var quote = "Failure is a word unknown to me.";
console.log("".concat(quaid_e_azam, " once said, \"").concat(quote, "\""));
//Question6
var name_with_whitespace = "\t \n John Wick \t\n";
console.log("Name with whitespace:");
console.log(name_with_whitespace);
var stripped_name = name_with_whitespace.trim();
console.log("\nStripped name:");
console.log(stripped_name);
//question7
// Addition operation
console.log("Addition:");
console.log(5 + 3); // Outputs: 8
// Subtraction operation
console.log("\nSubtraction:");
console.log(10 - 2); // Outputs: 8
// Multiplication operation
console.log("\nMultiplication:");
console.log(4 * 2); // Outputs: 8
// Division operation
console.log("\nDivision:");
console.log(16 / 2); // Outputs: 8
//Question8
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);
//Question9
var favoriteNumber = 10;
var message = "My favorite number is ".concat(favoriteNumber, ".");
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
var favoriteNumber = 10;
// Create a message revealing your favorite number
var message = "My favorite number is ".concat(favoriteNumber, ".");
// Print the message
console.log(message);
//Question11
var names = ["Sumaiya", "Samreen", "Ayesha", "Aleena"];
console.log("Names of my friends:");
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}
//Question12
var names = ["Sumaiya", "Samreen", "Ayesha", "Aleena"];
console.log("Greetings to my friends:");
for (var i = 0; i < names.length; i++) {
    console.log("Hello, ".concat(names[i], "! Have a great day!"));
}
//Question13
var modesOfTransportation = ["Kawasaki Ninja H2R", "Toyota Corolla", "BMX bikes"];
for (var i = 0; i < modesOfTransportation.length; i++) {
    console.log("I would like to own a ".concat(modesOfTransportation[i], "."));
}
//Question14
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
//question15
var newGuests = ["Sana", "Subhan", "Ahsan", "Aayat"];
console.log("Updated Invitations to Dinner:");
for (var i = 0; i < newGuests.length; i++) {
    console.log("Dear ".concat(newGuests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
//Question14 part1
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
var cantMakeIt = "Alina";
console.log("".concat(cantMakeIt, " can't make it to the dinner."));
//Question14 part2
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima aman]"));
}
var cantMakeIt = "Alina";
var newPerson = "Amaan";
var indexOfGuestWhoCantMakeIt = guests.indexOf(cantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPerson;
}
console.log("\nUpdated Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima aman]"));
}
//Question14 part3
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
var cantMakeIt = "Alina";
var newPerson = "Amaan";
var indexOfGuestWhoCantMakeIt = guests.indexOf(cantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPerson;
}
console.log("\nSecond Set of Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nPlease don't forget to join us for dinner tomorrow night. We look forward to seeing you!\nBest regards,\n[Aima Aman]"));
}
//Question16
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
var cantMakeIt = "Alina";
var newPerson = "Amaan";
var indexOfGuestWhoCantMakeIt = guests.indexOf(cantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPerson;
}
var newGuests = ["Umaima", "Huzaima", "Safeet", "Zarmeen"];
guests.push.apply(guests, newGuests);
console.log("\nAdditional Invitations to Dinner:");
for (var i = 0; i < newGuests.length; i++) {
    console.log("Dear ".concat(newGuests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[AimaAman]"));
}
//Question16 part1
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
var cantMakeIt = "Alina";
var newPerson = "Amaan";
var indexOfGuestWhoCantMakeIt = guests.indexOf(cantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPerson;
}
var newGuests = ["Umaima", "Huzaima", "Safeet", "Zarmeen"];
guests.push.apply(guests, newGuests);
console.log("\nAdditional Invitations to Dinner:");
for (var i = 0; i < newGuests.length; i++) {
    console.log("Dear ".concat(newGuests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
console.log("\nGood news! We have found a bigger dinner table. See you all soon!");
//Question16 part 2
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
// Name of the new guest to add to the beginning of the array
var newGuest = "Ali";
// Add the new guest to the beginning of the array
guests.unshift(newGuest);
// Name of the guest who can't make it
var cantMakeIt = "Alina";
// Name of the new person you are inviting
var newPerson = "Amaan";
// Replace the name of the guest who can't make it with the name of the new person
var indexOfGuestWhoCantMakeIt = guests.indexOf(cantMakeIt);
if (indexOfGuestWhoCantMakeIt !== -1) {
    guests[indexOfGuestWhoCantMakeIt] = newPerson;
}
// Names of three new guests to invite to dinner
var newGuests = ["Umaima", "Huzaima", "Safeet", "Zarmeen"];
// Add new guests to the dinner invitation list
guests.push.apply(guests, newGuests);
// Print invitations for the new guests
console.log("\nAdditional Invitations to Dinner:");
for (var i = 0; i < newGuests.length; i++) {
    console.log("Dear ".concat(newGuests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
// Print a message informing people that a bigger dinner table has been found
console.log("\nGood news! We have found a bigger dinner table. See you all soon!");
//Question16 part 3
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
// Name of the new guest to add to the middle of the array
var newGuestMiddle = "Ali";
// Add the new guest to the middle of the array
guests.splice(Math.ceil(guests.length / 2), 0, newGuestMiddle);
// Name of the new guest to add to the end of the list
var newGuestEnd = "Zoya";
// Append the new guest to the end of the list
guests.push(newGuestEnd);
// Print a new set of invitation messages for each person in the list
console.log("\nUpdated Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
//Question17
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
// Name of the new guest to add to the middle of the array
var newGuestMiddle = "Ali";
// Add the new guest to the middle of the array
guests.splice(Math.ceil(guests.length / 2), 0, newGuestMiddle);
// Name of the new guest to add to the end of the list
var newGuestEnd = "Zoya";
// Append the new guest to the end of the list
guests.push(newGuestEnd);
// Print a new set of invitation messages for each person in the list
console.log("\nUpdated Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
// Print a message saying that only two people can be invited for dinner
console.log("\nUnfortunately, we can only invite two people for dinner.");
//17part2 and part3
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya", "Ali", "Zoya"];
// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
// Print a message saying that only two people can be invited for dinner
console.log("\nUnfortunately, we can only invite two people for dinner.");
// Remove guests from the list one at a time until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove the last guest from the list
    if (removedGuest !== undefined) {
        console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
    }
}
// Print the final list of guests who are invited to dinner
console.log("\nFinal List of Guests Invited to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i], ", you are still invited to dinner."));
}
//17 part 4
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya", "Ali", "Zoya"];
// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
// Print a message saying that only two people can be invited for dinner
console.log("\nUnfortunately, we can only invite two people for dinner.");
// Remove guests from the list one at a time until only two names remain
while (guests.length > 2) {
    var removedGuest = guests.pop(); // Remove the last guest from the list
    if (removedGuest !== undefined) {
        console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
    }
}
// Remove the last two names from the list to have an empty list
guests.pop();
guests.pop();
// Print the list to make sure it's empty
console.log("\nList of Guests at the End of the Program:");
console.log(guests); // Should output an empty array []
//question18
var placesToVisit = [
    "Paris, France",
    "Santorini, Greece",
    "Kyoto, Japan",
    "Machu Picchu, Peru",
    "Serengeti National Park, Tanzania"
];
console.log("Places I'd Like to Visit:");
for (var i = 0; i < placesToVisit.length; i++) {
    console.log("".concat(i + 1, ". ").concat(placesToVisit[i]));
}
//parts1,2,3,4
var locations = [
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
console.log(__spreadArray([], locations, true).sort());
// Show that the array is still in its original order
console.log("\nOriginal Order (Still Intact):");
console.log(locations);
// Print the array in reverse alphabetical order without changing the order of the original list
console.log("\nReverse Alphabetical Order:");
console.log(__spreadArray([], locations, true).sort().reverse());
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
locations.sort(function (a, b) { return b.localeCompare(a); });
// Print the list to show that its order has changed
console.log("\nReverse Alphabetical Order:");
console.log(locations);
//question19
var guests = ["Ayesha", "Alina", "Samreen", "Sumaiya"];
// Print an invitation message to each guest
console.log("Invitations to Dinner:");
for (var i = 0; i < guests.length; i++) {
    console.log("Dear ".concat(guests[i], ",\nYou are cordially invited to dinner at my place. Please join us for a wonderful evening!\nBest regards,\n[Aima Aman]"));
}
// Print a message indicating the number of people being invited to dinner
console.log("\nYou are inviting ".concat(guests.length, " people to dinner."));
//question20
// Array containing famous rivers
var rivers = [
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
for (var _i = 0, rivers_1 = rivers; _i < rivers_1.length; _i++) {
    var river = rivers_1[_i];
    console.log(river);
}
// Array containing famous mountains
var mountains = [
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
for (var _a = 0, mountains_1 = mountains; _a < mountains_1.length; _a++) {
    var mountain = mountains_1[_a];
    console.log(mountain);
}
// Array containing famous countries
var countries = [
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
var cities = [
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
var languages = [
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
for (var _b = 0, countries_1 = countries; _b < countries_1.length; _b++) {
    var country = countries_1[_b];
    console.log(country);
}
// Print the list of cities
console.log("\nList of Famous Cities:");
for (var _c = 0, cities_1 = cities; _c < cities_1.length; _c++) {
    var city = cities_1[_c];
    console.log(city);
}
// Print the list of languages
console.log("\nList of Famous Languages:");
for (var _d = 0, languages_1 = languages; _d < languages_1.length; _d++) {
    var language = languages_1[_d];
    console.log(language);
}
//question21
// Define TypeScript objects representing famous landmarks
var landmarks = [
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
for (var _e = 0, landmarks_1 = landmarks; _e < landmarks_1.length; _e++) {
    var landmark = landmarks_1[_e];
    console.log("Name: ".concat(landmark.name));
    console.log("Location: ".concat(landmark.location));
    console.log("Description: ".concat(landmark.description, "\n"));
}
//question22
// Define an array of fruits
var fruits = ["Apple", "Banana", "Orange"];
// Try to access an element at an index that doesn't exist
// This will cause an array index error
console.log(fruits[3]); // Accessing index 3, which is out of bounds
// The above line will cause an array index error, so it needs to be corrected
// We can correct it by accessing an index within the bounds of the array
// Correcting the error
console.log("Corrected Access:");
console.log(fruits[2]); // Accessing index 2, which is within bounds
//question23
var number = 10;
var string = 'hello';
var booleanTrue = true;
var booleanFalse = false;
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
var string1 = 'hello';
var string2 = 'world';
var number1 = 5;
var number2 = 10;
var array = [1, 2, 3, 4, 5];
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
var alien_color = 'green';
// Checking if the alien's color is green
if (alien_color == 'green') {
    // Printing a message if the condition is true
    console.log("Congratulations! You just earned 5 points.");
}
//version 2
// Assigning a value to the variable alien_color
var alien_color = 'yellow';
// Checking if the alien's color is green
if (alien_color == 'green') {
    // Printing a message if the condition is true
    console.log("Congratulations! You just earned 5 points.");
}
//question26
//version 1
// Assigning a value to the variable alien_color
var alien_color = 'green';
// Checking if the alien's color is green
if (alien_color == 'green') {
    // Printing a message if the condition is true
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    // Printing a message if the condition is false
    console.log("Congratulations! You just earned 10 points for shooting an alien that is not green.");
}
//version 2
// Assigning a value to the variable alien_color
var alien_color = 'red';
// Checking if the alien's color is green
if (alien_color == 'green') {
    // Printing a message if the condition is true
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else {
    // Printing a message if the condition is false
    console.log("Congratulations! You just earned 10 points for shooting an alien that is not green.");
}
//question 27
//version 1
// Assigning a value to the variable alien_color
var alien_color = 'green';
// Checking the color of the alien and printing the appropriate message
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//version 2
// Assigning a value to the variable alien_color
var alien_color = 'yellow';
// Checking the color of the alien and printing the appropriate message
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//version 3
// Assigning a value to the variable alien_color
var alien_color = 'red';
// Checking the color of the alien and printing the appropriate message
if (alien_color == 'green') {
    console.log("Congratulations! You just earned 5 points for shooting the green alien.");
}
else if (alien_color == 'yellow') {
    console.log("Congratulations! You just earned 10 points for shooting the yellow alien.");
}
else if (alien_color == 'red') {
    console.log("Congratulations! You just earned 15 points for shooting the red alien.");
}
//question 28
var age = 30;
// Determine the person's stage of life using an if-else chain
if (age < 2) {
    console.log("The person is a baby.");
}
else if (age >= 2 && age < 4) {
    console.log("The person is a toddler.");
}
else if (age >= 4 && age < 13) {
    console.log("The person is a kid.");
}
else if (age >= 13 && age < 20) {
    console.log("The person is a teenager.");
}
else if (age >= 20 && age < 65) {
    console.log("The person is an adult.");
}
else {
    console.log("The person is an elder.");
}
//question 29
var favorite_fruits = ["banana", "apple", "strawberry"];
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
var usernames = ["admin", "ayesha", "ali", "sana", "aliya"];
// Loop through the array and print greetings
for (var _f = 0, usernames_1 = usernames; _f < usernames_1.length; _f++) {
    var username = usernames_1[_f];
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for logging in again."));
    }
}
//question 31
var usernames = ["admin", "ayesha", "ali", "sana", "aliya"];
// Check if the list of users is not empty
if (usernames.length > 0) {
    // Loop through the array and print greetings
    for (var _g = 0, usernames_2 = usernames; _g < usernames_2.length; _g++) {
        var username = usernames_2[_g];
        if (username === "admin") {
            console.log("Hello admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(username, ", thank you for logging in again."));
        }
    }
}
else {
    console.log("We need to find some users!");
}
//question 32
var current_users = ["john", "alice", "eric", "susan", "mike"];
// List of new usernames
var new_users = ["john", "jane", "peter", "susan", "michael"];
// Loop through the new_users list to check for uniqueness
for (var _h = 0, new_users_1 = new_users; _h < new_users_1.length; _h++) {
    var new_user = new_users_1[_h];
    // Convert both current and new usernames to lowercase for case-insensitive comparison
    var lowercase_new_user = new_user.toLowerCase();
    // Check if the lowercase new username is already in the current_users list
    if (current_users.map(function (user) { return user.toLowerCase(); }).includes(lowercase_new_user)) {
        console.log("The username '".concat(new_user, "' is not available. Please enter a new username."));
    }
    else {
        console.log("The username '".concat(new_user, "' is available."));
    }
}
//question 33
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Loop through the array
for (var _j = 0, numbers_1 = numbers; _j < numbers_1.length; _j++) {
    var number_1 = numbers_1[_j];
    // Use an if-else chain inside the loop to print the proper ordinal ending for each number
    if (number_1 === 1) {
        console.log("".concat(number_1, "st"));
    }
    else if (number_1 === 2) {
        console.log("".concat(number_1, "nd"));
    }
    else if (number_1 === 3) {
        console.log("".concat(number_1, "rd"));
    }
    else {
        console.log("".concat(number_1, "th"));
    }
}
//question 34
// Array of favorite pizza names
var pizzas = ["Pepperoni", "Margherita", "BBQ Chicken"];
// Loop through the array to print the name of each pizza
for (var _k = 0, pizzas_1 = pizzas; _k < pizzas_1.length; _k++) {
    var pizza = pizzas_1[_k];
    console.log(pizza);
}
console.log("\n");
// Modify the loop to print a sentence using the name of the pizza
for (var _l = 0, pizzas_2 = pizzas; _l < pizzas_2.length; _l++) {
    var pizza = pizzas_2[_l];
    console.log("I like ".concat(pizza, " pizza."));
}
console.log("\n");
// Add a line stating how much you like pizza
console.log("I really love pizza!");
//question 35
// Array of animals
var animals = ["dog", "cat", "rabbit"];
// Loop through the array to print the name of each animal
for (var _m = 0, animals_1 = animals; _m < animals_1.length; _m++) {
    var animal = animals_1[_m];
    console.log(animal);
}
console.log("\n");
// Modify the loop to print a statement about each animal
for (var _o = 0, animals_2 = animals; _o < animals_2.length; _o++) {
    var animal = animals_2[_o];
    console.log("A ".concat(animal, " would make a great pet."));
}
console.log("\n");
// Add a line stating what these animals have in common
console.log("Any of these animals would make a great pet!");
//question 36
// Define the make_shirt function
function make_shirt(size, message) {
    console.log("You ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
// Call the make_shirt function
make_shirt("medium", "Hello, world!");
//question 37
// Define the make_shirt function with default parameters
function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love TypeScript"; }
    console.log("You ordered a ".concat(size, " shirt with the message: \"").concat(message, "\"."));
}
// Call the make_shirt function with default parameters
make_shirt(); // Large shirt with default message
make_shirt("medium"); // Medium shirt with default message
make_shirt("small", "Hello, OpenAI!"); // Small shirt with custom message
//question 38
// Define the describe_city function with a default parameter for country
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the describe_city function for three different cities
describe_city("Karachi");
describe_city("Lahore");
describe_city("New York", "USA");
//question 39
// Define the city_country function
function city_country(city, country) {
    return "".concat(city, ", ").concat(country);
}
// Call the city_country function with city-country pairs and print the returned value
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));
// question 40
// Define the make_album function with an optional parameter for the number of tracks
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks !== undefined) {
        album.tracks = tracks;
    }
    return album;
}
// Call the make_album function to create three dictionaries representing different albums
var album1 = make_album("Artist1", "Album1");
var album2 = make_album("Artist2", "Album2", 12);
var album3 = make_album("Artist3", "Album3", 8);
// Print each return value to show that Objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
// question 41
// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Array of magician's names
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the show_magicians function with the array of magician's names
show_magicians(magician_names);
// question 42 
// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_2 = magicians; _i < magicians_2.length; _i++) {
        var magician = magicians_2[_i];
        console.log(magician);
    }
}
// Define the make_great function to modify the array of magicians
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_3 = magicians; _i < magicians_3.length; _i++) {
        var magician = magicians_3[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
// Array of magician's names
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the make_great function to modify the array of magician's names
var great_magicians = make_great(magician_names);
// Call the show_magicians function to see the modified list
show_magicians(great_magicians);
//question 43 
// Define the show_magicians function
function show_magicians(magicians) {
    for (var _i = 0, magicians_4 = magicians; _i < magicians_4.length; _i++) {
        var magician = magicians_4[_i];
        console.log(magician);
    }
}
// Define the make_great function to modify a copy of the array of magicians
function make_great(magicians) {
    var great_magicians = [];
    for (var _i = 0, magicians_5 = magicians; _i < magicians_5.length; _i++) {
        var magician = magicians_5[_i];
        great_magicians.push("the Great ".concat(magician));
    }
    return great_magicians;
}
// Array of magician's names
var magician_names = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];
// Call the make_great function with a copy of the array of magician's names
var great_magicians = make_great(__spreadArray([], magician_names, true)); // Creating a copy of the array using spread operator
// Call the show_magicians function with the original array and the modified array
console.log("Original Magicians:");
show_magicians(magician_names);
console.log("\nMagicians with 'the Great' added:");
show_magicians(great_magicians);
// question 44
// Define the make_sandwich function that accepts a variable number of arguments
function make_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with the following items:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
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
function carInfo(manufacturer, model) {
    var options = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        options[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    // Loop through the options and store them in the car object
    for (var _a = 0, options_1 = options; _a < options_1.length; _a++) {
        var option = options_1[_a];
        car[option[0]] = option[1];
    }
    return car;
}
// Call the carInfo function with required information and additional name-value pairs
var myCar = carInfo("Toyota", "Camry", ["color", "red"], ["year", 2022]);
// Print the object returned by the function
console.log(myCar);
