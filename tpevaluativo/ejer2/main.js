const convertir = () => {
    temperatura = document.getElementById("inp_a").value
    if (temperatura >= 14 && temperatura < 32) {
        const resultado = 'baja'
        alert("su temperatura es:" + resultado)
    }
    else {
        if (temperatura >= 32 && temperatura < 68) {
            const resultado = 'media'
            alert("su temperatura es:" + resultado)
        } else {
            if (temperatura >= 68 && temperatura <= 96) {
                const resultado = 'alta'
                alert("su temperatura es:" + resultado)
            } else {
                const resultado = 'desconocida'
                alert("su temperatura es:" + resultado)
            }
        }
    }
}
const boton = document.getElementById("btn-convertir")

boton.addEventListener("click", convertir)