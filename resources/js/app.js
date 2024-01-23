let a;

document.getElementById("upperCase").onclick = function(){
    a = document.getElementById("label").value;
    a = a.toUpperCase();

    document.getElementById("label").value = a;
}