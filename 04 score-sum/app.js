let hero = document.querySelector(".hero");
let slider = document.querySelector(".slider");
let animation = document.querySelector("section.animation-wrapper");

const time_line = new TimelineMax();

time_line
    .fromTo(
        hero,  //控制對象
        1,     //duration 時間 
        {height: "0%"},  //控制對象的原始狀態
        {height:"100%", ease: Power2.easeInOut} //控制對象的動畫結束後的狀態
    ).fromTo(
        hero,  //控制對象
        1.2,     //duration 時間 
        {width: "80%"},  //控制對象的原始狀態
        {width:"100%", ease: Power2.easeInOut} //控制對象的動畫結束後的狀態
    ).fromTo(
        slider, 
        1, 
        {x: "-100%"}, 
        {x: "0%", ease: Power2.easeInOut}, 
        "-=1.2" //提早1.2S開始跑動畫
    ).fromTo(animation, 0.3, {opacity:1}, {opacity:0} //不透明度 => 0
);
//雖然使用動畫效果讓遮罩看不見，但沒pointerEvents之前，點擊畫面會沒效果
setTimeout(() => {
    animation.style.pointerEvents = "none"; 
  }, 2500);