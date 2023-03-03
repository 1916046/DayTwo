function myFunction() {
    var x = document.getElementById("education");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  var isRed = false; 
function myFunction1(){
 
  if (isRed) { 
    document.body.style.backgroundColor = ""; 
    isRed = false; 
  } else { 
    document.body.style.backgroundColor = "red"; 
    isRed = true; 
  }
}

function removeEducation() {
    var x = document.getElementById("education");
    x.remove();
  }
  
