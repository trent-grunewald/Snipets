//EVENT
'REPLACE ME WITH A CLASS'.addEventListener('mousemove', runEvent);

const heading = document.querySelector('.REPLACE ME WITH THE CLASS YOU WANT TO TAKE THE ACTION ON');
const heading = document.querySelector('TAG OF THE CLASS ABOVE');

//event handler
function runEvent(e){

  //gives coordinates of the mouse in the above area
 heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;

 //assigns mouse coordinates to the background color '150' = blue
 document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 150)`;
}