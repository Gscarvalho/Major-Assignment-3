var nextButton = document.getElementById('gallery-next');
var backButton = document.getElementById('gallery-back');
var image = document.getElementById('gallery-image');
var imageTitle = document.getElementById('gallery-window-title');
var imageDescription = document.getElementById('gallery-window-description');
var imageLink = document.getElementById('gallery-image').children[0];

let artworks;

fetch('/Major-Assignment-3/gallery.json')
	.then((response) => response.json())
	.then((data) => {
		artworks = data.Artworks;
		// console.log(artworks);
	})
	.catch((error) => console.error(error));

var images = [
	'url(/Major-Assignment-3/images/Broken-Her.png)',
	'url(/Major-Assignment-3/images/Bit-Shadowz-Tribute.png)',
	'url(/Major-Assignment-3/images/Dark-Abyss.png)',
	'url(/Major-Assignment-3/images/Fantom-Tombhead.png)',
	'url(/Major-Assignment-3/images/Fantom-Turtle.png)',
	'url(/Major-Assignment-3/images/GSC-Originals-1.png)',
	'url(/Major-Assignment-3/images/Lust-Love-Lies.png)',
	'url(/Major-Assignment-3/images/GSC-Mask.png)',
];

var currentImage = 7;

function nextImage() {
	currentImage++;
	if (currentImage >= images.length) {
		currentImage = 0;
	}
	image.style.backgroundImage = images[currentImage];
	var link = images[currentImage].replace('url(', '').replace(')', '').replace(/\"/gi, '');
	imageLink.setAttribute('href', link);
	UpdateData();
}

function previousImage() {
	currentImage--;
	if (currentImage < 0) {
		currentImage = images.length - 1;
	}
	image.style.backgroundImage = images[currentImage];
	var link = images[currentImage].replace('url(', '').replace(')', '').replace(/\"/gi, '');
	imageLink.setAttribute('href', link);
	UpdateData();
}

function UpdateData() {
	if (artworks) {
		imageTitle.innerHTML = artworks[currentImage].name;
		imageDescription.innerHTML = artworks[currentImage].Description;
		var link = images[currentImage].replace('url(', '').replace(')', '');
		imageLink.setAttribute('href', link);
	}
}

nextButton.onclick = nextImage;
backButton.onclick = previousImage;

window.addEventListener('DOMContentLoaded', (event) => {
	image.style.backgroundImage = images[currentImage];
	UpdateData();
});

// Path: scripts\gallery.json
