
let pesoPac = document.getElementById("peso"); 
let boton = document.getElementById("calcularr");
let Vol =  document.getElementById("volumen");
let mant = document.getElementById("mantenimiento");
let mm2 = document.getElementById("mm2")
let errorr = document.getElementById("menError"); 
boton.addEventListener("click", botoncalcular);


function botoncalcular() {
    let peso = pesoPac.valueAsNumber
    let resultado; 

    if (peso == 0) {
        errorr.style.display = 'block'
        errorr.innerHTML = "debes ingresar un número mayor a 0"
        Vol.style.display = "none"
        mant.style.display = "none"
        mm2.style.display = "none"
    } 
    else if (peso >= 30) {
       resultado =  superficie(peso)
       Vol.style.display = "block"
       Vol.innerHTML = (resultado * 1500).toFixed(0)  + " cc (x1500)" 
       mant.style.display = "block"
       mant.innerHTML = (resultado * 2000).toFixed(0) + " cc(x2000)" 
       errorr.style.display = "none"
       mm2.style.display = "none"
    }
    else {
        resultado = holliday(peso) 
        Vol.style.display = "block"
        Vol.innerHTML = resultado + " cc" 
        mant.style.display = "block"
        mant.innerHTML = (resultado / 24).toFixed(0) + " cc/hr"
        mm2.style.display = "block"
        mm2.innerHTML = (resultado * 1.5) + " m+m/2" 
        errorr.style.display = 'none'

    }
}

function holliday (pesoin) {
    if (pesoin > 20) { 
        let menor30 = pesoin - 20 
        let multmayor20 = menor30 * 20
        let sumafinalmayor20 = multmayor20 + 1500
        console.log(sumafinalmayor20)
        return sumafinalmayor20 
    }

    else if (pesoin > 10) { 
    let menor20 = pesoin - 10
    let multmenor20 = menor20 * 50
    let sumafinalmen20 = multmenor20 + 1000
    console.log(sumafinalmen20)
    return sumafinalmen20
    }

    else if (pesoin <= 10) {
    let menor10 = pesoin * 100
    console.log(menor10)
    return menor10
    }
}

function superficie (pesoin) {
    if (pesoin >= 30) {
     let multinicial = pesoin * 4 
     let suma7 = multinicial + 7
     let suma90 = pesoin + 90
     let divis = suma7 / suma90
     let multfinal2 = divis * 2000 
    console.log(multfinal2) 
    return divis  
    }
}


