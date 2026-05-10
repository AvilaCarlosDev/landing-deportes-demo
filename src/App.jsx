import { useMemo, useState } from 'react'

const WHATSAPP_URL = 'https://wa.me/584120000000'

const filters = ['Todos', 'Running', 'Training', 'Fútbol', 'Basket', 'Accesorios']

const categories = [
  {
    name: 'Running',
    eyebrow: 'Velocidad + resistencia',
    img: 'https://images.unsplash.com/photo-1552674605-5d226a5cfb90?w=1000&q=85&fit=crop',
    stat: '42 modelos',
    featured: true,
  },
  {
    name: 'Training',
    eyebrow: 'Fuerza + movilidad',
    img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1000&q=85&fit=crop',
    stat: '36 piezas',
    featured: true,
  },
  {
    name: 'Fútbol',
    eyebrow: 'Cancha + precisión',
    img: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=85&fit=crop',
    stat: '24 kits',
  },
  {
    name: 'Basket',
    eyebrow: 'Salto + soporte',
    img: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800&q=85&fit=crop',
    stat: '18 drops',
  },
]

const products = [
  {
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=85&fit=crop',
    name: 'AeroPulse Runner Pro',
    category: 'Running',
    price: 89,
    oldPrice: 110,
    tag: '-20%',
    rating: '4.9',
  },
  {
    img: 'https://images.unsplash.com/photo-1518458028785-8fbcd101ebb9?w=900&q=85&fit=crop',
    name: 'FlexMove Training Leggings',
    category: 'Training',
    price: 32,
    tag: 'Nuevo',
    rating: '4.8',
  },
  {
    img: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=900&q=85&fit=crop',
    name: 'Morral Training Pro 28L',
    category: 'Accesorios',
    price: 45,
    oldPrice: 60,
    tag: '-25%',
    rating: '4.7',
  },
  {
    img: 'https://images.unsplash.com/photo-1584735935682-2f2b69dff9d2?w=900&q=85&fit=crop',
    name: 'PowerGrip Elite Gloves',
    category: 'Training',
    price: 18,
    tag: 'Top',
    rating: '4.9',
  },
  {
    img: 'https://images.unsplash.com/photo-1520698108819-77844014ea84?w=900&q=85&fit=crop',
    name: 'HydroSport Thermal Bottle',
    category: 'Accesorios',
    price: 22,
    rating: '4.6',
  },
  {
    img: 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=900&q=85&fit=crop',
    name: 'DryTech Performance Tee',
    category: 'Training',
    price: 25,
    oldPrice: 35,
    tag: '-30%',
    rating: '4.8',
  },
  {
    img: 'https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=900&q=85&fit=crop',
    name: 'Court Air Basketball Pro',
    category: 'Basket',
    price: 95,
    rating: '4.7',
  },
  {
    img: 'https://images.unsplash.com/photo-1591195853828-11db79442529?w=900&q=85&fit=crop',
    name: 'RunFlow 2-in-1 Shorts',
    category: 'Running',
    price: 28,
    tag: 'Nuevo',
    rating: '4.8',
  },
]

const benefits = [
  { value: '24h', title: 'Despacho rápido', desc: 'Entrega nacional coordinada por WhatsApp.' },
  { value: '100%', title: 'Original garantizado', desc: 'Productos verificados, sin réplicas ni sorpresas.' },
  { value: '30d', title: 'Cambio de talla', desc: 'Cambios simples si necesitas ajustar modelo o talla.' },
]

const promos = [
  { code: 'RUN20', title: 'Running drop', desc: '20% OFF en calzado seleccionado', accent: 'from-sky-400 to-cyan-300' },
  { code: 'GYM40', title: 'Gym week', desc: 'Hasta 40% OFF en ropa técnica', accent: 'from-orange-400 to-amber-300' },
  { code: 'PACK2X1', title: 'Accesorios', desc: 'Combos 2x1 para entrenar diario', accent: 'from-violet-400 to-fuchsia-300' },
]

function App() {
  const [activeFilter, setActiveFilter] = useState('Todos')

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'Todos') return products
    return products.filter((product) => product.category === activeFilter)
  }, [activeFilter])

  return (
    <div className="min-h-screen bg-[#f4f7fb] text-slate-950 antialiased">
      <div className="bg-slate-950 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-8 gap-y-2 px-5 py-3 md:justify-between">
          <span>Envíos a toda Venezuela</span>
          <span>Compra asistida por WhatsApp</span>
          <span>Cambios simples por talla</span>
        </div>
      </div>

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center gap-4 px-5 lg:px-8">
          <a href="#inicio" className="flex shrink-0 items-center gap-3" aria-label="SportZone Pro inicio">
            <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-lg font-black text-cyan-300 shadow-xl shadow-slate-950/10">SZ</span>
            <span>
              <span className="block text-lg font-black tracking-tight">SportZone Pro</span>
              <span className="block text-xs font-bold uppercase tracking-[0.16em] text-slate-400">Performance Store</span>
            </span>
          </a>

          <div className="hidden flex-1 items-center rounded-full border border-slate-200 bg-slate-50 px-4 py-2.5 transition focus-within:border-cyan-400 focus-within:bg-white lg:flex">
            <span className="text-slate-400">⌕</span>
            <input
              type="text"
              aria-label="Buscar productos"
              placeholder="Buscar zapatos, ropa, accesorios..."
              className="w-full bg-transparent px-3 text-sm font-semibold text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button className="rounded-full bg-slate-950 px-5 py-2 text-xs font-black uppercase tracking-wide text-white transition hover:bg-cyan-500 hover:text-slate-950">
              Buscar
            </button>
          </div>

          <nav className="hidden items-center gap-7 text-sm font-black text-slate-600 lg:flex">
            <a href="#categorias" className="transition hover:text-cyan-600">Categorías</a>
            <a href="#productos" className="transition hover:text-cyan-600">Productos</a>
            <a href="#ofertas" className="transition hover:text-cyan-600">Ofertas</a>
            <a href="#club" className="transition hover:text-cyan-600">Club</a>
          </nav>

          <div className="ml-auto flex items-center gap-2 lg:ml-0">
            <a href={WHATSAPP_URL} className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-black text-slate-800 transition hover:border-cyan-400 hover:text-cyan-700 sm:inline-flex">
              WhatsApp
            </a>
            <a href="#productos" className="relative grid h-11 w-11 place-items-center rounded-full bg-slate-950 text-white transition hover:bg-cyan-500 hover:text-slate-950" aria-label="Ver carrito">
              🛒
              <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-cyan-300 text-[10px] font-black text-slate-950">3</span>
            </a>
          </div>
        </div>
      </header>

      <main>
        <section id="inicio" className="relative isolate overflow-hidden bg-slate-950">
          <img
            src="https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1900&q=85&fit=crop"
            alt="Atletas entrenando en una pista deportiva"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
          />
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_74%_18%,rgba(34,211,238,.42),transparent_26%),linear-gradient(115deg,#020617_0%,rgba(2,6,23,.96)_42%,rgba(15,23,42,.42)_100%)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f4f7fb] to-transparent" />

          <div className="mx-auto grid min-h-[720px] max-w-7xl items-center gap-12 px-5 py-16 lg:grid-cols-[1.02fr_.98fr] lg:px-8">
            <div className="max-w-3xl pt-8 text-white">
              <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.22em] text-cyan-200 backdrop-blur">
                Nueva colección 2026 · Venezuela
              </div>
              <h1 className="text-balance text-5xl font-black leading-[0.92] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Equipamiento deportivo con pinta de alto rendimiento
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70 sm:text-xl">
                Calzado, ropa técnica y accesorios originales para entrenar mejor, comprar más fácil y recibir asesoría directa antes de pagar.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#productos" className="inline-flex items-center justify-center rounded-full bg-cyan-300 px-8 py-4 text-base font-black text-slate-950 shadow-2xl shadow-cyan-400/20 transition hover:-translate-y-0.5 hover:bg-white">
                  Ver productos destacados
                </a>
                <a href={WHATSAPP_URL} className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-black text-white backdrop-blur transition hover:bg-white/15">
                  Pedir asesoría por WhatsApp
                </a>
              </div>

              <div className="mt-12 grid max-w-xl grid-cols-3 overflow-hidden rounded-[2rem] border border-white/10 bg-white/10 backdrop-blur-xl">
                {[
                  ['500+', 'productos'],
                  ['24h', 'despacho'],
                  ['4.9★', 'valoración'],
                ].map(([value, label]) => (
                  <div key={label} className="border-r border-white/10 p-5 last:border-r-0">
                    <strong className="block text-2xl font-black">{value}</strong>
                    <span className="text-[11px] font-black uppercase tracking-wide text-white/45">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden min-h-[560px] lg:block">
              <div className="absolute right-0 top-8 w-[22rem] rotate-2 rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur-xl">
                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900&q=90&fit=crop"
                  alt="Zapatos running rojos"
                  className="h-72 w-full rounded-[1.5rem] object-cover"
                />
                <div className="p-4 text-white">
                  <div className="mb-2 flex items-center justify-between text-xs font-black uppercase tracking-wide text-cyan-200">
                    <span>Drop recomendado</span>
                    <span>4.9 ★</span>
                  </div>
                  <h2 className="text-2xl font-black tracking-tight">AeroPulse Runner Pro</h2>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-3xl font-black">$89</span>
                    <span className="rounded-full bg-cyan-300 px-3 py-1 text-xs font-black text-slate-950">-20%</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-14 left-5 max-w-xs -rotate-2 rounded-[2rem] border border-white/10 bg-slate-950/80 p-6 text-white shadow-2xl backdrop-blur-xl">
                <p className="text-sm font-semibold leading-6 text-white/68">Confirma talla, disponibilidad y envío antes de comprar. Ideal para demo comercial.</p>
                <a href={WHATSAPP_URL} className="mt-5 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200">
                  Hablar con asesor
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="categorias" className="py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">Compra por disciplina</p>
                <h2 className="mt-3 max-w-3xl text-4xl font-black tracking-tight sm:text-5xl">Una estructura visual más premium y fácil de vender</h2>
              </div>
              <p className="max-w-md text-base leading-7 text-slate-500">Categorías limpias, con imágenes fuertes, copy corto y recorrido claro hacia productos.</p>
            </div>

            <div className="grid gap-5 md:grid-cols-4">
              {categories.map((cat) => (
                <a
                  key={cat.name}
                  href="#productos"
                  className={`group relative overflow-hidden rounded-[2rem] bg-slate-950 shadow-sm ${cat.featured ? 'min-h-[420px] md:col-span-2' : 'min-h-[280px]'}`}
                  onClick={() => setActiveFilter(cat.name)}
                >
                  <img src={cat.img} alt={cat.name} className="absolute inset-0 h-full w-full object-cover opacity-82 transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent" />
                  <div className="absolute left-5 top-5 rounded-full bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white/75 backdrop-blur">
                    {cat.stat}
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                    <p className="mb-2 text-xs font-black uppercase tracking-[0.2em] text-cyan-200">{cat.eyebrow}</p>
                    <div className="flex items-end justify-between gap-5">
                      <h3 className="text-3xl font-black tracking-tight">{cat.name}</h3>
                      <span className="rounded-full bg-white/15 px-4 py-2 text-xs font-black backdrop-blur transition group-hover:bg-cyan-300 group-hover:text-slate-950">Explorar</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        <section id="productos" className="bg-white py-24">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-[0.22em] text-cyan-700">Catálogo destacado</p>
                <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Productos listos para comprar</h2>
              </div>
              <a href={WHATSAPP_URL} className="inline-flex w-fit rounded-full bg-slate-950 px-6 py-3 text-sm font-black text-white transition hover:bg-cyan-500 hover:text-slate-950">
                Pedir catálogo completo
              </a>
            </div>

            <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-black transition ${activeFilter === filter ? 'border-slate-950 bg-slate-950 text-white' : 'border-slate-200 bg-white text-slate-500 hover:border-cyan-400 hover:text-cyan-700'}`}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <article key={product.name} className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-2xl hover:shadow-slate-950/10">
                  <div className="relative aspect-square overflow-hidden bg-slate-100">
                    <img src={product.img} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                    {product.tag && (
                      <span className={`absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-black ${product.tag.includes('%') ? 'bg-orange-300 text-slate-950' : 'bg-cyan-300 text-slate-950'}`}>
                        {product.tag}
                      </span>
                    )}
                    <button className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-slate-950 shadow-sm backdrop-blur transition hover:bg-slate-950 hover:text-white" aria-label={`Guardar ${product.name}`}>
                      ♡
                    </button>
                  </div>
                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between gap-3 text-xs font-black uppercase tracking-wide text-slate-400">
                      <span>{product.category}</span>
                      <span className="text-amber-500">★ {product.rating}</span>
                    </div>
                    <h3 className="min-h-14 text-lg font-black leading-7 tracking-tight">{product.name}</h3>
                    <div className="mt-5 flex items-end justify-between gap-4">
                      <div>
                        <span className="text-3xl font-black">${product.price}</span>
                        {product.oldPrice && <span className="ml-2 text-sm font-bold text-slate-400 line-through">${product.oldPrice}</span>}
                      </div>
                      <a href={WHATSAPP_URL} className="rounded-full bg-cyan-300 px-4 py-2 text-sm font-black text-slate-950 transition hover:bg-slate-950 hover:text-white">
                        Comprar
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-950 py-18 text-white">
          <div className="mx-auto grid max-w-7xl gap-4 px-5 py-20 md:grid-cols-3 lg:px-8">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="rounded-[1.75rem] border border-white/10 bg-white/[0.04] p-7 backdrop-blur transition hover:border-cyan-300/50 hover:bg-white/[0.07]">
                <span className="mb-8 block text-4xl font-black tracking-tight text-cyan-300">{benefit.value}</span>
                <h3 className="text-xl font-black tracking-tight">{benefit.title}</h3>
                <p className="mt-3 text-sm leading-6 text-white/55">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="ofertas" className="relative overflow-hidden bg-white py-24">
          <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-200/40 blur-3xl" />
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-sm font-black uppercase tracking-[0.22em] text-orange-500">Ofertas activas</p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">Promos claras para convertir visitas en ventas</h2>
              <p className="mt-5 text-lg leading-8 text-slate-500">Cupones simples, visualmente fuertes y con CTA directo a WhatsApp.</p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {promos.map((promo) => (
                <article key={promo.code} className="relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white shadow-2xl shadow-slate-950/10">
                  <div className={`absolute -right-12 -top-12 h-44 w-44 rounded-full bg-gradient-to-br ${promo.accent} opacity-70 blur-2xl`} />
                  <div className="relative">
                    <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-black uppercase tracking-[0.18em] text-white/70">{promo.title}</span>
                    <h3 className="mt-8 text-4xl font-black tracking-tight">{promo.code}</h3>
                    <p className="mt-4 min-h-14 text-base leading-7 text-white/60">{promo.desc}</p>
                    <a href={WHATSAPP_URL} className="mt-8 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-cyan-200">
                      Usar cupón
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="club" className="bg-[#f4f7fb] px-5 py-24 lg:px-8">
          <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-950 text-white shadow-2xl shadow-slate-950/20 lg:grid-cols-[1.08fr_.92fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <p className="text-sm font-black uppercase tracking-[0.24em] text-cyan-200">Club SportZone</p>
              <h2 className="mt-4 max-w-2xl text-4xl font-black tracking-tight sm:text-5xl">Una sección final fuerte para capturar leads</h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/70">Únete para recibir drops, descuentos y asesoría personalizada. En una tienda real, esto alimenta WhatsApp, email o CRM.</p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <input type="email" placeholder="Tu correo electrónico" aria-label="Correo electrónico" className="min-h-14 flex-1 rounded-full border border-white/15 bg-white/10 px-6 text-white outline-none placeholder:text-white/50 focus:border-cyan-200" />
                <button className="min-h-14 rounded-full bg-cyan-300 px-8 text-sm font-black text-slate-950 transition hover:bg-white">Unirme</button>
              </div>
            </div>
            <div className="relative min-h-[360px] bg-slate-950">
              <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=1000&q=85&fit=crop" alt="Persona entrenando con ropa deportiva" className="absolute inset-0 h-full w-full object-cover opacity-70" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
              <a href={WHATSAPP_URL} className="absolute bottom-8 left-8 right-8 rounded-full bg-cyan-300 px-6 py-4 text-center text-sm font-black text-slate-950 transition hover:bg-white">
                Comprar por WhatsApp
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-14">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-11 w-11 place-items-center rounded-2xl bg-slate-950 text-sm font-black text-cyan-300">SZ</span>
              <div>
                <span className="block text-lg font-black">SportZone Pro</span>
                <span className="text-xs font-semibold text-slate-500">Performance store</span>
              </div>
            </div>
            <p className="mt-5 max-w-md text-sm leading-6 text-slate-500">Tienda deportiva demo con catálogo filtrable, ofertas, captura de leads y compra asistida por WhatsApp.</p>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Categorías</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-500">
              <li><a href="#categorias" className="hover:text-cyan-700">Running</a></li>
              <li><a href="#categorias" className="hover:text-cyan-700">Training</a></li>
              <li><a href="#categorias" className="hover:text-cyan-700">Fútbol</a></li>
              <li><a href="#ofertas" className="hover:text-cyan-700">Ofertas</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-black uppercase tracking-wide">Contacto</h3>
            <ul className="mt-5 space-y-3 text-sm font-semibold text-slate-500">
              <li>Punto Fijo, Falcón</li>
              <li><a href={WHATSAPP_URL} className="hover:text-cyan-700">WhatsApp: +58 412-000-0000</a></li>
              <li>Atención: 9:00 AM - 7:00 PM</li>
            </ul>
          </div>
        </div>
        <div className="mx-auto mt-12 max-w-7xl border-t border-slate-200 px-5 pt-7 text-center text-xs font-semibold text-slate-400 lg:px-8">
          © 2026 SportZone Pro. Demo creada por Carlos Avila - Developer 🇻🇪
        </div>
      </footer>
    </div>
  )
}

export default App
