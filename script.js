function createRow(){
    // get container div
    const containerDiv = document.querySelector("#container");
    const childDiv = document.createElement("div");

    for (i=0; i < 16; i++){
        containerDiv.appendChild(childDiv);


    }

}


createRow();