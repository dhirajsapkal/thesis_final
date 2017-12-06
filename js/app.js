
$(document).ready(function(){
	$(document).foundation();








  /*
   * Replace all SVG images with inline SVG
  */
    jQuery('img.svg').each(function(){
      var $img = jQuery(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');

      jQuery.get(imgURL, function(data) {
        // Get the SVG tag, ignore the rest
        var $svg = jQuery(data).find('svg');

        // Add replaced image's ID to the new SVG
        if(typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if(typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass+' replaced-svg');
        }

        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');

        // Replace image with new SVG
        $img.replaceWith($svg);

      }, 'xml');

    });




  	$('#owl-suggested').owlCarousel({
	    margin:10,
	    autoHeight:true,
      autoWidth:true,
	    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
      }
  	});

    $('#owl-tickets').owlCarousel({
      margin:30,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }

      }
    });
    $('#owl-tickets-past').owlCarousel({
      margin:30,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }

      }
    });
    $('#owl-cards').owlCarousel({
      margin:10,
      // autoHeight:true,
      // autoWidth:true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }

      }
    });
    $('#owl-banks').owlCarousel({
      margin:10,
      // autoHeight:true,
      // autoWidth:true,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }

      }
    });

    $('#owl-seat-view').owlCarousel({
      margin:0,
      autoHeight:false,
      autoWidth:false,
      responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
      }
    });

    // $('#owl-tickets').owlCarousel({

    //   autoPlay: 3000, //Set AutoPlay to 3 seconds
    //   responsive: true,
    //   addClassActive: true,
    //   items: 4,
    //   itemsDesktop: [1199, 3],
    //   itemsDesktopSmall: [979, 3],
    //   stopOnHover:true,
    //   afterMove:function(){
    //       //reset transform for all item
    //       $(".owl-item").css({
    //           transform:"none"
    //       })
    //       //add transform for 2nd active slide
    //       $(".active").eq(1).css({
    //           transform:"scale(1.9)",
    //           zIndex:3000,

    //       })

    //   },
    //   //set init transform
    //   afterInit:function(){
    //       $(".active").eq(1).css({
    //           transform:"scale(1.9)",
    //           zIndex:3000,

    //       })
    //   }

    // });
});