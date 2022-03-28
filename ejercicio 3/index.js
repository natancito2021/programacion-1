function calcular_potencia() {
    const tension = document.getElementById("inp_tension").value
    const corriente = document.getElementById("inp_corriente").value
    const resultado = tension*corriente
    return resultado
}

function mostrar() {
  const resultado = calcular_potencia()
  alert (resultado)
} 