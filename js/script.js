/*===============================
	JavaScript Contact Form
================================*/
const btn = document.getElementById('button');

document.getElementById('form')
	.addEventListener('submit', function(event) {
		event.preventDefault();

		btn.value = 'Sending...';

		const serviceID = 'default_service';
		const templateID = 'template_l8iuhjj';

	emailjs.sendForm(serviceID, templateID, this)
	.then(() => {
		btn.value = 'Send Email';
		alert('Your message has been successfully sent. Thank you for your interest!');
    }, (err) => {
		btn.value = 'Send Message';
		alert(JSON.stringify(err));
    });
});


/*===============================
	jQuery
================================*/
$(function(){	
	/*
	Hamburger Icon Effect
	*/
	const $Hamburger = $('.HamburgerIcon'),
		$FloatMenuButton = $('.FloatMenuButton'),
		$Overlay = $('.global-nav-sp');
		

		$Hamburger.on('click',function(){
		scrollPosition = $(window).scrollTop();
		
		$Overlay.toggleClass('open');
		if($Overlay.hasClass('open')){
			$Overlay.stop(true).fadeIn(500);
			$('body').addClass('ScrollLock').css({'top':-scrollPosition});
			$FloatMenuButton
			.css({
				'background-color': '#fff',
				'color': '#575757'				
			})
			.addClass('FloatCloseButton')
			.text('Close');
		}else{
			$Overlay.stop(true).fadeOut(500);
			$('body').removeClass('ScrollLock');
			$(window).scrollTop(scrollPosition);
			$FloatMenuButton
			.css({
				'background-color': '',
				'color': '#fff'				
			})
			.removeClass('FloatCloseButton')
			.text('Menu');
		}
		$(this).toggleClass('clicked');
	});
	/*
	FloatMenuButton
	*/
		$FloatMenuButton.on('click',function(){
		scrollPosition = $(window).scrollTop();
		$Overlay.toggleClass('open');
		if($Overlay.hasClass('open')){
			$Overlay.stop(true).fadeIn(500);
			$('body').addClass('ScrollLock').css({'top':-scrollPosition});
			$FloatMenuButton
			.css({
				'background-color': '#fff',
				'color': '#575757'
			})
			.addClass('FloatCloseButton')
			.text('Close');
			$Hamburger.addClass('clicked');
		}else{
			$Overlay.stop(true).fadeOut(500);
			$('body').removeClass('ScrollLock');
			$(window).scrollTop(scrollPosition);
			$FloatMenuButton
			.css({
				'background-color': '',
				'color': '#fff'
			})
			.removeClass('FloatCloseButton')
			.text('Menu');
			$Hamburger.removeClass('clicked');
		}
	});
	/*
	Global Nav PC Menu Jump
	*/
	$('.nav-item').find('a').on('click',function(){
		let id = $(this).attr('href'),
			position = $(id).offset().top
		$('html, body').animate({
			'scrollTop': position
		},1000);
	});
	/*
	Global Nav Sp Menu Jump
	*/
	$('.nav-item-sp').find('a').on('click',function(){
		let id = $(this).attr('href'),
			position = $(id).offset().top
		$('html, body').animate({
			'scrollTop': position
		},1000);
		$Overlay.fadeOut(1500);
		$Overlay.removeClass('open');
		$('body').removeClass('ScrollLock');
		$Hamburger.removeClass('clicked');
		$FloatMenuButton
			.css({
				'background-color': '',
				'color': '#fff'				
			})
			.removeClass('FloatCloseButton')
			.text('Menu');
	});
	/*
	Back To Top
	*/
	$('.back-to-top').on('click',function(){
		$('html, body').animate({
			'scrollTop': 0
		},1500);
	});
	/*
	Back To Top Appearance
	*/
	$('.back-to-top-icon').each(function(){
		const $window = $(window),
			$BackToTopIcon = $(this),
			$About = $('.about'),
			AboutOffsetTop = $About.offset().top;
		
		$window.on('scroll',function(){
			if($window.scrollTop() > AboutOffsetTop){
				$BackToTopIcon.css('display','block');
			}else{
				$BackToTopIcon.css('display','none');
			}
		});
		$window.trigger('scroll');
	});
	/*
	Float Menu Button Appearance
	*/
	$('.FloatMenuButton').each(function(){
		const $window = $(window),
			w = $(window).innerWidth(),
			x = 768,
			$FloatMenuButton = $(this),
			$FloatCloseButton = $('.FloatCloseButton'),
			$About = $('.about'),
			AboutOffsetTop = $About.offset().top;
		
		$window.on('scroll',function(){
			if( w <= x && $window.scrollTop() > AboutOffsetTop){
				$FloatMenuButton.css('display','block');
			}else{
				$FloatMenuButton.css('display','none');
				$FloatCloseButton.css('display','none');
			}
		});
		$window.on('scroll',function(){
			if( w <= x && $window.scrollTop() > AboutOffsetTop){
				$FloatMenuButton.css('display','block');
			}else{
				$FloatMenuButton.css('display','none');
				$FloatCloseButton.css('display','none');
			}
		});
		$window.trigger('scroll');
	});
	/*
	Fade-in Effect
	*/
	$(window).scroll(function (){
        $('.fadein').each(function(){
            let targetElement = $(this).offset().top;
            let scroll = $(window).scrollTop();
            let windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 250){
                $(this).css('opacity','1');
                $(this).css('transform','translateY(0)');
            }
        });
    });
});
