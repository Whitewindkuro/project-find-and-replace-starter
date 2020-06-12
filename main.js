// You should NOT change the HTML or CSS in this project (at least until you reach
// the bonus objectives). Focus on the JavaScript.

const findInput = document.querySelector(".find-input")
const replaceInput = document.querySelector(".replace-input")
const replaceAllButton = document.querySelector(".replace-all-button")

// The following variable holds your OUTER ARRAY of row elements.
// Later you will need an OUTER LOOP to loop over the individual elements within
// this array.
const rowElements = document.querySelectorAll(".row")

// When you call the function below, it will get and return an INNER ARRAY
// containing the cell elements for a given row.
// Call this function from WITHIN your row elements loop. Then you will, in turn,
// need to loop over the resulting cell elements. But where should this whole
// NESTED LOOP go? Think through the user's experience: when should WHAT happen? 
function getCellElements(currentRowElement) {
    return currentRowElement.querySelectorAll(".cell")
}


// YOUR CODE GOES HERE
replaceAllButton.addEventListener('click', function () {
    const findID = findInput.value;
    const replaceID = replaceInput.value;
    const rowArray = [...rowElements];
    let replaceCounter = 0;

    for (let rowIndex = 0; rowIndex < rowArray.length; rowIndex += 1) {
        let cellSection = [...getCellElements(rowArray[rowIndex])];
        for (let cellIndex = 0; cellIndex < cellSection.length; cellIndex += 1) {
            let cellItem = cellSection[cellIndex].innerHTML;
            if (cellItem.includes(findID)) {
                cellSection[cellIndex].innerHTML = cellItem.replace(findID, replaceID)
                replaceCounter += 1;
            }
        }
    }
    alert("We have found: " + replaceCounter + " that contain that string and have replaced them.")
})

// One last thing: dedicate very careful attention to using variables and
// naming them accurately.
// And when you change the value you are assigning to a variable, don't
// forget to consider changing the name to reflect the change you made! It
// is very easy to get confused when you are working inside NESTED LOOPS.
// The best of us do. And unnecessary confusion during the process of 
// developing your code means wasted time.
//
// The time-cost of structuring and naming things well is FAR less than the
// time-cost of ignoring the quality and readability of your code.
//
// You can, of course, remove any comments in this starter project once
// you have read them, if you prefer.
