/* ================================
Week 6 Assignment: Basic Application

Take a look at the midterm prototype: https://marvelapp.com/bf2c9h/screen/10434841
Try clicking on the "Next" and "Previous" buttons. This task will ask you to write some functions
that will enable us to write an application like in the midterm.

Write three functions: clickNextButton, clickPreviousButton, and saySlideName.
clickNextButton and clickPreviousButtons should simulate what will happen when someone clicks
on a next or previous button in your application.

You don't need to create HTML buttons or a useable application—this exercise is asking you to create
functions that will be used in your application. To test it out, try calling the functions in your
console. For example, try running: clickNextButton() and see what it does. Use lots of console logs!
================================ */

var state = {
  "slideNumber": 0, // slideNumber keeps track of what slide you are on. It should increase when you
                    // click the next button and decrease when you click the previous button. It
                    // should never get so large that it is bigger than the dataset. It should never
                    // get so small that it is smaller than 0.
  "slideData": [
    {
      "name": "Leaflet",
      "language": "Javascript",
      "namespace": "L"
    },
    {
      "name": "Underscore",
      "language": "Javascript",
      "namespace": "_"
    },
    {
      "name": "jQuery",
      "language": "Javascript",
      "namespace": "$"
    }
  ]
};

var saySlideName = function(slide) {
  console.log(slide);//??? The slide they are moving too??
  // saySlideName uses console.log to "say" the name of the slide it is given. It should run when
  // someone clicks on one of the buttons.
};

var clickNextButton = function(currentViewCSSid, nextViewCSSid) {
  $(currentViewCSSid).hide();
  $(nextViewCSSid).show();
  saySlideName(nextViewCSSid);
};
//might need to parse out sidebar and changes to map as seperate changes, not sure yet...

var clickPreviousButton = function(currentViewCSSid, previousViewCSSid) {
  $(currentViewCSSid).hide();
  $(previousViewCSSid).show();
  saySlideName(previousViewCSSid);
};


//The above requries knowing the previous ID. I think you might be able to make this more universal as follows:
var arrayPageIDsInOrder = []; //an array of the ID's associated with the pages (in order)

var clickNextButton2 = function(currentViewCSSid) {
  $(currentViewCSSid).hide();
  var indexValue = arrayPageIDsInOrder.indexOf(currentViewCSSid); //to find the index value of an element in the array
  $(arrayPageIDsInOrder[indexValue+1]).show(); //to find the previous ID
};

var clickPreviousButton2 = function(currentViewCSSid) {
  $(currentViewCSSid).hide();
  var indexValue = arrayPageIDsInOrder.indexOf(currentViewCSSid); //to find the index value of an element in the array
  $(arrayPageIDsInOrder[indexValue-1]).show(); //to find the previous ID
};
//There must also be a way to query the system so that it knows the current ID that is active (un-hidden)...
//(then it would work with no manual input and be more adaptive)
