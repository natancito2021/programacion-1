const convertir = () => {
    const basemayor = document.getElementById("inp_basemayor").value
    const basemenor = document.getElementById("inp_basemenor").value
    const Altura = document.getElementById("inp_Altura").value
    const area = ((parseInt(basemayor)+ parseInt(basemenor))*Altura)/2

    document.getElementById("h_titulo"). textContent=`resultado:` + area

}
const boton = document.getElementById("btn-convertir")

boton.addEventListener("click", convertir)