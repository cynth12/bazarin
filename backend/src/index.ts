interface Producto {
    id: number
    nombre: string
    precio: number
    categoria: string
    disponible: boolean
    imagen?: string
  }
  
  const productos: Producto[] = [
    {
      id: 1,
      nombre: "Salsa roja de árbol",
      precio: 89,
      categoria: "Picosas",
      disponible: true
    },
    {
      id: 2,
      nombre: "Salsa de mango habanero",
      precio: 95,
      categoria: "Dulces",
      disponible: true
    },
    {
      id: 3,
      nombre: "Salsa negra ahumada",
      precio: 110,
      categoria: "Ahumadas",
      disponible: false
    }
  ]
  
  function buscarProducto(id: number): Producto | undefined {
    return productos.find(p => p.id === id)
  }
  
  function filtrarDisponibles(): Producto[] {
    return productos.filter(p => p.disponible)
  }
  
  console.log("=== Bazarín Salsas ===\n")
  console.log("Todos los productos:", productos)
  console.log("\nBuscar id 2:", buscarProducto(2))
  console.log("\nDisponibles:", filtrarDisponibles())