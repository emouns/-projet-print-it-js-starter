const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const  arrowleft = document.querySelector(".arrow_left")
const  arrowright = document.querySelector(".arrow_right")


const dotContainer = document.querySelector(".dots")

slides.forEach( (slides,index) =>{
const dot = document.createElement("div")
dot.classList.add("dot")
if(index === 0) dot.classList.add("dot_selected")
dotContainer.appendChild(dot)

})




const bannerImg = document.querySelector(".banner-img")
const bannerText = document.querySelector("#banner p")

let slideIndex = 0
updateSlide ()


function updateSlide () {
	bannerImg.src = "./assets/images/slideshow/" + slides[slideIndex].image
	bannerText.innerHTML = slides[slideIndex].tagLine
	document.querySelectorAll(".dot").forEach(d => d.classList.remove("dot_selected"))
	dotContainer.children[slideIndex].classList.add("dot_selected")
	
}

arrowleft.addEventListener("click",() => {
	slideIndex--
	if (slideIndex < 0) slideIndex = slides.length - 1
	updateSlide()
})
arrowright.addEventListener("click",() => {
	slideIndex++
	if (slideIndex >=slides.length) slideIndex = 0
	updateSlide()
})