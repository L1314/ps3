//banner下的轮播图
{
    let lcbxObj = document.querySelector(".lcbx ul");
    let containerObj=document.querySelectorAll(".bannerxia");
    let nextObj = document.querySelector(".youbtn");
    let prevObj = document.querySelector(".zuobtn");
    let now = 4;
    let dir = "r";
    let t = setInterval(moveFn, 2000);

    function moveFn() {
        if (dir === "r") {
            now++;
        } else if (dir === "l") {
            now--;
        }
        lcbxObj.style.transition = "all 1s";

        lcbxObj.style.marginLeft = -295 * now + "px";
    }

    lcbxObj.addEventListener("transitionend", function () {
        if (now === 12) {
            now = 4;
            lcbxObj.style.transition = "none";
            lcbxObj.style.marginLeft = "-1180px";
        };
        if (now === 0) {
            now = 8;
            lcbxObj.style.transition = "none";
            lcbxObj.style.marginLeft = "-2360px";
        }
    });
    containerObj.onmouseover = function () {
        clearInterval(t);
    }
    containerObj.onmouseout = function () {
        t = setInterval(moveFn, 2000);
    }
    let flag = true;
    nextObj.onclick = function () {
        dir = "r";
        if (flag) {
            flag = false;
            moveFn();
        }
    };
    prevObj.onclick = function () {
        dir = "l";
        if (flag) {
            flag = false;
            flag -= 2;
            moveFn();
        }
    }
}
// 公告
{
    let nextObj=document.querySelector(".notice .r-a");
    let prevObj=document.querySelector(".notice .l-a");
    let noticeObj=document.querySelector(".notice ul");
    let notice=document.querySelector(".notice");
    let now=0;
    nextObj.onclick=function(){
        if (now===2){
            now=-1;
        }
        now++;
        noticeObj.style.marginTop=-38*now+"px";

    };
    prevObj.onclick=function(){
        if(now===0){
            now=3;
        }
        now--;
        noticeObj.style.marginTop=-38*now+"px";
    }
    let t=setInterval(function(){
        if (now===2){
            now=-1;
        }
        now++;
        noticeObj.style.marginTop=-38*now+"px";
    },1000);
    notice.onmouseover=function(){
        clearInterval(t);
    };
    notice.onmouseout=function(){
        t=setInterval(function(){
            if (now===2){
                now=-1;
            }
            now++;
            noticeObj.style.marginTop=-38*now+"px";
        },1000)
    }
}