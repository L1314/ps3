 window.onload=function(){	
	
	let hidden=document.getElementsByClassName('hidden');
	let ul=document.getElementsByClassName('hidden-1');
	let flag=true;
	let nav=document.getElementsByTagName('nav');
	let li1=document.getElementsByClassName('navi-1');
	for(let i=0;i<(li1.length-2);i++){
		
		li1[i].onmouseenter=function(){
			hidden[0].style.height='230px';
			hidden[0].style.borderTop='1px solid #e0e0e0';
			for(let j=0;j<li1.length-2;j++){
				ul[j].style.height='0px';
			}
			ul[i].style.height='230px';
		}
		li1[i].onmouseleave=function(){
			hidden[0].style.height='0';
			hidden[0].style.borderTop='none';
			ul[i].style.height='0px';
		}
	}
	
	
	let head=document.getElementsByClassName('head');
	let gouwuche=document.getElementsByClassName('gouwuche');
	gouwuche[0].onmouseover=function(){

		head[0].style.height='100px';
	}
	gouwuche[0].onmouseout=function(){
		head[0].style.height=0;
	}
	
	
	let text=document.getElementsByTagName('input');
	let mi=document.getElementsByClassName('mi');
	let wenzi=document.getElementsByClassName('wenzi');
	let naviright=document.getElementsByClassName('naviright');
	
		text[0].onfocus=function(){
			naviright[0].style.display='block';
			mi[0].style.display='none';
			wenzi[0].style.opacity=0;
		}
		text[0].onblur=function(){
			naviright[0].style.display='none';
			mi[0].style.display='block';
			wenzi[0].style.opacity=1;
		}
	
	let bannerleft=document.getElementsByClassName('banner-left')[0];
	let slide=bannerleft.getElementsByClassName('second');
	let bannerleft1=document.getElementsByClassName('banner-left1');
	for(var i=0;i<slide.length;i++){
		slide[i].index=i;
		slide[i].onmouseover=function(){
			bannerleft1[this.index].style.display='block';
		}
		slide[i].onmouseout=function(){
			bannerleft1[this.index].style.display='none';
		}
	}
	let banner=document.getElementsByClassName('banner');
	let main=banner[0].getElementsByTagName('main');
	let banner11=document.getElementsByClassName('banner1-1');
	let width=banner11[0].offsetWidth;
	let lis=banner11[0].getElementsByTagName('li');
	
	let lunkuodian=document.getElementsByClassName('lunkuodian');
	let lunkuodian1=lunkuodian[0].getElementsByTagName('li');
	
	let next=now=0;
	let fn=function(){
		next++;
		if(next==lunkuodian1.length){
			next=0;
		}
		lis[next].style.left=`${width}px`;
		animate(lis[now],{left:-width});
		animate(lis[next],{left:0},function(){
			flag=true;
		});
		lunkuodian1[now].style.background='#15171b';
		lunkuodian1[now].style.border='2px solid #58585c';
		lunkuodian1[next].style.background='#7c7c81';
		lunkuodian1[next].style.border='2px solid #48484c';
		now=next;
	}
	let t=window.setInterval(fn,3000)
	
	main[0].onmouseover=function(){
		clearInterval(t);
	}
	
	let banner111=document.getElementsByClassName('banner11')[0];
	let banner112=document.getElementsByClassName('banner12')[0];
	banner112.onclick=function(){
		if(flag){
			flag=false;
			fn();
		}
	};
	banner111.onclick=function(){
		if(flag){
			flag=false;
			next--;
			if(next<0){
				next=lunkuodian1.length-1;
			}
			lis[next].style.left=`${-width}px`;
			animate(lis[now],{left:width});
			animate(lis[next],{left:0},function(){
				flag=true;
			});
			lunkuodian1[now].style.background='#15171b';
			lunkuodian1[now].style.border='2px solid #58585c';
			lunkuodian1[next].style.background='#7c7c81';
			lunkuodian1[next].style.border='2px solid #48484c';
			now=next;
		}
		
	}
	
	main[0].onmouseout=function(){
		t=window.setInterval(fn,3000)
	}
	
	for(let i=0;i<lunkuodian1.length;i++){
		lunkuodian1[i].onclick=function(){
			if(i==now){
				return;
			}
			if(now<i){
				lis[i].style.left=`${width}px`;
				animate(lis[now],{left:-width});
				animate(lis[i],{left:0});
				lunkuodian1[now].style.background='#15171b';
				lunkuodian1[now].style.border='2px solid #58585c';
				lunkuodian1[i].style.background='#7c7c81';
				lunkuodian1[i].style.border='2px solid #48484c';
			}else if(now>i){
				lis[i].style.left=`${-width}px`;
				animate(lis[now],{left:width});
				animate(lis[i],{left:0});
				lunkuodian1[now].style.background='#15171b';
				lunkuodian1[now].style.border='2px solid #58585c';
				lunkuodian1[i].style.background='#7c7c81';
				lunkuodian1[i].style.border='2px solid #48484c';
			}
		
		
		now=next=i;
		}
		lunkuodian1[i].onmouseover=function(){
			for(let j=0;j<lunkuodian1.length;j++){
				lunkuodian1[j].style.background='#15171b';
				lunkuodian1[j].style.border='2px solid #58585c';
				
			}
			lunkuodian1[i].style.background='#7c7c81';
			lunkuodian1[i].style.border='2px solid #48484c';
		}
	}
	
	let big=document.getElementsByClassName('big');
	let tuijian2=document.getElementsByClassName('tuijian2')[0];
	let bigNum=big[0].childElementCount;
	let bigW=tuijian2.offsetWidth + parseInt(getComputedStyle(tuijian2,null).marginRight);
	big[0].style.width=`${bigNum*bigW}px`;
	let bigNum1=big[1].childElementCount;
	let bigW1=tuijian2.offsetWidth + parseInt(getComputedStyle(tuijian2,null).marginRight);
	big[1].style.width=`${bigNum1*bigW1}px`;
	let index=index1=0;
	
	let mingxingleft=document.getElementsByClassName('mingxing-left');
	let mingxingright=document.getElementsByClassName('mingxing-right');
	mingxingright[0].onmouseenter=function(){
		mingxingright[0].style.color='#FF6700';
	}
	mingxingright[1].onmouseenter=function(){
		mingxingright[1].style.color='#FF6700';
	}
	mingxingleft[0].onmouseenter=function(){
		mingxingleft[0].style.color='#FF6700';
	}
	mingxingleft[1].onmouseenter=function(){
		mingxingleft[1].style.color='#FF6700';
	}
	mingxingright[0].onmouseleave=function(){
		mingxingright[0].style.color='#b0b0b0';
	}
	mingxingright[1].onmouseleave=function(){
		mingxingright[1].style.color='#b0b0b0';
	}
	mingxingleft[0].onmouseleave=function(){
		mingxingleft[0].style.color='#b0b0b0';
	}
	mingxingleft[1].onmouseleave=function(){
		mingxingleft[1].style.color='#b0b0b0';
	}
	mingxingright[0].onclick=function(){
		if(index==1){
			mingxingright[0].style.color='#000';
			return;
		}
		index++;
		big[0].style.left=`${-1240*index}px`;
		
		mingxingleft[0].style.color='#b0b0b0';
	}
	mingxingleft[0].onclick=function(){
		if(index==0){
			mingxingleft[0].style.color='#000';
			return;
		}
		index--;
		big[0].style.left=`${1240*index}px`;
		
		mingxingright[0].style.color='#b0b0b0';
	}
	mingxingright[1].onclick=function(){
		if(index1==1){
			mingxingright[1].style.color='#000';
			return;
		}
		index1++;
		big[1].style.left=`${-1240*index1}px`;
		
		mingxingleft[1].style.color='#b0b0b0';
	}
	mingxingleft[1].onclick=function(){
		if(index1==0){
			mingxingleft[1].style.color='#000';
			return;
		}
		index1--;
		big[1].style.left=`${1240*index1}px`;
		
		mingxingright[1].style.color='#b0b0b0';
	}
	let index2=0;
	window.setInterval(function(){
		index2++;
		big[0].style.left=`${-1240*index2}px`;
		mingxingright[0].style.color='#000';
		mingxingleft[0].style.color='#b0b0b0';
		if(index2==2){
			index2=0;
			big[0].style.left=`${1240*index2}px`;
			mingxingleft[0].style.color='#000';
			mingxingright[0].style.color='#b0b0b0';
		}
		index=index2;
		
	},3000)
	let index3=0;
	window.setInterval(function(){
		index3++;
		big[1].style.left=`${-1240*index3}px`;
		mingxingright[1].style.color='#000';
		mingxingleft[1].style.color='#b0b0b0';
		if(index3==2){
			index3=0;
			big[1].style.left=`${1240*index3}px`;
			mingxingleft[1].style.color='#000';
			mingxingright[1].style.color='#b0b0b0';
		}
		index1=index3;
		
	},3000)
	
	let yingjian3=document.querySelectorAll('.yingjian3');
	let dapei=document.querySelectorAll('.dapei2')[0];
	let dapei1=document.querySelectorAll('.dapei2')[1];
	let zhoubian=document.querySelectorAll('.zhoubian')[0];
	let jishuqi=0;
	let jishuqi2=0;
	let zhoubianLi=zhoubian.querySelectorAll('li');
		let dapeiLi=dapei.querySelectorAll('li');
		let dapeiLi1=dapei1.querySelectorAll('li');
		zhoubianLi.forEach(function(ele,index1){
			zhoubianLi[index1].onmouseenter=function(){
				zhoubianLi[jishuqi2].style.color='#000';
				zhoubianLi[jishuqi2].style.borderBottom='none';
				zhoubianLi[index1].style.color='#ff6700';
				zhoubianLi[index1].style.borderBottom='2px solid #ff6700';
				index1=index1%5;
				jishuqi2=jishuqi2%5;
				for(let i=0;i<8;i++){
					yingjian3[jishuqi2+51+i*5].style.display='none';
					yingjian3[index1+51+i*5].style.display='block';
				}
				jishuqi2=index1;
				}
		})
		dapeiLi.forEach(function(ele,index1){
			dapeiLi[index1].onmouseenter=function(){
				dapeiLi[jishuqi].style.color='#000';
				dapeiLi[jishuqi].style.borderBottom='none';
				dapeiLi[index1].style.color='#ff6700';
				dapeiLi[index1].style.borderBottom='2px solid #ff6700';
				index1=index1%4;
				jishuqi=jishuqi%4;
				for(let i=0;i<7;i++){
					yingjian3[jishuqi+i*4].style.display='none';
					yingjian3[index1+i*4].style.display='block';
				}
				jishuqi=index1;
				}
		})
		let jishuqi1=0;
		dapeiLi1.forEach(function(ele,index){
			dapeiLi1[index].onmouseenter=function(){
				console.log(index);
				dapeiLi1[jishuqi1].style.color='#000';
				dapeiLi1[jishuqi1].style.borderBottom='none';
				dapeiLi1[index].style.color='#ff6700';
				dapeiLi1[index].style.borderBottom='2px solid #ff6700';
				index=index%4;
				jishuqi1=jishuqi1%4;
				for(let j=0;j<8;j++){
					console.log(j)
					yingjian3[jishuqi1+24+j*4].style.display='none';
					yingjian3[index+24+j*4].style.display='block';
				}
				jishuqi1=index;
				}
		})
		
		let hali=document.querySelectorAll('.hali');
		let haliLi=hali[0].querySelectorAll('li');
		let haliLi1=hali[1].querySelectorAll('li');
		let haliLi2=hali[2].querySelectorAll('li');
		let haliLi3=hali[3].querySelectorAll('li');
		let neirong26=document.querySelectorAll('.neirong26');
		let neirong251=document.querySelectorAll('.neirong251');
		let neirong252=document.querySelectorAll('.neirong252');
		let neirongLi=neirong26[0].querySelectorAll('li');
		let neirongLi1=neirong26[1].querySelectorAll('li');
		let neirongLi2=neirong26[2].querySelectorAll('li');
		let neirongLi3=neirong26[3].querySelectorAll('li');
		let now1=next1=0;
		let width1=haliLi[0].offsetWidth;
		neirongLi.forEach(function(ele,index){
			neirongLi[index].onclick=function(){
				if(index==now1){
				   return;
				}
				if(now1<index){
					haliLi[index].style.left=`${width1}px`;
					animate(haliLi[now1],{left:-width1});
					animate(haliLi[index],{left:0});
					neirongLi[index].style.background='#fff';
					neirongLi[index].style.border='2px solid #ff6700';
					neirongLi[now1].style.background='#B0B0B0';
					neirongLi[now1].style.border='none';
				}else if(now1>index){
					haliLi[index].style.left=`${-width1}px`;
					animate(haliLi[now1],{left:width1});
					animate(haliLi[index],{left:0});
					neirongLi[index].style.background='#fff';
					neirongLi[index].style.border='2px solid #ff6700';
					neirongLi[now1].style.background='#B0B0B0';
					neirongLi[now1].style.border='none';
				}
		
		
				now1=next1=index;
				
			}
			
		})
		let now2=next2=0;
		neirongLi1.forEach(function(ele,index){
			neirongLi1[index].onclick=function(){
				if(index==now2){
				   return;
				}
				if(now2<index){
					haliLi1[index].style.left=`${width1}px`;
					animate(haliLi1[now2],{left:-width1});
					animate(haliLi1[index],{left:0});
					neirongLi1[index].style.background='#fff';
					neirongLi1[index].style.border='2px solid #ff6700';
					neirongLi1[now2].style.background='#B0B0B0';
					neirongLi1[now2].style.border='none';
				}else if(now2>index){
					haliLi1[index].style.left=`${-width1}px`;
					animate(haliLi1[now2],{left:width1});
					animate(haliLi1[index],{left:0});
					neirongLi1[index].style.background='#fff';
					neirongLi1[index].style.border='2px solid #ff6700';
					neirongLi1[now2].style.background='#B0B0B0';
					neirongLi1[now2].style.border='none';
				}
		
		
				now2=next2=index;
				
			}
			
		})
		let now3=next3=0;
		neirongLi2.forEach(function(ele,index){
			neirongLi2[index].onclick=function(){
				if(index==now3){
				   return;
				}
				if(now3<index){
					haliLi2[index].style.left=`${width1}px`;
					animate(haliLi2[now3],{left:-width1});
					animate(haliLi2[index],{left:0});
					neirongLi2[index].style.background='#fff';
					neirongLi2[index].style.border='2px solid #ff6700';
					neirongLi2[now3].style.background='#B0B0B0';
					neirongLi2[now3].style.border='none';
				}else if(now3>index){
					haliLi2[index].style.left=`${-width1}px`;
					animate(haliLi2[now3],{left:width1});
					animate(haliLi2[index],{left:0});
					neirongLi2[index].style.background='#fff';
					neirongLi2[index].style.border='2px solid #ff6700';
					neirongLi2[now3].style.background='#B0B0B0';
					neirongLi2[now3].style.border='none';
				}
		
		
				now3=next3=index;
				
			}
			
		})
		let now4=next4=0;
		neirongLi3.forEach(function(ele,index){
			neirongLi3[index].onclick=function(){
				if(index==now4){
				   return;
				}
				if(now4<index){
					haliLi3[index].style.left=`${width1}px`;
					animate(haliLi3[now4],{left:-width1});
					animate(haliLi3[index],{left:0});
					neirongLi3[index].style.background='#fff';
					neirongLi3[index].style.border='2px solid #ff6700';
					neirongLi3[now4].style.background='#B0B0B0';
					neirongLi3[now4].style.border='none';
				}else if(now4>index){
					haliLi3[index].style.left=`${-width1}px`;
					animate(haliLi3[now4],{left:width1});
					animate(haliLi3[index],{left:0});
					neirongLi3[index].style.background='#fff';
					neirongLi3[index].style.border='2px solid #ff6700';
					neirongLi3[now4].style.background='#B0B0B0';
					neirongLi3[now4].style.border='none';
				}
		
		
				now4=next4=index;
				
			}
			
		})
		neirong252[0].onclick=function(){
				next1++;
				if(next1==haliLi.length){
					next1=0;
					return;
				}
				if(next1==now1){
					return;
				}
				haliLi[next1].style.left=`${width1}px`;
				animate(haliLi[now1],{left:-width1});
				animate(haliLi[next1],{left:0});
				neirongLi[next1].style.background='#fff';
				neirongLi[next1].style.border='2px solid #ff6700';
				neirongLi[now1].style.background='#B0B0B0';
				neirongLi[now1].style.border='none';
				now1=next1;
				
			}
			neirong251[0].onclick=function(){
				
				next1--;
				if(next1<0){
					next1=haliLi.length-1;
					return;
				}
				if(next1==now1){
					return;
				}
				haliLi[next1].style.left=`${-width1}px`;
				animate(haliLi[now1],{left:width1});
				animate(haliLi[next1],{left:0});
				neirongLi[next1].style.background='#fff';
				neirongLi[next1].style.border='2px solid #ff6700';
				neirongLi[now1].style.background='#B0B0B0';
				neirongLi[now1].style.border='none';
				now1=next1;
				
			}
			neirong252[1].onclick=function(){
				next2++;
				if(next2==haliLi1.length){
					next2=0;
					return;
				}
				if(next2==now2){
					return;
				}
				haliLi1[next2].style.left=`${width1}px`;
				animate(haliLi1[now2],{left:-width1});
				animate(haliLi1[next2],{left:0});
				neirongLi1[next2].style.background='#fff';
				neirongLi1[next2].style.border='2px solid #ff6700';
				neirongLi1[now2].style.background='#B0B0B0';
				neirongLi1[now2].style.border='none';
				now2=next2;
				
			}
			neirong251[1].onclick=function(){
				
				next2--;
				if(next2<0){
					next2=haliLi1.length-1;
					return;
				}
				if(next2==now2){
					return;
				}
				haliLi1[next2].style.left=`${-width1}px`;
				animate(haliLi1[now2],{left:width1});
				animate(haliLi1[next2],{left:0});
				neirongLi1[next2].style.background='#fff';
				neirongLi1[next2].style.border='2px solid #ff6700';
				neirongLi1[now2].style.background='#B0B0B0';
				neirongLi1[now2].style.border='none';
				now2=next2;
				
			}
			neirong252[2].onclick=function(){
				next3++;
				if(next3==haliLi2.length){
					next3=0;
					return;
				}
				if(next3==now3){
					return;
				}
				haliLi2[next3].style.left=`${width1}px`;
				animate(haliLi2[now3],{left:-width1});
				animate(haliLi2[next3],{left:0});
				neirongLi2[next3].style.background='#fff';
				neirongLi2[next3].style.border='2px solid #ff6700';
				neirongLi2[now3].style.background='#B0B0B0';
				neirongLi2[now3].style.border='none';
				now3=next3;
				
			}
			neirong251[2].onclick=function(){
				
				next3--;
				if(next3<0){
					next3=haliLi2.length-1;
					return;
				}
				if(next3==now3){
					return;
				}
				haliLi2[next3].style.left=`${-width1}px`;
				animate(haliLi2[now3],{left:width1});
				animate(haliLi2[next3],{left:0});
				neirongLi2[next3].style.background='#fff';
				neirongLi2[next3].style.border='2px solid #ff6700';
				neirongLi2[now3].style.background='#B0B0B0';
				neirongLi2[now3].style.border='none';
				now3=next3;
				
			}
			neirong252[3].onclick=function(){
				next4++;
				if(next4==haliLi3.length){
					next4=0;
					return;
				}
				if(next4==now4){
					return;
				}
				haliLi3[next4].style.left=`${width1}px`;
				animate(haliLi3[now4],{left:-width1});
				animate(haliLi3[next4],{left:0});
				neirongLi3[next4].style.background='#fff';
				neirongLi3[next4].style.border='2px solid #ff6700';
				neirongLi3[now4].style.background='#B0B0B0';
				neirongLi3[now4].style.border='none';
				now4=next4;
				
			}
			neirong251[3].onclick=function(){
				
				next4--;
				if(next4<0){
					next4=haliLi3.length-1;
					return;
				}
				if(next4=now4){
					return;
				}
				haliLi3[next4].style.left=`${-width1}px`;
				animate(haliLi3[now4],{left:width1});
				animate(haliLi3[next4],{left:0});
				neirongLi3[next4].style.background='#fff';
				neirongLi3[next4].style.border='2px solid #ff6700';
				neirongLi3[now4].style.background='#B0B0B0';
				neirongLi3[now4].style.border='none';
				now4=next4;
				
			}
		
		
	
}
