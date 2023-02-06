// $('.owl-carousel').owlCarousel({
//     loop:true,
//     margin:10,
//   //   nav:true,
//     dots:true,
//     autoplay:true,
//     autoplayTimeout: 3000,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:3
//         },
//         1000:{
//             items:4
//         }
//     }
//   })

// // ---counter---
// // number count for stats, using jQuery animate

// $('.counting').each(function() {
//     var $this = $(this),
//         countTo = $this.attr('data-count');        
//     $({ countNum: $this.text()}).animate({
//       countNum: countTo
//     },
  
//     {
//       duration: 3000,
//       easing:'linear',
//       step: function() {
//         $this.text(Math.floor(this.countNum));
//       },
//       complete: function() {
//         $this.text(this.countNum);
//         //alert('finished');
//       }
  
//     });  
    
  
//   });




//   // $(document).ready(function() {
//   //   //Preloader
//   //   preloaderFadeOutTime = 500;
//   //   function hidePreloader() {
//   //   var preloader = $('.rect');
//   //   preloader.fadeOut(preloaderFadeOutTime);
//   //   }
//   //   hidePreloader();
//   //   });