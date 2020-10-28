// Mobile Nav
const menuIcon = document.querySelector('.menu-icon');
const mobilNav = document.querySelector('.mobile-menu__list');

menuIcon.addEventListener('click', () => {
  // menuIcon.classList.toggle('menu-icon-active');
  mobilNav.classList.toggle('mobile-nav--active');
});

// (function() {
   
//   'use strict';
 
//   $('.input-file').each(function() {
//     var $input = $(this),
//         $label = $input.next('.js-labelFile'),
//         labelVal = $label.html();
     
//    $input.on('change', function(element) {
//       var fileName = '';
//       if (element.target.value) fileName = element.target.value.split('\\').pop();
//       fileName ? $label.addClass('has-file').find('.js-fileName').html(fileName) : $label.removeClass('has-file').html(labelVal);
//    });
//   });
 
// })();


// const next = document.getElementById('btn-next'),
//       slides = document.querySelectorAll('.slide');

// let index = 0;

// const activeSlide = n => {
//   for(slide of slides) {
//     slide.classList.remove('active');
//   }
//   slides[n].classList.add('active');
// }

// const nextSlide = () => {
//   if(index == slides.length - 1) {
//     index = 0;
//     activeSlide(index);
//   } else {
//     index++;
//     activeSlide(index);
//   }
// }

// next.addEventListener('click', nextSlide);