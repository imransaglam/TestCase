// color, text ve image değişkenleri
var color1 = "#32b8de";
var text1 = "İstek Bildir";
var image1 = "images/audit.png";

var color2 = "#90cb25";
var text2 = "Sorun Bildir";
var image2 = "images/info.png";

var color3 = "#fe6672";
var text3 = "Tüm Kayıtlarım";
var image3 = "images/books.png";

// Birinci box özelliklerini ayarla
document.getElementById("box1").style.backgroundColor = color1;
document.getElementById("text1").innerText = text1;
document.getElementById("image1").src = image1;

// İkinci box özelliklerini ayarla
document.getElementById("box2").style.backgroundColor = color2;
document.getElementById("text2").innerText = text2;
document.getElementById("image2").src = image2;

// Üçüncü box özelliklerini ayarla
document.getElementById("box3").style.backgroundColor = color3;
document.getElementById("text3").innerText = text3;
document.getElementById("image3").src = image3;

// Hover effect for box elements
function darkenColor(color, percent) {
    var num = parseInt(color.replace("#", ""), 16),
      amt = Math.round(2.55 * percent),
      R = (num >> 16) + amt,
      B = (num >> 8 & 0x00FF) + amt,
      G = (num & 0x0000FF) + amt;
  
    return "#" + (0x1000000 + (R < 255 ? R < 1 ? 0 : R : 255) * 0x10000 + (B < 255 ? B < 1 ? 0 : B : 255) * 0x100 + (G < 255 ? G < 1 ? 0 : G : 255)).toString(16).slice(1);
  }
  
  box1.addEventListener('mouseover', function () {
    box1.style.backgroundColor = darkenColor(color1, -10);
  });
  
  box1.addEventListener('mouseout', function () {
    box1.style.backgroundColor = color1;
  });
  
  box2.addEventListener('mouseover', function () {
    box2.style.backgroundColor = darkenColor(color2, -10);
  });
  
  box2.addEventListener('mouseout', function () {
    box2.style.backgroundColor = color2;
  });
  
  box3.addEventListener('mouseover', function () {
    box3.style.backgroundColor = darkenColor(color3, -10);
  });
  
  box3.addEventListener('mouseout', function () {
    box3.style.backgroundColor = color3;
  });