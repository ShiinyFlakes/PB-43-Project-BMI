function berechnen() {
  let kg = document.getElementById("kgAngabe").value;
  let meter = document.getElementById("meterAngabe").value;

  document.getElementById("wert").value = (kg / meter / meter).toFixed(2);
  if (meter == "" || kg == "") {
    alert("Gib deine werte ein");
  } else {
  }
  document.getElementById("kgAngabe").value = "";
  document.getElementById("meterAngabe").value = "";
  
  return kg / meter / meter;
}
