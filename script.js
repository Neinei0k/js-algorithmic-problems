/* Input and output are strings */
function main(text) {
    const lines = text.split("\n");
    // do stuff
    return lines.join("\n");
}

document.querySelector("#run-file").addEventListener("click", () => {
    const filename = document.querySelector("#input-file").files[0];

    const reader = new FileReader();
    reader.onload = (event) => {
        document.querySelector("#status").textContent = "Input read from file";
        document.querySelector("#result").textContent = main( event.target.result );
    };
    if (filename) {
        reader.readAsText(filename);
    } else {
        document.querySelector("#status").textContent = "Error: No file selected";
    }
});

document.querySelector("#run-text").addEventListener("click", () => {
    document.querySelector("#status").textContent = "Input read from textfield";
    document.querySelector("#result").textContent = main( document.querySelector("#input-text").value );
});

document.querySelector("#clear-output").addEventListener("click", () => {
    document.querySelector("#status").textContent = "Output cleared";
    document.querySelector("#result").textContent = "";
});