var childGrid = document.getElementById('child-grid');

for (let i = 0 ; i < 256 ; i ++){
    
    var itemDiv = document.createElement('div');
    itemDiv.setAttribute("class", "item");
    childGrid.appendChild(itemDiv);
}

var items = document.getElementsByClassName('item');
let blackColor = "rgba(0, 0, 0, 0.8)";
for (let i = 0 ; i < items.length ; i++) {
    items[i].addEventListener('mouseenter', function() {
        this.style.backgroundColor = blackColor;
        this.style.border = `1px solid ${blackColor}`;
    });
}