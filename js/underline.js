document.getElementById("underline").addEventListener("click", function () {
    // get textarea
    const textArea = getTextArea("textarea-field");

    // set text style underline
    if (textArea.style.textDecoration === "underline") {
        textArea.style.textDecoration = "none";
    }
    else {
        textArea.style.textDecoration = "underline";
    }
});