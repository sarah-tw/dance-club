$(document).ready(function(){
	 $('#live-dance-show').slidesjs({
    width: 1000,
    height: 666,
    play: {
    	auto: true,
    	pauseOnHover: true
    }
  });

	 $('#new-year-slide').slidesjs({
    width: 500,
    height: 333,
    play: {
    	auto: false,
    	pauseOnHover: true
    },
    pagination: {
    	active: false
    }
  });

	var danceSlideWidth = $('#live-dance-show').width();
	$('#live-dance-show, #live-dance-show .slidesjs-control, #live-dance-show, .slidesjs-container, #live-dance-show .slide-item').height(danceSlideWidth*0.6);
	var newYearSlideWidth = $('#new-year-slide').width();
	$('#new-year-slide, #new-year-slide .slidesjs-control, #new-year-slide .slidesjs-container, #new-year-slide .slide-item').height(newYearSlideWidth*0.8);
});
