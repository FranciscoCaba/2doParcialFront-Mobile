var productos = [
  {
    id: 1,
    nombre: "Pan",
    idCategoria: 1,
    precioVenta: 500,
  },
  {
    id: 2,
    nombre: "Jamon",
    idCategoria: 1,
    precioVenta: 2500,
  },
  {
    id: 3,
    nombre: "Laptop",
    idCategoria: 2,
    precioVenta: 5000000,
  },
];

var categorias = [
  {
    id: 1,
    nombre: "Comida",
  },
  {
    id: 2,
    nombre: "Tecnologia",
  },
];

export function getProductos() {
  return productos;
}

export function addProducto(producto) {
  productos.push(producto);
  return productos;
}

export function getCategorias() {
  return categorias;
}

export function addCategoria(categoria) {
  categorias.push(categoria);
  return categorias;
}
