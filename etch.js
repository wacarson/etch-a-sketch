container = document.querySelector(".container")
n = 16

button = document.querySelector("button")
button.addEventListener("click", removeGrid)

function makeGrid() {
	for(i=0; i<n*n; i++) {
		w = window.innerWidth
		h = window.innerHeight
		div = document.createElement("div")
		div.setAttribute("class", "square")


		div.addEventListener("mouseover", function (e) {
		r = Math.floor(Math.random()*255)
		g = Math.floor(Math.random()*255)
		b = Math.floor(Math.random()*255)
		color = "rgb(" + r + "," + g +"," + b + ")"
			e.target.style.background = color
		})

		str = "width: " + Math.floor(w/n) + "; height: " + h/n + ";"
		div.setAttribute("style", str)
		container.appendChild(div)
		console.log(w, div.getAttribute("style"))
	}
}

function removeGrid() {
	size = prompt("Enter a number between 2 and 100 for the grid size")
	n = parseInt(size)
	while(container.firstChild) {
		container.removeChild(container.lastChild)
	}
	makeGrid()
}

makeGrid()
