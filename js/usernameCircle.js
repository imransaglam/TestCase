document.addEventListener("DOMContentLoaded", function() {
    var userNameElement = document.querySelector(".user p");
    var initialsCircleElement = document.querySelector(".initials-circle");
  
    // İsim ve soyismin tamamını büyük harfe çevir
    var fullName = userNameElement.textContent.toUpperCase();
    userNameElement.textContent = fullName;
  
    // İsim ve soyismin baş harflerini al ve .initials-circle içine yerleştir
    var initials = getInitials(fullName);
    initialsCircleElement.textContent = initials;
  });
  
  function getInitials(name) {
    var names = name.split(" ");
    var initials = names.map(function(name) {
      return name.charAt(0);
    });
    return initials.join("");
  }
  