// Sound Variable
let tom1 = new Audio('sounds/tom-1.mp3');
let tom2 = new Audio('sounds/tom-2.mp3');
let tom3 = new Audio('sounds/tom-3.mp3');
let tom4 = new Audio('sounds/tom-4.mp3');
let snare = new Audio('sounds/snare.mp3');
let crash = new Audio('sounds/crash.mp3');
let kick = new Audio('sounds/kick-bass.mp3');
// array for button drum
let arrayBtn = document.querySelectorAll("button");
// for loop to make event listener for all button
for (let i = 0; i < arrayBtn.length; i++) {
    //query selector for all button and add event listener when button is clicked
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        let clickedBtn = this;
        // change back text button color 
        function clearColor(){
            clickedBtn.classList.remove("red");
        }
        // change text button to yellow after button click
        // clickedBtn.style.color = "red";
        clickedBtn.classList.add("red");
        // set time 2s for change back text button color
        let intervalId = setInterval(function() {
            clearColor();
            clearInterval(intervalId); // Menghentikan interval setelah fungsi dijalankan sekali
        }, 2000);
        // conditional statement for clicked button
        switch (i) {
            case 0:
                tom1.play();
                break
            case 1:
                tom2.play();
                break
            case 2:
                tom3.play();
                break
            case 3:
                tom4.play();
                break
            case 4:
                snare.play();
                break
            case 5:
                crash.play();
                break
            case 6:
                kick.play();
                break
            default:
                break
        }
    });
}

//query selector for in window and add event listener when keyboard button is pressed
window.addEventListener("keypress", function (e) {
    //change key when keyboard button pressed into lowercase
    let pressKey = e.key.toLowerCase();
    //  get element by class name
    let elementClicked = document.getElementsByClassName(pressKey)
     // consitional statement for key pressed
    switch (pressKey) {
        case "w":
            tom1.play();
            break
        case "a":
            tom2.play();
            break
        case "s":
            tom3.play();
            break
        case "d":
            tom4.play();
            break
        case "j":
            snare.play();
            break
        case "k":
            crash.play();
            break
        case "l":
            kick.play();
            break
        default:
            alert(`Kunci ${pressKey} tidak ditemukan dalam drum`);
            break
    }    
    // change back text color 
    function clearColor(){
        // elementClicked[0].style.color = "#DA0463";
        elementClicked[0].classList.remove("red");
    }
    // change text button to yellow after key presses
    // elementClicked[0].style.color = "red";
    elementClicked[0].classList.add("red");
    // set time 2s for change back text button color
    let intervalId = setInterval(function() {
        clearColor();
        clearInterval(intervalId); // Menghentikan interval setelah fungsi dijalankan sekali
    }, 2000);
    // setTimeout(clearColor, 2000)
});