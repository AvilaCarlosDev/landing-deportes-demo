import { useState } from 'react'

function App() {
  const productos = [
    { img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80', name: 'Zapatos Running AeroPulse', price: 89, oldPrice: 110, tag: '-20%' },
    { img: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=500&q=80', name: 'Leggings FlexMove', price: 32, tag: 'Nuevo' },
    { img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80', name: 'Morral Training Pro', price: 45, oldPrice: 60, tag: '-25%' },
    { img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=500&q=80', name: 'Guantes PowerGrip', price: 18, tag: 'Más vendido' },
    { img: 'https://images.unsplash.com/photo-1520698108819-77844014ea84?w=500&q=80', name: 'Termo HydroSport', price: 22 },
    { img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=500&q=80', name: 'Franela DryTech', price: 25, oldPrice: 35, tag: '-30%' },
    { img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=500&q=80', name: 'Zapatos Basketball Pro', price: 95 },
    { img: 'https://images.unsplash.com/photo-1591195853828-11db79442529?w=500&q=80', name: 'Shorts Running Elite', price: 28, tag: 'Nuevo' },
  ]

  const categorias = [
    { name: 'Running', icon: '🏃', img: 'https://images.unsplash.com/photo-1552674605-5d226a5cfb90?w=400&q=80' },
    { name: 'Gym', icon: '💪', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&q=80' },
    { name: 'Fútbol', icon: '⚽', img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=400&q=80' },
    { name: 'Pádel', icon: '🎾', img: 'https://images.unsplash.com/photo-1626245341592-d2a1f6f1e3f3?w=400&q=80' },
    { name: 'Básquet', icon: '🏀', img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80' },
    { name: 'Yoga', icon: '🧘', img: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=400&q=80' },
    { name: 'Natación', icon: '🏊', img: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?w=400&q=80' },
    { name: 'Montaña', icon: '🏔️', img: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80' },
  ]

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Top Bar */}
      <div className="bg-gray-900 text-white py-3 px-6 lg:px-12 text-sm">
        <div className="max-w-[1920px] mx-auto flex flex-wrap justify-center lg:justify-between gap-4">
          <span>🚚 Envíos nacionales desde $2</span>
          <span>✅ Productos 100% originales</span>
          <span>📞 Atención: 9:00 AM - 7:00 PM</span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 left-0 right-0 z-50 bg-white shadow-lg border-b-4 border-blue-600">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12 py-5">
          <div className="flex justify-between items-center gap-8">
            <div className="flex items-center gap-3">
              <span className="text-4xl">⚡</span>
              <div>
                <span className="text-2xl font-black text-gray-900">SportZone Pro</span>
                <p className="text-xs text-gray-500">Supera tu próximo reto</p>
              </div>
            </div>

            <div className="hidden lg:flex flex-1 max-w-xl">
              <input type="text" placeholder="Buscar zapatos, ropa, accesorios..." className="w-full bg-gray-100 border-2 border-gray-200 rounded-l-xl px-6 py-3 outline-none focus:border-blue-600 transition" />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 rounded-r-xl font-bold transition">🔍</button>
            </div>

            <nav className="hidden lg:flex items-center gap-6">
              <a href="#hombre" className="text-sm font-bold hover:text-blue-600 transition">Hombre</a>
              <a href="#mujer" className="text-sm font-bold hover:text-blue-600 transition">Mujer</a>
              <a href="#ninos" className="text-sm font-bold hover:text-blue-600 transition">Niños</a>
              <a href="#ofertas" className="text-sm font-bold text-red-600 hover:text-red-700 transition">Ofertas</a>
            </nav>

            <div className="flex items-center gap-4">
              <a href="#" className="text-2xl hover:scale-110 transition">👤</a>
              <a href="#" className="text-2xl hover:scale-110 transition relative">
                🛒
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">3</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] lg:min-h-[80vh] flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-black">
          <div className="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1600&q=80" alt="" className="w-full h-full object-cover opacity-40" />
          </div>
          <div className="relative z-10 max-w-[1920px] mx-auto px-6 lg:px-12 py-24 w-full">
            <div className="max-w-3xl">
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight">
                Equípate para superar<br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">tu próximo reto</span>
              </h1>
              <p className="text-xl text-white/80 mb-10">
                Zapatos, ropa deportiva, accesorios y nutrición para cada disciplina. Productos 100% originales.
              </p>
              <div className="flex flex-wrap gap-5">
                <a href="#productos" className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition shadow-xl">
                  Comprar ahora
                </a>
                <a href="#ofertas" className="bg-white/20 backdrop-blur-md hover:bg-white/30 text-white px-10 py-5 rounded-xl font-bold text-lg transition border-2 border-white/50">
                  Ver ofertas 🔥
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Categorías */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Explora por deporte</h2>
              <p className="text-lg text-gray-600">Encuentra lo que necesitas para tu disciplina</p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {categorias.map((cat, i) => (
                <a key={i} href="#" className="group cursor-pointer">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-5">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="text-4xl mb-3">{cat.icon}</div>
                      <h3 className="text-xl font-black text-white">{cat.name}</h3>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Productos */}
        <section id="productos" className="py-24 bg-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-4">Productos destacados</h2>
              <p className="text-lg text-gray-600">Lo último en equipamiento deportivo</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {productos.map((prod, i) => (
                <article key={i} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition border border-gray-100">
                  <div className="relative aspect-square overflow-hidden">
                    <img src={prod.img} alt={prod.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
                    {prod.tag && (
                      <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-black ${
                        prod.tag.includes('%') ? 'bg-red-600 text-white' : 'bg-green-600 text-white'
                      }`}>
                        {prod.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-3 line-clamp-2">{prod.name}</h3>
                    <div className="flex items-center gap-3 mb-5">
                      <span className="text-3xl font-black text-blue-600">${prod.price}</span>
                      {prod.oldPrice && <span className="text-lg text-gray-400 line-through">${prod.oldPrice}</span>}
                    </div>
                    <button className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white py-3.5 rounded-xl font-bold transition">
                      Agregar al carrito
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Beneficios */}
        <section className="py-20 bg-gray-900 text-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: '✅', title: 'Productos originales', desc: 'Garantía de autenticidad' },
                { icon: '🚚', title: 'Envíos a todo el país', desc: 'Desde $2 a Caracas' },
                { icon: '🔄', title: 'Cambios fáciles', desc: '30 días para cambios' },
                { icon: '💬', title: 'Atención personalizada', desc: 'Expertos deportivos' },
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="text-5xl mb-5">{item.icon}</div>
                  <h3 className="font-bold text-xl mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ofertas */}
        <section id="ofertas" className="py-24 bg-gradient-to-br from-red-600 to-orange-600 text-white">
          <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-black mb-4">🔥 Ofertas especiales</h2>
              <p className="text-white/90 text-lg">Hasta 40% OFF en productos seleccionados</p>
            </div>

            <div className="grid md:grid-cols-3 gap-10">
              {[
                { title: '-20%', desc: 'Zapatos Running', code: 'RUN20' },
                { title: '-40%', desc: 'Ropa de Gym', code: 'GYM40' },
                { title: '2x1', desc: 'Accesorios', code: 'X2' },
              ].map((promo, i) => (
                <div key={i} className="bg-white/20 backdrop-blur-md p-10 rounded-3xl border-2 border-white/30">
                  <h3 className="text-5xl font-black mb-3">{promo.title}</h3>
                  <p className="text-white/90 mb-6 text-lg">{promo.desc}</p>
                  <div className="bg-white text-red-600 px-5 py-3 rounded-xl font-mono font-bold text-lg inline-block">
                    {promo.code}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-24 bg-gray-50">
          <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 mb-6">Únete al equipo</h2>
            <p className="text-lg text-gray-600 mb-10">
              Recibe ofertas exclusivas, lanzamientos y consejos de entrenamiento
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input type="email" placeholder="Tu correo electrónico" className="flex-1 bg-white border-2 border-gray-200 rounded-xl px-6 py-5 outline-none focus:border-blue-600 transition text-lg" />
              <button className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-10 py-5 rounded-xl font-bold text-lg transition">
                Suscribirse
              </button>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-5xl lg:text-6xl font-black bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-8">
              ¿Listo para entrenar?
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              Explora todo el catálogo y encuentra tu equipamiento ideal
            </p>
            <a href="#productos" className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-12 py-6 rounded-xl font-bold text-xl transition shadow-xl">
              Ver ofertas
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-[1920px] mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-4xl">⚡</span>
                <div>
                  <span className="text-2xl font-black">SportZone Pro</span>
                  <p className="text-xs text-gray-400">Supera tu próximo reto</p>
                </div>
              </div>
              <p className="text-gray-400 mb-8 max-w-md">
                Tienda deportiva con productos originales para cada disciplina. Envíos a todo Venezuela.
              </p>
              <div className="flex gap-5">
                <a href="#" className="text-3xl hover:scale-125 transition">📷</a>
                <a href="#" className="text-3xl hover:scale-125 transition">📘</a>
                <a href="#" className="text-3xl hover:scale-125 transition">🎵</a>
              </div>
            </div>

            <div>
              <h3 className="font-black text-lg mb-8">Categorías</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Hombre</a></li>
                <li><a href="#" className="hover:text-white transition">Mujer</a></li>
                <li><a href="#" className="hover:text-white transition">Niños</a></li>
                <li><a href="#" className="hover:text-white transition">Ofertas</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-black text-lg mb-8">Ayuda</h3>
              <ul className="space-y-4 text-gray-400">
                <li><a href="#" className="hover:text-white transition">Envíos</a></li>
                <li><a href="#" className="hover:text-white transition">Cambios</a></li>
                <li><a href="#" className="hover:text-white transition">Tallas</a></li>
                <li><a href="#" className="hover:text-white transition">Contacto</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 SportZone Pro. Hecho con 💚 por Carlos Ávila - Developer 🇻🇪</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
