class Uye 
{

    isim = "";
    soyisim = "";
    yas = 0;
    cinsiyet = true;

    //ilgili class tan bir nesne oluşturken o class ın içindeki değişkenlere baştan değer atanması 
    constructor(isim, soyisim, yas) {
        this.isim = isim;
        this.soyisim = soyisim;
        this.yas = yas;
    }

    adSoyad() {
        return `${this.isim} ${this.soyisim}`;
    }

    bilgileriGoster() {
        return `${this.adSoyad()} - ${this.yas} yaşında - Cinsiyet: ${this.cinsiyet}`;
    }
}

const uye1 = new Uye("İbrahim", "Gökyar", 48);

var ibr = new Uye("Metni","Yıldız",33);


console.log(uye1.bilgileriGoster());