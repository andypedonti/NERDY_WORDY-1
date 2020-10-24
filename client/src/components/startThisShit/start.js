
import React from "react";

function StartButton() {

    return (
        <div className="start">
            <button onClick={() => { alert("hello!") }}>
                Click me!
         </button>
        </div>
    );
}

export default StartButton;