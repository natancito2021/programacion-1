function mostrar() {
    //forma 1
    //const nombres= document.querySelector("#inp_nombres").value 
    //forma 2
    const nombres = document.getElementById("inp_nombres").value
    //sin template string
    //const mensaje= 'NOMBRE Y APELLIDO'+nombres

    //template string
    const mensaje = `nombre y apallido: ${nombres}`
    alert(mensaje)
}

function mifuncion_con_retorno(){
    const ejemplo = 'probando funcion con retorno'
    return ejemplo
} 

function mostrar_respuesta (){
    const respuesta = mifuncion_con_retorno()
    alert (respuesta)
}
                   