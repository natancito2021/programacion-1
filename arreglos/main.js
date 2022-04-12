let helados = ["marroc", "chocolate", "pistacho"]
console.log(`
    longitud = ${helados.length}
`)
let ultimo_elemento = helados[helados.length - 1]
console.log(`
    ultimo elemento: ${ultimo_elemento}
`)
helados.forEach((element, index) => {
    console.log(`
        ${index} -${element}
    `)
});

helados.push("barbazul")
console.log(helados)

helados.pop()
console.log(helados)

helados.unshift("menta granizada")
console.log(helados)

helados.shift()
console.log(helados)

let index= helados.indexOf("chocolate")
console.log(`
    posicion del elemento chocolate =${index}
`)

helados.splice(index,1)
console.log(helados)

helados.splice(0,2)
console.log(helados)

helados.push("limon")
let copia = helados.slice()

copia.push("vainillia")
console.log(copia)
console.log(helados)