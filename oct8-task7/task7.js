// Log a random number between 0 and 1
// console.log(Math.random());

// Log the ceiling of 2.3 (rounds up)
// console.log(Math.ceil(2.3));

// Get the input element by its ID
let userInE1 = document.getElementById("userIn");
let  msgE1 = document.getElementById("msg");
let countValEl =document.getElementById("countVal");

// Generate a random number between 1 and 100
let randomNum = Math.ceil(Math.random() * 100);

// Log the generated random number
console.log(randomNum);
let counter=0;
// Function to handle input change and compare with randomNum
function OnChangeUserIn() {
    counter = counter+1;
    // Parse the input value as an integer
    let userval = parseInt(userInE1.value);

    // Check if the input value is higher, lower, or equal to randomNum
    if (userval > randomNum) {
        // console.log("It's too high");
        msgE1.textContent="It's too high";


    } else if (userval < randomNum) {
        // console.log("It's too low");
        msgE1.textContent="It's too low";


    } else {

        // console.log("You won!");
        msgE1.textContent="you won";

    }
    countValEl.textContent= `You guessed it in ${counter} attempt`;

}
