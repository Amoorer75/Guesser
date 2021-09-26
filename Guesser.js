function letterGuesser(){

    let letter = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
    let randomLet = letter.Math.floor(Math.random() * letter.length)
    let letter_Guesser = prompt("your letter is : " + randomLet + " guess it's index number")

    if (letter_Guesser === randomLet){

        alert("")
    }
}
document.getElementsById("letter").outerHTML = letterGuesser();