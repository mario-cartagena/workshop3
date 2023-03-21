const containerProductos = document.querySelector(".tabla__contenido");
const containerActualizacion = document.querySelector(".sectionActualizar");

let arrayProductos = [];
const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", agregarDatos);

function agregarDatos(event) {
  event.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const precio = document.getElementById("precio").value;
  const cantidad = document.getElementById("cantidad").value;
  const categoria = document.getElementById("categoria").value;

  const producto = {
    nombre,
    precio,
    cantidad,
    categoria,
  };

  arrayProductos.push(producto);
  console.log(arrayProductos);

  formulario.reset();
  formulario.nombre.focus();
  imprimirProductos(containerProductos, arrayProductos);
}

const imprimirProductos = (containerProductos, listaProductos) => {
  containerProductos.innerHTML = "";

  listaProductos.forEach((producto, indice) => {
    containerProductos.innerHTML += `
            <tbody>
                <tr id="${indice}">
                    <td>${indice}</td>
                    <td>${producto.nombre}</td>
                    <td>${producto.precio}</td>
                    <td>${producto.cantidad}</td>
                    <td>${producto.categoria}</td>
                    <td><button onclick="eliminarProducto(${indice})">Eliminar</button>
                    <button onclick="actualizarProducto(${indice})">Actualizar</button></td>
                </tr>
            </tbody>
        `;
  });
};

function eliminarProducto(indice) {
  const productoAEliminar = document.getElementById(indice);
  productoAEliminar.remove();
  arrayProductos.splice(indice, 1);
  console.log(arrayProductos);

  imprimirProductos(containerProductos, arrayProductos);
}

const containerActualizar = document.querySelector(".botonActualizar");

function actualizarProducto(indice) {
  document.getElementById("nombre").value = `${arrayProductos[indice].nombre}`;
  document.getElementById("precio").value = `${arrayProductos[indice].precio}`;
  document.getElementById("cantidad").value = `${arrayProductos[indice].cantidad}`;
  document.getElementById("categoria").value = `${arrayProductos[indice].categoria}`;

  const seccionActualizar = document.createElement("section_actualizar");
  seccionActualizar.innerHTML = `<br><button onclick="actualizarTabla(${indice}, event)">Actualizar Campos</button>`;
  containerActualizacion.appendChild(seccionActualizar);
  imprimirProductos(containerProductos, arrayProductos);
}

const actualizarTabla = (indice, event) => {
  event.preventDefault();
  nombre = document.getElementById("nombre").value;
  precio = document.getElementById("precio").value;
  cantidad = document.getElementById("cantidad").value;
  categoria = document.getElementById("categoria").value;

  arrayProductos[indice] = {
    nombre: `${nombre}`,
    precio: `${precio}`,
    cantidad: `${cantidad}`,
    categoria: `${categoria}`,
  };
  
  formulario.reset();
  imprimirProductos(containerProductos, arrayProductos);
  
};
