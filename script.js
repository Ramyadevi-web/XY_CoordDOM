var hd = document.createElement("h1");
hd.innerText = "Full Stack Developer";
hd.style.textAlign = "center";
document.body.append(hd);
var spa = document.createElement("span");
spa.id = "coordinates";
spa.style.textAlign = "center";
spa.style.fontSize = "30px";
document.body.append(spa);
hd.addEventListener("click",coordinates);
function coordinates(event){
    var x = event.pageX;
    var y = event.pageY;
    document.getElementById("coordinates").innerHTML = "X-Coordinate : "+x+"<br> Y-Coordinate :"+y;
}