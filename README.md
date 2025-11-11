# JavaScript
---
## Spis treści

- [JavaScript](#javascript)
  - [Spis treści](#spis-treści)
  - [Podstawy](#podstawy)
    - [Funkcje Anonimowe i Strzałkowe](#funkcje-anonimowe-i-strzałkowe)
    - [Wykorzystanie `bind`, `call` i `apply`](#wykorzystanie-bind-call-i-apply)
    - [Manipulacja DOM (Document Object Model)](#manipulacja-dom-document-object-model)

---
## Podstawy
### Funkcje Anonimowe i Strzałkowe

**Funkcje Anonimowe** - funkcje bez nazwy, które są zazwyczaj używane jako `callbacki` (funkcje przekazywane jako argumenty do innych funkcji) lub do natychmiastowego wykonania

```js
document.addEventListener('click', function() {
    console.log("Kliknięto!");
});
```

**Funkcje Strzałkowe** - nowoczesna, skrócona składnia funkcji anonimowych

```js
// Skrócony zapis
const suma = (a, b) => a + b; 

// Zastępuje funkcję anonimową w callbacku
setTimeout(() => {
    console.log("Po 1s");
}, 1000);
```

### Wykorzystanie `bind`, `call` i `apply`
Te trzy metody służą do **jawnego ustawiania wartości słowa kluczowego** `this` wewnątrz funkcji. Jest to kluczowe w OOP i podczas pracy z callbackami.

 - `call()` - Wywołuje funkcję **natychmiast**. Argumenty są przekazywane pojedynczo, po pierwszym argumencie (`this`).

- `apply()` - Wywołuje funkcję **natychmiast**. Argumenty są przekazywane w formie tablicy (lub obiektu podobnego do tablicy), po pierwszym argumencie (`this`).
  
- `bind()` - Nie wywołuje funkcji. Tworzy jej **nową kopię** ze **stałym**, przypisanym kontekstem this, którą można wywołać później. Argumenty są przekazywane pojedynczo (częściowe zastosowanie funkcji - currying).

Przykład:
```js
const osoba = { imie: "Anna" };

function powitaj(pozdrowienie, czas) {
  // Wewnątrz tej funkcji, 'this' to obiekt, który podamy przez call/apply/bind
  console.log(`${pozdrowienie}, ${this.imie} jest już ${czas}!`);
}

powitaj.call(osoba, "Cześć", "rano"); // Cześć, Anna jest już rano!

powitaj.apply(osoba, ["Dzień dobry", "popołudnie"]); // Dzień dobry, Anna jest już popołudnie!

const powitajAne = powitaj.bind(osoba, "Witaj");
powitajAne("rano"); // Witaj, Anna jest już rano!
```

### Manipulacja DOM (Document Object Model)

- `querySelector()` - zwraca pierwszy element pasujący do selektora CSS
- `querySelectroAll()` - zwraca wszystkie dopasowania

Zarówno `querySelector()` jak i `querySelectorAll()` zgłaszają wyjątek SYNTAX_ERR jeśli selektory są nieprawidłowe

```js
let selektor = document.getElementById("id")
let selektor = document.querySelector("#id")

let selektor = document.getElementsByTagName("p")
let selektor = document.querySelectorAll("p")

let selektor = document.getElementsByClassName("nazwaKlasy")
let selektor = document.querySelectorAll(".nazwaKlasy")
```

### innerHTML vs textContent

`textContent` - traktuje wszystko jako czysty tekst
`innerHTML` - traktuje wszystko jako kod HTML

`element.attribute` -> nowa wartość zmienia wartość atrybutu elementu HTML
`element.style.property` -> nowa wartość zmienia wartość właściwości CSS

---
### Rodzaje zdarzeń
**Typ zdarzenia**
- click
- mouseover

**Element zdarzenia**
- tekst
- przycisk
- formularz

**Funkcja obsługująca zdarzenie**
- listener
- handler

**Przypisanie funkcji pod zdarzenie:**
```js
document.getElementById("g1").onclick = () => {
    alert("Kliknięto przycisk 1")
}
```
**Użycie funkcji addEventListener:**
```js
let pole = document.getElementById("g2")
pole.addEventListener("click", () => {
    alert("Kliknięto przycisk 2")
})
// lub
pole.addEventListener("click", nazwaFunkcji)
```