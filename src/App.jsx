import { useState } from 'react'

function App() {
  // Imágenes reales de Unsplash - Deportes
  const images = {
    hero: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=1200&q=80',
    categorias: {
      futbol: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
      basket: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80',
      fitness: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
      running: 'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&q=80',
      natacion: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80',
      boxeo: 'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
    },
    productos: [
      { img: 'https://images.unsplash.com/photo-1511886929837-354d827aae26?w=400&q=80', name: 'Camiseta Fútbol', price: '$25', category: 'Fútbol' },
      { img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&q=80', name: 'Zapatillas Running', price: '$85', category: 'Running' },
      { img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=400&q=80', name: 'Mancuernas Set', price: '$45', category: 'Fitness' },
      { img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80', name: 'Balón Basket', price: '$35', category: 'Basket' },
    ],
    galeria: [
      'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&q=80',
      'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=600&q=80',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&q=80',
      'https://images.unsplash.com/photo-1452626038306-9aae5e071dd3?w=600&q=80',
      'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=600&q=80',
      'https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=600&q=80',
    ],
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white sticky top-0 z-50 shadow-2xl">
        {/* Top bar */}
        <div className="bg-blue-700 py-2 text-xs">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12 flex justify-between items-center">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              Envíos gratis en compras +$50
            </span>
            <span>📍 Punto Fijo, Falcón</span>
          </div>
        </div>

        {/* Main header */}
        <div className="max-w-[1800px] mx-auto px-6 lg:px-12 py-6">
          <div className="flex items-center justify-between gap-8">
            {/* Logo */}
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-5xl shadow-lg">
                ⚽
              </div>
              <div>
                <h1 className="text-3xl font-black tracking-tight">SPORTS<span className="text-yellow-300">ZONE</span></h1>
                <p className="text-xs text-blue-200">Todo para deportistas</p>
              </div>
            </div>

            {/* Search */}
            <div className="flex-1 max-w-2xl hidden lg:block">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar equipos, ropa, accesorios..."
                  className="w-full bg-white/20 border-2 border-blue-400 rounded-xl px-6 py-4 pl-12 text-white placeholder-blue-200 focus:outline-none focus:border-white transition"
                />
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4">
              <a href="#" className="hidden lg:block text-center">
                <div className="text-2xl">👤</div>
                <div className="text-xs text-blue-200">Cuenta</div>
              </a>
              <a href="#" className="text-center relative">
                <div className="text-2xl">🛒</div>
                <div className="absolute -top-2 -right-2 bg-yellow-400 text-blue-900 text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">3</div>
                <div className="text-xs text-blue-200">Carrito</div>
              </a>
            </div>
          </div>
        </div>

        {/* Nav */}
        <nav className="border-t border-blue-400">
          <div className="max-w-[1800px] mx-auto px-6 lg:px-12">
            <div className="flex gap-8 overflow-x-auto py-4 text-sm font-bold">
              <a href="#inicio" className="whitespace-nowrap hover:text-yellow-300 transition">🏠 Inicio</a>
              <a href="#categorias" className="whitespace-nowrap hover:text-yellow-300 transition">📂 Categorías</a>
              <a href="#productos" className="whitespace-nowrap hover:text-yellow-300 transition">🔥 Productos</a>
              <a href="#galeria" className="whitespace-nowrap hover:text-yellow-300 transition">📸 Galería</a>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section id="inicio" className="relative min-h-[800px] flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img 
            src={images.hero} 
            alt="Atleta corriendo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-indigo-900/80 to-purple-900/90"></div>
        </div>

        <div className="relative z-10 max-w-[1800px] mx-auto px-6 lg:px-12 py-24">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold mb-8">
                🏆 NUEVA COLECCIÓN 2026
              </div>

              <h2 className="text-6xl lg:text-7xl xl:text-8xl font-black text-white mb-6 leading-none">
                SUPERA TUS<br/>
                <span className="text-yellow-300">LÍMITES</span>
              </h2>

              <p className="text-xl text-white/90 mb-10 max-w-xl">
                Equipamiento deportivo profesional para atletas de todos los niveles. 
                Calidad garantizada, precios increíbles.
              </p>

              <div className="flex flex-wrap gap-4 mb-12">
                <a href="#productos" className="bg-yellow-400 hover:bg-yellow-500 text-blue-900 px-10 py-5 rounded-xl font-bold text-lg transition transform hover:scale-105 shadow-xl">
                  🛒 Ver Productos
                </a>
                <a href="#categorias" className="bg-white/20 hover:bg-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg transition border-2 border-white/50">
                  Explorar Categorías
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/30">
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300">500+</div>
                  <div className="text-white/80 text-sm">Productos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300">24h</div>
                  <div className="text-white/80 text-sm">Envíos</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-black text-yellow-300">4.9★</div>
                  <div className="text-white/80 text-sm">Clientes felices</div>
                </div>
              </div>
            </div>

            {/* Hero Sports Images */}
            <div className="relative hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-white/50 shadow-2xl transform -rotate-3">
                    <img src={images.categorias.futbol} alt="Fútbol" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-yellow-400/50 shadow-xl transform rotate-2">
                    <img src={images.categorias.basket} alt="Basketball" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="aspect-[4/3] rounded-3xl overflow-hidden border-4 border-white/50 shadow-xl transform rotate-3">
                    <img src={images.categorias.fitness} alt="Fitness" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square rounded-3xl overflow-hidden border-4 border-purple-400/50 shadow-2xl transform -rotate-2">
                    <img src={images.categorias.running} alt="Running" className="w-full h-full object-cover" />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-6 -right-6 bg-yellow-400 text-blue-900 p-6 rounded-2xl shadow-2xl transform rotate-12">
                <div className="text-4xl font-black">-30%</div>
                <div className="text-sm font-bold">PRIMERA COMPRA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section id="categorias" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-100 text-blue-800 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              📂 Categorías
            </span>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900">Elige Tu Deporte</h2>
            <div className="w-32 h-2 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-8 rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: 'Fútbol', emoji: '⚽', img: images.categorias.futbol, count: '120 productos' },
              { name: 'Basketball', emoji: '🏀', img: images.categorias.basket, count: '85 productos' },
              { name: 'Fitness', emoji: '💪', img: images.categorias.fitness, count: '200 productos' },
              { name: 'Running', emoji: '🏃', img: images.categorias.running, count: '95 productos' },
              { name: 'Natación', emoji: '🏊', img: images.categorias.natacion, count: '60 productos' },
              { name: 'Boxeo', emoji: '🥊', img: images.categorias.boxeo, count: '45 productos' },
            ].map((cat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-4 shadow-lg">
                  <img 
                    src={cat.img} 
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="text-5xl">{cat.emoji}</span>
                      <h3 className="text-2xl font-black text-white">{cat.name}</h3>
                    </div>
                    <span className="text-white/80 text-sm font-bold">{cat.count}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Destacados */}
      <section id="productos" className="py-24 px-6 lg:px-12 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-yellow-400 text-blue-900 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6 animate-pulse">
              🔥 MÁS VENDIDOS
            </span>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900">Productos Estrella</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {images.productos.map((prod, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden relative">
                    <img 
                      src={prod.img} 
                      alt={prod.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-2 rounded-full font-bold text-xs">
                      {prod.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-black text-xl mb-4 text-gray-900">{prod.name}</h3>
                    <div className="flex items-center justify-between">
                      <span className="text-4xl font-black text-blue-600">{prod.price}</span>
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-6 py-3 rounded-xl font-bold transition transform hover:scale-105">
                        🛒
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galería */}
      <section id="galeria" className="py-24 px-6 lg:px-12 bg-white">
        <div className="max-w-[1800px] mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-bold text-sm tracking-widest uppercase mb-6">
              📸 Atletas Reales
            </span>
            <h2 className="text-6xl lg:text-7xl font-black text-gray-900">Galería Deportiva</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {images.galeria.map((img, index) => (
              <div 
                key={index} 
                className={`group overflow-hidden rounded-2xl ${
                  index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''
                } ${
                  index === 5 ? 'lg:col-span-2' : ''
                }`}
              >
                <div className={`relative overflow-hidden ${index === 0 ? 'aspect-square lg:aspect-auto lg:h-full' : 'aspect-[4/3]'}`}>
                  <img 
                    src={img} 
                    alt={`Deporte ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA WhatsApp */}
      <section className="py-24 px-6 lg:px-12 bg-gradient-to-br from-green-500 to-green-600 text-white">
        <div className="max-w-[1200px] mx-auto text-center">
          <span className="text-7xl mb-8 block">💬</span>
          <h2 className="text-5xl lg:text-6xl font-black mb-8">¿Necesitas Asesoría?</h2>
          <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">
            Te ayudamos a elegir el mejor equipo para tu deporte. 
            Escríbenos y recibe recomendación personalizada.
          </p>
          <a href="https://wa.me/584120000000" className="inline-block bg-white hover:bg-gray-100 text-green-600 px-12 py-5 rounded-xl font-black text-lg transition transform hover:scale-105 shadow-2xl">
            📱 Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16 px-6 lg:px-12">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-3xl">⚽</div>
                <div>
                  <h3 className="text-2xl font-black">SPORTS<span className="text-yellow-400">ZONE</span></h3>
                  <p className="text-xs text-gray-400">Todo para deportistas</p>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Equipamiento deportivo profesional para atletas de todos los niveles. 
                Calidad, variedad y los mejores precios.
              </p>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6">Categorías</h4>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-yellow-400 transition">Fútbol</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Basketball</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Fitness</a></li>
                <li><a href="#" className="hover:text-yellow-400 transition">Running</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-black text-lg mb-6">Contacto</h4>
              <ul className="space-y-4 text-gray-400">
                <li>📍 Punto Fijo, Falcón</li>
                <li>📞 0412-000-0000</li>
                <li>✉️ ventas@sportszone.com</li>
                <li>🕒 Lun-Sab: 9AM-7PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            © 2026 SportsZone. Hecho con 💚 por Carlos Ávila
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
