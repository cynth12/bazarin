import express from "express"
import cors from "cors"

const app = express()
const PORT = 4000

// Middlewares
app.use(cors())
app.use(express.json())

// Tipos
interface Producto {
  id: number
  nombre: string
  descripcion: string
  precio: number
  emoji: string
  categoria: string
  picante: number
  disponible: boolean
  tag?: string
}

// Base de datos temporal (por ahora en memoria)
const productos: Producto[] = [
  { id: 1, nombre: "Salsa roja de árbol", descripcion: "Chipotles y chiles de árbol tostados", precio: 89, emoji: "🌶️", categoria: "Picosas", picante: 5, disponible: true, tag: "Popular" },
  { id: 2, nombre: "Salsa verde tomatillo", descripcion: "Tomatillo fresco con jalapeño y cilantro", precio: 75, emoji: "🥬", categoria: "Verdes", picante: 3, disponible: true, tag: "Nuevo" },
  { id: 3, nombre: "Salsa mango habanero", descripcion: "Dulce tropical con golpe de habanero", precio: 95, emoji: "🥭", categoria: "Dulces", picante: 4, disponible: true, tag: "Popular" },
  { id: 4, nombre: "Salsa negra ahumada", descripcion: "Chiles mulato y ancho ahumados lento", precio: 110, emoji: "🔥", categoria: "Ahumadas", picante: 4, disponible: true },
  { id: 5, nombre: "Salsa de guayaba", descripcion: "Frutal y ligeramente picante", precio: 85, emoji: "🍐", categoria: "Dulces", picante: 2, disponible: true, tag: "Nuevo" },
  { id: 6, nombre: "Salsa macha de cacahuate", descripcion: "Aceite, cacahuate y chile seco", precio: 120, emoji: "🥜", categoria: "Ahumadas", picante: 3, disponible: true },
]

// ===== RUTAS DE LA API =====

// GET todos los productos
app.get("/api/productos", (req, res) => {
  res.json({
    ok: true,
    data: productos.filter(p => p.disponible)
  })
})

// GET un producto por id
app.get("/api/productos/:id", (req, res) => {
  const producto = productos.find(p => p.id === Number(req.params.id))
  if (!producto) {
    res.status(404).json({ ok: false, mensaje: "Producto no encontrado" })
    return
  }
  res.json({ ok: true, data: producto })
})

// POST crear producto nuevo
app.post("/api/productos", (req, res) => {
  const nuevo: Producto = {
    id: productos.length + 1,
    ...req.body
  }
  productos.push(nuevo)
  res.status(201).json({ ok: true, data: nuevo })
})

// Ruta raíz para verificar que el servidor vive
app.get("/", (req, res) => {
  res.json({ mensaje: "🌶️ Bazarín API corriendo!" })
})

app.listen(PORT, () => {
  console.log(`\n🌶️  Bazarín API corriendo en http://localhost:${PORT}`)
  console.log(`📦  Productos disponibles: ${productos.length}`)
})