

$(document).ready(function(){

	$(".mini").hover(function() {
		var index = $(this).data("index");
		var sliderContainer = $(this).closest('.slider-container');
		var sliderIndex = sliderContainer.data('slider');
		
		sliderContainer.find(".mini, .hoverslider li").removeClass("active");
		$(this).addClass("active");
		sliderContainer.find(".hoverslider li").eq(index).addClass("active");
	  });


	  $(".apClosst").click(function(){
		$(".apply-popup").hide();
	  });
	  $("#myTextBoxResult").click(function(){
		$(".apply-popup").show();
	  });
	  $('.serchMenuButton a').click(function(){
        $('.search-option-inventorys').toggleClass('ofCanvaseoof');
    });

	  $('.selectPriHeadingg').click(function(){
        $('.wrappersees').slideToggle('100');
        $(this).toggleClass('plusCol');
    });


	  $('.slidkfjdhf').click(function(){
        $('.thmslkid').slideDown();
    });

	  
  $( function() {
    $( "#datepicker" ).datepicker();
    $( "#datepicker2" ).datepicker();
  } );

$(function () {
	$(".datepicker").datepicker({
	  numberOfMonths: 1,
	  showOtherMonths: true,
	  showButtonPanel: true,
	});
  });

  

	  


	// Mobile Menu
	$('.menuProfile1 a').click(function(){
        $('.mobileLogin').toggleClass('mobileLoginActive');
		$('html').toggleClass('LoginOverActive');
        return false;
    });

    $('.menuSite ul li a').click(function(){
    	$('.menuSite ul li ul').slideToggle(500);
		$('.menuSite ul li a').toggleClass('active');
    	return false;
    });

    $('.humberMenu').click(function(){
        $('.menuSiteBarAreaMain').toggleClass('menuSiteBarAreaMain2');
		$('html').toggleClass('LoginOverActive');
        return false;
    });

		$('.carHeaderLeftImgCart button').click(function(){
        $('.carHeaderLeftImgCart .singleItemCarImg').fadeToggle();
        return false;
    });
    $('.carHeaderRightImgCart button').click(function(){
        $('.carHeaderRightImgCart .singleItemCarImg').fadeToggle();
        return false;
    });

    // Click event for the body
    $('body').click(function(event) {
        // Check if the clicked element is not a descendant of .mobileLogin
        if (!$(event.target).closest('.mobileLogin').length) {
            $('.mobileLogin').removeClass('mobileLoginActive');
			$('html').removeClass('LoginOverActive'); 
        }
    });



	// // Banner Carousel
	// $('.banner_carousel').owlCarousel({
	// 	items:1,
	// 	loop:true,
	// 	nav:true,
	// 	dots:true,
	// 	autoplay:true,
	// });

	$('.js-example-basic-single').select2();
	
	$('.counter').counterUp({
		delay: 100,
		time: 1000
	});

	$(window).scroll(function() { // Bind scroll event to window
		var scrollPosition = $(window).scrollTop(); // Get the current scroll position
  
		// You can adjust this value according to your requirement
		if (scrollPosition > 100) { // If the scroll position is greater than 100 pixels from the top
		  $('.mainMenu').addClass('mainMenuextra'); // Add the 'highlight' class to the #content element
		} else {
		  $('.mainMenu').removeClass('mainMenuextra'); // Remove the 'highlight' class if not scrolled down enough
		}
	  });


	//   start bmw-m5 carousel area 
	$('.Slider4').owlCarousel({
		items:1,
		dots:false,
		margin:20,
		pullDrag:false,
		touchDrag:false,
		mouseDrag: false,
		center:true,
		URLhashListener:true,
		startPosition: 'URLHash',
	  });
	
	
	$('.slider4url').owlCarousel({
		 items:5,
		dots:false,
		center: true,
		loop: true,
		 margin:20,
		 nav:true,
	  });
	
	  $('.slider4url .owl-item').click(function(){
		$('.slider4url .owl-item').removeClass('bgred');
		$(this).addClass('bgred');
	  })
	  
	//   end bmw-m5 carousel area 
	// start bmw-m5 car popup 
	
  $('.test-popup-link').magnificPopup({
    items: [
      {
        src: 'assets/images/bmw-m5/cars5.jpg'
      },
      {
        src:'assets/images/bmw-m5/cars2.jpg'
      },
      {
        src:'assets/images/bmw-m5/cars3.jpg'
      },
      {
        src:'assets/images/bmw-m5/cars4.jpg'
      },
      {
        src:'assets/images/bmw-m5/cars1.jpg'
      },

    ],
    gallery: {
      enabled: true
    },
    type: 'image' // this is default type
});

	// end bmw-m5 car popup 

	// Start super car slide 
	$('.nav2').owlCarousel({
		loop:true,
		margin:10,
		dots:false,
		nav:true,
		navText : ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:5
			}
		}
	})

	// End super car slide 


	  

});





function openCity(evt, cityName) {
	var i, tabcontent, tablinks;
	tabcontent = document.getElementsByClassName("tabcontent");
	for (i = 0; i < tabcontent.length; i++) {
	  tabcontent[i].style.display = "none";
	}
	tablinks = document.getElementsByClassName("tablinks");
	for (i = 0; i < tablinks.length; i++) {
	  tablinks[i].className = tablinks[i].className.replace(" active", "");
	}
	document.getElementById(cityName).style.display = "block";
	evt.currentTarget.className += " active";
  }
  
  // Get the element with id="defaultOpen" and click on it
  document.getElementById("defaultOpen").click();


  var abas = document.getElementById("abas");
var conteudos = document.getElementById("conteudos");

/* Essa funÃ§Ã£o retira a classe "selecionada" e esconde a DIV com o conteÃºdo visÃ­vel */
function limparSelecao(){
  abas.getElementsByClassName("selecionada")[0].classList.remove("selecionada");
  conteudos.getElementsByClassName("visivel")[0].classList.remove("visivel");
}

/* Essa Ã© executada quando alguma das abas Ã© clicada */
abas.addEventListener("click", function(event){
  var abaClicada = event.target.id;
  var itemSelecionado = abaClicada.substring(abaClicada.lastIndexOf("_"));

  /* Chama funÃ§Ã£o que tira a seleÃ§Ã£o do item atual */
  limparSelecao();

  /* Insere a classe "selecionada" na nova aba visÃ­vel */
  event.target.parentElement.classList.add("selecionada");

  /* Insere a classe "visivel" para o conteÃºdo da aba selecionada */
  conteudos.querySelector("#conteudo"+ itemSelecionado).classList.add("visivel");
});


var galleryThumbs = new Swiper('.gallery-thumbs', {
	spaceBetween: 10,
	slidesPerView: 4,
	loop: true,
	freeMode: true,
	loopedSlides: 5, //looped slides should be the same
	watchSlidesVisibility: true,
	watchSlidesProgress: true,
  });
  var galleryTop = new Swiper('.gallery-top', {
	spaceBetween: 10,
	loop: true,
	loopedSlides: 5, //looped slides should be the same
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
	thumbs: {
	  swiper: galleryThumbs,
	},
  });


function myFunction(x) {
  x.classList.toggle("change");
}

function getRadioButtonValue() {
	var list = document.getElementsByName('myRadioButton');
	for(var i=0;i<list.length;i++){
	   if(list[i].checked){
		  document.getElementById("myTextBoxResult").value=list[i].value;
		  break;
	   }
	}
	}

	
// start file upload 
document.getElementById('photoLoad').addEventListener('change', function(e){
	if (e.target.files[0].type.split('/')[0] === 'image') {
		var img = new Image();
		img.src = window.URL.createObjectURL((e.target.files[0]));
		img.onload = function(){
			var imgHeight = this.naturalHeight;
			var imgWidth = this.naturalWidth;
			if (imgWidth < 600 || imgHeight < 600) {
				alert('Image dimension is smaller than 600 it must be: \n width: 600 \n height: 600');
				e.target.value = '';
				return false;
			}
			else if (imgWidth > 600 || imgHeight > 600){
				alert('Image dimension is larger than 600 it must be: \n width: 600 \n height: 600 \n please crop it.');
				e.target.value = '';
				return false;
			}
			else{
				alert('Image dimension is correct successfully uploded.');
				document.getElementById('fileValue').innerHTML = e.target.files[0].name;
				document.getElementById('ImageGet').appendChild(img);
			}
		}
	}else{
		alert('only image file is allowed!');
		e.target.value = '';
	}
});




