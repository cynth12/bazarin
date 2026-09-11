"use client"

import { useState } from "react"

interface Producto {
  id: number
  nombre: string
  descripcion: string
  precio: number
  emoji: string
  color: string
  picante: number
  tag?: string
}

const productos: Producto[] = [
  { id: 1, nombre: "Salsa roja de árbol", descripcion: "Chipotles y chiles de árbol tostados", precio: 89, emoji: "🌶️", color: "#FFF0E6", picante: 5, tag: "Popular" },
  { id: 2, nombre: "Salsa verde tomatillo", descripcion: "Tomatillo fresco con jalapeño y cilantro", precio: 75, emoji: "🥬", color: "#F0FAF0", picante: 3, tag: "Nuevo" },
  { id: 3, nombre: "Salsa mango habanero", descripcion: "Dulce tropical con golpe de habanero", precio: 95, emoji: "🥭", color: "#FFF8E6", picante: 4, tag: "Popular" },
  { id: 4, nombre: "Salsa negra ahumada", descripcion: "Chiles mulato y ancho ahumados lento", precio: 110, emoji: "🔥", color: "#F5F0EB", picante: 4, tag: "" },
  { id: 5, nombre: "Salsa de guayaba", descripcion: "Frutal y ligeramente picante", precio: 85, emoji: "🍐", color: "#FFF0F5", picante: 2, tag: "Nuevo" },
  { id: 6, nombre: "Salsa macha de cacahuate", descripcion: "Aceite, cacahuate y chile seco", precio: 120, emoji: "🥜", color: "#F5EFE6", picante: 3, tag: "" },
]

export default function Home() {
  const [carrito, setCarrito] = useState<{ [id: number]: number }>({})
  const [carritoAbierto, setCarritoAbierto] = useState(false)

  function agregar(id: number) {
    setCarrito(prev => ({ ...prev, [id]: (prev[id] || 0) + 1 }))
  }

  function quitar(id: number) {
    setCarrito(prev => {
      const nuevo = { ...prev }
      if (nuevo[id] > 1) nuevo[id]--
      else delete nuevo[id]
      return nuevo
    })
  }

  const totalItems = Object.values(carrito).reduce((a, b) => a + b, 0)
  const totalPesos = productos.reduce((total, p) => total + (carrito[p.id] || 0) * p.precio, 0)
  const productosEnCarrito = productos.filter(p => carrito[p.id] > 0)

  return (
    <main style={{ minHeight: "100vh", backgroundColor: "#FDF6EE", fontFamily: "system-ui, sans-serif" }}>

      {/* Navbar */}
      <nav style={{
        backgroundColor: "#FDF6EE",
        borderBottom: "1px solid #F0DFC8",
        padding: "16px 24px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        position: "sticky",
        top: 0,
        zIndex: 50
      }}>
        <div>
          <span style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-1px", color: "#2C1810" }}>
            bazar<span style={{ color: "#C84B11" }}>ín</span>
          </span>
          <span style={{ fontSize: 11, color: "#B08060", marginLeft: 8, fontWeight: 400, letterSpacing: "0.05em" }}>
            salsas artesanales
          </span>
        </div>
        <button
          onClick={() => setCarritoAbierto(!carritoAbierto)}
          style={{
            display: "flex", alignItems: "center", gap: 8,
            padding: "8px 16px", borderRadius: 100,
            border: "1.5px solid #2C1810",
            backgroundColor: totalItems > 0 ? "#2C1810" : "transparent",
            color: totalItems > 0 ? "#FDF6EE" : "#2C1810",
            fontSize: 13, fontWeight: 600, cursor: "pointer"
          }}>
          🛒 Carrito
          {totalItems > 0 && (
            <span style={{
              backgroundColor: "#C84B11", color: "white",
              borderRadius: "50%", width: 20, height: 20,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 11, fontWeight: 700
            }}>{totalItems}</span>
          )}
        </button>
      </nav>

      {/* Banner envío */}
      <div style={{ backgroundColor: "#2C1810", color: "#F0DFC8", textAlign: "center", padding: "8px", fontSize: 12, letterSpacing: "0.05em" }}>
        🚚 ENVÍO GRATIS en pedidos mayores a <strong style={{ color: "#F5C07A" }}>$399</strong> · Entrega en 24-48 hrs
      </div>

      {/* Hero */}
      <div style={{ padding: "32px 24px 24px", backgroundColor: "#FDF6EE" }}>
        <p style={{ fontSize: 11, color: "#B08060", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
          Hechas en casa · Sin conservadores
        </p>
        <h2 style={{ fontSize: 36, fontWeight: 800, color: "#2C1810", lineHeight: 1.1, margin: 0 }}>
          Salsas que<br />
          <span style={{ color: "#C84B11" }}>enamoran</span> 🌶️
        </h2>
        <p style={{ color: "#8C6040", marginTop: 8, fontSize: 14 }}>
          Directas del productor · Recetas de generación en generación
        </p>
      </div>

      {/* Productos */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, padding: "0 16px 120px" }}>
        {productos.map(producto => (
          <div key={producto.id} style={{
            backgroundColor: "white",
            borderRadius: 20,
            border: "1px solid #F0DFC8",
            overflow: "hidden"
          }}>
            {/* Imagen */}
            <div style={{
              backgroundColor: producto.color,
              height: 120,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: 48, position: "relative"
            }}>
              {producto.emoji}
              {producto.tag && (
                <span style={{
                  position: "absolute", top: 8, left: 8,
                  backgroundColor: producto.tag === "Popular" ? "#C84B11" : "#2C7A3C",
                  color: "white", fontSize: 10, fontWeight: 700,
                  padding: "3px 8px", borderRadius: 100, letterSpacing: "0.05em"
                }}>{producto.tag}</span>
              )}
            </div>

            {/* Info */}
            <div style={{ padding: "12px" }}>
              <p style={{ fontWeight: 700, fontSize: 13, color: "#2C1810", margin: 0, lineHeight: 1.3 }}>
                {producto.nombre}
              </p>
              <p style={{ fontSize: 11, color: "#A08060", marginTop: 4, lineHeight: 1.4 }}>
                {producto.descripcion}
              </p>

              {/* Picante */}
              <div style={{ display: "flex", gap: 2, marginTop: 6 }}>
                {[1,2,3,4,5].map(i => (
                  <div key={i} style={{
                    width: 16, height: 4, borderRadius: 2,
                    backgroundColor: i <= producto.picante ? "#C84B11" : "#F0DFC8"
                  }} />
                ))}
              </div>

              {/* Precio y botón */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
                <span style={{ fontWeight: 800, fontSize: 16, color: "#2C1810" }}>${producto.precio}</span>
                {carrito[producto.id] ? (
                  <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <button onClick={() => quitar(producto.id)} style={{
                      width: 28, height: 28, borderRadius: "50%",
                      border: "1.5px solid #E0C8B0", backgroundColor: "transparent",
                      cursor: "pointer", fontSize: 16, color: "#2C1810",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>−</button>
                    <span style={{ fontWeight: 700, fontSize: 14, minWidth: 16, textAlign: "center" }}>
                      {carrito[producto.id]}
                    </span>
                    <button onClick={() => agregar(producto.id)} style={{
                      width: 28, height: 28, borderRadius: "50%",
                      backgroundColor: "#C84B11", border: "none",
                      cursor: "pointer", fontSize: 16, color: "white",
                      display: "flex", alignItems: "center", justifyContent: "center"
                    }}>+</button>
                  </div>
                ) : (
                  <button onClick={() => agregar(producto.id)} style={{
                    backgroundColor: "#2C1810", color: "#FDF6EE",
                    border: "none", borderRadius: 100,
                    padding: "6px 14px", fontSize: 12, fontWeight: 600,
                    cursor: "pointer"
                  }}>+ Agregar</button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Panel carrito */}
      {carritoAbierto && totalItems > 0 && (
        <div style={{
          position: "fixed", top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: "rgba(0,0,0,0.5)", zIndex: 100
        }} onClick={() => setCarritoAbierto(false)}>
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            backgroundColor: "#FDF6EE", borderRadius: "24px 24px 0 0",
            padding: "24px", maxHeight: "80vh", overflowY: "auto"
          }} onClick={e => e.stopPropagation()}>
            <h3 style={{ fontWeight: 800, fontSize: 20, color: "#2C1810", marginBottom: 16 }}>
              Tu pedido 🌶️
            </h3>
            {productosEnCarrito.map(p => (
              <div key={p.id} style={{
                display: "flex", alignItems: "center", gap: 12,
                padding: "12px 0", borderBottom: "1px solid #F0DFC8"
              }}>
                <span style={{ fontSize: 28 }}>{p.emoji}</span>
                <div style={{ flex: 1 }}>
                  <p style={{ fontSize: 13, fontWeight: 600, color: "#2C1810", margin: 0 }}>{p.nombre}</p>
                  <p style={{ fontSize: 12, color: "#A08060", margin: 0 }}>× {carrito[p.id]}</p>
                </div>
                <span style={{ fontWeight: 700, color: "#C84B11" }}>${p.precio * carrito[p.id]}</span>
              </div>
            ))}
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 16, paddingTop: 8 }}>
              <span style={{ fontWeight: 700, fontSize: 16, color: "#2C1810" }}>Total</span>
              <span style={{ fontWeight: 800, fontSize: 20, color: "#C84B11" }}>${totalPesos}</span>
            </div>
            <button style={{
              width: "100%", backgroundColor: "#2C1810", color: "#FDF6EE",
              border: "none", borderRadius: 16, padding: "16px",
              fontSize: 16, fontWeight: 700, cursor: "pointer", marginTop: 16
            }}>Ir a pagar →</button>
          </div>
        </div>
      )}

      {/* Carrito flotante */}
      {totalItems > 0 && !carritoAbierto && (
        <div style={{
          position: "fixed", bottom: 0, left: 0, right: 0,
          backgroundColor: "#2C1810", padding: "16px 24px",
          display: "flex", justifyContent: "space-between", alignItems: "center"
        }}>
          <div>
            <p style={{ color: "#B08060", fontSize: 12, margin: 0 }}>{totalItems} producto{totalItems > 1 ? "s" : ""}</p>
            <p style={{ color: "#FDF6EE", fontWeight: 800, fontSize: 22, margin: 0 }}>${totalPesos}</p>
          </div>
          <button
            onClick={() => setCarritoAbierto(true)}
            style={{
              backgroundColor: "#C84B11", color: "white",
              border: "none", borderRadius: 14, padding: "12px 24px",
              fontSize: 15, fontWeight: 700, cursor: "pointer"
            }}>Ver pedido →</button>
        </div>
      )}

    </main>
  )
}