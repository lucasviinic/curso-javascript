let num = document.querySelector('input#txtn')
let flista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []
flista.innerHTML = ``

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar(){
    if (isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adiconado`
        flista.appendChild(item)

    } else {
        alert('Valor invalido ou já se encontra na lista')
    }
}

function soma(l){
    let r = 0
    for (let i in l) {
        r += l[i]
    }
    return r
}

function resultado(){

    res.innerHTML = `<p>Ao todo temos ${valores.length} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${Math.max.apply(null, valores)}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${Math.min.apply(null, valores)}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma(valores)}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma(valores)/valores.length}.</p>`
}