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
    a = a.charAt(0).toUpperCase() + a.slice(1, a.indexOf(" "));

    document.getElementById("label").value = a;
}

document.getElementById("clear").onclick = function () {
    a = document.getElementById("label").value;
    a = a.value = ""

    document.getElementById("label").value = a;
}