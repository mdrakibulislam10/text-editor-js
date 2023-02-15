// get input field
const inputFields = document.getElementsByClassName("text-size-input");

for (const inputField of inputFields) {
    // get textarea
    const textArea = getTextArea("textarea-field");

    // trigger with click
    inputField.addEventListener("click", function (event) {
        // set font size
        textArea.style.fontSize = `${event.target.value}px`;
    })

    // trigger with keyup
    inputField.addEventListener("keyup", function (event) {
        // set font size
        textArea.style.fontSize = `${event.target.value}px`;
    })
};