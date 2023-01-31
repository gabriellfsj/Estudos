let totalItems = 10;
let pares = [];
let impares = [];


let number = [4,32,34,543, 3456, 654, 567, 87, 6789, 98]
 for (let i = 0; i < number.length; i++) {
     
  if (number[i]%2 === 0 ){
    pares.push(number[i]);
    
  }  else if(number[i]%2 ==! 0) {
    impares.push(number[i]);
  }
}
  
pares.sort((a,b)=> a-b)
impares.sort((a,b)=> a-b)
impares.reverse()

//console.log(pares)
//console.log(impares)

for(let i = 0; i < pares.length;i++){
  console.log(pares[i])
}

for(let i = 0; i < impares.length;i++){
    console.log(impares[i])
}