function verif() {
  
    var Nb = parseInt(document.getElementById("textBox1").value);
    
    
    var numAleat = Math.floor(Math.random() * 50) + 1;
    
    
    if (Nb === numAleat) {
      
      document.getElementById("label1").innerHTML = "Give me five!!!";
    } else if (Nb > numAleat) {
     
      document.getElementById("label1").innerHTML = "trop grand.";
    } else {
      
      document.getElementById("label1").innerHTML = "trop petit.";
    }
  }