var mySwiper = new Swiper ('.swiper-container', {
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    },
});

var myScroll = new IScroll(".content");


var state="wait"
$(".btnbox div").click(function () {
    $(".btnbox div").removeClass("active").filter(this).addClass("active")
    if($(".wait").hasClass("active")){
        state="wait";
    }else{
        state="done";
    }
    reWrite();
    myScroll.scrollTo(0,0,0);
})

function getData() {
    return localStorage.todo?JSON.parse(localStorage.todo):[];
}
function saveData(data) {
    localStorage.todo=JSON.stringify(data);
}

$("#add").click(function () {
    $("#main")
        .css("filter","blur(10px)")
        .next()
        .show()
        .find("#editarea")
        // .addClass("show")
        .delay(500)
        .queue(function () {
            $(this).addClass("show").dequeue();
            $("#text")[0].focus();
        });


})

$("#submit").click(function () {
    var text = $("#text").val();
    if(text === ""){
        return;
    }

    var time = new Date().getTime();//转化为毫秒数
    console.log(time);
    var data = getData();
    console.log(data);
    var color=getColor();
    data.push({con:text,time,isStar:0,isDone:0,color});
    saveData(data);
    $("#text").val("");
    reWrite();
    $("#editarea")
        .removeClass("show")
        .parent()
        .hide()
        .prev()
        .css("filter","")
})

$("#close").click(function () {
    $("#editarea")
        .removeClass("show")
        .parent()
        .hide()
        .prev()
        .css("filter","")
})

var colorArr=[0,3,6,9,"c","f"];
function getColor() {
    var str="#";
    for(var i=0;i<3;i++){
        var pos=Math.floor(Math.random()*colorArr.length)
        str+=colorArr[pos]
        console.log(pos)
    }
    return str;
}


$(".content").on("click",".right",function () {
    var data=getData();
    var index=$(this).parent().attr("id");
    data.reverse();
    data[index].isDone=1;
    data.reverse();
    saveData(data);
    reWrite();
})
//星标
$(".content").on("click","i",function () {
    var data=getData();
    var index=$(this).parent().attr("id");
    data.reverse();
    data[index].isStar=data[index].isStar?0:1;
    data.reverse();
    saveData(data);
    reWrite();
  
})
//删除
$(".content").on("click",".delate",function () {
    var data=getData();
    var index=$(this).parent().attr("id");
    data.reverse();
    // $("i").css("background","red");
    data.splice(index,1);
    data.reverse();
    saveData(data);
    reWrite();

})
$(".content").on("click","p",function () {
$("#main").css("filter","blur(10px)").next().show().find(".showarea").delay(500).queue(function () {
    $(this).addClass("show").dequeue();
    $(this).html(text);
})

})
//清空
function clear() {
    var data=getData();
    data=$.grep(data,function (index,ele) {
        return ele.isDone===0;       
    })
    saveData(data);
    reWrite();
}
// 删除所有子节点
function reWrite() {
    var data = getData();
    $(".content ul").empty();
    data.reverse();//颠倒顺序
    var str = "";
    $.each(data,function (index,val) {
        if(state==="wait"){
            if(val.isDone===0){
                var className=val.isStar?"active":"";
                str+="<li style='background:"+val.color+"' id='"+index+"'><input type=\"checkbox\"><time>"+getDate(val.time)+"</time> &nbsp<time>"+getTime(val.time)+"</time>&nbsp<p>"+val.con+"</p> <i class='"+className+" iconfont'>&#xe600;</i><div class='right'>完成</div> </li>"
            }
        }else if(state==="done"){
            if(val.isDone===1){
                str+="<li style='background:gray' id='"+index+"'><input type=\"checkbox\"><time>"+getDate(val.time)+"</time><time>"+getTime(val.time)+"</time> <p>"+val.con+"</p> <i class='"+className+" iconfont'>&#xe600;</i><div class='delate'>删除</div> </li>"
            }
        }


    });
    $(".content ul").html(str);
    addEvent();
    myScroll.refresh();
    // myScroll.scrollTo(0,0,0)
}
reWrite();







//工具函数

function getDate(ms) {
    var date=new Date();
    date.setTime(ms);
    var year=date.getFullYear();
    // console.log(year)
    var month=addZero(date.getMonth()+1);
    var day=addZero(date.getDate());
    return year+"-"+month+"-"+day;
}

function addZero(num) {
    return num<10?"0"+num:num;
}
function getTime(ms) {
    var date=new Date();
    date.setTime(ms);
    var hour=addZero(date.getHours())
    var min=addZero(date.getMinutes())
    var sec=addZero(date.getSeconds())
    return hour+":"+min+":"+sec;
}
var max=$(window).width()/750*100*2.5;
function addEvent() {
    var lis=$(".content ul li");
    lis.each(function (index,ele) {
        var hammer=new Hammer(ele);
        var mx;
        var state="start"
        hammer.on("panstart",function (e) {
            $(ele).css("transition","none")
        })
        hammer.on("pan",function (e) {
            mx=e.deltaX;
            
            if(state==="start"){
                if(mx>0){
                    return;
                }
            }else {
                if(mx<0){
                    return;
                }
                mx=mx-max;
            }

            if(Math.abs(mx)>max){
                return;
            }
            $(ele).css("transform","translate3d("+mx+"px,0,0)")
        })
        hammer.on("panend",function () {
            $(ele).css("transition","all .5s");
            if(Math.abs(mx)>max/2){
                state="end"
              $(ele).css("transform","translate3d("+(-max)+"px,0,0)")
            }else {
                state="start"
                $(ele).css("transform","translate3d(0,0,0)") 
            }
        })
    })
}