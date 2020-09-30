//.push(x) adiciona elemento a lista
//.length tamanho da lista
//.sort() ordena os elementos da lista em ordem crescente
//.indexOf(x) retorna a posição de x na lista se este estiver presente, caso contrário o retorno é -1
let num = [6, 9, 3, 2]
num.sort()

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

console.log(num)