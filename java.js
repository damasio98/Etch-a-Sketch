const container = document.getElementById("container")

function makeGrid(rows, cols){
    container.style.setProperty('--grid-cols', cols)
    container.style.setProperty('--grid-rows', rows)
    for (i=0; i < (rows*cols); i++){
        let cell = document.createElement("div");
        cell.innerText = 250;
        container.appendChild(cell).className = 'grid-item';
    }

}

rows = 16;
cols = 16;
makeGrid(rows, cols);

const body = document.getElementById("body")
const gridItem = document.getElementsByClassName("grid-item");
body.addEventListener("mouseover",event =>{
    for (j = 0; j < rows * cols; j++){
        if (event.target === gridItem[j]){
            event.target.setAttribute('style', 'background: orange;');
        }
    }
    
})
function hover(){
    gridItem.setAttribute('style', 'background: orange;');
}