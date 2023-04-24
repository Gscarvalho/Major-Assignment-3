// Theme variables
var themeButton = document.getElementById('theme-button');
var themeButtonBar = document.getElementById('theme-button-bar').children[0];
var themeText = document.getElementById('theme-text');
var ucfTheme = false;

// Layout Variables
var mask = document.getElementById('mask');
var card1 = document.getElementById('intro-card-1');
var card2 = document.getElementById('intro-card-2');
var card3 = document.getElementById('intro-card-3');

// Skills Variables
var skillButtons = document.getElementById('skill-buttons');
var skillInfo = document.getElementById('skill-info');
var target = skillInfo.children[0];

// Theme Changer
function ToggleTheme() {
	if (ucfTheme) {
		themeButton.classList.add('row-revert');
		themeButtonBar.addEventListener('animationend', function () {
			themeButton.classList.remove('row-revert');
			themeButtonBar.classList.remove('ucf-theme');
			document.documentElement.style.setProperty('--color-primary', '#008b8b');
			document.documentElement.style.setProperty(
				'--color-secondary',
				'linear-gradient(180deg, black, darkcyan)'
			);
			document.documentElement.style.setProperty('--color-onprimary', '#333');
			themeText.innerHTML = 'GUI THEME';
		});
		card2.children[0].classList.add('spin');
		card2.addEventListener('animationend', function () {
			card2.children[0].classList.remove('spin');
		});
		setTimeout(function () {
			card2.children[0].src = 'images/GSC-Mask.png';
		}, 200);
		ucfTheme = false;
	} else {
		themeButton.classList.add('row-invert');
		themeButtonBar.addEventListener('animationend', function () {
			themeButton.classList.remove('row-invert');
			themeButtonBar.classList.add('ucf-theme');
			themeText.innerHTML = 'UCF THEME';
			document.documentElement.style.setProperty('--color-primary', '#daa520');
			document.documentElement.style.setProperty('--color-secondary', 'black');
			document.documentElement.style.setProperty('--color-onprimary', '#daa520');
		});
		card2.children[0].classList.add('spin');
		card2.addEventListener('animationend', function () {
			card2.children[0].classList.remove('spin');
		});
		setTimeout(function () {
			card2.children[0].src = 'images/ucf-logo.png';
		}, 500);
		ucfTheme = true;
	}
}

// Theme Buttons
themeButton.addEventListener('click', function () {
	ToggleTheme();
});

card2.addEventListener('click', function () {
	ToggleTheme();
});

// Skills Buttons
skillButtons.children[0].addEventListener('mouseover', function () {
	target.innerHTML = `Art has been my passion since childhood, and I've been constantly refining my skills as an artist. UCF has provided me with a wide range of opportunities to explore new techniques and expand my creativity.`;
});

skillButtons.children[1].addEventListener('mouseover', function () {
	target.innerHTML = `I discovered my passion for design in high school and have been pursuing it ever since. UCF's design program has helped me refine my skills and gain a deeper understanding of design principles. With access to top-notch resources and a supportive community, UCF has allowed me to explore my creativity and take my career as a designer to new heights.`;
});

skillButtons.children[2].addEventListener('mouseover', function () {
	target.innerHTML = `Technology has always been my passion, and UCF's exceptional technology resources and high-quality education have helped me pursue a career as a developer. With access to cutting-edge software and hardware, I've been able to hone my skills and stay up-to-date with the latest trends in the field. I'm grateful for the opportunities that UCF has given me to develop my skills and pursue my career goals.`;
});

skillButtons.addEventListener('mouseout', function () {
	target.innerHTML = '';
});

// Circle Buttons
var arrowButtons = document.getElementsByClassName('arrow-button');
var titleElements = document.getElementsByClassName('title');

arrowButtons[0].addEventListener('click', function () {
	if (titleElements[0].classList.contains('active')) {
		titleElements[0].classList.remove('active');
		this.children[0].innerHTML = 'arrow_circle_down';
	} else {
		titleElements[0].classList.add('active');
		this.children[0].innerHTML = 'arrow_circle_up';
	}
});

arrowButtons[1].addEventListener('click', function () {
	if (titleElements[1].classList.contains('active')) {
		titleElements[1].classList.remove('active');
		this.children[0].innerHTML = 'arrow_circle_down';
	} else {
		titleElements[1].classList.add('active');
		this.children[0].innerHTML = 'arrow_circle_up';
	}
});

function isMobile() {
	// #Mask Layout
	mask.innerHTML = '';
	mask.style.flexDirection = 'column';
	mask.appendChild(card2);
	mask.appendChild(card1);
	mask.appendChild(card3);
	// console.log('mobile');
}

function restoreLayout() {
	// #Mask Layout
	mask.innerHTML = '';
	mask.style.flexDirection = 'row';
	mask.appendChild(card1);
	mask.appendChild(card2);
	mask.appendChild(card3);
	// console.log('desktop');
}

// Screen Resize Responsive Layout
window.addEventListener('resize', function () {
	if (window.innerWidth < 800) {
		isMobile();
	} else {
		restoreLayout();
	}
});

// Mobile/Desktop Responsive Layout
if (window.matchMedia('(min-width: 800px)').matches) {
	restoreLayout();
} else {
	isMobile();
}

function intro() {
	// Button Left/Top
	card1.children[1].classList.add('intro-animation');
	card1.children[1].addEventListener('animationend', function () {
		card1.children[2].style.opacity = 1;
	});
	// Button Right/Bottom
	card3.children[1].classList.add('intro-animation');
	card3.children[1].addEventListener('animationend', function () {
		card3.children[2].style.opacity = 1;
	});
}

setTimeout(intro, 1000);
