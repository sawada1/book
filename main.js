

let user_btn = document.querySelector(".header1 .icons .user");
let search_btn = document.querySelector("header .header1 .icons .thsearch");
let bar = document.querySelector("header .header1 .icons .bar");
let login_page = document.querySelector(".user-login");
let close_login_page = document.querySelector(".user-login i");

let header2 = document.querySelector("header .header2");

let searchinput= document.querySelector('header .header1 .inputs');
let list = document.querySelector('.header2 .list');
let closee = document.querySelector('.header2 .list i');



user_btn.onclick = function(){
    login_page.classList.toggle("active");
    close_login_page.onclick  = function(){
        login_page.classList.remove("active");
    }
}

// search_btn.
search_btn.onclick  = function(){
  searchinput.classList.toggle('active');
}
bar.onclick  = function(){
  list.classList.toggle('active');
}

closee.onclick  = function(){
  list.classList.toggle('active');
}






var swiper = new Swiper(".books-slider", {
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });




  var swiper = new Swiper(".featured-slider", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      450: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 4,
      },
    },
  });












  var swiper = new Swiper(".arrivals-slider1", {
    spaceBetween: 10,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });





  var swiper = new Swiper(".reviews-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 9500,
      disableOnInteraction: false,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });








  function loader(){
    document.querySelector('.loader-container').classList.add('active');
  }
  
  function fadeOut(){
    setTimeout(loader, 3000);
  }

  fadeOut();




  window.onscroll = function(){
//     if(window.scrollY > 80){
//         document.querySelector('header .header2').classList.add('active');
//       }else{
//         document.querySelector('header .header2').classList.remove('active');
//       }
//       login_page.classList.remove("active");
       
  fadeOut(); 
}















  var swiper = new Swiper(".blogs-slider", {
    spaceBetween: 10,
    grabCursor:true,
    loop:true,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    breakpoints: {
      350: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });






