$(document).ready(function(){
	 $('#live-dance-show').slidesjs({
    width: 1000,
    height: 666,
  });

	var danceSlideWidth = $('#live-dance-show').width();
	$('#live-dance-show, .slidesjs-control, .slidesjs-container, #live-dance-show .slide-item').height(danceSlideWidth*0.5);
	
});
