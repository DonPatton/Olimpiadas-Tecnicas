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

              <a class="nav-item ${currentPage === "categories" ? "active" : ""}"
                 href="pages/3_categories.html">
                  <svg viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="1.8">
                      <path d="M3 7l9-4 9 4-9 4-9-4z"/>
                      <path d="M3 7v10l9 4 9-4V7"/>
                      <path d="M12 11v10"/>
                  </svg>
                  Categorias
              </a>

              <a class="nav-item ${currentPage === "combos" ? "active" : ""}"
                 href="pages/5_combos.html">
                  <svg viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="1.8">
                      <path d="M3 7l9-4 9 4-9 4-9-4z"/>
                      <path d="M3 7v10l9 4 9-4V7"/>
                      <path d="M12 11v10"/>
                  </svg>
                  Combos
              </a>

              <a class="nav-item ${currentPage === "stock-movement" ? "active" : ""}"
                 href="pages/4_stock-movement.html">
                  <svg viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="1.8">
                      <path d="M12 3v18"/>
                      <path d="M5 8l7-5 7 5"/>
                      <path d="M5 16l7 5 7-5"/>
                  </svg>
                  Movimientos de stock
              </a>

          </nav>

          <!-- PRÓXIMOS MÓDULOS -->
          <div class="nav-section-title">PRÓXIMOS MÓDULOS</div>

          <nav class="nav-group upcoming-modules">

              <div class="nav-item upcoming">
                  <svg viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="1.8">
                      <rect x="3" y="3" width="7" height="7" rx="1"/>
                      <rect x="14" y="3" width="7" height="7" rx="1"/>
                      <rect x="3" y="14" width="7" height="7" rx="1"/>
                      <rect x="14" y="14" width="7" height="7" rx="1"/>
                  </svg>
                  Panel de control
              </div>

              <div class="nav-item upcoming">
                  <svg viewBox="0 0 24 24" fill="none"
                       stroke="currentColor" stroke-width="1.8">
                      <path d="M4 5h16v14H4z"/>
                      <path d="M8 9h8"/>
                      <path d="M8 13h5"/>
                  </svg>
                  Pedidos
              </div>

          </nav>

          <nav class="nav-group">

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

              <a class="nav-item" id="logout-link" href="login.html">
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
   Un solo archivo para las páginas. Cada HTML define
   <body data-page="nombre-de-vista"> y, al cargar, este script busca
   ese nombre en PAGE_RENDERERS (ver abajo del todo) y corre solo la
   función correspondiente a esa vista.

   INDICE RAPIDO (Ctrl+F):
     1. API REAL            -> capa de datos (fetch a productos/categorías/stock)
     2. Helpers de UI       -> chips de estado, toasts, exportar CSV
     3. renderX()           -> arma el HTML de cada vista + modales
     4. Interacciones       -> filtros, buscador, acciones de filas
     5. Init                -> arranca todo según data-page
   ===================================================================== */


/* =====================================================================
   1. API REAL — Productos / Categorías / Movimientos de stock
   ===================================================================== */
const API_BASE = 'http://localhost:3000';

function authHeaders(extra = {}) {
  const token = localStorage.getItem('token');
  return token ? { ...extra, Authorization: `Bearer ${token}` } : extra;
}

// Wrapper de fetch para las rutas protegidas: si el backend devuelve 401
// (token vencido o inválido) limpia el token y manda al login.
async function fetchAPI(url, options = {}) {
  const res = await fetch(url, options);
  if (res.status === 401) {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
    throw new Error('Sesión expirada.');
  }
  return res;
}

async function apiError(res, fallback) {
  const data = await res.json().catch(() => null);
  return new Error(data?.mensaje || `${fallback} (HTTP ${res.status})`);
}

async function fetchProductos() {
  const res = await fetchAPI(`${API_BASE}/productos`, { headers: authHeaders() });
  if (!res.ok) throw await apiError(res, 'No se pudieron obtener los productos.');
  return res.json();
}

async function fetchCategorias() {
  const res = await fetchAPI(`${API_BASE}/categorias`, { headers: authHeaders() });
  if (!res.ok) return [];
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

async function crearProductoAPI(payload) {
  const res = await fetchAPI(`${API_BASE}/productos`, {
    method: 'POST',
    headers: authHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw await apiError(res, 'No se pudo crear el producto.');
  return res.json();
}

async function actualizarProductoAPI(id, payload) {
  const res = await fetchAPI(`${API_BASE}/productos/${id}`, {
    method: 'PUT',
    headers: authHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw await apiError(res, 'No se pudo actualizar el producto.');
  return res.json();
}

async function eliminarProductoAPI(id) {
  const res = await fetchAPI(`${API_BASE}/productos/${id}`, {
    method: 'DELETE',
    headers: authHeaders()
  });
  if (!res.ok) throw await apiError(res, 'No se pudo eliminar el producto.');
  return res.json();
}

async function modificarStockAPI(id, payload) {
  const res = await fetchAPI(`${API_BASE}/productos/${id}/stock`, {
    method: 'PATCH',
    headers: authHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw await apiError(res, 'No se pudo cambiar el stock.');
  return res.json();
}

async function crearCategoriaAPI(payload) {
  const res = await fetchAPI(`${API_BASE}/categorias`, {
    method: 'POST',
    headers: authHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw await apiError(res, 'No se pudo crear la categoría.');
  return res.json();
}

async function actualizarCategoriaAPI(id, payload) {
  const res = await fetchAPI(`${API_BASE}/categorias/${id}`, {
    method: 'PUT',
    headers: authHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw await apiError(res, 'No se pudo actualizar la categoría.');
  return res.json();
}

async function eliminarCategoriaAPI(id) {
  const res = await fetchAPI(`${API_BASE}/categorias/${id}`, {
    method: 'DELETE',
    headers: authHeaders()
  });
  if (!res.ok) throw await apiError(res, 'No se pudo eliminar la categoría.');
  return res.json();
}

async function fetchMovimientosStock() {
  const res = await fetchAPI(`${API_BASE}/movimientos-stock`, {
    headers: authHeaders()
  });

  if (!res.ok) {
    throw await apiError(res, 'No se pudieron obtener los movimientos de stock.');
  }

  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

// ---------------------------------------------------------------------
// Combos
// ---------------------------------------------------------------------
let COMBOS_CACHE = [];

async function fetchCombos() {
  const res = await fetchAPI(`${API_BASE}/combos`, { headers: authHeaders() });
  if (!res.ok) throw await apiError(res, 'No se pudieron obtener los combos.');
  const data = await res.json();
  return Array.isArray(data) ? data : [];
}

async function fetchCombo(id) {
  const res = await fetchAPI(`${API_BASE}/combos/${id}`, { headers: authHeaders() });
  if (!res.ok) throw await apiError(res, 'No se pudo obtener el combo.');
  return res.json();
}

async function crearComboAPI(payload) {
  const res = await fetchAPI(`${API_BASE}/combos`, {
    method: 'POST',
    headers: authHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw await apiError(res, 'No se pudo crear el combo.');
  return res.json();
}

async function actualizarComboAPI(id, payload) {
  const res = await fetchAPI(`${API_BASE}/combos/${id}`, {
    method: 'PUT',
    headers: authHeaders({ 'Content-Type': 'application/json' }),
    body: JSON.stringify(payload)
  });
  if (!res.ok) throw await apiError(res, 'No se pudo actualizar el combo.');
  return res.json();
}

async function eliminarComboAPI(id) {
  const res = await fetchAPI(`${API_BASE}/combos/${id}`, {
    method: 'DELETE',
    headers: authHeaders()
  });
  if (!res.ok) throw await apiError(res, 'No se pudo eliminar el combo.');
  return res.json();
}

// Id de categoría "real" — el backend no es 100% consistente con el
// nombre de esa columna (id_cat / id_c), así que probamos varias.
function idCategoria(cat) {
  return cat.id_cat ?? cat.id_c ?? cat.id;
}

function nombreCategoria(fkId) {
  const cat = CATEGORIAS_CACHE.find(c => String(idCategoria(c)) === String(fkId));
  return cat ? cat.nombre : '—';
}

function formatFecha(value) {
  if (!value) return '—';
  const d = new Date(value);
  if (isNaN(d)) return String(value);
  return d.toLocaleDateString('es-AR', { day: '2-digit', month: 'short', year: 'numeric' });
}

function escapeHtml(str) {
  return String(str ?? '').replace(/[&<>"']/g, s => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[s]));
}

// Normaliza `cantidad` a entero antes de mostrarla o de hacer cuentas.
// Sirve tanto si el backend la devuelve como number como si es string.
function cantidadInt(value) {
  const n = parseInt(value, 10);
  return Number.isFinite(n) ? n : 0;
}

let CATEGORIAS_CACHE = [];

// ---------------------------------------------------------------------
// Movimientos de stock
// ---------------------------------------------------------------------
// Cambiar a true cuando el backend pase a esperar `cantidad` como number
// en POST /productos y PUT /productos/:id (hoy espera string).
const CANTIDAD_COMO_NUMERO = false;
const cantidadParaAPI = (n) => CANTIDAD_COMO_NUMERO ? n : String(n);

const STOCK_ICON = '<path d="M3 7l9-4 9 4-9 4-9-4z"/><path d="M3 7v10l9 4 9-4V7"/>';

const ORIGEN_LABEL = {
  creacion_producto: 'Stock inicial',
  cambio_stock: 'Cambio de stock',
  edicion_producto: 'Edición de producto',
  venta: 'Venta',
};

function describirMovimiento(m) {
  const anterior = Number(m.cantidad_anterior ?? 0);
  const nueva = Number(m.cantidad_nueva ?? 0);
  const dif = nueva - anterior;
  const cambio = dif >= 0 ? `+${dif}` : `${dif}`;
  const origen = ORIGEN_LABEL[m.origen] || m.origen;
  const quien = m.usuario ? `<b>${escapeHtml(m.usuario)}</b>` : 'Alguien';
  const motivo = m.motivo ? ` — ${escapeHtml(m.motivo)}` : '';

  return `${quien} · ${escapeHtml(origen)}: ` +
         `<b>${escapeHtml(m.fk_producto)} · ${escapeHtml(m.producto)}</b> ` +
         `— ${cambio} unidades (${anterior} → ${nueva})${motivo}`;
}

function formatTiempoRelativo(timestamp) {
  const diffMin = Math.round((Date.now() - timestamp) / 60000);
  if (diffMin < 1) return 'Recién';
  if (diffMin < 60) return `Hace ${diffMin} minuto${diffMin === 1 ? '' : 's'}`;
  const diffHoras = Math.round(diffMin / 60);
  if (diffHoras < 24) return `Hace ${diffHoras} hora${diffHoras === 1 ? '' : 's'}`;
  const diffDias = Math.round(diffHoras / 24);
  return diffDias === 1 ? 'Ayer' : `Hace ${diffDias} días`;
}


/* =====================================================================
   2. HELPERS DE UI
   ===================================================================== */

// ---- Editar/eliminar producto real (Inventario) ----
function productActionButtons(id) {
  return `
    <button class="edit-btn" data-action="edit" data-id="${id}" title="Editar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
    </button>
    <button class="edit-btn" data-action="delete" data-id="${id}" title="Eliminar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
    </button>`;
}

// ---- Editar/eliminar categoría real (Categorías) ----
function categoryActionButtons(id) {
  return `
    <button class="edit-btn" data-action="edit-cat" data-id="${id}" title="Editar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
    </button>
    <button class="edit-btn" data-action="delete-cat" data-id="${id}" title="Eliminar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
    </button>`;
}

// ---- Toast ----
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

// Delegación global: cualquier elemento con data-needs-backend="Texto"
// muestra el aviso en vez de hacer nada.
document.addEventListener('click', (e) => {
  const trigger = e.target.closest('[data-needs-backend]');
  if (!trigger) return;
  e.preventDefault();
  const label = trigger.getAttribute('data-needs-backend');
  showToast(`<b>Falta backend:</b> "${label}" todavía no está conectado.`);
  console.warn(`[Inventory Dashboard] Acción pendiente de backend: ${label}`);
});

// ---- Exportar una tabla visible a CSV ----
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
   3. RENDER POR VISTA
   ===================================================================== */

let PRODUCTOS_CACHE = [];

async function renderInventory() {
  const tbody = document.getElementById('table-body');
  if (!tbody) return;

  try {
    [PRODUCTOS_CACHE, CATEGORIAS_CACHE] = await Promise.all([fetchProductos(), fetchCategorias()]);
  } catch (err) {
    tbody.innerHTML = `<tr class="no-results"><td colspan="8">No se pudieron cargar los productos. ¿Está corriendo el backend en ${API_BASE}?</td></tr>`;
    return;
  }

  setText('stat-total-skus', PRODUCTOS_CACHE.length);
  renderCategoryFilters(CATEGORIAS_CACHE);

  tbody.innerHTML = PRODUCTOS_CACHE.map(p => `
<tr data-category="${p.fk_categoria}">
    <td class="cell-muted">${p.id}</td>
    <td class="title-cell"><div class="title-main">${escapeHtml(p.nombre)}</div></td>
    <td class="cell-muted">${escapeHtml(nombreCategoria(p.fk_categoria))}</td>
    <td class="cell-muted">${cantidadInt(p.cantidad)}</td>
    <td class="cell-muted">$${Math.round(Number(p.precio_unitario)).toLocaleString('es-AR')}</td>
    <td class="cell-muted">${escapeHtml(p.descripcion || '')}</td>
    <td class="cell-muted">${formatFecha(p.ultima_modificacion)}</td>
    <td class="row-actions">${productActionButtons(p.id)}</td>
</tr>`).join('') || `<tr class="no-results"><td colspan="8">Todavía no hay productos cargados.</td></tr>`;

  initCategoryFilter(tbody);
}

function renderCategoryFilters(categorias) {
  const row = document.querySelector('.filter-row');
  if (!row) return;
  row.innerHTML = [
    '<div class="filter-chip active" data-filter="all">Todas las categorías</div>',
    ...categorias.map(c => `<div class="filter-chip" data-filter="${idCategoria(c)}">${escapeHtml(c.nombre)}</div>`)
  ].join('');
}


// ---- Vista de Categorías (tabla + conteo de productos) ----
async function renderCategorias() {
  const tbody = document.getElementById('categories-table-body');
  if (!tbody) return;

  try {
    [CATEGORIAS_CACHE, PRODUCTOS_CACHE] = await Promise.all([fetchCategorias(), fetchProductos()]);
  } catch (err) {
    tbody.innerHTML = `<tr class="no-results"><td colspan="5">No se pudieron cargar las categorías. ¿Está corriendo el backend en ${API_BASE}?</td></tr>`;
    return;
  }

  tbody.innerHTML = CATEGORIAS_CACHE.map(c => {
    const id = idCategoria(c);
    const cantidadProductos = PRODUCTOS_CACHE.filter(p => String(p.fk_categoria) === String(id)).length;
    return `
<tr>
    <td class="cell-muted">${id}</td>
    <td class="title-cell"><div class="title-main">${escapeHtml(c.nombre)}</div></td>
    <td class="cell-muted">${escapeHtml(c.descripcion)}</td>
    <td class="cell-muted">${cantidadProductos}</td>
    <td class="row-actions">${categoryActionButtons(id)}</td>
</tr>`;
  }).join('') || `<tr class="no-results"><td colspan="5">Todavía no hay categorías cargadas.</td></tr>`;
}

// ---- Modal de Agregar/Editar categoría ----
function initCategoryModal() {
  const overlay = document.getElementById('category-modal-overlay');
  if (!overlay) return;

  const form = document.getElementById('category-form');
  const titleEl = document.getElementById('category-modal-title');
  const idInput = document.getElementById('category-id');
  const nombreInput = document.getElementById('category-nombre');
  const descInput = document.getElementById('category-descripcion');
  const errorEl = document.getElementById('category-form-error');

  window.openCategoryModal = (categoria = null) => {
    errorEl.textContent = '';
    form.reset();

    if (categoria) {
      titleEl.textContent = 'Editar categoría';
      idInput.value = idCategoria(categoria);
      nombreInput.value = categoria.nombre;
      descInput.value = categoria.descripcion;
    } else {
      titleEl.textContent = 'Agregar categoría';
      idInput.value = '';
    }

    overlay.hidden = false;
    nombreInput.focus();
  };

  function closeModal() {
    overlay.hidden = true;
  }

  document.getElementById('btn-add-category')?.addEventListener('click', () => window.openCategoryModal());
  document.getElementById('category-modal-close').addEventListener('click', closeModal);
  document.getElementById('category-modal-cancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) closeModal(); });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorEl.textContent = '';

    const payload = {
      nombre: nombreInput.value.trim(),
      descripcion: descInput.value.trim()
    };

    const submitBtn = document.getElementById('category-modal-submit');
    submitBtn.disabled = true;

    try {
      if (idInput.value) {
        await actualizarCategoriaAPI(idInput.value, payload);
        showToast('Categoría actualizada.');
      } else {
        await crearCategoriaAPI(payload);
        showToast('Categoría creada.');
      }
      closeModal();
      renderCategorias();
    } catch (err) {
      errorEl.textContent = err.message || 'Ocurrió un error al guardar la categoría.';
    } finally {
      submitBtn.disabled = false;
    }
  });
}

// ---- Modal de Agregar/Editar producto (Inventario) ----
function initProductModal() {
  const overlay = document.getElementById('product-modal-overlay');
  if (!overlay) return;

  const form = document.getElementById('product-form');
  const titleEl = document.getElementById('product-modal-title');
  const idInput = document.getElementById('product-id');
  const nombreInput = document.getElementById('product-nombre');
  const categoriaSelect = document.getElementById('product-categoria');
  const cantidadInput = document.getElementById('product-cantidad');
  const precioInput = document.getElementById('product-precio');
  const descInput = document.getElementById('product-descripcion');
  const errorEl = document.getElementById('product-form-error');
  const motivoInput = document.getElementById('product-motivo');
  const motivoField = document.getElementById('product-motivo-field');

  function fillCategorias(selectedId) {
    categoriaSelect.innerHTML = CATEGORIAS_CACHE
      .map(c => `<option value="${idCategoria(c)}">${escapeHtml(c.nombre)}</option>`)
      .join('') || '<option value="">Sin categorías cargadas</option>';
    if (selectedId !== undefined) categoriaSelect.value = selectedId;
  }

  window.openProductModal = (producto = null) => {
    errorEl.textContent = '';
    form.reset();

    // El motivo solo se muestra al editar (el backend lo usa si cambia la cantidad).
    if (motivoField) motivoField.style.display = producto ? '' : 'none';

    if (producto) {
      titleEl.textContent = 'Editar producto';
      idInput.value = producto.id;
      nombreInput.value = producto.nombre;
      cantidadInput.value = cantidadInt(producto.cantidad);
      precioInput.value = Math.round(Number(producto.precio_unitario));
      descInput.value = producto.descripcion;
      fillCategorias(producto.fk_categoria);
    } else {
      titleEl.textContent = 'Agregar producto';
      idInput.value = '';
      fillCategorias();
    }

    overlay.hidden = false;
    nombreInput.focus();
  };

  function closeModal() {
    overlay.hidden = true;
  }

  document.getElementById('btn-add-product')?.addEventListener('click', () => window.openProductModal());
  document.getElementById('product-modal-close').addEventListener('click', closeModal);
  document.getElementById('product-modal-cancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) closeModal(); });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorEl.textContent = '';

    const cantidadTxt = String(cantidadInput.value).trim();
    const cantidad = Number(cantidadTxt);
    if (cantidadTxt === '' || !Number.isInteger(cantidad) || cantidad < 0) {
      errorEl.textContent = 'La cantidad debe ser un número entero de 0 o más.';
      return;
    }

    const precio = Number(precioInput.value);
    if (!Number.isInteger(precio) || precio <= 0) {
      errorEl.textContent = 'El precio debe ser un número entero mayor a 0.';
      return;
    }

    const payload = {
      nombre: nombreInput.value.trim(),
      categoria: Number(categoriaSelect.value),
      cantidad: cantidadParaAPI(cantidad),
      precio,
      descripcion: descInput.value.trim()
    };

    // Solo al editar: motivo del cambio (se registra si la cantidad cambió)
    if (idInput.value && motivoInput) payload.motivo = motivoInput.value.trim();

    const submitBtn = document.getElementById('product-modal-submit');
    submitBtn.disabled = true;

    try {
      if (idInput.value) {
        await actualizarProductoAPI(idInput.value, payload);
        showToast('Producto actualizado.');
      } else {
        await crearProductoAPI(payload);
        showToast('Producto creado.');
      }
      closeModal();
      renderInventory();
    } catch (err) {
      errorEl.textContent = err.message || 'Ocurrió un error al guardar el producto.';
    } finally {
      submitBtn.disabled = false;
    }
  });
}

// ---- Modal de Cambiar stock: usa PATCH /productos/:id/stock, que registra el movimiento ----
function initStockModal() {
  const overlay = document.getElementById('stock-modal-overlay');
  if (!overlay) return;

  const form = document.getElementById('stock-form');
  const productoSelect = document.getElementById('stock-producto');
  const currentValueEl = document.getElementById('stock-current-value');
  const cambioInput = document.getElementById('stock-cambio');
  const descInput = document.getElementById('stock-descripcion');
  const errorEl = document.getElementById('stock-form-error');

  function fillProductos() {
    productoSelect.innerHTML = PRODUCTOS_CACHE
      .map(p => `<option value="${p.id}">${escapeHtml(p.nombre)}</option>`)
      .join('') || '<option value="">Sin productos cargados</option>';
  }

  function updateCurrentValue() {
    const producto = PRODUCTOS_CACHE.find(p => String(p.id) === productoSelect.value);
    currentValueEl.textContent = producto ? cantidadInt(producto.cantidad) : '—';
  }

  function openModal() {
    errorEl.textContent = '';
    form.reset();
    fillProductos();
    updateCurrentValue();
    overlay.hidden = false;
    productoSelect.focus();
  }

  function closeModal() {
    overlay.hidden = true;
  }

  document.getElementById('btn-change-stock')?.addEventListener('click', openModal);
  document.getElementById('stock-modal-close').addEventListener('click', closeModal);
  document.getElementById('stock-modal-cancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) closeModal(); });
  productoSelect.addEventListener('change', updateCurrentValue);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorEl.textContent = '';

    const producto = PRODUCTOS_CACHE.find(p => String(p.id) === productoSelect.value);
    const cambio = Number(cambioInput.value);

    if (!producto) {
      errorEl.textContent = 'Elegí un producto.';
      return;
    }
    if (!Number.isInteger(cambio) || cambio === 0) {
      errorEl.textContent = 'La cantidad a cambiar debe ser un número entero distinto de 0.';
      return;
    }

    const nuevaCantidad = cantidadInt(producto.cantidad) + cambio;
    if (nuevaCantidad < 0) {
      errorEl.textContent = 'El stock no puede quedar en negativo.';
      return;
    }

    // El controller valida que `cantidad` sea un entero positivo
    // (el signo va aparte, en `operacion`).
    const payload = {
      cantidad: Math.abs(cambio),
      operacion: cambio > 0 ? 'sumar' : 'restar',
      motivo: descInput.value.trim()
    };

    const submitBtn = document.getElementById('stock-modal-submit');
    submitBtn.disabled = true;

    try {
      await modificarStockAPI(producto.id, payload);
      showToast('Stock actualizado.');
      closeModal();
      renderInventory();
    } catch (err) {
      errorEl.textContent = err.message || 'Ocurrió un error al cambiar el stock.';
    } finally {
      submitBtn.disabled = false;
    }
  });
}


// ---- Combos: botones de fila ----
function comboActionButtons(id) {
  return `
    <button class="edit-btn" data-action="edit-combo" data-id="${id}" title="Editar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4z"/></svg>
    </button>
    <button class="edit-btn" data-action="delete-combo" data-id="${id}" title="Eliminar">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/></svg>
    </button>`;
}


function resumenProductosCombo(combo) {
  const items = Array.isArray(combo.productos) ? combo.productos : [];
  if (!items.length) return '—';
  return items
    .map(i => `${cantidadInt(i.cantidad)}× ${escapeHtml(i.nombre)}`)
    .join('<br>');
}

// ---- Vista de Combos ----
async function renderCombos() {
  const tbody = document.getElementById('combos-table-body');
  if (!tbody) return;

  try {
    let combos;
    [combos, PRODUCTOS_CACHE] = await Promise.all([fetchCombos(), fetchProductos()]);

    // La lista básica no trae los productos: se piden al detalle de cada combo.
    COMBOS_CACHE = await Promise.all(combos.map(c => fetchCombo(c.id)));
  } catch (err) {
    tbody.innerHTML = `<tr class="no-results"><td colspan="6">No se pudieron cargar los combos. ¿Está corriendo el backend en ${API_BASE}?</td></tr>`;
    return;
  }

  setText('stat-total-combos', COMBOS_CACHE.length);

  tbody.innerHTML = COMBOS_CACHE.map(c => `
<tr>
    <td class="cell-muted">${c.id}</td>
    <td class="title-cell"><div class="title-main">${escapeHtml(c.nombre)}</div></td>
    <td class="cell-muted">$${Math.round(Number(c.precio)).toLocaleString('es-AR')}</td>
    <td class="cell-muted">${escapeHtml(c.descripcion || '')}</td>
    <td class="cell-muted">${resumenProductosCombo(c)}</td>
    <td class="row-actions">${comboActionButtons(c.id)}</td>
</tr>`).join('') || `<tr class="no-results"><td colspan="6">Todavía no hay combos cargados.</td></tr>`;
}

// ---- Modal de Agregar/Editar combo ----
function initComboModal() {
  const overlay = document.getElementById('combo-modal-overlay');
  if (!overlay) return;

  const form = document.getElementById('combo-form');
  const titleEl = document.getElementById('combo-modal-title');
  const idInput = document.getElementById('combo-id');
  const nombreInput = document.getElementById('combo-nombre');
  const precioInput = document.getElementById('combo-precio');
  const descInput = document.getElementById('combo-descripcion');
  const itemsEl = document.getElementById('combo-items');
  const errorEl = document.getElementById('combo-form-error');

  function opcionesProductos(selectedId) {
    return PRODUCTOS_CACHE
      .map(p => `<option value="${p.id}"${String(p.id) === String(selectedId) ? ' selected' : ''}>${escapeHtml(p.nombre)} (ID ${p.id})</option>`)
      .join('');
  }

  function addItemRow(productoId, cantidad = 1) {
    const row = document.createElement('div');
    row.className = 'combo-item-row';
    row.innerHTML = `
      <select class="combo-item-producto" required>${opcionesProductos(productoId)}</select>
      <input type="number" class="combo-item-cantidad" min="1" step="1" value="${cantidad}" aria-label="Cantidad">
      <button type="button" class="btn btn-ghost combo-item-remove" title="Quitar">&times;</button>`;
    itemsEl.appendChild(row);
  }

  window.openComboModal = (combo = null) => {
    errorEl.textContent = '';
    form.reset();
    itemsEl.innerHTML = '';

    if (combo) {
      titleEl.textContent = 'Editar combo';
      idInput.value = combo.id;
      nombreInput.value = combo.nombre;
      precioInput.value = Math.round(Number(combo.precio));
      descInput.value = combo.descripcion || '';
      (combo.productos || []).forEach(i => addItemRow(i.id ?? i.id_producto, cantidadInt(i.cantidad) || 1));
    } else {
      titleEl.textContent = 'Agregar combo';
      idInput.value = '';
      if (PRODUCTOS_CACHE.length) addItemRow(PRODUCTOS_CACHE[0].id);
    }

    overlay.hidden = false;
    nombreInput.focus();
  };

  function closeModal() {
    overlay.hidden = true;
  }

  document.getElementById('btn-add-combo')?.addEventListener('click', () => window.openComboModal());
  document.getElementById('combo-modal-close').addEventListener('click', closeModal);
  document.getElementById('combo-modal-cancel').addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !overlay.hidden) closeModal(); });

  document.getElementById('btn-add-combo-item').addEventListener('click', () => {
    if (!PRODUCTOS_CACHE.length) {
      errorEl.textContent = 'Primero cargá productos en el inventario.';
      return;
    }
    errorEl.textContent = '';
    addItemRow(PRODUCTOS_CACHE[0].id);
  });

  itemsEl.addEventListener('click', (e) => {
    const btn = e.target.closest('.combo-item-remove');
    if (btn) btn.closest('.combo-item-row').remove();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    errorEl.textContent = '';

    const nombre = nombreInput.value.trim();
    const descripcion = descInput.value.trim();
    const precio = Number(precioInput.value);

    if (!nombre || !descripcion) {
      errorEl.textContent = 'No se permiten campos vacíos.';
      return;
    }
    if (nombre.length > 100) {
      errorEl.textContent = 'El nombre no puede superar los 100 caracteres.';
      return;
    }
    if (descripcion.length > 255) {
      errorEl.textContent = 'La descripción no puede superar los 255 caracteres.';
      return;
    }
    if (!Number.isInteger(precio) || precio <= 0) {
      errorEl.textContent = 'El precio debe ser un número entero mayor a 0.';
      return;
    }

    const filas = [...itemsEl.querySelectorAll('.combo-item-row')];
    if (!filas.length) {
      errorEl.textContent = 'El combo necesita al menos un producto.';
      return;
    }

    const productos = filas.map(f => ({
      id: Number(f.querySelector('.combo-item-producto').value),
      cantidad: Number(f.querySelector('.combo-item-cantidad').value)
    }));

    if (productos.some(p => !Number.isInteger(p.id) || p.id <= 0 || !Number.isInteger(p.cantidad) || p.cantidad <= 0)) {
      errorEl.textContent = 'Cada producto necesita una cantidad entera mayor a 0.';
      return;
    }
    if (new Set(productos.map(p => p.id)).size !== productos.length) {
      errorEl.textContent = 'No repitas el mismo producto: subí la cantidad en una sola fila.';
      return;
    }

    const payload = { nombre, precio, descripcion, productos };

    const submitBtn = document.getElementById('combo-modal-submit');
    submitBtn.disabled = true;

    try {
      if (idInput.value) {
        await actualizarComboAPI(idInput.value, payload);
        showToast('Combo actualizado.');
      } else {
        await crearComboAPI(payload);
        showToast('Combo creado.');
      }
      closeModal();
      renderCombos();
    } catch (err) {
      errorEl.textContent = err.message || 'Ocurrió un error al guardar el combo.';
    } finally {
      submitBtn.disabled = false;
    }
  });
}

// ---- Página dedicada de Movimientos de stock -------------------------
async function renderStockMovements() {
  const feed = document.getElementById('stock-movements-feed');
  if (!feed) return;

  try {
    const movimientos = await fetchMovimientosStock();
    setText('stat-total-movimientos', movimientos.length);

    if (!movimientos.length) {
      feed.innerHTML = `<div class="feed-empty">Todavía no hay movimientos de stock registrados.</div>`;
      return;
    }

    feed.innerHTML = movimientos.map(m => `
      <div class="activity-item" data-type="stock" data-origen="${escapeHtml(m.origen)}">
        <div class="activity-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">${STOCK_ICON}</svg>
        </div>
        <div>
          <div class="activity-text">${describirMovimiento(m)}</div>
          <div class="activity-time">${formatTiempoRelativo(new Date(m.fecha).getTime())}</div>
        </div>
      </div>`).join('');

  } catch (err) {
    console.error(err);
    setText('stat-total-movimientos', '—');
    feed.innerHTML = `<div class="feed-empty">No se pudieron cargar los movimientos de stock.</div>`;
  }
}

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}


/* =====================================================================
   4. INTERACCIONES DE UI
   ===================================================================== */

// ---- Acciones de filas (editar/eliminar producto y categoría) ----
// Un solo listener delegado en document: sigue funcionando aunque las
// tablas se vuelvan a dibujar, sin tener que re-conectar botones.
function initRowActions() {
  document.addEventListener('click', async (e) => {
    const btn = e.target.closest('[data-action]');
    if (!btn) return;

    const { action, id } = btn.dataset;

    if (action === 'edit') {
      const producto = PRODUCTOS_CACHE.find(p => String(p.id) === id);
      if (producto) window.openProductModal(producto);

    } else if (action === 'delete') {
      if (!confirm('¿Eliminar este producto?')) return;
      try {
        await eliminarProductoAPI(id);
        showToast('Producto eliminado.');
        renderInventory();
      } catch (err) {
        showToast(err.message || 'Error al eliminar el producto.');
      }

    } else if (action === 'edit-cat') {
      const categoria = CATEGORIAS_CACHE.find(c => String(idCategoria(c)) === id);
      if (categoria) window.openCategoryModal(categoria);

    } else if (action === 'delete-cat') {
      if (!confirm('¿Eliminar esta categoría?')) return;
      try {
        await eliminarCategoriaAPI(id);
        showToast('Categoría eliminada.');
        renderCategorias();
      } catch (err) {
        showToast(err.message || 'Error al eliminar la categoría.');
      }

    } else if (action === 'edit-combo') {
      try {
        const combo = await fetchCombo(id);
        window.openComboModal(combo);
      } catch (err) {
        showToast(err.message || 'Error al cargar el combo.');
      }

    } else if (action === 'delete-combo') {
      if (!confirm('¿Eliminar este combo?')) return;
      try {
        await eliminarComboAPI(id);
        showToast('Combo eliminado.');
        renderCombos();
      } catch (err) {
        showToast(err.message || 'Error al eliminar el combo.');
      }
    }
  });
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

// ---- Buscador del topbar: filtra filas de la tabla visible de la página actual ----
function initTopbarSearch() {
  const input = document.querySelector('.topbar .search input');
  if (!input) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    const tbody = document.querySelector('.table-wrap table tbody');
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

// ---- Exportar CSV (Orders) ----
function initExportButtons() {
  document.querySelectorAll('[data-export]').forEach(btn => {
    btn.addEventListener('click', () => {
      const table = document.querySelector(btn.dataset.export);
      if (table) exportTableToCSV(table, `${document.body.dataset.page}.csv`);
    });
  });
}


/* =====================================================================
   5. INIT
   ===================================================================== */

const PAGE_RENDERERS = {
  inventory:   renderInventory,
  categories:  renderCategorias,
  combos:      renderCombos,
  "stock-movement": renderStockMovements,
  // whats-new y help son estáticos: no necesitan render de datos.
};

document.addEventListener('DOMContentLoaded', () => {
  // Todas estas páginas requieren haber iniciado sesión antes.
  if (!localStorage.getItem('token')) {
    window.location.href = 'login.html';
    return;
  }

  document.getElementById('logout-link')?.addEventListener('click', () => {
    localStorage.removeItem('token');
  });

  initTopbarSearch();
  initHelpSearch();
  initExportButtons();
  initRowActions();
  initProductModal();
  initStockModal();
  initCategoryModal();
  initComboModal();

  const page = document.body.dataset.page;
  const renderer = PAGE_RENDERERS[page];
  if (renderer) renderer();
});