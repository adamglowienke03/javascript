const przyciski = document.querySelectorAll('.gameButton')
let g1 = document.querySelector('#g1')
let g2 = document.querySelector('#g2')
let gracz;
let ruch = 0
let sprawdzX = new Array()
let sprawdzO = new Array()
const wygrana = [
    ['a','b','c'],
    ['d','e','f'],
    ['g','h','i'],
    ['a','d','g'],
    ['b','e','h'],
    ['c','f','i'],
    ['a','e','i'],
    ['c','e','g']
]

window.addEventListener('load', function(){
    document.querySelector('#start').addEventListener('click', gramy)
})

function gramy(){
    console.log('Wybierz gracza')

    let graczPierwszy = document.querySelector('#gracz1').value
    let graczDrugi = document.querySelector('#gracz2').value

    g1.innerHTML = graczPierwszy+' X'
    g2.innerHTML = graczDrugi+' O'


    g1.addEventListener('click', obslugaX, true)
    g2.addEventListener('click', obslugaO,true)
}

let obslugaX = function(){
        gracz = 'X'
        g1.setAttribute('style', 'border: 2px solid black')
        g2.setAttribute('style', 'border: none')
        zaznaczGracza()
}
let obslugaO = function(){
        gracz = 'O'
        g2.setAttribute('style', 'border: 2px solid black')
        g1.setAttribute('style', 'border: none')
        zaznaczGracza()
}

function sprawdz(sprawdzenie){
    if(ruch === 9){
        document.querySelector('#gora h1').innerHTML = 'REMIS'
        setTimeout(()=>{
            document.location.reload()
        }, 3000)
    }
    wygrana.forEach(e=>{
        if(e.every(i=>sprawdzenie.includes(i))){
            return koniec(gracz)
        }
    })
}

function koniec(wygrany){
    let graczPierwszy = document.querySelector('#gracz1').value
    let graczDrugi = document.querySelector('#gracz2').value

    document.querySelector('#gora h1').innerHTML = (wygrany === 'X') ? 'Wygrał: '+graczPierwszy : 'Wygrał: '+graczDrugi
    przyciski.forEach((e)=>{
        e.disabled = true
    })
    setTimeout(()=>{
        document.location.reload()
    }, 3000)
}

function zaznaczGracza(){
    for (let p of przyciski){
        p.addEventListener('click', function(e){
           if(e.target.innerText != 'X' && e.target.innerText != 'O'){

            document.getElementById(e.target.id).innerHTML = gracz
            if(gracz === 'X'){
                sprawdzX.push(e.target.id)
                ruch++
                sprawdz(sprawdzX)
                gracz = 'O'
                g2.setAttribute('style', 'border: 2px solid black')
                g1.setAttribute('style', 'border: none')

            }else if(gracz === 'O'){
                sprawdzO.push(e.target.id)
                ruch++
                sprawdz(sprawdzO)
                gracz = 'X'
                g1.setAttribute('style', 'border: 2px solid black')
                g2.setAttribute('style', 'border: none')
            }
           }
        })
    }
    g1.removeEventListener('click', obslugaX,true)
    g2.removeEventListener('click', obslugaO,true)
}

