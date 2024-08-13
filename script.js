const container = document.querySelector('.container')
const colors = [
    "#FF5733",
    "#33FF57",
    "#5733FF",
    "#FF33A1",
    "#33FFF3",
    "#FF3333",
    "#FFFF33",
    "#33FFDD",
    "#FF33FF",
    "#33FF99"
];

const square = 1450
// const square = 1

function randomColor() {
    const color = colors[Math.floor(Math.random() * colors.length)]
    return color
    // console.log(color);

}

randomColor()

function fillColor(squareDiv) {
    const color = randomColor()
    squareDiv.style.background = `${color}`
    squareDiv.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`

}

function removeColor(squareDiv) {

    setTimeout(() =>{
        squareDiv.style.background = '#021526'
        squareDiv.style.boxShadow = `0 0 1px rgba(254, 250, 244, 0.7)`
    }, 1000)
}

 

for (let i = 0; i < square; i++) {
    const squareDiv = document.createElement('div')
    squareDiv.classList.add('square')

    squareDiv.addEventListener('mouseover', function () {
        fillColor(squareDiv);
    })

    squareDiv.addEventListener('mouseout', function () {
        removeColor(squareDiv)
    })
    container.appendChild(squareDiv)
}