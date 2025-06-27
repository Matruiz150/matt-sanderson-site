// Maneja la funcionalidad del botón de pagar
const btnPagar = document.getElementById('btnPagar1');
btnPagar.addEventListener('click', () => {
    // Redirige a la página pagar.html
    window.location.href = 'pagar.html';
});

// Selecciona todos los botones "Añadir al carrito"
const addButtons = document.querySelectorAll('.info-product button');

// Escucha el clic en cada botón "Añadir al carrito"
addButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Incrementa el contador de productos en el carrito
        const contadorProductos = document.getElementById('contador-productos');
        let cantidadProductos = parseInt(contadorProductos.textContent);
        cantidadProductos++;
        contadorProductos.textContent = cantidadProductos;

        // Muestra el carrito si hay productos agregados
        const containerCartProducts = document.querySelector('.container-cart-products');
        containerCartProducts.classList.remove('hidden-cart');

        // Crea un nuevo elemento de producto en el carrito
        const tituloProducto = button.parentElement.querySelector('.info-product h2').textContent;
        const precioProducto = button.parentElement.querySelector('.info-product .price').textContent;
        const nuevoProducto = document.createElement('div');
        nuevoProducto.classList.add('cart-product');
        nuevoProducto.innerHTML = `
            <div class="info-cart-product">
                <span class="cantidad-producto-carrito">${cantidadProductos}</span>
                <p class="titulo-producto-carrito">${tituloProducto}</p>
                <span class="precio-producto-carrito">${precioProducto}</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="icon-close">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/>
            </svg>`;
        
        // Agrega el nuevo elemento de producto al carrito
        const cartProducts = document.querySelector('.container-cart-products');
        cartProducts.insertBefore(nuevoProducto, cartProducts.lastChild);
    });
});

// Oculta el carrito al principio
document.querySelector('.container-cart-products').classList.add('hidden-cart');

// Maneja la funcionalidad del botón de carrito
const btnCart = document.querySelector('.container-icon');
btnCart.addEventListener('click', () => {
    document.querySelector('.container-cart-products').classList.toggle('hidden-cart');
});
