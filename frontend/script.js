class AppSidebar extends HTMLElement {
    connectedCallback() {
        const currentPage = document.body.dataset.page;

        const sidebar = document.createElement("aside");
        sidebar.className = "sidebar";

        sidebar.innerHTML = `
            <div class="brand">
                <div class="brand-mark">
                    <svg viewBox="0 0 24 24" fill="none">
                        <path d="M4 20V4l16 16V4"
                            stroke="#06251a"
                            stroke-width="2.6"
                            stroke-linecap="round"
                            stroke-linejoin="round"/>
                    </svg>
                </div>

                <span class="brand-name">INVENTARIO</span>
            </div>

            <nav class="nav-group">

                <a class="nav-item ${currentPage === "dashboard" ? "active" : ""}"
                   href="1_dashboard.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <rect x="3" y="3" width="7" height="9" rx="1.5"/>
                        <rect x="14" y="3" width="7" height="5" rx="1.5"/>
                        <rect x="14" y="12" width="7" height="9" rx="1.5"/>
                        <rect x="3" y="16" width="7" height="5" rx="1.5"/>
                    </svg>
                    Panel de control
                </a>

                <a class="nav-item ${currentPage === "inventory" ? "active" : ""}"
                   href="pages/2_inventory.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <path d="M3 7l9-4 9 4-9 4-9-4z"/>
                        <path d="M3 7v10l9 4 9-4V7"/>
                        <path d="M12 11v10"/>
                    </svg>
                    Inventario
                </a>

                <a class="nav-item ${currentPage === "marketplace" ? "active" : ""}"
                   href="pages/3_marketplace.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <rect x="3" y="3" width="8" height="8" rx="1.5"/>
                        <rect x="13" y="3" width="8" height="8" rx="1.5"/>
                        <rect x="3" y="13" width="8" height="8" rx="1.5"/>
                        <rect x="13" y="13" width="8" height="8" rx="1.5"/>
                    </svg>
                    Marketplace
                </a>

                <a class="nav-item ${currentPage === "orders" ? "active" : ""}"
                   href="pages/4_orders.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <circle cx="9" cy="20" r="1.4"/>
                        <circle cx="18" cy="20" r="1.4"/>
                        <path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6"/>
                    </svg>
                    Pedidos
                </a>

                <a class="nav-item ${currentPage === "shipping" ? "active" : ""}"
                   href="pages/5_shipping.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <rect x="2" y="8" width="12" height="8" rx="1.2"/>
                        <path d="M14 11h4l3 3v2h-7z"/>
                        <circle cx="7" cy="18" r="1.6"/>
                        <circle cx="17.5" cy="18" r="1.6"/>
                    </svg>
                    Envíos
                </a>

                <a class="nav-item ${currentPage === "reports" ? "active" : ""}"
                   href="pages/6_reports.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M12 7v5l3.2 2"/>
                    </svg>
                    Reportes
                </a>

            </nav>

            <nav class="nav-group">

                <a class="nav-item ${currentPage === "settings" ? "active" : ""}"
                   href="pages/7_settings.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.6-1.1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z"/>
                    </svg>
                    Configuración
                </a>

                <a class="nav-item ${currentPage === "activity" ? "active" : ""}"
                   href="pages/8_activity.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <path d="M22 12h-4l-3 8-6-16-3 8H2"/>
                    </svg>
                    Historial de act...
                </a>

                <a class="nav-item ${currentPage === "whats-new" ? "active" : ""}"
                   href="pages/9_whats-new.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <path d="M4 21V4"/>
                        <path d="M4 4h13l-2.5 4L17 12H4"/>
                    </svg>
                    Novedades
                </a>

                <a class="nav-item ${currentPage === "help" ? "active" : ""}"
                   href="pages/10_help.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <circle cx="12" cy="12" r="9"/>
                        <path d="M9.1 9a3 3 0 1 1 4.6 2.6c-1 .6-1.7 1.1-1.7 2.4"/>
                        <path d="M12 17.5h.01"/>
                    </svg>
                    Ayuda y soporte
                </a>

                <a class="nav-item" href="logout.html">
                    <svg viewBox="0 0 24 24" fill="none"
                         stroke="currentColor" stroke-width="1.8">
                        <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                        <path d="M16 17l5-5-5-5"/>
                        <path d="M21 12H9"/>
                    </svg>
                    Cerrar sesión
                </a>

            </nav>
        `;

        this.replaceWith(sidebar);
    }
}

customElements.define("app-sidebar", AppSidebar);


class AppTopbar extends HTMLElement {
    connectedCallback() {
        const topbar = document.createElement("header");
        topbar.className = "topbar";

        topbar.innerHTML = `
            <div class="search">
                <svg viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2">
                    <circle cx="11" cy="11" r="7"/>
                    <path d="M21 21l-4.3-4.3"/>
                </svg>

                <input type="text" placeholder="Buscar">
            </div>

            <div class="topbar-actions">

                <div class="icon-btn">
                    <svg viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="1.8">
                        <path d="M6 8a6 6 0 1 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/>
                        <path d="M9.5 20a2.5 2.5 0 0 0 5 0"/>
                    </svg>

                    <span class="badge">9</span>
                </div>

                <div class="avatar" style="display:flex;align-items:center;">
                     <!-- El resto de la estructura del avatar va aquí -->
                </div>
            </div>
        `;

        this.replaceWith(topbar);
    }
}

customElements.define("app-topbar", AppTopbar);



/* =====================================================================
   SCRIPT.JS — Lógica compartida de TODAS las vistas del Inventory Dashboard
   =====================================================================
   Un solo archivo para las 10 páginas. Cada HTML define
   <body data-page="nombre-de-vista"> y, al cargar, este script busca
   ese nombre en PAGE_RENDERERS (ver abajo del todo) y corre solo la
   función correspondiente a esa vista.

   INDICE RAPIDO (Ctrl+F):
     1. MOCK_DATA           -> datos de ejemplo, todo centralizado acá
     2. fetchX()            -> "capa de datos". HOY devuelven MOCK_DATA,
                                MAÑANA hacen fetch('/api/...') real.
                                El resto del código no debería cambiar.
     3. Helpers de UI       -> chips de estado, toasts, exportar CSV
     4. renderX()           -> arma el HTML de cada vista
     5. Interacciones       -> filtros, buscador, seleccionar todo, tabs
     6. Init                -> arranca todo según data-page
   ===================================================================== */


/* =====================================================================
   1. MOCK_DATA
   -----------------------------------------------------------------
   Reemplazar esto (o las funciones fetchX de la sección 2) es TODO lo
   que hace falta para conectar el backend real. Los ids/nombres de
   campos ya están pensados para mapear 1 a 1 con lo que devolvería una
   API (sku, status, category, etc.).
   ===================================================================== */
const MOCK_DATA = {

  dashboard: {
    items: [
      { sku:"MRP400", color:"#3d4a3f", title:"Campera de cuero de invierno", sub:null, category:"Ropa", qty:22, warehouse:"múltiples: 22", warehouseAccent:true, price:"$223.20", time:"1:00 PM", date:"10 Ago, 2024", status:"ACCO" },
      { sku:"MRP405", color:"#4a4038", title:"Bota vaquera ABCD con cordones, op...", sub:"Varios (6)", category:"Botas", qty:35, warehouse:"Ubicación A: 5", warehouseAccent:false, price:"$223.20", time:"1:00 PM", date:"10 Ago, 2024", status:"11SE" },
      { sku:"MRP620", color:"#e9e9e9", title:"Medias blancas XYZ", sub:null, category:"Medias", qty:23, warehouse:"múltiples: 22", warehouseAccent:true, price:"$223.20", time:"1:00 PM", date:"10 Ago, 2024", status:"ACCO" },
      { sku:"MRP052", color:"#3a3d4a", title:"Zapatos ABC y Calzado XYZ", sub:null, category:"Calzado", qty:12, warehouse:"Ubicación C: 2", warehouseAccent:false, price:"$223.20", time:"1:00 PM", date:"10 Ago, 2024", status:"CACO" },
      { sku:"MRP405", color:"#4a4038", title:"Bota vaquera ABCD con cordones, op...", sub:"Varios (6)", category:"Botas", qty:35, warehouse:"Ubicación D: 5", warehouseAccent:false, price:"$223.20", time:"1:00 PM", date:"10 Ago, 2024", status:"11SE" },
      { sku:"MRP052", color:"#3a3d4a", title:"Zapatos ABC y Calzado XYZ", sub:null, category:"Calzado", qty:12, warehouse:"Ubicación C: 2", warehouseAccent:false, price:"$223.20", time:"1:00 PM", date:"10 Ago, 2024", status:"CACO" },
      { sku:"aaaaaa", color:"#3d4a3f", title:"Campera de cuero de invierno", sub:null, category:"Ropa", qty:22, warehouse:"Ubicación A: 5", warehouseAccent:false, price:"$223.20", time:"1:00 PM", date:"10 Ago, 2024", status:"ACCO" },
    ],
  },

  inventory: {
    stats: { totalSkus:248, unitsInStock:14320, lowStock:17, outOfStock:4 },
    items: [
      { sku:"MRP400", title:"Campera de cuero de invierno", category:"Ropa", location:"Depósito A", qty:22, reorder:10, status:"in-stock" },
      { sku:"MRP405", title:"Bota vaquera con cordones", category:"Botas", location:"Depósito B", qty:35, reorder:15, status:"in-stock" },
      { sku:"MRP620", title:"Pack de medias blancas x3", category:"Medias", location:"Depósito A", qty:8, reorder:20, status:"low-stock" },
      { sku:"MRP052", title:"Zapatillas para correr ABC", category:"Calzado", location:"Depósito C", qty:0, reorder:12, status:"out-of-stock" },
      { sku:"MRP710", title:"Zapatillas de lona", category:"Calzado", location:"Depósito A", qty:54, reorder:20, status:"in-stock" },
      { sku:"MRP811", title:"Gorro de lana", category:"Ropa", location:"Depósito B", qty:6, reorder:15, status:"low-stock" },
      { sku:"MRP902", title:"Bota de senderismo media", category:"Botas", location:"Depósito C", qty:41, reorder:18, status:"in-stock" },
    ],
  },

  marketplace: {
    channels: [
      { id:"mercadolibre", mark:"ML", name:"MercadoLibre", connected:true,  meta:"Sincronizado hace 12 min",     listed:186, sales:"$412k" },
      { id:"amazon",       mark:"AZ", name:"Amazon",       connected:true,  meta:"Sincronizado hace 1 hora",    listed:94,  sales:"$198k" },
      { id:"shopify",      mark:"SH", name:"Shopify",      connected:true,  meta:"Última sincronización hace 2 días", listed:61, sales:"$54k", syncIssue:true },
      { id:"etsy",         mark:"ET", name:"Etsy",         connected:false, meta:"Conectar para empezar a publicar", listed:null, sales:null },
    ],
    listings: [
      { sku:"MRP400", title:"Campera de cuero de invierno", channel:"MercadoLibre", price:"$223.20", status:"live" },
      { sku:"MRP405", title:"Bota vaquera con cordones", channel:"Amazon", price:"$189.00", status:"live" },
      { sku:"MRP620", title:"Pack de medias blancas x3", channel:"MercadoLibre", price:"$18.50", status:"paused" },
      { sku:"MRP052", title:"Zapatillas para correr ABC", channel:"Shopify", price:"$96.00", status:"error" },
      { sku:"MRP710", title:"Zapatillas de lona", channel:"Amazon", price:"$74.90", status:"live" },
    ],
  },

  orders: {
    stats: { new:14, processing:32, shipped:58, delivered:210, cancelled:6 },
    items: [
      { id:"#10482", customer:"L. Fernandez", items:3, total:"$412.00", date:"20 Sep, 2026", status:"new" },
      { id:"#10481", customer:"M. Duarte", items:1, total:"$96.00", date:"20 Sep, 2026", status:"processing" },
      { id:"#10480", customer:"J. Rossi", items:2, total:"$189.90", date:"19 Sep, 2026", status:"shipped" },
      { id:"#10479", customer:"C. Beltran", items:5, total:"$740.00", date:"18 Sep, 2026", status:"delivered" },
      { id:"#10478", customer:"A. Nunez", items:1, total:"$74.90", date:"17 Sep, 2026", status:"cancelled" },
      { id:"#10477", customer:"P. Iglesias", items:2, total:"$212.00", date:"17 Sep, 2026", status:"delivered" },
    ],
  },

  shipping: {
    stats: { inTransit:41, deliveredToday:19, delayed:3, avgTransitDays:"2.4d" },
    items: [
      { tracking:"AR93820SD", order:"#10480", carrier:"Correo Argentino", dest:"Córdoba, AR", eta:"23 Sep", status:"in-transit" },
      { tracking:"AR93801SD", order:"#10479", carrier:"OCA", dest:"Rosario, AR", eta:"22 Sep", status:"delivered" },
      { tracking:"AR93777SD", order:"#10475", carrier:"Andreani", dest:"Morón, AR", eta:"21 Sep", status:"delayed" },
      { tracking:"AR93650SD", order:"#10471", carrier:"Correo Argentino", dest:"Mendoza, AR", eta:"24 Sep", status:"in-transit" },
      { tracking:"AR93602SD", order:"#10468", carrier:"OCA", dest:"La Plata, AR", eta:"20 Sep", status:"delivered" },
    ],
  },

  reports: {
    stats: { revenue:"$412,940", orders:1208, unitsSold:3940, avgOrderValue:"$341.85" },
    revenue: {
      months:  ["Oct","Nov","Dic","Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep"],
      values:  [38,52,47,61,58,70,66,74,69,82,78,91],
    },
    topProducts: [
      { name:"Campera de cuero de invierno", units:412, revenue:"$92,140" },
      { name:"Bota vaquera con cordones", units:380, revenue:"$71,820" },
      { name:"Zapatillas de lona", units:298, revenue:"$40,470" },
      { name:"Bota de senderismo media", units:211, revenue:"$38,090" },
    ],
    salesByCategory: [
      { category:"Calzado", share:38 },
      { category:"Botas", share:27 },
      { category:"Ropa", share:21 },
      { category:"Medias", share:14 },
    ],
  },

  activity: {
    events: [
      { type:"stock",       icon:'<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/>', text:'<b>J. Doe</b> reabasteció <b>MRP620 · Medias blancas</b> — +40 unidades', time:'Hace 10 minutos' },
      { type:"orders",      icon:'<circle cx="9" cy="20" r="1.4"/><circle cx="18" cy="20" r="1.4"/><path d="M2 3h3l2.4 12.2a2 2 0 0 0 2 1.6h8.2a2 2 0 0 0 2-1.6L21 7H6"/>', text:'Nuevo pedido <b>#10482</b> de L. Fernandez — $412.00', time:'Hace 32 minutos' },
      { type:"marketplace", icon:'<rect x="3" y="3" width="8" height="8" rx="1.5"/><rect x="13" y="3" width="8" height="8" rx="1.5"/><rect x="3" y="13" width="8" height="8" rx="1.5"/><rect x="13" y="13" width="8" height="8" rx="1.5"/>', text:'Sincronización con MercadoLibre completa — 186 publicaciones actualizadas', time:'Hace 1 hora' },
      { type:"stock",       icon:'<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/>', text:'<b>MRP052 · Zapatillas para correr ABC</b> llegó a 0 unidades — marcado sin stock', time:'Hace 2 horas' },
      { type:"shipping",    icon:'<rect x="2" y="8" width="12" height="8" rx="1.2"/><path d="M14 11h4l3 3v2h-7z"/>', text:'Envío <b>AR93777SD</b> marcado como demorado por Andreani', time:'Hace 3 horas' },
      { type:"stock",       icon:'<circle cx="12" cy="12" r="9"/><path d="M9.1 9a3 3 0 1 1 4.6 2.6c-1 .6-1.7 1.1-1.7 2.4"/><path d="M12 17.5h.01"/>', text:'<b>M. Duarte</b> actualizó el punto de reorden de <b>MRP811 · Gorro de lana</b> a 15', time:'Ayer' },
    ],
  },
};

/* =====================================================================
   2. CAPA DE DATOS (fetchX)
   -----------------------------------------------------------------
   Hoy son funciones sincrónicas envueltas en una Promise que devuelven
   MOCK_DATA. El día que esté el backend, cada una de estas pasa a ser
   un `fetch('/api/...')`. Ninguna otra parte del archivo necesita
   cambiar porque los renders solo dependen de la forma del objeto que
   devuelven, no de si viene de acá o de un servidor.
   ===================================================================== */
const fetchDashboardItems  = () => Promise.resolve(MOCK_DATA.dashboard.items);
const fetchInventory       = () => Promise.resolve(MOCK_DATA.inventory);
const fetchMarketplace     = () => Promise.resolve(MOCK_DATA.marketplace);
const fetchOrders          = () => Promise.resolve(MOCK_DATA.orders);
const fetchShipping        = () => Promise.resolve(MOCK_DATA.shipping);
const fetchReports         = () => Promise.resolve(MOCK_DATA.reports);
const fetchActivity        = () => Promise.resolve(MOCK_DATA.activity.events);


/* =====================================================================
   3. HELPERS DE UI
   ===================================================================== */

// ---- Chips de estado: un solo lugar para agregar/editar estados nuevos ----
const STATUS_CHIPS = {
  "in-stock":     ["chip-success", "In Stock"],
  "low-stock":    ["chip-warning", "Low Stock"],
  "out-of-stock": ["chip-danger",  "Out of Stock"],
  "live":         ["chip-success", "Live"],
  "paused":       ["chip-neutral", "Paused"],
  "error":        ["chip-danger",  "Sync Error"],
  "new":          ["chip-info",    "New"],
  "processing":   ["chip-warning", "Processing"],
  "shipped":      ["chip-info",    "Shipped"],
  "delivered":    ["chip-success", "Delivered"],
  "cancelled":    ["chip-danger",  "Cancelled"],
  "in-transit":   ["chip-info",    "In Transit"],
  "delayed":      ["chip-danger",  "Delayed"],
};

function statusChip(statusKey) {
  const [cls, label] = STATUS_CHIPS[statusKey] || ["chip-neutral", statusKey];
  return `<span class="chip ${cls}">${label}</span>`;
}

function editButton(needsBackendLabel) {
  return `
    <button class="edit-btn" data-needs-backend="${needsBackendLabel}">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
    </button>`;
}

// ---- Toast: aviso visual de "esto necesita backend" ----
function ensureToastStack() {
  let stack = document.querySelector('.toast-stack');
  if (!stack) {
    stack = document.createElement('div');
    stack.className = 'toast-stack';
    document.body.appendChild(stack);
  }
  return stack;
}

function showToast(message) {
  const stack = ensureToastStack();
  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = message;
  stack.appendChild(toast);
  setTimeout(() => toast.remove(), 3200);
}

// Delegación global: cualquier elemento (estático o generado por JS) con
// data-needs-backend="Texto" muestra el aviso en vez de hacer nada.
// Para agregar un botón nuevo que dependa del backend, solo hay que
// ponerle este atributo en el HTML — no hace falta tocar este archivo.
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-needs-backend]');
  if (!trigger) return;
  e.preventDefault();
  const label = trigger.getAttribute('data-needs-backend');
  showToast(`<b>Falta backend:</b> "${label}" todavía no está conectado.`);
  console.warn(`[Inventory Dashboard] Acción pendiente de backend: ${label}`);
});

// ---- Exportar una tabla visible a CSV (funciona 100% en el frontend) ----
function exportTableToCSV(table, filename) {
  const rows = [...table.querySelectorAll('tr')].map(tr =>
    [...tr.children]
      .filter(cell => cell.tagName === 'TH' || cell.tagName === 'TD')
      .filter(cell => !cell.querySelector('input[type="checkbox"]') && !cell.classList.contains('row-actions') && !cell.classList.contains('col-filter'))
      .map(cell => `"${cell.textContent.trim().replace(/"/g, '""')}"`)
      .join(',')
  );
  const csv = rows.join('\n');
  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}


/* =====================================================================
   4. RENDER POR VISTA
   -----------------------------------------------------------------
   Cada función arma el HTML de su vista a partir de fetchX() y lo
   mete en el elemento con el id correspondiente. Si mañana fetchX
   devuelve datos reales, esto no cambia.
   ===================================================================== */

async function renderDashboard() {
  const items = await fetchDashboardItems();
  const tbody = document.getElementById('table-body');
  if (!tbody) return;
  tbody.innerHTML = items.map(item => `
<tr>
    <td><input type="checkbox"></td>
    <td class="cell-muted">${item.sku}</td>
    <td>
    <div class="thumb" style="background:${item.color};">
        <svg viewBox="0 0 24 24" fill="none" stroke="${item.color === '#e9e9e9' ? '#555' : '#c9d6cf'}" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
    </div>
    </td>
    <td class="title-cell">
    <div class="title-main">${item.title}</div>
    ${item.sub ? `<div class="title-sub">${item.sub}</div>` : ''}
    </td>
    <td class="cell-muted">${item.category}</td>
    <td class="cell-muted">${item.qty}</td>
    <td class="${item.warehouseAccent ? 'cell-accent' : 'cell-muted'}">${item.warehouse}</td>
    <td class="cell-muted">${item.price}</td>
    <td class="modified-cell">
    <div class="modified-time">${item.time}</div>
    <div class="modified-date">${item.date}</div>
    </td>
    <td class="status-tag">${item.status}</td>
    <td class="row-actions">${editButton('Editar ' + item.sku)}</td>
</tr>`).join('');
  wireSelectAll(tbody.closest('table'));
}

async function renderInventory() {
  const { stats, items } = await fetchInventory();

  setText('stat-total-skus', stats.totalSkus.toLocaleString('es-AR'));
  setText('stat-units-in-stock', stats.unitsInStock.toLocaleString('es-AR'));
  setText('stat-low-stock', stats.lowStock);
  setText('stat-out-of-stock', stats.outOfStock);

  const tbody = document.getElementById('table-body');
  if (!tbody) return;
  tbody.innerHTML = items.map(item => `
<tr data-category="${item.category}">
    <td><input type="checkbox"></td>
    <td class="cell-muted">${item.sku}</td>
    <td class="title-main">${item.title}</td>
    <td class="cell-muted">${item.category}</td>
    <td class="cell-muted">${item.location}</td>
    <td class="cell-muted">${item.qty}</td>
    <td class="cell-muted">${item.reorder}</td>
    <td>${statusChip(item.status)}</td>
    <td class="row-actions">${editButton('Editar ' + item.sku)}</td>
</tr>`).join('');
  wireSelectAll(tbody.closest('table'));
  initCategoryFilter(tbody);
}

async function renderMarketplace() {
  const { channels, listings } = await fetchMarketplace();

  const grid = document.getElementById('channel-grid');
  if (grid) {
    grid.innerHTML = channels.map(c => `
<div class="channel-card">
  <div class="channel-top">
    <div class="channel-mark">${c.mark}</div>
    <span class="chip ${c.connected ? (c.syncIssue ? 'chip-warning' : 'chip-success') : 'chip-neutral'}">${c.connected ? (c.syncIssue ? 'Sync Issue' : 'Connected') : 'Not Connected'}</span>
  </div>
  <div class="channel-name">${c.name}</div>
  <div class="channel-meta">${c.meta}</div>
  <div class="channel-stats">
    <div><b>${c.listed ?? '—'}</b>Listed</div>
    <div><b>${c.sales ?? '—'}</b>30-day sales</div>
  </div>
</div>`).join('');
  }

  const tbody = document.getElementById('table-body');
  if (!tbody) return;
  tbody.innerHTML = listings.map(item => `
<tr>
    <td><input type="checkbox"></td>
    <td class="cell-muted">${item.sku}</td>
    <td class="title-main">${item.title}</td>
    <td class="cell-muted">${item.channel}</td>
    <td class="cell-muted">${item.price}</td>
    <td>${statusChip(item.status)}</td>
    <td class="row-actions">${editButton('Editar publicación ' + item.sku)}</td>
</tr>`).join('');
  wireSelectAll(tbody.closest('table'));
}

async function renderOrders() {
  const { stats, items } = await fetchOrders();

  setText('stat-new', stats.new);
  setText('stat-processing', stats.processing);
  setText('stat-shipped', stats.shipped);
  setText('stat-delivered', stats.delivered);
  setText('stat-cancelled', stats.cancelled);

  const tbody = document.getElementById('table-body');
  if (!tbody) return;
  tbody.innerHTML = items.map(o => `
<tr>
    <td><input type="checkbox"></td>
    <td class="title-main">${o.id}</td>
    <td class="cell-muted">${o.customer}</td>
    <td class="cell-muted">${o.items}</td>
    <td class="cell-muted">${o.total}</td>
    <td class="cell-muted">${o.date}</td>
    <td>${statusChip(o.status)}</td>
    <td class="row-actions">${editButton('Cambiar estado de ' + o.id)}</td>
</tr>`).join('');
  wireSelectAll(tbody.closest('table'));
}

async function renderShipping() {
  const { stats, items } = await fetchShipping();

  setText('stat-in-transit', stats.inTransit);
  setText('stat-delivered-today', stats.deliveredToday);
  setText('stat-delayed', stats.delayed);
  setText('stat-avg-transit', stats.avgTransitDays);

  const tbody = document.getElementById('table-body');
  if (!tbody) return;
  tbody.innerHTML = items.map(s => `
<tr>
    <td><input type="checkbox"></td>
    <td class="title-main">${s.tracking}</td>
    <td class="cell-muted">${s.order}</td>
    <td class="cell-muted">${s.carrier}</td>
    <td class="cell-muted">${s.dest}</td>
    <td class="cell-muted">${s.eta}</td>
    <td>${statusChip(s.status)}</td>
    <td class="row-actions">${editButton('Editar envío ' + s.tracking)}</td>
</tr>`).join('');
  wireSelectAll(tbody.closest('table'));
}

async function renderReports() {
  const { stats, revenue, topProducts, salesByCategory } = await fetchReports();

  setText('stat-revenue', stats.revenue);
  setText('stat-orders', stats.orders.toLocaleString('es-AR'));
  setText('stat-units-sold', stats.unitsSold.toLocaleString('es-AR'));
  setText('stat-aov', stats.avgOrderValue);

  const chart = document.getElementById('revenue-chart');
  if (chart) {
    const max = Math.max(...revenue.values);
    chart.innerHTML = revenue.values.map((v, i) => `
      <div class="bar-col">
        <div class="bar" style="height:${Math.round((v / max) * 100)}%;"></div>
        <div class="bar-label">${revenue.months[i]}</div>
      </div>`).join('');
  }

  const topBody = document.getElementById('top-products-body');
  if (topBody) {
    topBody.innerHTML = topProducts.map(p => `
      <tr><td class="title-main">${p.name}</td><td class="cell-muted">${p.units}</td><td class="cell-muted">${p.revenue}</td></tr>`).join('');
  }

  const catBody = document.getElementById('sales-by-category-body');
  if (catBody) {
    catBody.innerHTML = salesByCategory.map(c => `
      <tr><td class="cell-muted">${c.category}</td><td class="cell-accent">${c.share}%</td></tr>`).join('');
  }
}

async function renderActivity() {
  const events = await fetchActivity();
  const feed = document.getElementById('activity-feed');
  if (!feed) return;
  feed.innerHTML = events.map(e => `
<div class="activity-item" data-type="${e.type}">
  <div class="activity-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${e.icon}</svg></div>
  <div>
    <div class="activity-text">${e.text}</div>
    <div class="activity-time">${e.time}</div>
  </div>
</div>`).join('');
  initActivityFilter(feed);
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}


/* =====================================================================
   5. INTERACCIONES DE UI (funcionan sin backend)
   ===================================================================== */

// ---- Tabs (usado en Settings) ----
function initTabs() {
  document.querySelectorAll('.tabs').forEach(tabGroup => {
    const panels = tabGroup.parentElement.querySelectorAll('.tab-panel');
    tabGroup.querySelectorAll('.tab').forEach((tab, i) => {
      tab.addEventListener('click', () => {
        tabGroup.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        panels[i].classList.add('active');
      });
    });
  });
}

// ---- Checkbox "seleccionar todo" en el header de cada tabla ----
function wireSelectAll(table) {
  if (!table) return;
  const headCheckbox = table.querySelector('thead input[type="checkbox"]');
  if (!headCheckbox) return;
  headCheckbox.checked = false;
  headCheckbox.onchange = () => {
    table.querySelectorAll('tbody input[type="checkbox"]').forEach(cb => {
      cb.checked = headCheckbox.checked;
    });
  };
}

// ---- Filtro de categoría (Inventory) ----
function initCategoryFilter(tbody) {
  const chips = document.querySelectorAll('.filter-chip[data-filter]');
  if (!chips.length) return;
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      tbody.querySelectorAll('tr').forEach(row => {
        row.style.display = (filter === 'all' || row.dataset.category === filter) ? '' : 'none';
      });
    });
  });
}

// ---- Filtro de tipo (Activity) ----
function initActivityFilter(feed) {
  const chips = document.querySelectorAll('.filter-chip[data-filter]');
  if (!chips.length) return;
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.dataset.filter;
      feed.querySelectorAll('.activity-item').forEach(item => {
        item.style.display = (filter === 'all' || item.dataset.type === filter) ? '' : 'none';
      });
    });
  });
}

// ---- Buscador del topbar: filtra filas de la tabla visible de la página actual ----
function initTopbarSearch() {
  const input = document.querySelector('.topbar .search input');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const tbody = document.getElementById('table-body');
    if (!tbody) return;
    tbody.querySelectorAll('tr').forEach(row => {
      row.style.display = row.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// ---- Buscador de la FAQ (Help & Support) ----
function initHelpSearch() {
  const input = document.getElementById('help-search-input');
  if (!input) return;
  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    document.querySelectorAll('.faq-item').forEach(item => {
      item.style.display = item.textContent.toLowerCase().includes(q) ? '' : 'none';
    });
  });
}

// ---- Exportar CSV (Orders, Reports) ----
function initExportButtons() {
  document.querySelectorAll('[data-export]').forEach(btn => {
    btn.addEventListener('click', () => {
      const table = document.querySelector(btn.dataset.export);
      if (table) exportTableToCSV(table, `${document.body.dataset.page}.csv`);
    });
  });
}


/* =====================================================================
   6. INIT
   -----------------------------------------------------------------
   Corre en TODAS las páginas. Primero las interacciones genéricas
   (tabs, buscador, export, avisos de backend), después la función de
   render que corresponde a la vista actual según data-page en <body>.
   ===================================================================== */

const PAGE_RENDERERS = {
  dashboard:   renderDashboard,
  inventory:   renderInventory,
  marketplace: renderMarketplace,
  orders:      renderOrders,
  shipping:    renderShipping,
  reports:     renderReports,
  activity:    renderActivity,
  // settings, whats-new y help son estáticos: no necesitan render de datos.
};

document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initTopbarSearch();
  initHelpSearch();
  initExportButtons();

  const page = document.body.dataset.page;
  const renderer = PAGE_RENDERERS[page];
  if (renderer) renderer();
});
