window.onload=function(){
//	let bannerleft=document.getElementsByClassName('banner-left')[0];
//	let slide=bannerleft.getElementsByTagName('li');
//	for(let i=0;i<slide.length;i++){
//		slide[i].onmouseover=function(){
//			let bannerleft1=this.getElementsByClassName('banner-left1');
//			bannerleft1[0].style.display='block';
//		}
//		slide[i].onmouseout=function(){
//			let bannerleft1=this.getElementsByClassName('banner-left1');
//			bannerleft1[0].style.display='none';
//		}



//	let let bannerleft1=document.getElementsByClassName('banner-left1');
//	for(let i=0;i<slide.length;i++){
//		slide[i].onmouseover=function(){
//			bannerleft1[i].style.display='block';
//		}
//		slide[i].onmouseout=function(){
//			bannerleft1[i].style.display='none';
//		}
//	}
	
	let let bannerleft1=document.getElementsByClassName('banner-left1');
	for(var i=0;i<slide.length;i++){
		slide[i].index=i;
		slide[i].onmouseover=function(){
			bannerleft1[slide[i].index].style.display='block';
		}
		slide[i].onmouseout=function(){
			bannerleft1[slide[i].index].style.display='none';
		}
	}
	
	for(var i=0;i<slide.length;i++){
		slide[i].onmouseover=(function(){
			bannerleft1[i].style.display='block';
		})(i)
		slide[i].onmouseout=(function(){
			bannerleft1[i].style.display='none';
		})(i)
	}
	
	
	let box=document.getElementsByTagName('div')[0];
	box.classList.add('red');
	box.classList.remove('red');
	box.onclick=function(){
		this.classList.toggle('red');
		this.classList.toggle('green');
	}

}
	
