function contar(){
    var i = Number(document.getElementById('txti').value)
    var f = Number(document.getElementById('txtf').value)
    var p = Number(document.getElementById('txtp').value)
    var res = document.getElementById('res')
    var result = ``
    
    if (i.length == 0 || f.length == 0 || p.length == 0){
        window.alert('[ERRO] Faltam dados!')
    } else {
        for (i; i <= f; i+=p){
            result += `${i} <span>&#128073;</span>`
        }
        res.innerHTML = `<p>Contando:</p>`
        res.innerHTML += `<p>${result} <span>&#127937;</span></p>` 
    }
}