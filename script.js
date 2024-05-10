function createRow(){
    // get container div
    const containerDiv = document.querySelector("#container");
    let childDiv;
    let containerRow;

    // for (i=0; i < 14; i++){
    //     containerRow = document.createElement("div");
    //     containerRow.style.width = "100vw";
    //     containerRow.style.height = "100vh";
    //     containerRow.style.display = "flex";

    for (j=0; j < 16; j++){
        containerRow = document.createElement("div");
        containerRow.style.width = "100vw";
        containerRow.style.height = "100px";
        // containerRow.style.backgroundColor = "black";
        containerRow.style.display = "flex";
        containerRow.style.gap = "10px";
        document.body.appendChild(containerRow);
        console.log(j);
        for (i=0; i < 16; i++){
            childDiv = document.createElement("div");
            childDiv.style.backgroundColor = "red";
            childDiv.style.width = "80px";
            childDiv.style.height = "80px";
            containerRow.appendChild(childDiv);
    
    
        }
    }
    //     containerDiv.appendChild(containerRow);
    // }

    // const childDivTwo = document.createElement("div");
    // childDivTwo.style.backgroundColor = "red";
    // childDivTwo.style.width = "100px";
    // childDivTwo.style.height = "100px";
    // containerDiv.appendChild(childDivTwo);



}

function addHoverEventListeners(){
    for (let numOfRow=9; numOfRow < 25; numOfRow++){
        for (let idx=0; idx < 16; idx++){
            let nextDiv = document.querySelector('body').childNodes[numOfRow].childNodes[idx];
            console.log(nextDiv);
            nextDiv.addEventListener('mouseover',() =>{
                nextDiv.style.backgroundColor = "grey";
        
            })
            nextDiv.addEventListener('mouseout',() =>{
                nextDiv.style.backgroundColor = "red";
        
            })
        }

    }
}


function addButtonEventHandling(){
    const resetGridButton = document.querySelector('button');
    resetGridButton.addEventListener('click',() => {
        while (true){
            let numOfDivs = prompt("How many divs do you want there to be on each side?");
            if (numOfDivs > 100){
                
            }
            else{
                break;
            }

        }
    })
}
createRow();
addHoverEventListeners();
addButtonEventHandling();