
//abstraction soyutlama 
var araba = function()
{
   this.marka;
   this.model;
   this.kapiSayisi;
   this.pencereSayisi,


   this.git = function(brand,modeli)
   {
    console.log(brand +" " +modeli + " gidiyor");
   }

   this.arabaYasHesapla= function(uretimYili)
   {
    var sonuc = 2026 - uretimYili;
    return sonuc;
   }


}

var a = new araba();
a.marka = "bmw";
a.model = "x5";
a.kapiSayisi = 4;
a.pencereSayisi = 4;
a.git("porche","carrera");
var gelenArabaYasi = a.arabaYasHesapla(2010);
console.log("Arabanın yaşı : " + gelenArabaYasi);
console.log("arabanın yaşı 2 : " + a.arabaYasHesapla(2018));