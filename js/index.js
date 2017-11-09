// 技能条
var canvas=document.querySelector("#canvas1");
var canvas2=document.querySelector("#canvas2");
var canvas3=document.querySelector("#canvas3");
var cobj1=canvas1.getContext("2d");
var cobj2=canvas2.getContext("2d");
var cobj3=canvas3.getContext("2d");
var box=document.querySelector(".box");
var flag=true;
function circle(canvas,max,color) {
    var cobj=canvas.getContext("2d");
    cobj.save();
    cobj.translate(100,100);
//    cobj.rotate(-Math.PI/2)
    cobj.lineWidth=20;
    cobj.strokeStyle=color;
    cobj.lineCap="round";
    cobj.textAlign="center";
    cobj.textBaseline="middle";
    cobj.font="30px :微软雅黑";
//    cobj.strokeText();
    var num=0;
    function progress() {
        num++;
        var angle=num*Math.PI/50;
        cobj.clearRect(-100,-100,200,200);
        cobj.save();
        cobj.rotate(-Math.PI/2);
        cobj.beginPath();
        cobj.shadowBlur=15;

        cobj.arc(0,0,70,0,angle);
        cobj.stroke();
        cobj.restore();
        cobj.fillText(num+"%",0,0);
        if(num<max){
            requestAnimationFrame(progress);
        }else{
            cobj.restore();
        }
    }
    progress();
}
$("#main").fullpage({
    // sectionsColor: ['white','#3A3F43', '#C2CDA8', '#333',],
    // anchors: ['p0','p1', 'p2', 'p3', 'p4'],
    //  menu:"#menu",
    afterLoad:function(anchorLink,index){
        if(index===2){
            $(".head h2").addClass("animated bounceInUp");
            $(".head h3").addClass("animated bounceInDown");
            $(".myself h1").addClass("animated zoomIn");
            $(".myself p").addClass("animated lightSpeedIn");
            $(".pic").addClass("animated flipInY")
        }
        if(index===3){
            $(".head2 h2").addClass("animated bounceInUp");
            $(".head2 h3").addClass("animated bounceInDown")
            circle(canvas,80," rgba(132, 252, 255, 0.49)");
            circle(canvas2,70,"rgba(84, 146, 217, 0.53)");
            circle(canvas3,88,"rgba(180, 121, 217, 0.53)");
            progress();
        }
        if(index===4){
            $(".head3 h2").addClass("animated slideInLeft");
            $(".head3 h3").addClass("animated slideInRight")
        }
        if(index===5){
            $(".edu-head h2").addClass("animated bounceInLeft");
            $(".edu-head h3").addClass("animated bounceInRight") ;
            $(".name").addClass("animated flipInX");
            $(".email").addClass("animated flipInX");
            $(".message").addClass("animated flipInX")
        }
    }

});
//totop
{
    var windowObj = document.body.scrollTop === 0 ? document.documentElement : document.body;
    var speed = 200;
    var toTop = document.querySelector(".totop");
    toTop.onclick = function () {

        var t = setInterval(function () {
            windowObj.scrollTop -= speed;
            if (windowObj.scrollTop === 0) {
                clearInterval(t);
            }
        }, 20);

    }
}
//作品

// var containers=document.querySelector("#container")
var a=document.querySelectorAll(".container li");
var box7s=document.querySelectorAll(".fushu li");
a.forEach(function (ele,index){
    ele.onmouseover=function(){
        for(var i=0;i<a.length;i++){
            a[i].classList.remove("active");
            box7s[i].style.display="none";
        }
            ele.classList.add("active");
            box7s[index].style.display="block";
    }
});
