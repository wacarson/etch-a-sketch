function setup(){
  makeGrid()
}

document.onload = setup

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

/**			op = e.target.style.opacity
			if (op == "") {
				op = "0"
			}
			op = parseFloat(op) + 0.1
			if (op > 1) {
				op = 1
			}
			e.target.style.opacity = op.toString()**/

		})

		str = "padding: " + Math.floor(h/n) + "px " + "0 0 " + Math.floor((w-15)/n) + "px;"
		div.setAttribute("style", str)
		container.appendChild(div)
	}
}

function removeGrid() {
	size = prompt("Enter a number between 2 and 100 for the grid size")
	n = parseInt(size)
	while(n < 2 || n > 100 || isNaN(n)) {
		size = prompt("Ivalid entry. Enter a number between 2 and 100.")
		n = parseInt(size)
	}
	while(container.firstChild) {
		container.removeChild(container.lastChild)
	}
	makeGrid()
}

makeGrid()
