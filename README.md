# Control de Inventario JS 📦

Un sistema ultra simple para registrar productos usando **JavaScript**, **HTML** y **CSS**. Los datos se guardan en la memoria del navegador mientras la pestaña esté abierta.

## ✨ Funciones

- **Agregar productos:** Guarda código, nombre, categoría, cantidad y costo.
- **Validación:** No permite campos vacíos ni cantidades/costos menores a cero.
- **Evita duplicados:** No puedes registrar dos productos con el mismo código.
- **Alertas visuales:** Mensajes de éxito o error que desaparecen tras 3 segundos.

## 🛠️ Estructura

- `index.xhtml`: La interfaz con el formulario y la lista.
- `style.css`: El diseño limpio y los colores de las alertas.
- `app.js`: La lógica que maneja el inventario con un objeto `Map`.
