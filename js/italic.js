document.getElementById("italic").addEventListener("click", function () {
    // get textarea
    const textArea = getTextArea("textarea-field");
    // set text style italic
    if (textArea.style.fontStyle === "italic") {
        textArea.style.fontStyle = "normal"
    }
    else {
        textArea.style.fontStyle = "italic"
    }
});