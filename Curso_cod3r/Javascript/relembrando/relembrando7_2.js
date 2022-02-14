
const bhaskara = (ax2, bx, c)=>{
    let resultado = []
    let delta = (bx**2)-(4*ax2*c);
    if(delta<1){
        return console.log("O Delta é negativo logo não se pode calcular");
    }

    let calc1 = (-bx + Math.sqrt(delta))/2*ax2;    
    let calc2 = (-bx - Math.sqrt(delta))/2*ax2;

    resultado.push(calc1);
    resultado.push(calc2);

    return console.log(resultado)
}

bhaskara(1,3,2)
bhaskara(3,1,2)