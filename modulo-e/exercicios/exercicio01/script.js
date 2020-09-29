function contar(){
    var i = document.getElementById('txti').value
    var f = document.getElementById('txtf').value
    var p = document.getElementById('txtp').value
    var res = document.getElementById('res')
    var result = ``
    
    if (i.length == 0 || f.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else if (Number(p) == 0){
        p = 1
        window.alert(`Passo invalido, considerando PASSO = ${p}`)
    }
    
    i = Number(i)
    f = Number(f)
    p = Number(p)
    for (i; i <= f; i+=p){
        result += `${i} <span>&#128073;</span>`
    }

    res.innerHTML = `<p>Contando:</p>`
    res.innerHTML += `<p>${result} <span>&#127937;</span></p>` 

}