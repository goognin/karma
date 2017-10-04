$(function() {
	$('.burger').on('click', function(e){
		e.preventDefault();
		$(this).toggleClass('open');
		$('.header__wrap').toggleClass('open');
		$('.wrapper').toggleClass('fixed');
	})
	$('.lang-switch__link.active').on('click', function(e) {
		e.preventDefault();
		$(this).closest('.lang-switch__wrap').toggleClass('open');

	});
	$('.header__nav-link').on('click',  function(e) {
		e.preventDefault();
		var href = $(this).attr('href'),
			destination = $(href).offset().top;
		$('.header__wrap').removeClass('open');
		$('.burger').removeClass('open');
		$('.wrapper').removeClass('fixed');

		$('html , body').stop().animate({scrollTop: destination}, 400);
	});
	//hero tabs
	$('#timer').countdown('2018/01/01 00:00:00', function(event) {
	    $(this)
	    .html(event.strftime('<div class="hero__timer-days hero__timer-num"><div class="number">%-D:</div><div class="text">Days</div></div><div class="hero__timer-hours hero__timer-num"><div class="number">%H:</div><div class="text">Hours</div></div><div class="hero__timer-min hero__timer-num"><div class="number">%M:</div><div class="text">Minutes</div></div><div class="hero__timer-sec hero__timer-num"><div class="number">%S</div><div class="text">Seconds</div></div>'
            ));
	    // console.log(event.elapsed)
	    if (event.elapsed) {
	    	var tabs = $(this).closest('.hero__right')
	    	.find('.hero__right-wrap');
	    	tabs.addClass('hide')
	    		.removeClass('active')
		    	.find('#start')
		    	.removeClass('hide')
		    	.addClass('active');
	    }
	 });
		//reach counter start
		var heroRight = $('.hero__right-wrap.active'),
			counter = heroRight.find('.hero__reach-counter'),
			lineWhite = counter.find('.reach-counter__line-white'),
			lineRed = lineWhite.find('.reach-counter__line-red'),
			percent;

		percent = lineRed.data('percent');
		lineRed.css('width', percent+'%');

	// hero tabs end
	// interviews slider
	$('.interviews__list').slick({
		variableWidth: true,
		slidesToScoll: 1,
		slidesToShow: 1,
		// centerMode: true,
		// centerPadding: '40px',
		infinite: false,
		prevArrow: $('.interviews__list-arrow.arrow-prev'),
		nextArrow: $('.interviews__list-arrow.arrow-next'),
		dots: true,
		customPaging : function(slider, i) {
	        return '<div class="interviews__dot"></div>';
	    },
		appendDots: $('.interviews__dots')
	});
	//interviews slider end
	$('.press__slider').slick({
		slidesToScoll: 1,
		slidesToShow: 1,
		infinite: true,
		prevArrow: $('.press__slider-arrow.arrow-prev'),
		nextArrow: $('.press__slider-arrow.arrow-next'),
		dots: true,
		customPaging : function(slider, i) {
	        return '<div class="press__slider-dot"></div>';
	    },
		appendDots: $('.press__slider-dots')
	});
	
	if ($(document).width()<=768) {
		var teamList = $('.team__list'),
			teamItems = teamList.find('.team__item'),
			featuresList = $('.features__list'),
			featuresItems = featuresList.find('.features__item');

			teamItems.toArray().forEach(function(item,i){
				if(i>2){
					$(item).hide().addClass('hide');
				}
			})
			featuresItems.toArray().forEach(function(item,i){
				if(i>4){
					$(item).hide().addClass('hide');
				}
			})

	}
	$('.team__showmore-btn').on('click', function(e) {
		e.preventDefault();
		var hideItems = teamItems.filter(function(index) {
			return $(this).hasClass('hide')
		})
			hideItems.slice(0,3).removeClass('hide').show();
		if(!hideItems.length){
			$(this).hide();
		}
	});	

	$('.features__showmore-btn').on('click', function(e) {
		e.preventDefault();
		var featuredHideItems = featuresItems.filter(function(index) {
			return $(this).hasClass('hide')
		})
			featuredHideItems.slice(0,5).removeClass('hide').show();
		if(!featuredHideItems.length){
			$(this).hide();
		}
	});	
	$('.terms-btn, .hero__get-btn').on('click',  function(e) {
		e.preventDefault();
		$.magnificPopup.open({
		  items: {
		    src: '../../iframe.html'
		  },
		  type: 'iframe',
		  iframe:{
		  	markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe"  frameborder="0" allowfullscreen></iframe>'+
          '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button

		  },
		  showCloseBtn: false
		  // fixedContentPos: false
		});
	});
	// $('#mc_embed_signup').find('.close-btn').on('click', function(event) {
	// 	event.preventDefault();
	// 	$.magnificPopup.close();
	// });
	// $('#mc-embedded-subscribe-form').on('submit', function(event) {
		
	// 	$.magnificPopup.close();
	// });
	// $('#updates__form').on('submit', function(e) {
	// 	e.preventDefault();
	// 	var data = $(this).serialize();
	// 	$.ajax({
	// 		type: "POST",
	// 		url: "",
	// 		data: data,
	// 		success: function(msg){

	// 		}
	// 	});
	// });


});

