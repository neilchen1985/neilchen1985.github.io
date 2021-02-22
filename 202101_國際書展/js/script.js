var played = false;
// var played = true;
var rotating = false;
var rotateEle = document.querySelector('.rotate img');
var award;
// var award = 'awards_3.png';
var exchange = false;
// var exchange = true;
var triggerBtn = document.querySelector(".head_section .trigger button");
var showAward = function(){
  var scrollComplete = function(){
    setTimeout(function(){
      // $(awardImg).effect('shake', 300);
      $(awardImg).show('puff');
    },1000);
  };
  var awardImg = $('.award_section > img')[0];
  awardImg.src = 'image/' + award;
  $('html, body').animate({
    scrollTop: $(".award_section").offset().top - 20
  }, 1000, scrollComplete());
  $('.award_section > button img')[0].src = exchange ? 'image/exchange_2.png' : 'image/exchange_1.png';
  if(award == 'awards_6.png'){
    return
  }else{
    setTimeout(function(){
      $('.award_section > button img').show();
    },1000);
  }
};

var rotateFn = function (awards, angles, txt){
  rotating = !rotating;
  $(rotateEle).stopRotate();
  $(rotateEle).rotate({
    angle:0,
    animateTo:angles + 1800,
    duration:3000,
    callback:function (){
      console.log(txt);
      rotating = !rotating;
      showAward();
    }
  });
  setTimeout(function(){
    played = true;
    triggerBtnDetect();
  }, 3000);
};
var triggerBtnDetect = function(){
    triggerBtn.disable = played ? 'true' : 'false';
    triggerBtn.innerText = played ? '已經玩過囉！' : '我要玩！';
    triggerBtn.style.backgroundColor = played ? '#999999' : '#EB2E00';
};
$('.award_section > button').click(function(){
  if(exchange){
    $('.award_section > button').effect('shake', 300);
  }else{
    exchange = true;
    $('.award_section > button img')[0].src = exchange ? 'image/exchange_2.png' : 'image/exchange_1.png';
    // 送紀錄
  }
});
triggerBtn.addEventListener('click', function(){
  if(rotating){
    return;
  }else if(played){
    triggerBtnDetect();
    $(triggerBtn).effect('shake', 300);
    return;
  }
  var fate = Math.floor(Math.random()*(6-0+1)+0);
  // var fate = 5;
  // 0 => 特獎, 1 => 二獎, 2 => 三獎, 3 => 四獎, 4 => 知識獎, 5 => 加倍券
  switch(fate){
    case 0:
      rotateFn(0, 0, '特獎');
      award = 'awards_1.png';
      break;
    case 1:
      rotateFn(1, -60, '二獎');
      award = 'awards_2.png';
      break;
    case 2:
      rotateFn(2, -120, '三獎');
      award = 'awards_3.png';
      break;
    case 3:
      rotateFn(3, -180, '四獎');
      award = 'awards_4.png';
      break;
    case 4:
      rotateFn(4, -240, '知識獎');
      award = 'awards_5.png';
      break;
    case 5:
      rotateFn(5, -300, '加倍卷');
      award = 'awards_6.png';
      break;
  }
  console.log(fate);
  // 送紀錄
});

// init
(function(){
  if(played){
    showAward();
  }else{
    setTimeout(function(){
      $(window).scrollTop(0);
    }, 10); 
  }
  triggerBtnDetect();
})();