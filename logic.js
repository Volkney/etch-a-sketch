var childGrid = document.getElementById('child-grid');
const value = document.getElementById('grid-value');
const input = document.getElementById('grid-range');
const valueToString = Number(value.textContent);
input.value= 16;
value.textContent = input.value;
let totalNumberOfBoxes = input.value * input.value;
var items = document.getElementsByClassName('item');
let blackColor = "rgba(0, 0, 0, 0.8)";


input.addEventListener("input", (event) => {
    value.textContent = event.target.value;
    console.log(value.textContent);
    totalNumberOfBoxes = event.target.value * event.target.value;
    childGrid.style.gridTemplateColumns = `repeat(${value.textContent}, 1fr)`;
    childGrid.innerText = '';
    generateGrid();
});

/* creating divs for grid */
function generateGrid(){
    
    //generate the new grid//
    for (let i = 0 ; i < totalNumberOfBoxes; i ++){
        var itemDiv = document.createElement('div');
        itemDiv.setAttribute("class", "item");
        childGrid.appendChild(itemDiv);
    }
    
    addHoverEvent();

}

function addHoverEvent (){
    for (let i = 0 ; i < items.length ; i++) {
        items[i].addEventListener('mousedown', function(event) {
            this.style.backgroundColor = blackColor;
            this.style.border = `1px solid ${blackColor}`;
            if (event.buttons === 1) {
                this.style.backgroundColor = blackColor;
                this.style.border = `1px solid ${blackColor}`;
            }
        });
        items[i].addEventListener('mousemove', function(event) {
            if (event.buttons === 1) {
                this.style.backgroundColor = blackColor;
                this.style.border = `1px solid ${blackColor}`;
            }
        });
        items[i].addEventListener('mouseup', function() {
            this.style.backgroundColor = "initial";
            this.style.border = "initial";
        });
    }    
}
//generate the initial grid//
generateGrid();


