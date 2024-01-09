let cities = [
    "Adana", "Adıyaman", "Afyonkarahisar", "Ağrı", "Amasya", "Ankara", "Antalya", "Artvin", "Aydın", "Balıkesir",
    "Bilecik", "Bingöl", "Bitlis", "Bolu", "Burdur", "Bursa", "Çanakkale", "Çankırı", "Çorum", "Denizli", "Diyarbakır",
    "Edirne", "Elazığ", "Erzincan", "Erzurum", "Eskişehir", "Gaziantep", "Giresun", "Gümüşhane", "Hakkâri", "Hatay",
    "Isparta", "İçel (Mersin)", "İstanbul", "İzmir", "Kars", "Kastamonu", "Kayseri", "Kırklareli", "Kırşehir",
    "Kocaeli", "Konya", "Kütahya", "Malatya", "Manisa", "Kahramanmaraş", "Mardin", "Muğla", "Muş", "Nevşehir", "Niğde",
    "Ordu", "Rize", "Sakarya", "Samsun", "Siirt", "Sinop", "Sivas", "Tekirdağ", "Tokat", "Trabzon", "Tunceli", "Şanlıurfa",
    "Uşak", "Van", "Yozgat", "Zonguldak", "Aksaray", "Bayburt", "Karaman", "Kırıkkale", "Batman", "Şırnak", "Bartın",
    "Ardahan", "Iğdır", "Yalova", "Karabük", "Kilis", "Osmaniye", "Düzce"
  ];
  //Artan sıraya göre şehirler listelendi
  let sortedCities=cities.sort();
//referans
let input=document.getElementById("input");
//keyup'la fonksiyonu çalıştırma
input.addEventListener("keyup",(e)=>{
    //yukarıdaki arrayin içinde gezinme
         //önceden girilen elemanları temizle
         removeElements();
    for(let i of sortedCities){
       //girilen değerleri lowercase çevir ve herbirini karşılaştır
       if(i.toLowerCase().startsWith(input.value.toLowerCase())&&input.value != ""){
        //li eleöentini oluşturma
        let listItem=document.createElement("li");
        //class name ekleme
        listItem.classList.add("list-items");
        listItem.style.cursor="pointer";
        listItem.setAttribute("onclick","displayCities('"+i+"')");
        //Eşleşen şehirleri gösterme
        let city="<b>"+i.slice(0,input.value.length)+"</b>"
        city +=i.slice(input.value.length);
        /*console.log(city);<b>A</b>dana*/ 
        //dizideki değerleri göster
        listItem.innerHTML=city;
        document.querySelector(".list").appendChild(listItem);
       }
    }
});
function displayCities(value){
    input.value=value;
    removeElements();
}
function removeElements(){
    let items=document.querySelectorAll(".list-items");
    items.forEach((item)=>{
        item.remove();
    })
}

