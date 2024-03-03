const shoppingCart = [];

//Função que adiciona um novo item a lsta de compras;
function addItemCart (item) {
	shoppingCart.push(item)
};

//Remove um item da lista;
function removeItemFromCart (item) {
	const index = shoppingCart.indexOf(item); //indexOf diz se tem no carrinho
	if (index !== -1) {
		shoppingCart.splice(index,1);
	}
	viewCart();
};

//Visualiza todos os itens que estão no carrinho;
function viewCart(){
	if (shoppingCart.length == 0){
		console.log("Your shopping cart is empty");
	}else{
		console.log("Itens in your shopping cart: ")
		for (let i=0 ;shoppingCart.length > i; i++){
			console.log(`${i+1} : ${shoppingCart[i]}`);
		}
	}
}

//Limpa o carrinho 
function clearCart() {
	shoppingCart.length = 0 ;
	console.log("Your shopping cart has been empty")
}


addItemCart("maça");
addItemCart("Beterraba");
addItemCart("arroz");
addItemCart("banana");

viewCart();

removeItemFromCart('maça');

viewCart();

clearCart();

viewCart();