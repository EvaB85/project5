let element = document.getElementsByClassName('button')[0];

let changeColor = function (e) {
  e.target.style.backgroundColor = 'blue';
}

let changeText = function (e) {
  e.target.style.color = 'white';
}

let table = function(e){
  changeColor(e)
  changeText(e)
}

element.addEventListener('click', table);



// element is listening for click
// when clicked
// i call the function im told to call
// CLICK >> table(CLICK) >> changeColor(CLICK) >> CLICK.target.style.backgroundColor = 'blue';


// SAME THING AS ABOVE
// element.addEventListener('click', function(e){
//   changeColor(e);
// });
//
// the function here is called an anonymous function, as it doesn't have a name
// but is still called on clicked (when the element is clicked on)
