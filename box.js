// Renk, yazı ve resim değişkenleri
var renk1 = "#32b8de";
var yazı1 = "İstek Bildir";
var resim1 = "images/audit.png";

var renk2 = "#90cb25";
var yazı2 = "Sorun Bildir";
var resim2 = "images/info.png";

var renk3 = "#fe6672";
var yazı3 = "Tüm Kayıtlarım";
var resim3 = "images/books.png";

// Birinci kutu özelliklerini ayarla
document.getElementById("kutu1").style.backgroundColor = renk1;
document.getElementById("yazi1").innerText = yazı1;
document.getElementById("resim1").src = resim1;

// İkinci kutu özelliklerini ayarla
document.getElementById("kutu2").style.backgroundColor = renk2;
document.getElementById("yazi2").innerText = yazı2;
document.getElementById("resim2").src = resim2;

// Üçüncü kutu özelliklerini ayarla
document.getElementById("kutu3").style.backgroundColor = renk3;
document.getElementById("yazi3").innerText = yazı3;
document.getElementById("resim3").src = resim3;

// Hover effect for kutu elements
function darkenColor(color, percent) {
    var num = parseInt(color.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      B = (num >> 8 & 0x00FF) + amt,
      G = (num & 0x0000FF) + amt;
  
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
  }
  
  kutu1.addEventListener('mouseover', function () {
    kutu1.style.backgroundColor = darkenColor(renk1, -10);
  });
  
  kutu1.addEventListener('mouseout', function () {
    kutu1.style.backgroundColor = renk1;
  });
  
  kutu2.addEventListener('mouseover', function () {
    kutu2.style.backgroundColor = darkenColor(renk2, -10);
  });
  
  kutu2.addEventListener('mouseout', function () {
    kutu2.style.backgroundColor = renk2;
  });
  
  kutu3.addEventListener('mouseover', function () {
    kutu3.style.backgroundColor = darkenColor(renk3, -10);
  });
  
  kutu3.addEventListener('mouseout', function () {
    kutu3.style.backgroundColor = renk3;
  });