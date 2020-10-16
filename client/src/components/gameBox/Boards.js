import React from "react"


function Board(props) {
    const drop = e => {
        e.preventDefault();
        const letterB_id = e.dataTransfer.getData("letterB_id");

        const letterB = document.getElementById(letterB_id);
        letterB.style.display = "block";
        // letterB.style.marginLeft = "randomNumber";
        


        // pushes back out to browser
        e.target.appendChild(letterB);
        
    }

    const dragOver = e => {
        e.preventDefault();
    }

    return(
        <div
        id={props.id}
        className={props.className}
            onDrop={drop}
            onDragOver={dragOver}
            >
            { props.children }
        </div>
    )
}

export default Board;

