//Cards flip on click
const clickFlip = function(){
  const card = document.querySelectorAll('.card');
  //For each card
  for (var i = 0; i < card.length; i++) {
      //toggle the class "Flipped" on the selected card
      this.classList.toggle('flipped');
    };
  }