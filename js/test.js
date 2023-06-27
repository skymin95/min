const modeSwitch = document.getElementById("modeSwitch");
const changeImageButton = document.getElementById("changeImageButton");

modeSwitch.addEventListener("change", function() {
  document.body.classList.toggle("dark-mode");
  if (document.body.classList.contains("dark-mode")) {
    // 다크 모드일 때 특정 색상을 적용
    document.querySelector("button").style.color = "#fff";
    document.querySelectorAll("li").forEach(li => li.style.color = "#fff");
    changeImage(); // 다크 모드로 전환 시 이미지 변경
  } else {
    // 다크 모드가 아닐 때의 기본 색상을 설정
    document.querySelector("button").style.color = "black";
    document.querySelectorAll("li").forEach(li => li.style.color = "black");
    changeImage(); // 밝은 모드로 전환 시 이미지 변경
  }
});

// 다크모드 이미지변경
function changeImage() {
  // var image = document.getElementById("logo");
  var image = document.querySelector(".img_d_w");
  if (document.body.classList.contains("dark-mode")) {
    // 다크 모드일 때 이미지 변경
    // image.src = "다크모드이미지.jpg";
    // image.alt = "다크 모드 이미지";
    image.src = "./img/logo_w.png";
    image.alt = "로고";

    // image.src = "./img/facebook_w.png";
    // image.alt = "페이스북";

    // image.src = "./img/instagram_w.png";
    // image.alt = "인스타";

    // image.src = "./img/git_2.png";
    // image.alt = "깃";
  } else {
    // 밝은 모드일 때 이미지 변경
    image.src = "./img/logo.png"
    image.alt = "로고";

    // image.src = "./img/facebook_w.png";
    // image.alt = "페이스북";

    // image.src = "./img/instagram_w.png";
    // image.alt = "인스타";

    // image.src = "./img/git_2.png";
    // image.alt = "깃";
  }
}
changeImageButton.addEventListener("click", changeImage);



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
