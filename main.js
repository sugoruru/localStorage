function save() {
    localStorage.setItem("storage", document.getElementById("input").value);
}

function load() {
    document.getElementById("input").value = localStorage.getItem("storage");
}
