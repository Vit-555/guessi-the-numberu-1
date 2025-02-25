let chosenNumbersList = [];
let numberCap = 10;
let secretNumber = generateRandomNumber();
let tries = 1;

console.log( secretNumber );

function showText(tag, text) {

    let field = document.querySelector( tag );
    field.innerHTML = text;

}


function initialText() {

    showText( "h1", "Secret nunber game!" );
    showText( "p", "Choose a number from 1 to 10!" );

}

initialText();

function verifyGuess() {

    let guess = document.querySelector( "input" ).value;

    if( guess == secretNumber) {

        showText( "h1", "Congratulations!" );
        let triesOrTry = tries > 1 ? "tries, acceptable" : "try, nice :3!";
        showText( "p", `You saved the world! (${tries} ${triesOrTry})` );

        document.getElementById( "resetButton" ).removeAttribute( "disabled" );

    } else {

        showText( "h1", "YA DUMB (Sorry :3)" );

        if( guess > secretNumber ) {

        showText( "p", "This number should be lower, dummy!" );

        } else {

        showText( "p", "This number should be higher, dum-dum!" )

        } 
        
        tries = tries + 1;

        resetField();

    }

}

function resetGame() {

    secretNumber = generateRandomNumber();
    
    resetField();

    tries = 1;

    initialText();

    document.getElementById( "resetButton" ).setAttribute( "disabled", true );

}

function generateRandomNumber() {

    let secretNumber = parseInt(Math.random() * numberCap + 1);
    let listCap = chosenNumbersList.length;

    if (listCap == numberCap ) {

        chosenNumbersList = [];

    }

    if (chosenNumbersList.includes(secretNumber)) {

        return generateRandomNumber();

    } else {

        chosenNumbersList.push(secretNumber);

        console.log(chosenNumbersList);

        return secretNumber;
    }
}

function resetField() {

    guess = document.querySelector( "input" );
    guess.value = "";

}

console.log( "P R E S S   T H E   B U T T O N" );