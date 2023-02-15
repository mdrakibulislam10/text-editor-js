document.getElementById("text-justify").addEventListener("click", function () {
    // get textarea
    const textArea = getTextArea("textarea-field");

    // set text align justify
    textArea.style.textAlign = "justify";
});