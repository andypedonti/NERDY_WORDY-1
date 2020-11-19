import React from "react";
import "./start.css";

const style ={
    position: "absolute",

}
function Start() {


    return (
        <div className="start" style={style}>
            <button onClick={()  => { alert("hello!") }}>
                Click me!
         </button>
        </div>
    );
}

export default Start;