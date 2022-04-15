// Primeiramente aqui foi salvo a url da API em uma constante para que assim fique mais fácil de usar no código
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';


// Aqui foi criada um arrow function que vai pegar pegar os dados presentes na API convertendo para json a const data pega
//pegao os dados da API e a const json recebe data convertido em json e por fim retorn json.webpurl retornando assim a url
// com a imagem do gato  
const getCats = async () => {
	try {
		const data = await fetch(BASE_URL);
		const json = await data.json();
		return json.webpurl;
	} catch (e) {
		console.log(e.message);
	}
};


// Agora aqui foi criado a errow function que irá colocar dentro da tag img do html e url com a imagem do gato 
// a const img recebe os tag img do html e depois com img.src = await getCats ele cria uma url para a tag img
//cujo o conteudo da url será os dados gerados pela function getCats, a lá de cima, que sera uma url com uma imagem
// aleatória de um gato

const loadImg = async () => {
	const img = document.getElementsByTagName('img')[0];
	img.src = await getCats();
};

// aqui a function loudImg já foi inicializado para que a pagina ja abra com uma imagem de gato na tela
loadImg();


// aqui foi foi peque o botão e criado o evento que ao clicar nele será disparada a função loadImg para que assim
// possa gerar outra imagem de gato aleatória
const btn = document.getElementById('change-cat');
btn.addEventListener('click', loadImg);

//Aprendendo sobre javascript assícrono utilizando essa API que gera imagem aleatórias de gatos no bootcamp carrefour web develper do grupo carrefour e da dio 