function bodyrechnen()
        {
          gewicht = document.getElementById('a').value;
          höhe = document.getElementById('b').value;
          bmi = gewicht / höhe /höhe;
          window.alert(bmi.toFixed(2));
          document.getElementById("ausgabe").innerHTML = (gewicht / höhe / höhe).toFixed(2);
        }
  