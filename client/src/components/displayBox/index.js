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


// const compareWords = (word, resultsArray) => {
//     resultsArray.split().forEach(i => {
//         if (word.indexOf(i) === -1) {
//         return false
//         }
//         return true
//     })
// }

// compareWords("Kobie", ["K", "O", "B", "I", "E"])