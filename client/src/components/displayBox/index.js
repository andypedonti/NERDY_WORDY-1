//this is the file that displays the word for kids to catch

import React from "react";

var randomWords = require('random-words');

function DisplayBox() {
    return (
        <div>
            {
                randomWords({ exactly: 1, maxLength: 4 })
            }
        </div>
    )
}

export default DisplayBox;