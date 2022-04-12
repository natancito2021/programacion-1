let marcas = ["ford", "renault", "volkswagen","seat","peugeot","chevrolet","fiat","toyota","chery" ]
console.log(`
    longitud = ${marcas.length}
`)
let ultimo_elemento = marcas[marcas.length - 1]
console.log(`
    ultimo elemento: ${ultimo_elemento}
`)
marcas.forEach((element, index) => {
    console.log(`
        ${index} -${element}
    `)
});

marcas.push("bmw")
console.log(marcas)

marcas.pop()
console.log(marcas)

marcas.unshift("mercedez benz")
console.log(marcas)

marcas.shift()
console.log(marcas)

let index= marcas.indexOf("audi")
console.log(`
    posicion del elemento audi =${index}
`)

marcas.splice(index,1)
console.log(marcas)

marcas.splice(0,2)
console.log(marcas)

marcas.push("nissan")
let copia = marcas.slice()

copia.push("ferrari")
console.log(copia)
console.log(marcas)