$(function(){
    $('.bxslider').bxSlider({
        captions:false,
        //slideWidth:600,  //수정
        auto:true,
        autoControls:false,
        stopAutoOnclick:false,
      });

      $('.rolling').vTicker({   
        // 스크롤 속도(default: 700)  
        speed: 500,  
        // 스크롤 사이의 대기시간(default: 4000)  
        pause: 2000,  
        // 스크롤 애니메이션  
        animation: 'fade',  
        // 마우스 over 일때 멈출 설정  
        mousePause: false,  
        // 한번에 보일 리스트수(default: 2)  
        showItems: 4,  
        // 스크롤 컨테이너 높이(default: 0)  
        height: 0,  
        // 아이템이 움직이는 방향, up/down (default: up)  
        direction: 'up'  
  
      });

      $(".regular_2").slick({
        infinite : true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        dots : true,
        arrows: false
        /*responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]*/
      });

      $('.regular_4').slick({
        infinite : true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        /*responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]*/
      });

     
      $( window ).scroll( function() {
        if ( $( this ).scrollTop() > 200 ) {
          $( '.up' ).fadeIn();
        } else {
          $( '.up' ).fadeOut();
        }
      } );

      $( '.up' ).click( function() {
        $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
        return false;
      } );

  
      AOS.init({
        speed:500,
      });
      




});