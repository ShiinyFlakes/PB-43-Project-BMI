function bmiRechner(){
    let gewicht = document.getElementById("kg").value;
    let hoeche = document.getElementById("groesse").value;
    
    if (gewicht == "" || hoeche == ""){
        document.getElementById("wert").innerHTML = ("Ihre Werte, bitte!")
    } else {
    document.getElementById("wert").innerHTML = (gewicht / hoeche / hoeche).toFixed(2);
}
}
 

