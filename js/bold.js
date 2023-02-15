document.getElementById("bold").addEventListener("click", function () {
    // get textarea
    const textArea = getTextArea("textarea-field");
    // set text style bold
    if (textArea.style.fontWeight === "bold") {
        textArea.style.fontWeight = "normal";
    }
    else {
        textArea.style.fontWeight = "bold";
    }
});
