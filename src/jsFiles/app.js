window.addEventListener('DOMContentLoaded', () => {
	let hamburger = document.getElementById('hamBurger');

	hamburger.addEventListener('click',openHamburger);



	function openHamburger(){
		console.log('hi i work.');
		let mobileNav = document.getElementById('mobileNav');
		if(mobileNav.style.display==='none'){
			mobileNav.style.display='flex';
		} else {
			mobileNav.style.display='none';
		}



	}
});
