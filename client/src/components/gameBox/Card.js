import React from "react";


function Card(props) {
    try {
    const readdir = require("readdir")
    const fileNames = readdir.readSync("ABCs");
    console.log(fileNames);
    }
    catch(err) {
        console.log(err);
    }

    // change to  onClick instead of dragStart
    const dragStart = e => {
     const target = e.target;

     e.dataTransfer.setData("letterB_id", target.id);

     setTimeout(() => {
        target.style.display = "none";
     }, 0);

    }

    const dragOver = e => {
        e.stopPropagation();
    }

    return (
        <div
        id={props.id}
        className={props.className}
        draggable={props.draggable}
        // onClick instad of onDrag
        onDragStart={dragStart}
        onDragOver={dragOver}
        >
            { props.children }
        </div>
    )
}

export default Card;