(() => {
	console.log('Welcome to Abstract Music Icon Set');

	let theBadge = document.querySelector('.wrapper svg'),
		theBadges  = document.querySelectorAll('.wrapper svg');

	function logMe(){
		console.log('The icon that you clicked on is',this.id)
	}

	theBadge.addEventListener("click", logMe);

	theBadges.forEach(badge => badge.addEventListener("click",logMe));
})()