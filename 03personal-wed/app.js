let nav = document.querySelector("nav");

window.addEventListener("scroll", () =>{
    if(window.scrollY == 0 ) {
        nav.style.boxShadow = "";
    }else{
        nav.style.boxShadow = "0px 2px 4px rgba(0, 0, 0, 0.2)";
    }
})

//測試滾軸滑動位置
// window.addEventListener("scroll", () =>{
//     console.log(window.scrollY);
// })