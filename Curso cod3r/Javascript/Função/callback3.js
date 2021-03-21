// Exemplo do callback no brownser

document.getElementsByTagName('body')[0].onclick((e) => console.log('o evento ocorreu'))

// Quando o usuário sai com o mause do campo do site

document.getElementsByTagName('body')[0].onmouseleave = (e) => window.alert('Não sai ainda da página!!')