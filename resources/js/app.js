let a;

document.getElementById("upperCase").onclick = function(){
    a = document.getElementById("label").value;
    a = a.toUpperCase();

    document.getElementById("label").value = a;
}

document.getElementById("lowCase").onclick = function(){
    a = document.getElementById("label").value;
    a = a.toLowerCase();

    document.getElementById("label").value = a;
}