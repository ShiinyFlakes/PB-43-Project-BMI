function calculate () {
   let gewicht= document.getElementById("kilogram").value
    let height=document.getElementById("height").value
    document.getElementById("result").innerHTML= (gewicht/height/height).toFixed(2);
    document.getElementById("kilogram").value= "";
    document.getElementById("height").value= "";
    if (gewicht == "" || height == "") {
        alert("Bitte gib deinen wert")
    } else {
        
    }
}
