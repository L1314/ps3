
$("#main").fullpage({
	afterLoad:function(anchorLink,index){
		if(index===2){
    $(".head h2").addClass("animated bounceInUp")
    $(".head h3").addClass("animated bounceInDown")	
    $(".myself h1").addClass("animated zoomIn")
    $(".myself p").addClass("animated lightSpeedIn")
    $(".pic").addClass("animated flipInY")     		
    }
    if(index===3){
      $(".head2 h2").addClass("animated bounceInUp")
      $(".head2 h3").addClass("animated bounceInDown")     
    }
    if(index===4){
      $(".head3 h2").addClass("animated slideInLeft")
      $(".head3 h3").addClass("animated slideInRight")     
    }
    if(index===5){
      $(".edu-head h2").addClass("animated bounceInLeft")
      $(".edu-head h3").addClass("animated bounceInRight") 
      $(".name").addClass("animated flipInX")
      $(".email").addClass("animated flipInX")   
      $(".message").addClass("animated flipInX")     
    }
	}
   
});
//缩放
$('.zoomify').zoomify();
//作品
$('#container').sliphover({
    reverse:true
    
});
//楼层跳转
 $(".aa").click(function(){
    $("#main").fullpage.moveTo(2,0)

 })
 $(".bb").click(function(){
    $("#main").fullpage.moveTo(3,0)

 })
 $(".cc").click(function(){
    $("#main").fullpage.moveTo(4,0)

 })
 $(".dd").click(function(){
    $("#main").fullpage.moveTo(5,0)

 })

  //点击出现导航栏
$(".nav-btn").click(function(){
	$(".nav").slideDown(500)
	$(".nav-btn").css("display","none")

})
$(".off-btn").click(function(){
	$(".nav").slideUp(500)
	$(".nav-btn").css("display","block")

})

//技能进度条
$("#progressbar1").LineProgressbar({
      percentage:91,
      fillBackgrou634ndColor:"#CC6666",
      duration:10000,
      width:1000,
      height:50,
      radius:10,
  });
  $("#progressbar2").LineProgressbar({
      percentage:80,
      fillBackgroundColor:"#99CC99",
      duration:10000,
       width:1000,
       height:50,
      radius:10,
  });
  $("#progressbar3").LineProgressbar({
      percentage:76,
      fillBackgroundColor:"#00CC99",
      duration:10000,
       width:1000,
       height:50,
      radius:10,
  });
  $("#progressbar4").LineProgressbar({
      percentage:61,
      fillBackgroundColor:"#CCFF66",
      duration:10000,
      width:1000,
      height:50,
      radius:10,
  });
   $("#progressbar5").LineProgressbar({
      percentage:61,
      fillBackgroundColor:"#FFFF66",
      duration:10000,
      width:1000,
      height:50,
      radius:10,
  });
 //轮播
var mains=$(".slide")
var num=0
setInterval(function(){
    num++
    if(num===mains.length){
      num=0
    }
    mains.fadeOut(1000).eq(num).fadeIn(200)
},3000)


