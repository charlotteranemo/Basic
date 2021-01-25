var isOpen = false;
function openMenu() {
    if (!isOpen) {
        document.getElementById("mainNav").style.display = "block";
        isOpen = true;
    } else {
        document.getElementById("mainNav").style.display = "none";
        isOpen = false;
    }
}