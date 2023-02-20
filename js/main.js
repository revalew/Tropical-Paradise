const nav = document.querySelector('.nav')
const navBar = document.querySelector('.navBar')
const navBtn = document.querySelector('.burger-btn')
const allNavItems = document.querySelectorAll('.nav__item')
const navBtnBars = document.querySelector('.burger-btn__bars')
const allSections = document.querySelectorAll('.section')
const footerYear = document.querySelector('.footer__year')

allNavItems.forEach(item => {
	// this was originally in the handleNav function BUT it would execute the forEach loop and add the listener every time the burger button is clicked so it was not optimal in my opinion and I disagree with the "original" implementation presented during the course
	item.addEventListener('click', () => {
		nav.classList.remove('nav--active')
	})
})

const handleNav = () => {
	nav.classList.toggle('nav--active')
	navBtnBars.classList.remove('black-bars-color')
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

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	footerYear.innerText = year
}

const handleObserver = () => {
	const currentSection = window.scrollY
	allSections.forEach(section => {
		if (section.classList.contains('white-section') && section.offsetTop <= currentSection + 45) {
			navBtnBars.classList.add('black-bars-color')
			// navBar.classList.add('bg-shadow')
		} else if (!section.classList.contains('white-section') && section.offsetTop <= currentSection + 5) {
			navBtnBars.classList.remove('black-bars-color')
			// navBar.classList.remove('bg-shadow')
		}
	})
}

handleCurrentYear()
navBtn.addEventListener('click', handleNav)
window.addEventListener('scroll', handleObserver)
