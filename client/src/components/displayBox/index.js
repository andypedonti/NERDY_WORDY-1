import React from "react";

function DisplayBox(props) {
    return (
        <div className="display-box">
            {
                props.word
            }
        </div>
    )
}

export default DisplayBox;