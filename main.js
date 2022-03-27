function save() {
    localStorage.setItem("storage", document.getElementById("input").value);
    alert("セーブしました");
}

function load() {
    document.getElementById("input").value = localStorage.getItem("storage");
    alert("読み込み完了！");
}
