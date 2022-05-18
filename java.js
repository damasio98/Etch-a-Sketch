const container = document.getElementById("container")

//Creates Slider
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value

//Creates Grid
function makeGrid(rows, cols){
    container.style.setProperty('--grid-cols', cols)
    container.style.setProperty('--grid-rows', rows)
    for (i=0; i < (rows*cols); i++){
        let cell = document.createElement("div");
        container.appendChild(cell).className = 'grid-item';
        cell.style.width = size()-2+"px";
        cell.style.height = size()-2+"px";
    }

}

// Eliminates the last grid, so makeGrid can create new one
function reset() {
    child = document.querySelectorAll(".grid-item")
    for (k=0; k < child.length; k++){
        container.removeChild(child[k]);
    }
    
  }

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    reset()
    output.innerHTML = this.value;
    rows = slider.value;
    cols = slider.value;
    makeGrid(rows,cols)
}

let rows = slider.value;
let cols = slider.value;
makeGrid(rows, cols);

//Updates size of each cell so it doesn't overflow
function size(){
    return (800/rows)
}


//Makes the background color change when hovered
const body = document.getElementById("body")
const gridItem = document.getElementsByClassName("grid-item");
body.addEventListener("mouseover",event =>{ 
    for (j = 0; j < rows * cols; j++){
        if (event.target === gridItem[j]){
            event.target.setAttribute('style', 'background: orange;');
        }
    }
    
})


