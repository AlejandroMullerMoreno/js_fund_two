function createRow(){
    // get container div
    const containerDiv = document.querySelector("#container");
    let childDiv;
    let containerRow;

    for (i=0; i < 14; i++){
        containerRow = document.createElement("div");
        containerRow.style.display = "flex";
        for (i=0; i < 14; i++){
            if (i === 0){
                childDiv = document.createElement("div");
                childDiv.style.backgroundColor = "red";
                childDiv.style.width = "100px";
                childDiv.style.height = "100px";
                containerRow.appendChild(childDiv);

            }
        
            childDiv = document.createElement("div");
            childDiv.style.backgroundColor = "red";
            childDiv.style.width = "100px";
            childDiv.style.height = "100px";
            containerRow.appendChild(childDiv);
    
    
        }
        containerDiv.appendChild(containerRow);
    }

    // const childDivTwo = document.createElement("div");
    // childDivTwo.style.backgroundColor = "red";
    // childDivTwo.style.width = "100px";
    // childDivTwo.style.height = "100px";
    // containerDiv.appendChild(childDivTwo);

}


createRow();