const nav = document.querySelector('.nav')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')

allNavItems.forEach(item => {
	// this was originally in the handleNav function BUT it would execute the forEach loop and add the listener every time the burger button is clicked so it was not optimal in my opinion and I disagree with the "original" implementation presented during the course
	item.addEventListener('click', () => {
		nav.classList.remove('nav--active')
	})
})

const handleNav = () => {
	nav.classList.toggle('nav--active')
	handleNavAnimation()
	// deleteNavAnimation()
}

const handleNavAnimation = () => {
	let delayTime = 0
	allNavItems.forEach(item => {
		item.classList.toggle('nav-items-animation')
		item.style.animationDelay = '.' + delayTime + 's'
		delayTime += 1
		// instead of creating a separate function we can add the animation toggle in 1 loop here - is it a good idea ? I do not know... we now have 1 function and 1 loop less
		item.addEventListener('click', () => {
			allNavItems.forEach(item2 => {
				item2.classList.remove('nav-items-animation')
			})
		})
	})
}

// const deleteNavAnimation = () => {
// 	allNavItems.forEach(item => {
// 		item.addEventListener('click', () => {
// 			allNavItems.forEach(item2 => {
// 				item2.classList.remove('nav-items-animation')
// 			})
// 		})
// 	})
// }

navBtn.addEventListener('click', handleNav)
