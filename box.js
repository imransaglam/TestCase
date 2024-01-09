// Renk, yazı ve resim değişkenleri
var renk1 = "#32b8de";
var yazı1 = "Birinci Kutu";
var resim1 = "images/audit.png";

var renk2 = "#90cb25";
var yazı2 = "İkinci Kutu";
var resim2 = "images/info.png";

var renk3 = "#fe6672";
var yazı3 = "Üçüncü Kutu";
var resim3 = "images/bookshelf.png";

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
