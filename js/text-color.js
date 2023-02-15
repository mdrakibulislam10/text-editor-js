document.getElementById("text-color-input").addEventListener("input", function (event) {
    const textArea = getTextArea("textarea-field");
    textArea.style.color = event.target.value;
});