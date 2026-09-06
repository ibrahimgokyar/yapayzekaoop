

var Insan = function() {
    //değişkenleri properties
    this.isim;
    this.soyisim;
    this.yas;

    this.adSoyad= function()
    {
        console.log(this.isim +" " +this.soyisim);
    }

    //uyu fonkisyonuna dışarıdan bir parametre gönderebilmek için

    this.uyu = function(adi,soyadi)
    {
        console.log(adi +" "+soyadi +" uyuyor");
    }

    this.yasHesapla = function(dogumYili)
    {
        var sonuc = 2026 - dogumYili;
        return sonuc;
    }

}

//Insan classın dan bir nesne oluşturdum. 

var ibr = new Insan();
ibr.isim = "ibrahim";
ibr.soyisim = "gökyar";
ibr.yas = 48;
ibr.adSoyad();
ibr.uyu("Hakan","yılmaz");
var gelenDeger = ibr.yasHesapla(1978);
console.log("Yaşınız : " + gelenDeger);
console.log("Yaşınız 2 : "+ ibr.yasHesapla(1980));





