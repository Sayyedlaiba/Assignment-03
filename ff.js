document.getElementById("rd").onclick = function(){
    document.getElementById("rd").style.backgroundColor = "red"
}
document.getElementById("blu").onclick = function(){
    document.getElementById("blu").style.backgroundColor = "blue"
}
document.getElementById("grn").onclick = function(){
    document.getElementById("grn").style.backgroundColor = "green"
}
document.getElementById("yllw").onclick = function(){
    document.getElementById("yllw").style.backgroundColor = "#d4b000"
}
document.getElementById("btn").onclick = function(){
    var a = document.getElementById("in").value;
    var b = document.getElementById("head").innerHTML;
document.getElementById("head").innerHTML = b + " " + a;
}