document.getElementById("text-uppercase-lowercase").addEventListener("click", function () {
    const textArea = getTextArea("textarea-field");
    if (textArea.style.textTransform === "uppercase") {
        textArea.style.textTransform = "lowercase";
    }
    else {
        textArea.style.textTransform = "uppercase";
    }
});