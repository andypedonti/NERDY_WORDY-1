//this is the file that displays the word for kids to catch

import React from "react";

var randomWords = require('random-words');
const word = randomWords({ exactly: 1, maxLength: 4, formatter: (word) => word.toUpperCase() });

function DisplayBox() {
    return (
        <div className="display-box">
            {
                word
            }
        </div>
    )
}

export default DisplayBox;