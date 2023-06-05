function objem(polomer){
    return (4/3)*(22/7)*polomer*polomer*polomer
}
function obsah(polomer){
        return (22/7)*4*polomer*polomer
}
function vypoctiObjem(){
    let polomer = document.getElementById("polomer").value;
    let objemm = objem(polomer);
    document.getElementById("vysledek1").innerText=objemm;
}

function vypoctiObsah(){
    let polomer= document.getElementById("polomer").value;
    let obsahh=obsah(polomer)
    document.getElementById("vysledek2").innerText=obsahh;
}

function objem2(polomer2){
    return (4/3)*(22/7)*polomer2*polomer2*polomer2
}
function obsah2(polomer2){
        return (22/7)*4*polomer2*polomer2
}

function zkontrolujObjem(){
    if (objem2==obj){
        document.getElementById("vysledek3").innerText="Správně";
    } else {  
            document.getElementById("vysledek3").innerText="Špatně";
    } 
}

function zkontrolujObsah(){
    if (obsah2==pvr){
        document.getElementById("vysledek4").innerText="Správně";
    } else {  
            document.getElementById("vysledek4").innerText="Špatně";
    } 
}
