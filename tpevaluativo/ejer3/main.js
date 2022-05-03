const convertir = () => {
    const a = document.getElementById("inp_a").value
    const b = document.getElementById("inp_b").value

    const area = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2))

    document.getElementById("h_titulo").textContent = `resultado:` + area

}
const boton = document.getElementById("btn-convertir")

boton.addEventListener("click", convertir)