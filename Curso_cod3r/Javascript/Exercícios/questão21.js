function planoSaude(idade){
    if(idade <= 10){
        console.log(` O pagamento sera ${180}`)
    }else if(idade>10 && idade<=30){
        console.log(` O pagamento sera ${150}`)
    }else if(idade>30 && idade<=60){
        console.log(` O pagamento sera ${195}`)
    }else if(idade>60){
        console.log(` O pagamento sera ${230}`)
    }

}

planoSaude(10)
planoSaude(15)
planoSaude(31)
planoSaude(61)