let bgColorsArray = ["#e75d7c","#b16cef","#53cca4","#efc84d","#628ef0", "#184b73","#883e7f","#ed048b"];

let buttonElement = document.getElementById('button');
let containerElement = document.getElementById('bgContainer');
containerElement.style.backgroundColor = bgColorsArray[0]


function colorChange() {
    let len = bgColorsArray.length;
    let randomcolor = Math.ceil(Math.random() * len);
    
    if (len === randomcolor || 1 === randomcolor) {
        let randomcolor = len - 1;
        
    }
    containerElement.style.backgroundColor = bgColorsArray[randomcolor];
}

