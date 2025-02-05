window.onload = function () {
  // itemSwiper 코드
  var swiper = new Swiper(".visual_swiper", {
    loop: true,

    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
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
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".main_btSwiper", {
    direction: "vertical",
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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
  // // 모바일 메뉴바 창 요소 가져 오기
  // const openBtn = document.getElementById(".ham_bar");
  // const mobile = document.getElementById(".mobile_nav");
  // const closeBtn = document.getElementById(".mobile_close");
  // //모바일 메뉴바 클릭 시 이벤트 처리
  // openBtn.addEventListener("click", function () {
  //   mobile.style.display = "block";
  // });
  // //모바일 열기 버튼 닫기시 이벤트 처리
  // closeBtn.addEventListener("click", function () {
  //   mobile.style.display = "none";
  // });
  // // place 팝업창 닫기
  // const close = document.querySelector("#close");
  // const modalbox = document.querySelector(".modal");
  // close.addEventListener("click", function () {
  //   modalbox.classList.remove(".active");
  // });
  const openBtn = document.querySelector(".ham_bar");
  const contanier = document.querySelector(".mobile_nav");
  const closeBtn = document.querySelector(".mobile_close");

  openBtn.addEventListener("click", function () {
    contanier.style.display = "block";
    closeBtn.style.display = "block";
    openBtn.style.display = "none";
  });

  closeBtn.addEventListener("click" , function(){
    contanier.style.display = "none";
    openBtn.style.display = "block";
    closeBtn.style.display = "none";
  })
  // place 모달창 닫기

  const closeBotton = document.querySelector(".btn-close")
  const modal = document.querySelector(".modal")

  closeBotton.addEventListener("click" , function(){
    modal.style.display = "none"
    closeBotton.
  })
};
