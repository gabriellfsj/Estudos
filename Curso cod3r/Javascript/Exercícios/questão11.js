const anoBissexto = (data) =>{
    if(data <=0){
        console.log(false)
    }else if (data%4 == 0){
        console.log(true)
    }else if(data%400 == 0){
        console.log(true)
    }else if(data%100 == 0){
        console.log(false)
    }else{
        console.log(false)
    }
}

anoBissexto(2025)

