// Agrega un evento click al botón de pagar
const btnPagar = document.getElementById('btnPagar');
btnPagar.addEventListener('click', () => {
    const pagoContraEntrega = document.getElementById('checkbox1').checked;
    const mercadoPago = document.getElementById('checkbox2').checked;
    
    if (pagoContraEntrega) {
        // Muestra un mensaje de preparación
        const numeroPedido = Math.floor(Math.random() * 1000); // Número de pedido aleatorio
        alert(`Su pedido Número ${numeroPedido} está en preparación.`);
    } else if (mercadoPago) {
        // Redirige al sitio de Mercado Pago
        const total = document.querySelector('.total-pagar').textContent;
        const urlPago = `https://www.mercadopago.com.ar/hometotal=${total}`;
        window.location.href = urlPago;
    } else {
        // Si no se selecciona ningún método de pago, muestra un mensaje de advertencia
        alert('Por favor, seleccione un método de pago.');
    }
});

// Agrega eventos click a los checkboxes
const checkbox1 = document.getElementById('checkbox1');
const checkbox2 = document.getElementById('checkbox2');

checkbox1.addEventListener('click', () => {
    // Si se selecciona "Pago contra entrega", deselecciona "Mercado Pago"
    if (checkbox1.checked) {
        checkbox2.checked = false;
    }
});

checkbox2.addEventListener('click', () => {
    // Si se selecciona "Mercado Pago", deselecciona "Pago contra entrega"
    if (checkbox2.checked) {
        checkbox1.checked = false;
    }
});
