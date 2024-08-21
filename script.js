
	let nav = document.querySelector('nav .navLink');
	let pageLink = document.querySelector('.page .linkPage ');
	let iconsNav = document.querySelector('nav .iconsNav');
	let iconsListHeider = document.querySelector('header .listHeider .iconsListHeider');
	let iconsListHeiderUl = document.querySelector('header .listHeider ul');
	let iconsDrak = document.querySelector('.iconsDrak');
	let body = document.body;
	
	for(let i = 0 ; i < 200 ; i++){
		nav.innerHTML+=`<a href='#'> link-${i}</a>`
		pageLink.innerHTML+=`<a href='#'> link-${i}</a>`
	}
	iconsNav.addEventListener('click',()=>{
		iconsNav.classList.toggle('active');
		pageLink.classList.toggle('active');
		
	})
	iconsListHeider.addEventListener('click',()=>{
		iconsListHeider.classList.toggle('active');
		iconsListHeiderUl.classList.toggle('active');
		
		
	})
	iconsDrak.addEventListener('click',()=>{
		iconsDrak.classList.toggle('active');
		body.classList.toggle('drak');
		if(body.classList.contains('drak')){
			localStorage.setItem('bagColor','mood1')
		}else{
			localStorage.setItem('bagColor','mood2')
		}
		
	})
	
	if(localStorage.getItem('bagColor') == 'mood1'){
		body.classList.add('drak');
	}else{
		body.classList.remove('drak');
	}
	
	
	
	
	let btnLeft = document.querySelector('nav .iconsBtnScroll .left')
	let btnRight = document.querySelector('nav .iconsBtnScroll .right')
	
	
	btnRight.addEventListener('click',()=>{
		nav.scrollLeft += 50
	})
	btnLeft.addEventListener('click',()=>{
		nav.scrollLeft -= 50
	})