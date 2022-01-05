function bmiRechner(){
    let gewicht = document.getElementById("kg").value;
    let hoeche = document.getElementById("groesse").value;
    
    if (gewicht == "" || hoeche == ""){
        document.getElementById("wert").innerHTML = ("Bitte Ihre werte ein.")
    } else {
    document.getElementById("wert").innerHTML = (gewicht / hoeche / hoeche).toFixed(2);
}
}
 

