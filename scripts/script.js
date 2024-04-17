let numero_random = Math.floor(Math.random()* 100) + 1
let intentosRestantes = 10
let intentos = []
let numInt = 0

resultado = document.getElementById('resultado')
botonRes = document.getElementById('submit')
document.getElementById('reiniciar').addEventListener('click', reiniciarJuego);


function iniciarJuego(){
    let numeroElegido = parseInt(document.getElementById('numero').value, 10)
    if(isNaN(numeroElegido) || numeroElegido > 100 || numeroElegido < 1){
        alert('Ingrese un numero entre 1 y 100')
        return
    }
    if(intentos.includes(numeroElegido)){
        alert('Ya ingresaste ese numero')
        return
    }
    numInt ++
    intentos.push(numeroElegido)
    intentosRestantes--
    spanIntentos = document.getElementById('intentos').textContent = intentos.join()
    spanNoIntentos =  document.getElementById('spanNoIntentos').innerHTML = `Número de Intentos: ${numInt}`
    if(intentosRestantes == 0){
        alert('Te quedaste sin intentos, la respuesta era: ' + numero_random)
        botonRes.style.display = "none"
    }
    if(numeroElegido == numero_random){
        resultado.style.display = "block"
        resultado.style.backgroundColor = "green"
        botonRes.style.display = "none"
        resultado.innerHTML = '<p style="padding: 15px; color: white; font-size = 20px">¡Felicidades, acertaste el número!</p>'
        botonRes.disabled = true
    }
    else if(numeroElegido > numero_random){
        resultado.style.display = "block"
        resultado.style.backgroundColor = "lightcoral"
        resultado.innerHTML = '<p style="padding: 15px; color: white">¡Ups! Era más bajo</p>'
    }
    else {
        resultado.style.display = "block"
        resultado.style.backgroundColor = "lightcoral"
        resultado.innerHTML = '<p style="padding: 15px; color: white">¡Ups! Era más alto</p>'
    }
}

function reiniciarJuego(){
    numero_random = Math.floor(Math.random()* 100) + 1
    intentosRestantes = 10
    numInt = 0
    intentos = []
    resultado.style.display = "none"
    botonRes.style.display = "block"
    botonRes.disabled = false
    document.getElementById('intentos').textContent = intentos.join()
    document.getElementById('numero').value = ""
    spanNoIntentos =  document.getElementById('spanNoIntentos').innerHTML = `Número de Intentos: ${numInt}`

}
