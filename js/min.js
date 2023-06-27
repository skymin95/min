// 탭메뉴 js
let tabList = $(".btn").on("click", function(){
  let idx = tabList.index(this);
  $(".btn").removeClass("on");
  $(".btn").eq(idx).addClass("on");
  $(".tab_content > .tab_list").hide();
  $(".tab_content > .tab_list").eq(idx).show();
  $(".title_list > .item").hide();
  $(".title_list > .item").eq(idx).show();
  $(".first").css("display","none");
  $(".portfolio").css("display","none");
});
// 다크모드 초반원본
// const modeSwitch = document.getElementById("modeSwitch");

// modeSwitch.addEventListener("change", function() {
//   document.body.classList.toggle("dark-mode");
// });
// 다크모드 시작
document.addEventListener("DOMContentLoaded", function() {
  // 페이지 로드 시 다크 모드로 시작
  document.body.classList.add("dark-mode");
  document.querySelector("button").style.color = "#fff";
  document.querySelectorAll("li").forEach(li => li.style.color = "#fff");
  changeImage(); // 이미지 변경
});


const modeSwitch = document.getElementById("modeSwitch");
const changeImageButton = document.getElementById("changeImageButton");

modeSwitch.addEventListener("change", function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    // 다크 모드일 때 특정 색상을 적용
    document.querySelector("button").style.color = "#fff";
    document.querySelectorAll("li").forEach(li => li.style.color = "#fff");
    document.querySelectorAll("p").forEach(p => p.style.color = "#fff");
    document.querySelectorAll("label").forEach(label =>label.style.color = "#fff");
    document.querySelectorAll("h2").forEach(h2 =>h2.style.color = "#fff");
    // document.querySelectorAll("h3").forEach(h3 =>h3.style.color = "#fff");
    document.querySelectorAll("button").forEach(button =>button.style.color = "#fff");

    
    changeImage(); // 다크 모드로 전환 시 이미지 변경
  } else {
    // 다크 모드가 아닐 때의 기본 색상을 설정
    document.querySelector("button").style.color = "black";
    document.querySelectorAll("li").forEach(li => li.style.color = "black");
    document.querySelectorAll("p").forEach(p => p.style.color = "black");
    document.querySelectorAll("label").forEach(label =>label.style.color = "black");
    document.querySelectorAll("h2").forEach(h2 =>h2.style.color = "black");
    // document.querySelectorAll("h3").forEach(h3 =>h3.style.color = "black");
    document.querySelectorAll("button").forEach(button =>button.style.color = "black");
    changeImage(); // 밝은 모드로 전환 시 이미지 변경
  }
});

// 다크모드 이미지변경
function changeImage() {
  // var image = document.getElementById("logo");
  var image = document.querySelector(".logo");
  if (document.body.classList.contains("dark-mode")) {
    // 다크 모드일 때 이미지 변경
    image.src = "./img/logo_w.png";
    image.alt = "로고";
  } else {
    // 밝은 모드일 때 이미지 변경
    image.src = "./img/logo_d.png"
    image.alt = "로고";
  }
  var facebookImage = document.querySelector(".facebook");
  if (document.body.classList.contains("dark-mode")) {
    facebookImage.src = "./img/facebook_w.png";
    facebookImage.alt = "페이스북";
  } else {
    facebookImage.src = "./img/facebook_d.png";
    facebookImage.alt = "페이스북";
  }
  
  var instagramImage = document.querySelector(".instagram");
  if (document.body.classList.contains("dark-mode")) {
    instagramImage.src = "./img/instagram_w.png";
    instagramImage.alt = "인스타";
  } else {
    instagramImage.src = "./img/instagram_d.png";
    instagramImage.alt = "인스타";
  }
  
  var gitImage = document.querySelector(".git");
  if (document.body.classList.contains("dark-mode")) {
    gitImage.src = "./img/git_w.png";
    gitImage.alt = "깃";
  } else {
    gitImage.src = "./img/git_d.png";
    gitImage.alt = "깃";
  }
  changeImageButton.addEventListener("click", changeImage);
}






// 텍스트 웨이브
const aniMove = document.querySelector('.ani_move');
const aniItems = aniMove.querySelectorAll('div');

aniItems.forEach((item, index) => {
  item.style.setProperty('--index', index);
});

function restartAnimation() {
  aniItems.forEach((item) => {
    item.style.animation = 'none';
    void item.offsetWidth;
    item.style.animation = null;
  });
}

// 애니메이션이 완료되면 5초 후에 다시 시작
aniMove.addEventListener('animationend', () => {
  setTimeout(() => {
    restartAnimation();
  }, 2800);
});


// text효과
let item = document.querySelector('.container');
let child = item.getElementsByTagName('div');

window.onload = function() {
  setTimeout(function() {
    item.classList.remove('invisible');
  }, 600);
};

$(function() {
  let letter = $('.container').find('div');
  let arrange = $('.arrange');

  $(letter).each(function(i) {
   
  function scatterText(e) {
    $(letter[i]).css({
      'top': Math.random() * e.clientY - 100 + 'px',
      'left': Math.random() * e.clientX - 100 + 'px'
    });
  };

  function rearrangeText() {
    $(letter[i]).css({
      'top': 0 + 'px',
      'left': 0 + 'px'
    });
  }

  $(letter).on('click mousedown', scatterText);
  $(arrange).on('click', rearrangeText);

   });
});
// 비디오재생속도
var video = document.querySelector('video');
video.playbackRate = 0.7; // 재생 속도를 0.5로 설정
// 스킬
// $(document).ready(function() {
//   $("#btn").click(function() {
//     $(this).hide();
//     $(".skill_img").animate({ opacity: 1 }, 1000);
//   });
// });
$(document).ready(function() {
  $("#btn").click(function() {
    $(this).hide();
    $(".skill_img").each(function(index) {
      var $img = $(this);
      setTimeout(function() {
        $img.animate({ opacity: 1 }, 500);
      }, index * 500);
    });
  });
});
// 버튼
$(document).ready(function() {
  $('#btn').addClass('animate');
});
// Q&A
  $(function(){
    let q=$('.qa_left> .qa_div > .qa_dl > dt');
    q.click(function(){
    // 기존 열린 항목 닫기
    q.not(this).next().slideUp();
    q.not(this).find('i').attr('class','fas fa-angle-down');
    // 슬라이드업다운
      $(this).next().slideToggle();
      if($(this).find('i').hasClass('fas fa-angle-down')==true){
        $(this).find('i').attr('class','fas fa-angle-up');
      }else{
        $(this).find('i').attr('class','fas fa-angle-down');
      }
    });
  });
