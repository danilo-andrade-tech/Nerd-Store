let count = 1;
document.getElementById("radio1").checked = true;

// Alternar automaticamente os slides a cada 5 segundos
setInterval(function () {
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if (count > 3) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;
}
