document.addEventListener("DOMContentLoaded", function(){


var btnQuantum = document.getElementById("quantum")
var btnAtari = document.getElementById("atari")
var btnSuper = document.getElementById("super")
var btnModern = document.getElementById("modern")

//Get the dialog
var modalQuantum = document.getElementById("dialogQuantum")
var modalAtari = document.getElementById("dialogAtari")
var modalModern = document.getElementById("dialogModern")
var modalSuper = document.getElementById("dialogSuper")

//Get the close button
var btnCloses = document.querySelectorAll("dialog button.modal-close")

//When user clicks image, open modal
btnQuantum.addEventListener("click", () => {
    modalQuantum.showModal()
})

btnAtari.addEventListener("click", () => {
    modalAtari.showModal()
})

btnSuper.addEventListener("click", () => {
    modalSuper.showModal()
})

btnModern.addEventListener("click", () => {
    modalModern.showModal()
})

//Attach a close event to every close button
btnCloses.forEach(function(btnClose) {
    btnClose.addEventListener("click", function(){
        var dialog = btnClose.closest('dialog');
        dialog.close();
    });
});



//user typed password 
var passwordInput = document.getElementById('typed-password');



//Store machine guesses times. Guesses/second, oracle rate for quantum. See notes. 
var machines = {

    'Atari 2600': 1,
    'Modern Computer': 5750, 
    'Super Computer': 42000000, 
    'Quantum Computer': 1000,
};

//Calculate and display brute force time
function passwordInputChange(){

    //Takes user input password and lets zxcvbn use it
    var pwd = passwordInput.value;
    var zx = zxcvbn(pwd);
    
    

    console.log(zx.guesses);

    //calculate time for atari computer
    calculateAtari(zx.guesses);
    //calculate time for a modern computer
    calculateModern(zx.guesses);
    //calculate time for super computer
    calculateSuper(zx.guesses);
    //calculate time for quantum computer
    calculateQuantum(zx.guesses);
    //change the color of the input bar
    changeInputColor(zx);
    

    
   
    
}

//Uses zxcvbn to determine the strength of the password, gives a range of numbers
//between 0-4, which changes the color accordingly

function changeInputColor(value){


    const element = document.querySelector('input');


    if(value.score == 4){
        element.style.borderColor = 'green';
    }
    else if (value.score == 3){{
        element.style.borderColor = 'orange';
    }

    }
    else if (value.score == 2){
        element.style.borderColor = 'red';
    }
    else {
        element.style.borderColor = 'rgb(218, 208, 208)';
    }
}

function calculateAtari(guesses){

     //calculate total time
     var totalTime = guesses/machines['Atari 2600'];

     //calculate the time
     var computedTime = timeComputation(totalTime);
 
     //display the time
     document.getElementById('AtariYears').textContent = computedTime.years + " years";
     document.getElementById('AtariMonths').textContent = computedTime.months + " months";
     document.getElementById('AtariDays').textContent = computedTime.days + " days";
     document.getElementById('AtariHours').textContent = computedTime.hours + " hours";
     document.getElementById('AtariMinutes').textContent = computedTime.minutes + " minutes";
     document.getElementById('AtariSeconds').textContent = computedTime.seconds + " seconds";
     document.getElementById('AtariMilliseconds').textContent = computedTime.milliseconds + " milliseconds";
     document.getElementById('AtariMicroseconds').textContent = computedTime.microseconds + " microseconds";

}
function calculateModern(combinations){

     //calculate total time
     var totalTime = combinations/machines['Modern Computer'];

     //calculate the time
     var computedTime = timeComputation(totalTime);
 
     //display the time
     document.getElementById('ModernYears').textContent = computedTime.years + " years";
     document.getElementById('ModernMonths').textContent = computedTime.months + " months";
     document.getElementById('ModernDays').textContent = computedTime.days + " days";
     document.getElementById('ModernHours').textContent = computedTime.hours + " hours";
     document.getElementById('ModernMinutes').textContent = computedTime.minutes + " minutes";
     document.getElementById('ModernSeconds').textContent = computedTime.seconds + " seconds";
     document.getElementById('ModernMilliseconds').textContent = computedTime.milliseconds + " milliseconds";
     document.getElementById('ModernMicroseconds').textContent = computedTime.microseconds + " microseconds";

    
}
function calculateSuper(combinations){

     //calculate total time
     var totalTime = combinations/machines['Super Computer'];

     //calculate the time
     var computedTime = timeComputation(totalTime);
 
     //display the time
     document.getElementById('SuperYears').textContent = computedTime.years + " years";
     document.getElementById('SuperMonths').textContent = computedTime.months + " months";
     document.getElementById('SuperDays').textContent = computedTime.days + " days";
     document.getElementById('SuperHours').textContent = computedTime.hours + " hours";
     document.getElementById('SuperMinutes').textContent = computedTime.minutes + " minutes";
     document.getElementById('SuperSeconds').textContent = computedTime.seconds + " seconds";
     document.getElementById('SuperMilliseconds').textContent = computedTime.milliseconds + " milliseconds";
     document.getElementById('SuperMicroseconds').textContent = computedTime.microseconds + " microseconds";
     
    
}
function calculateQuantum(guesses){

    //calculate total time
    var totalTime = (Math.sqrt(guesses))/machines["Quantum Computer"];

    //calculate the time
    var computedTime = timeComputation(totalTime);

    //display the time
    document.getElementById('QuantumYears').textContent = computedTime.years + " years";
    document.getElementById('QuantumMonths').textContent = computedTime.months + " months";
    document.getElementById('QuantumDays').textContent = computedTime.days + " days";
    document.getElementById('QuantumHours').textContent = computedTime.hours + " hours";
    document.getElementById('QuantumMinutes').textContent = computedTime.minutes + " minutes";
    document.getElementById('QuantumSeconds').textContent = computedTime.seconds + " seconds";
    document.getElementById('QuantumMilliseconds').textContent = computedTime.milliseconds + " milliseconds";
    document.getElementById('QuantumMicroseconds').textContent = computedTime.microseconds + " microseconds";
    
}

//Convert seconds to years, months...etc
function timeComputation(time){

    //calculate the year
    var years = Math.floor(time/31536000); 
    //calculate the time left over
    var remainder = time % 31536000;

    //calculate the month
    var months = Math.floor(remainder/2628000);
    remainder %= 2628000;

    //calculate the days
    var days = Math.floor(remainder/86400);
    remainder %= 86400;

    //calculate the hours
    var hours = Math.floor(remainder/3600);
    remainder %= 3600;

    //calculate the minutes
    var minutes = Math.floor(remainder/60);
    remainder %= 60;

    //calculate the seconds
    var seconds = Math.floor(remainder);

    // Convert the fractional part of seconds into milliseconds and microseconds
    var fractionalSeconds = remainder - seconds; // This is a number between 0 and 1

    //calculate milliseconds
    var milliseconds = Math.floor(fractionalSeconds * 1000); // Convert to milliseconds

    //calculate microseconds
    var microseconds = Math.floor((fractionalSeconds * 1000000) - (milliseconds * 1000)); // Convert to microseconds

    //return time values back to method
    return {

        years: years,
        months: months,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds,
        milliseconds: milliseconds,
        microseconds: microseconds

    };
}

//call the passwordinputchange method everytime there is a new input
passwordInput.addEventListener('input', passwordInputChange);

});

