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



//Get the value and put it inside the variable
var passwordInput = document.getElementById('typed-password');

//Store machine guesses times. Guesses/second
var machines = {

    'Atari 2600': 0.1,
    'Modern Computer': 1e9, //1 billion
    'Super Computer': 1e12, //1 trillion
    'Quantum Computer': 1e15 //1 quadrillion
};

//Calculate and display brute force time
function passwordInputChange(){

    var symbols = 92;
    var size = passwordInput.value.length;

    //calculate total combinations
    var totalCombinations = Math.pow(symbols, size);

    //calculate time for a modern computer
    calculateModern(totalCombinations);
    //calculate time for quantum computer
    calculateQuantum(totalCombinations);
    //calculate time for atari computer
    calculateAtari(totalCombinations);
    //calculate time for super computer
    calculateSuper(totalCombinations);
    //check password length
    changeInputColor(size);
    
}

function changeInputColor(size){

    const element = document.querySelector('input');

    if(size >= 14){
        element.style.borderColor = 'green'
    }
    else{
        element.style.borderColor = 'red'
    }
}

function calculateAtari(combinations){

     //calculate total time
     var totalTime = combinations/machines['Atari 2600'];

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
function calculateQuantum(combinations){

    //calculate total time
    var totalTime = combinations/machines["Quantum Computer"];

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

