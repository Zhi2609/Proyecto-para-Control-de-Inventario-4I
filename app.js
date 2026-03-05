const inventario = new Map();

function mostrarMensaje(texto, tipo) {
  const mensaje = document.getElementById("mensaje");
  mensaje.textContent = texto;
  mensaje.className = tipo;
  setTimeout(() => {
    mensaje.className = "";
    mensaje.textContent = "";
  }, 3000);
}

function renderizar() {
  const lista = document.getElementById("listaProductos");
  lista.innerHTML = "";
  inventario.forEach((producto) => {
    const div = document.createElement("div");
    div.className = "producto";
    div.innerHTML = `
      <p><strong>Código:</strong> ${producto.codigo}</p>
      <p><strong>Nombre:</strong> ${producto.nombre}</p>
      <p><strong>Categoría:</strong> ${producto.categoria}</p>
      <p><strong>Cantidad:</strong> ${producto.cantidad}</p>
      <p><strong>Costo:</strong> $${producto.costo}</p>
    `;
    lista.appendChild(div);
  });
}

document.getElementById("btnAgregar").addEventListener("click", () => {
  const codigo = document.getElementById("codigo").value.trim();
  const nombre = document.getElementById("nombre").value.trim();
  const categoria = document.getElementById("categoria").value.trim();
  const cantidad = Number(document.getElementById("cantidad").value);
  const costo = Number(document.getElementById("costo").value);

  if (!codigo || !nombre || !categoria || !cantidad || !costo) {
    mostrarMensaje("Todos los campos son obligatorios.", "error");
    return;
  }

  if (cantidad <= 0) {
    mostrarMensaje("La cantidad debe ser mayor a 0.", "error");
    return;
  }

  if (costo <= 0) {
    mostrarMensaje("El costo debe ser mayor a 0.", "error");
    return;
  }

  if (inventario.has(codigo)) {
    mostrarMensaje("El código del producto ya existe.", "error");
    return;
  }

  inventario.set(codigo, { codigo, nombre, categoria, cantidad, costo });

  mostrarMensaje("Producto agregado correctamente.", "exito");

  document.getElementById("codigo").value = "";
  document.getElementById("nombre").value = "";
  document.getElementById("categoria").value = "";
  document.getElementById("cantidad").value = "";
  document.getElementById("costo").value = "";

  renderizar();
});