main() {
  //Fortemente tipada
  int a = 3;
  double b = 3.1;
  var c = 'Você é muito legal';
  bool estaChovendo = true;
  bool estaFrio = false;

  // Ela usa a inferência nas variáveis logo se você armazenou um tipó string na variável não poderá colocar um tipo int depois
  print('Primeiro programa');
  print(c);
  print(c is String); // A resposta de true logo a variável c é do tipo string por inferência

  // Usando operadores logicos
  print(estaChovendo || estaFrio);

  // Usando Listas

  var nomes = ['Ana', "Bia", "Carlos"];
  nomes.add('Gabriel');
  nomes.add('Parnaiba');
  print(nomes.length);
  print(nomes[4]);
  print(nomes.elementAt(0));
  print(nomes);

// Usando Conjuntos

  var conjunto = {0, 1, 2, 3, 4, 4, 4, 4, 4};
  print(conjunto.length);
  print(conjunto is Set);

//Map

  Map<String, double> notasDosAlunos = {
    'Ana': 9.7,
    'Bia': 9.2,
    'Carlos': 7.8,
  };

  for (var chave in notasDosAlunos.keys) {
    print('chave = $chave');
  }

  for (var valores in notasDosAlunos.values) {
    print('valores = $valores');
  }

  // Variável Dinâmica

  dynamic x = 'Teste';
  x = 123;
  x = false;

  print(x);
}
