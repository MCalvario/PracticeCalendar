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

var h9description = document.querySelector(".h9description");
//localStorage.setItem("server", input.val());

var storedValue = localStorage.getItem("h9description");



//var saveTextInput = h9

//localStorage.setItem("h9", saveTextInput);

//var h9 = localStorage.getItem("h9");

//ar h9 = $(".hour-9");
//h9.text("saveTextInput");

//function getItem("h9");
       // return Value;


//<div id="hour-9" class="row time-block past">
  //      <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
    //    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
      //  <button class="btn saveBtn col-2 col-md-1" aria-label="save">
        //  <i class="fas fa-save" aria-hidden="true"></i>
        //<button>
      //</div>


$(".saveBtn").click(function (event) {
  event.preventDefault();
  var description2 = $(this).siblings(".description2").val();
  localStorage.setItem("textStorage2", description2.value);
  (localStorage.getItem("textStorage2"));
});

      //var btn = document.querySelector('.btn')
     //document.querySelector(".btn").addEventListener("click", function() {
       // console.log("Hey!  You clicked the button!", localStorage);
      //});


      // var btn1 = document.querySelector('.btn1')
      // document.querySelector(".btn1").addEventListener("click", function() {
      //   console.log("Hey!  You clicked the button!");
      // });

      // var btn2 = document.querySelector('.btn2')
      // document.querySelector(".btn2").addEventListener("click", function() {
      //   console.log("Hey!  You clicked the button!");
      // });

      // var btn3 = document.querySelector('.btn3')
      // document.querySelector(".btn3").addEventListener("click", function() {
      //   console.log("Hey!  You clicked the button!");
      // });

      // var btn4 = document.querySelector('.btn4')
      // document.querySelector(".btn4").addEventListener("click", function() {
      //   console.log("Hey!  You clicked the button!");
      // });

      // var btn5 = document.querySelector('.btn5')
      // document.querySelector(".btn5").addEventListener("click", function() {
      //   console.log("Hey!  You clicked the button!");
      // });

      // var btn7 = document.querySelector('.btn7')
      // document.querySelector(".btn7").addEventListener("click", function() {
      //   console.log("Hey!  You clicked the button!");
      // });

      // var btn8 = document.querySelector('.btn8')
      // document.querySelector(".btn8").addEventListener("click", function() {
      //   console.log("Hey!  You clicked the button!");
      // });

      // var btn9 = document.querySelector('.btn9')
      // document.querySelector(".btn9").addEventListener("click", function() {
      //   console.log("Hey!  You clicked the button!");
      // });

//var btn = function() {
 // text("saveTextInput" localStorage);
//}




     // var  = document.querySelector(".saveBtn");

//saveBtn.addEventListener("click", function() {

//console.log*("saveBtn")



//h9.addEventListener("click", function() {
  //localStorage.setItem("text", text);





//var saveBtn9amEl = document.querySelector('#save-btn-9am')
//hour9El.addEventListener("click", e => {
  //console.log("Hour9")
//})
//saveBtn9amEl.addEventListener('click', (event) => {
  //event.preventDefault()
  //hour9El = document.querySelector('#hour-9 > textarea')
 // localStorage.setItem('hour9am', hour9El.value)
  //hour9El.textContent = localStorage.getItem('hour9am');
//})


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


//function renderLastRegistered() {
  //var h9text = localStorage.getItem("h9text"); 

 //textArea.textContent = h9text;
//}

//localStorage.setItem("h9text", h9text);

//var h9text = h9textInput.value;

//localStorage.setItem("h9text", h9text);
//renderLastRegistered();