class Produto {
  String nome = '';
  double preco = 0;

  Produto(String nomeParam, double preco) {
    this.nome = nome;
    this.preco = preco;
  }
}

main() {
  //Sem construtor:
  //var p1 = new Produto();
  //p1.nome = 'Lapis';
  //p1.preco = 4.58;

  // Com construtor:
  var p2 = new Produto('Caneta', 7.50);

  //print("O produto ${p1.nome} tem o preço R\$ ${p1.preco}");
  print("O produto ${p2.nome} tem o preço R\$ ${p2.preco}");
}
