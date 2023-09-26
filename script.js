// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var h9 = document.getElementById(".hour-9");
var h10 = document.getElementById("hour-10");
var h11 = document.getElementById("hour-11");
var h12 = document.getElementById("hour-12");
var hour1 = document.getElementById("hour-1");
var hour2 = document.getElementById("hour-2");
var hour3 = document.getElementById("hour-3");
var hour4 = document.getElementById("hour-4");
var hour5 = document.getElementById("hour-5");

      var btn = document.querySelector('.btn')
     document.querySelector(".btn").addEventListener("click", function() {
        console.log("Hey!  You clicked the button!", localStorage);
      });

       var btn1 = document.querySelector('.btn1')
       document.querySelector(".btn1").addEventListener("click", function() {
         console.log("Hey!  You clicked the button!");
       });

       var btn2 = document.querySelector('.btn2')
       document.querySelector(".btn2").addEventListener("click", function() {
         console.log("Hey!  You clicked the button!");
       });

       var btn3 = document.querySelector('.btn3')
       document.querySelector(".btn3").addEventListener("click", function() {
         console.log("Hey!  You clicked the button!");
       });

       var btn4 = document.querySelector('.btn4')
       document.querySelector(".btn4").addEventListener("click", function() {
         console.log("Hey!  You clicked the button!");
       });

       var btn5 = document.querySelector('.btn5')
       document.querySelector(".btn5").addEventListener("click", function() {
         console.log("Hey!  You clicked the button!");
       });

       var btn7 = document.querySelector('.btn7')
       document.querySelector(".btn7").addEventListener("click", function() {
         console.log("Hey!  You clicked the button!");
       });

       var btn8 = document.querySelector('.btn8')
       document.querySelector(".btn8").addEventListener("click", function() {
         console.log("Hey!  You clicked the button!");
       });

       var btn9 = document.querySelector('.btn9')
       document.querySelector(".btn9").addEventListener("click", function() {
         console.log("Hey!  You clicked the button!");
       });

$(function () {
 

    // TODO: Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. HINT: What does `this` reference in the click listener
    // function? How can DOM traversal be used to get the "hour-x" id of the
    // time-block containing the button that was clicked? How might the id be
    // useful when saving the description in local storage?  
 
      

    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    // TODO: Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements. HINT: How can the id
    // attribute of each time-block be used to do this?

    // TODO: Add code to display the current date in the header of the page.
var today = dayjs();
    $('#currentDay').text(today.format('dddd, MMM D, YYYY'));
});