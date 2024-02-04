let a;

document.getElementById("upperCase").onclick = function () {
    a = document.getElementById("label").value;
    a = a.toUpperCase();

    document.getElementById("label").value = a;
}

document.getElementById("lowCase").onclick = function () {
    a = document.getElementById("label").value;
    a = a.toLowerCase();

    document.getElementById("label").value = a;
}

document.getElementById("CapitalCase").onclick = function () {
    a = document.getElementById("label").value;
    a = a.replace(/\b\w/g, function (b) { return b.toUpperCase() })

    document.getElementById("label").value = a;
}

document.getElementById("clear").onclick = function () {
    a = document.getElementById("label").value;
    a = a.value = ""

    document.getElementById("label").value = a;
}