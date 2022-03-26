function save() {
    sessionStorage.setItem("storage", document.getElementById("input").value);
}

function load() {
    document.getElementById("input").value = sessionStorage.getItem("storage");
}