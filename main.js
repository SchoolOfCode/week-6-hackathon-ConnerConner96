// Room: Room 8
// Name: Conner Adamsons
// Link: REPLACE_ME_WITH_A_LINK_TO_YOUR_PUBLIC_GITHUB_REPO_CONTAINING_THE_KATA
// Overview: This kata is designed to test your ability to manipulate strings and handle edge cases. You will need to write a function that takes a string as input and returns a new string with the first letter of each word capitalized. Good luck!



// Welcome coders! Your challenge.. should you choose to accept it, is to write a function named 'uppercase' 
// It should take a string as its input, and return the first letter of every word in that string as uppercase.
// For example, if the input is "this is the best test ive ever seen", the output should be "This Is The Best Test Ive Ever Seen"
// When you think your function is ready to be put to the test, open the terminal and run the command 'npm test' to see how you did.
// Success?? Great Job! Try to think of other methods of completing the test, and how you could refactor your code to make it even better!
// Failed?? Have a look at the code and the expected result, to see what it is tring to test, and try again!

// If you try to input a number as the input of the function, it should throw and error stating 'Input must be a string'


export default function uppercase(str) {
    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // If the string consists only of spaces, return it as is
    if (str.trim().length === 0) {
        return str;
    }

    // Split by one or more whitespace characters (handles multiple spaces)
    let words = str.split(/\s+/);

    // Capitalize the first letter of each word and lowercase the rest
    let result = words.map(word => {
        // Find the first alphabetic character and capitalize it
        const firstLetterIndex = [...word].findIndex(char => /[a-zA-Z]/.test(char));
        
        if (firstLetterIndex !== -1) {
            // Capitalize the first alphabetic character
            return word.slice(0, firstLetterIndex) + 
                   word.charAt(firstLetterIndex).toUpperCase() + 
                   word.slice(firstLetterIndex + 1).toLowerCase();
        }
        // If the word doesn't start with an alphabet character, leave it as is
        return word;
    });

    // Join the words back together with a single space
    return result.join(' ');
}


// export default function uppercase(str) {
// }
console.log(uppercase("hello     world"));
