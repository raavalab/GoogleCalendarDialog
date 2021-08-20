const axios = require("axios");

exports.verCardapio = async ( msg, params ) => {
	// let url = 'https://sheetdb.io/api/v1/uvscf0tab9ti1';

	let url = 'https://sheetdb.io/api/v1/1an2wevd7dv12';
	let cardapio = [];
	let produto = {};
	let retorno = {}


	return await axios
		.get( url )
		.then ( (resultado) => {
			retorno = resultado.data;

			for( let i =0; i<retorno.length; i++) {
				produto = {
					titulo: `Cod: ${retorno[i].Codigo} - ${retorno[i].Nome}`,
					preco: `R$ ${retorno[i].Preco}`,
					url: retorno[i].Imagem                     // exemplo 'https://images.unsplash.com/photo-1551024506-0bccd828d307?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVzc2VydHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'  
				}

				cardapio.push(produto);
			}

			let resposta = {
				tipo: 'card',
				cardapio
			}
		
			return resposta
		})
		.catch( err => console.log(err) );
}

// 

exports.verStatus = () => {

	let cardapio = [];
	
	let resposta = {
		tipo: 'texto',
		mensagem: 'Calma que já estamos preparando o seu pedido neste momento',
		cardapio
	}
     
	return resposta
}

