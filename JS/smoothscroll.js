  // SMOOTH SCROLL
  function smoothScroll(target, duration) {
    //target arguement variable
    let userTarget = document.querySelector(target);
    //gets the top coordinates for the users target section
    let targetPosition = userTarget.getBoundingClientRect().top;
    //takes into account the users starting page position.
    let startPosition = window.pageYOffset;
    //subtracts the target from start position to calculate how far to scroll.
    let distance = targetPosition - startPosition;
    //will keep track of the time for requestAnimationFrame
    let startTime = null;

    function animation(currentTime){
      if(startTime === null)startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      //runs the animation 
      const run = ease(timeElapsed, startPosition, distance, duration);
      //scrolls to the Y position for the Run function (first (0) is X)
      window.scrollTo(0, run);
      if(timeElapsed < duration) requestAnimationFrame(animation);
      
    }
    // Im not going to lie, the math below doesn't make sense to me, I found it online
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t <1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t -2) -1) + b;
    }
    // loops through through the animation function at 60fps
    requestAnimationFrame(animation);
  }

  //YOU ONLY NEED TO CHANGE / ADD TO THESE TO ENABLE IT IN THE PAGE
  const about = document.querySelector('.aboutTarget');
  about.addEventListener('click', function(){
    smoothScroll('#about',1000);
  })
  const projects = document.querySelector('.projectsTarget');
  projects.addEventListener('click', function(){
    smoothScroll('#projects',1000);
  })
  const contact = document.querySelector('.contactTarget');
  contact.addEventListener('click', function(){
    smoothScroll('#contact', 1000);
  })