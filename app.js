const textInput = document.getElementById("textInput");
const textColor = document.getElementById("textColor");
const imageUpload = document.getElementById("imageUpload");
const designArea = document.getElementById("designArea");
const downloadBtn = document.getElementById("downloadBtn");

function updateText() {
    designArea.innerHTML =
        `<p style="color:${textColor.value}; font-size:20px; margin:0;">${textInput.value}</p>`;
}

textInput.addEventListener("input", updateText);
textColor.addEventListener("input", updateText);

imageUpload.addEventListener("change", (e) => {
    const img = document.createElement("img");
    img.src = URL.createObjectURL(e.target.files[0]);
    img.style.width = "100%";
    img.style.marginTop = "10px";
    designArea.appendChild(img);
});

downloadBtn.addEventListener("click", () => {
    html2canvas(document.querySelector(".preview-area")).then(canvas => {
        const link = document.createElement("a");
        link.download = "custom-tee.png";
        link.href = canvas.toDataURL();
        link.click();
    });
});
