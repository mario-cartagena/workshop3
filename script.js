let arrayProductos = [];
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", agregarDatos);

function agregarDatos (event){
    event.preventDefault();
    
    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;
    const cantidad = document.getElementById("cantidad").value;
    const categoria = document.getElementById("categoria").value;

    const producto = {
        nombre,
        precio,
        cantidad,
        categoria
    };

    arrayProductos.push(producto);
    console.log(arrayProductos);

    formulario.reset();
    formulario.nombre.focus();
    mostrarProductos();
};

function mostrarProductos() {
    const tabla = document.getElementById("tabla").getElementsByTagName("tbody")[0];
    tabla.innerHTML = "";
    
    arrayProductos.forEach((producto) => {
      const fila = tabla.insertRow();

      const celdaNombre = fila.insertCell();
      celdaNombre.innerHTML = producto.nombre;
      
      const celdaPrecio = fila.insertCell();
      celdaPrecio.innerHTML = producto.precio;
      
      const celdaCantidad = fila.insertCell();
      celdaCantidad.innerHTML = producto.cantidad;
      
      const celdaCategoria = fila.insertCell();
      celdaCategoria.innerHTML = producto.categoria;

      const celdaAcciones = fila.insertCell();

      const botonEliminar = document.createElement("button");
      botonEliminar.innerHTML = "Eliminar";
      celdaAcciones.appendChild(botonEliminar);

      const botonActualizar = document.createElement("button");
      botonActualizar.innerHTML = "Actualizar";
      celdaAcciones.appendChild(botonActualizar);
    });
};
