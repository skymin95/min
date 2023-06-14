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

// 스킬버튼 
function startAnimation() {
  var button = document.getElementById("btn");
  // button.style.display = "none";
   // 버튼 숨김

  var images = document.getElementsByClassName("image");
  var delay = 100; // 이미지 이동 딜레이 (0.1초)

  var radius = 200; // 10각형의 반지름
  var angle = (2 * Math.PI) / images.length; // 이미지들 간의 각도

  for (var i = 0; i < images.length; i++) {
    var image = images[i];
    var theta = i * angle;
    var x = Math.cos(theta) * radius;
    var y = Math.sin(theta) * radius;

    setTimeout(function(img, posX, posY) {
      img.style.opacity = 1;
      img.style.transform = "translate(" + posX + "px, " + posY + "px)";
    }, i * delay, image, x, y);
  }
};
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
