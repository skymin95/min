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
