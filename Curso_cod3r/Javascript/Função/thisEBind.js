const pessoa = {

    saudacao : 'bom dia',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()

const falaPessoa = pessoa.falar.bind(pessoa)
falaPessoa()

