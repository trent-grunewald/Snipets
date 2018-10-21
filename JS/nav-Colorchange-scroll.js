 const navColor = document.querySelector('.nav');
  window.onscroll =_=>{ 
      "use strict";
      if (document.body.scrollTop >= 200 ) {
          navColor.classList.add("changeColor");
          navColor.classList.remove("navBack");
      } 
      else {
          navColor.classList.remove("changeColor");
          navColor.classList.add("navBack");
      }
  };