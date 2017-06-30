/**
 * 
 */
$(function(){
	

	jQuery('.camera_wrap').camera({ //here I declared some settings, the height and the presence of the thumbnails 
		height: '41%',
		pagination: false,
		thumbnails: false ,
		autoAdvance: true ,
		mobileAutoAdvance: true ,
		barPosition: 'bottom' ,
		hover: false ,
		loader: 'pie' 
	});


	 slider = $('.slider1').bxSlider({
		    slideWidth: 200,
		    minSlides: 2,
		    maxSlides: 3,
		    slideMargin: 10 ,
		    controls: false ,
		    pager: false
		  });
	 slider.startAuto();
//jQuery('.camera_wrap').cameraPlay(); //start the slideshow

});