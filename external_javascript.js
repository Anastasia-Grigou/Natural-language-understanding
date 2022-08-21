function my_date () {
  var d = new Date();
  var day = d.getDay();
  if (day == 0) {
      return "Κυριακή";
  }
  else if(day == 1) {
      return "Δευτέρα";
  }
  else if(day == 2) {
      return "Τρίτη";
  }
  else if(day == 3) {
      return "Τετάρτη";
  }
  else if(day == 4) {
      return "Πέμπτη";
  }
  else if(day == 5) {
      return "Παρασκευή";
  }
  else if(day == 6) {
      return "Σαββάτο";
  }
}

function changeText(id) {
  alert("Θα μεταφερθείτε σε άλλη σελίδα");
  }

  function mOver(obj) {
    obj.innerHTML = "Eισαγωγή"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Υπολογιστική Γλωσσολογία"
  }