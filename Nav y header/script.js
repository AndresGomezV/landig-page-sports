let cantidad = 0
function carrito(){
    cantidad += 1
document.getElementById("contadorCarrito").innerText = `Tienes ${cantidad} items en tu carrito`
}