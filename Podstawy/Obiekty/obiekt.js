// Obiekt literalny - tworzenie jednego, unikalnego obiektu
var samochod = {
    marka: "Toyota",
    model: "Corolla",
    rokProdukcji: 2020,
    kolor: "czerwony",
    cena: 100000,
    show: function() {
        console.log("Samochód marki: " + this.marka + ", model: " + this.model + ", rok produkcji: " + this.rokProdukcji + ", kolor: " + this.kolor + ", cena: " + this.cena + " PLN");
    }
};
samochod.show();

// Konstruktor obiektów - tworzenie wielu obiektów o tej samej strukturze
function Samochod(marka, model, rokProdukcji, kolor, cena) {
    this.marka = marka;
    this.model = model;
    this.rokProdukcji = rokProdukcji;
    this.kolor = kolor;
    this.cena = cena;
    this.show = function() {
        alert("Samochód marki: " + this.marka + ", model: " + this.model + ", rok produkcji: " + this.rokProdukcji + ", kolor: " + this.kolor + ", cena: " + this.cena + " PLN");
    }
}
const samochod1 = new Samochod("Honda", "Civic", 2019, "niebieski", 90000);

// Dodawanie nowej właściwości do obiektu
samochod1.przebieg = 15000;
samochod1.show1 = function() { alert(this.model); }

console.log(samochod1)
samochod1.show1();
