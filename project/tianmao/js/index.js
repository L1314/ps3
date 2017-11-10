// banner
{
    let now = 0;
    let bannerDots = document.querySelectorAll(".banner-dots span");
    let bannerImgs = document.querySelectorAll(".banner-img a");
    let bannerObj = document.querySelector("#banner");
    bannerDots.forEach(function (ele, index) {
        ele.onclick = function () {
            for (let i = 0; i < bannerDots.length; i++) {
                bannerDots[i].classList.remove("selected");
                bannerImgs[i].classList.remove("active");
            }
            ele.classList.add("selected");
            bannerImgs[index].classList.add("active");
            now = index;
        }
    });
    function fn() {
        if (now === bannerDots.length - 1) {
            now = 0
        } else {
            now++;
        }
        for (let i = 0; i < bannerDots.length; i++) {
            bannerDots[i].classList.remove("selected");
            bannerImgs[i].classList.remove("active");
        }
        bannerDots[now].classList.add("selected");
        bannerImgs[now].classList.add("active");
    }

    let f = setInterval(fn, 1000);
    bannerObj.onmouseover = function () {
        clearInterval(f);
    };
    bannerObj.onmouseout = function () {
        f = setInterval(fn, 1000);
    };
}
//顶部搜索栏

     let topObj=document.querySelector(".clear");
    window.onscroll=function () {
        let obj= document.documentElement.scrollTop===0?document.body:document.documentElement;
        let st=obj.scrollTop;
        if(st>800){
            topObj.style.top="0";
        }else{
            topObj.style.top="-50px";
        }
    }
//侧边导航栏
    {
        let leftObj=document.querySelector(".btn");
        let btns=document.querySelectorAll(".btn ul li")
        let contents=document.querySelectorAll("#mlrs")
        let obj= document.documentElement.scrollTop===0?document.body:document.documentElement;
        window.addEventListener("scroll",function () {


            let st=obj.scrollTop;
           let ot=obj.offsetTop;
            if(st>1000){
                leftObj.style.width="36px";
                leftObj.style.height="324px";

            }else{
                leftObj.style.width=0;
                leftObj.style.height=0;
            }
            for(let i=0;i<contents.length;i++){
                if(st>=contents[i].offsetTop-60){
                    for(let i=0;i<btns.length;i++){
                        btns[i].classList.remove("active");
                    }
                    btns[i].classList.add("active");
                }
            }

        });
        btns.forEach(function (ele,index) {
            ele.onclick=function () {
                let ot=contents[index].offsetTop;
                animate(obj,{scrollTop:ot -60});

            }
        });
    }
//返回顶部
    {
        let totop=document.querySelector(".btn .ddaohang");
        let totop1=document.querySelector(".totop1")
        let obj= document.documentElement.scrollTop===0?document.body:document.documentElement;
        window.addEventListener("scroll",function(){
            let st=obj.scrollTop;
            if(st>1000){
                totop.style.opacity=1;
                totop1.style.opacity=1;
            }else{
                totop.style.opacity=0;
                totop1.style.opacity=0;

            }

            totop.onclick=function(){
                animate(obj,{scrollTop:0});
            }
            totop1.onclick=function(){
                animate(obj,{scrollTop:0});
            }
        });

        
    }