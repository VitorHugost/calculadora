let numeros = [... document.querySelectorAll(".numero")]
let operadores = [... document.querySelectorAll(".t_operador")]
let display = document.querySelector("#tela_display")
let limpar = document.querySelector("#t_limpar")
let resultado = document.querySelector("#t_igual")

let contem_sinal = false
let decimal = false

numeros.forEach((element)=>{

    element.addEventListener('click',(evento)=>{
        contem_sinal = false

        if(evento.target.innerHTML == ","){
            if(decimal == false){
                decimal = true

                if(display.innerHTML == "0"){
                    display.innerHTML = "0,"
                }else{
                    display.innerHTML += evento.target.innerHTML
                }
            }
        }else{ 
            if( display.innerHTML == "0"){
                display.innerHTML = ""
            }
            display.innerHTML += evento.target.innerHTML
        }
    })
})

operadores.forEach((element)=>{

    element.addEventListener("click",(evento)=>{

        if(contem_sinal == false){
            contem_sinal = true

            if(display.innerHTML == "0"){
                display.innerHTML = ""
             display.innerHTML = evento.target.innerHTML 
            }else{
                if(evento.target.innerHTML == "X"){
                    display.innerHTML += "*"
                }else if(evento.target.innerHTML == "÷"){
                    display.innerHTML += "/"
                }else if(evento.target.innerHTML == "+/-"){
                    const res = eval(display.innerHTML +"*-1")
                    display.innerHTML = res
                }else{
                    display.innerHTML += evento.target.innerHTML
                }   
            }
        }
    })
})

limpar.addEventListener("click",(()=>{

    contem_sinal = false
    decimal = false
    display.innerHTML = "0"
}))

resultado.addEventListener("click",(()=>{

    contem_sinal = false
    decimal = false
    const res = eval(display.innerHTML)
    display.innerHTML = res
}))
