export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      
      {/* Navbar */}
      <nav className="bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-medium">
          Bazar<span className="text-orange-500">ín</span>
          <span className="text-sm font-normal text-gray-400 ml-2">salsas</span>
        </h1>
        <button className="border border-gray-300 rounded-lg px-4 py-2 text-sm flex items-center gap-2 hover:bg-gray-50">
          🛒 Carrito
          <span className="bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
        </button>
      </nav>

      {/* Hero */}
      <div className="bg-orange-50 border-b border-orange-100 px-6 py-6">
        <h2 className="text-2xl font-medium text-gray-800">Salsas artesanales 🌶️</h2>
        <p className="text-gray-500 mt-1">Hechas en casa · Sin conservadores · Directas del productor</p>
      </div>

      {/* Productos */}
      <div className="grid grid-cols-2 gap-4 p-6">
        
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-orange-50 h-24 flex items-center justify-center text-4xl">🌶️</div>
          <div className="p-3">
            <p className="font-medium text-sm">Salsa roja de árbol</p>
            <p className="text-xs text-gray-400 mt-1">Chipotles y chiles de árbol</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-orange-600 font-medium">$89</span>
              <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-orange-600">
                + Agregar
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-green-50 h-24 flex items-center justify-center text-4xl">🥬</div>
          <div className="p-3">
            <p className="font-medium text-sm">Salsa verde tomatillo</p>
            <p className="text-xs text-gray-400 mt-1">Tomatillo y jalapeño fresco</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-orange-600 font-medium">$75</span>
              <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-orange-600">
                + Agregar
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-yellow-50 h-24 flex items-center justify-center text-4xl">🥭</div>
          <div className="p-3">
            <p className="font-medium text-sm">Salsa mango habanero</p>
            <p className="text-xs text-gray-400 mt-1">Dulce con toque picante</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-orange-600 font-medium">$95</span>
              <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-orange-600">
                + Agregar
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 h-24 flex items-center justify-center text-4xl">🔥</div>
          <div className="p-3">
            <p className="font-medium text-sm">Salsa negra ahumada</p>
            <p className="text-xs text-gray-400 mt-1">Chiles mulato y ancho</p>
            <div className="flex justify-between items-center mt-3">
              <span className="text-orange-600 font-medium">$110</span>
              <button className="bg-orange-500 text-white text-xs px-3 py-1 rounded-lg hover:bg-orange-600">
                + Agregar
              </button>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}