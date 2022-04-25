function auto() {
    const marca = document.getElementById("inp_a").value

    if (marca == 'ford fiesta') {
        const resultado = 1950000 - ((5 * 1950000) / 100)
        alert("descuento:" + resultado)

    } else {
        if (marca == 'ford focus') {
            const resultado = 2560000 - ((10 * 2560000) / 100)
            alert("descuento:" + resultado)
        }
        else {
            const resultado = 1950000 - ((15 * 1950000) / 100)
            alert("descuento:" + resultado)
        }
    }
}