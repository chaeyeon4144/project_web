window.onload = function () {
  // itemSwiper 코드
  var swiper = new Swiper(".visual_swiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  // 메인탑 슬라이더
  var swiper = new Swiper(".main_topSwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    },
  });
  var swiper = new Swiper(".main_btSwiper", {
    direction: "vertical",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
    },
  });
  // 스크롤 시 메뉴바 색상 변경
  window.addEventListener("scroll", function () {
    let navbar = this.document.querySelector(".header_menu_bar");

    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
};
