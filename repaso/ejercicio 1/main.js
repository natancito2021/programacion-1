function calcular_potencia() {
    const celcius = document.getElementById("inp_celcius").value
    const fahrenheit = celcius * 1.8 + 32

    return fahrenheit
}

function mostrar() {
  const respuesta = calcular_potencia()
  alert (respuesta)
} 