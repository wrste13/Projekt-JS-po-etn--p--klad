document.write("Objem a Obsah Koule")
document.write("<br>")
function objem(polomer){
    return (4/3)*(22/7)*polomer*polomer*polomer
}
function obsah(polomer){
        return (22/7)*4*polomer*polomer
}
function vypoctiObjem(){
    let polomer= document.getElementById("polomer").value;
    let objemm=objem(polomer)
}
function vypoctiObsah(){
    let polomer= document.getElementById("polomer").value;
    let obsahh=obsah(polomer)
}
document.getElementById("vysledek").innerText=vypoctiObjem();

document.write("<br>");
document.write("<br>");
document.write("Objem: " + objemm + "cm");
document.write("Obsah: " + obsahh + "cm");