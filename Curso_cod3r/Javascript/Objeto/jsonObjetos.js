//Convertnedo Objeto para JSON
const obj = {a: 1, b:2, c:3, soma(){return a+b+c}}
console.log(JSON.stringify(obj))

//Convertendo JSON para objeto:
//console.log(JSON.parse("{a:1, b:2, c:3}")) -ERRADO-
//console.log(JSON.parse("{'a': 1, 'b': 2, 'c': 3}")) -ERRADO-
console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}'))

console.log(JSON.parse('{"a": 1.7, "b": "String", "c": true, "d": {}, "e":[]}'))
