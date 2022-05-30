

var btn = document.getElementById("g");

btn.addEventListener("click", deletebtn);


function alertme(e) {
    alert("Loading weather repo...");
}


function deletebtn(e) {
    btn.closest("div.row-3").remove();

}



function changeLabel(e) {

    document.getElementById("1").innerHTML = "75";
    document.getElementById("2").innerHTML = "65";
    document.getElementById("3").innerHTML = "80";
    document.getElementById("4").innerHTML = "66";
    document.getElementById("5").innerHTML = "69";
    document.getElementById("6").innerHTML = "61";
    document.getElementById("7").innerHTML = "78";
    document.getElementById("8").innerHTML = "70";


}