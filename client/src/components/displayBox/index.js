//this is the file that displays the word for kids to catch

import { PromiseProvider } from "mongoose";
import React from "react";

var randomWords = require('random-words');
const word = randomWords({ exactly: 1, maxLength: 4, formatter: (word) => word.toUpperCase() });

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