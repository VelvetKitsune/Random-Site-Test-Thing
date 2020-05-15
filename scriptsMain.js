var element = document.getElementById('myHeading'); // grab a reference to your element

function IveBeenClicked() {
  element.style.color = "white"
}


element.addEventListener('click', IveBeenClicked); // associate the function above with the click event

// this code adds interaction to my button element
var myButtonEl = document.getElementById('myButton');
var name = "";
console.log("test");
console.log(myButtonEl);
var colourList = ["red", "blue", "green", "yellow", "pink"];
var colourListIndex = 1;

function ButtonClicked() {
  colourListIndex = colourListIndex + 1;
  if (colourListIndex == colourList.length) {
    colourListIndex = 0;
  }
  myButtonEl.style.backgroundColor = colourList[colourListIndex];
  // if statements ask a question that must resolve to true or false
  /* if (myButtonEl.style.backgroundColor == "blue") {
    myButtonEl.style.backgroundColor = "orange";
    alert("the button colour is " + myButtonEl.style.backgroundColor);
  } else {
    myButtonEl.style.backgroundColor = "blue";
  } */
  /* name = prompt("what is your name?");
  console.log(name);
  myButtonEl.innerHTML = "Hello " + name; */
  // background-color backgroundColor background_color
}
myButtonEl.addEventListener('click', ButtonClicked);
