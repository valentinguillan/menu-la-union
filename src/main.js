/* ===================================================================
   Menú La Unión — Lógica de Tabs + Render de productos
   - Edita el objeto DATA para actualizar rótulos, productos y variantes.
   - Precios: puedes incluirlos dentro de cada variante como string libre.
   =================================================================== */

// Datos locales estáticos (placeholder).
// Usa EXACTAMENTE los rótulos indicados por la marca.
const DATA = {
  "Panadería": [
    { nombre: "Facturas", variantes: ["unidad", "1/2 docena", "docena"] },
    { nombre: "Pan", variantes: ["precios por kg"] },
    { nombre: "Pan rallado", variantes: [] },
    { nombre: "Pan de pancho x doc", variantes: [] },
    { nombre: "Pan de salvado", variantes: [] },
    { nombre: "Pan super pancho x doc", variantes: [] },
    { nombre: "Pan de chip x doc", variantes: [] },
    { nombre: "Pan de miga (feta) x doc", variantes: [] },
    { nombre: "Pan terraza x doc", variantes: [] },
    { nombre: "Prepizzas", variantes: [] },
    { nombre: "Tapas empanadas", variantes: [] },
    { nombre: "Bizcocho – Criollito", variantes: ["1/4 kg", "1 kg"] },
  ],
  "Confitería": [
    { nombre: "Alfajores", variantes: ["unidad", "calafate/ruibarbo", "6 unidades", "hojaldre"] },
    { nombre: "Palitos – Palmeritas", variantes: ["1/4 kg"] },
    { nombre: "Raspadita – Chipaca", variantes: ["1/4 kg"] },
    { nombre: "Chipa – Pan de queso", variantes: ["1/4 kg"] },
    { nombre: "Pepas / Chocochips / Otros", variantes: [] },
    { nombre: "Cookies", variantes: [] },
    { nombre: "Chocolates", variantes: ["1/4 kg", "1/2 kg", "1 kg"] },
  ],
  "Pastelería": [
    { nombre: "Sandwiches", variantes: ["lomo", "milanesa", "hamburguesa", "queso simple/doble", "panceta simple/doble", "fiambre", "crudo", "miga 1/2 doc", "miga 3 unid", "chip x3", "medialunas x3", "betitas 1/2", "veg"] },
    { nombre: "Pizzas", variantes: ["muzzarella", "especial"] },
    { nombre: "Papas fritas porción", variantes: [] },
    { nombre: "Brownie", variantes: [] },
    { nombre: "Brownie lingote", variantes: [] },
    { nombre: "Chocotorta", variantes: [] },
    { nombre: "Crumble", variantes: [] },
    { nombre: "Cheesecake", variantes: [] },
    { nombre: "Imperial", variantes: [] },
    { nombre: "Lemon Pie", variantes: [] },
    { nombre: "Milhoja (porción)", variantes: [] },
    { nombre: "Mini Shot", variantes: [] },
    { nombre: "Pastaflora (porción)", variantes: [] },
    { nombre: "Red Velvet", variantes: [] },
    { nombre: "Arrollado", variantes: [] },
    { nombre: "Tartitas dulce de leche", variantes: [] },
    { nombre: "Tartitas ricota", variantes: [] },
    { nombre: "Torta ricota", variantes: ["1 kg", "1/4"] },
    { nombre: "Torta galesa", variantes: [] },
    { nombre: "Torta kg", variantes: [] },
    { nombre: "Macaron", variantes: [] },
  ],
  "Cafetería": [
    { nombre: "Nestlé: Café", variantes: ["mediano", "grande"] },
    { nombre: "Nestlé: Capuccino", variantes: ["mediano", "grande"] },
    { nombre: "Cabrales: Café", variantes: ["chico", "mediano", "grande"] },
    { nombre: "Cabrales: Submarino", variantes: [] },
  ],
  "Bebidas": [
    { nombre: "Exprimido naranja 180cc", variantes: [] },
    { nombre: "Licuados", variantes: [] },
    { nombre: "Chocolatada caliente", variantes: [] },
    { nombre: "Ades o Baggio 200cc", variantes: [] },
    { nombre: "Agua", variantes: ["1.5 L", "750cc", "500cc mesa", "500cc estándar"] },
    { nombre: "Aquarius 500cc", variantes: [] },
    { nombre: "Cepita 300cc", variantes: [] },
    { nombre: "Coca Cola", variantes: ["mini lata", "lata 473cc", "500cc"] },
    { nombre: "Levite 500cc", variantes: [] },
    { nombre: "Monster", variantes: [] },
    { nombre: "Powerade", variantes: [] },
    { nombre: "Cerveza lata 473cc", variantes: [] },
  ],
};

/* ----------------------- Render Helpers ----------------------- */
const panels = {
  "panaderia": document.getElementById("panel-panaderia"),
  "confiteria": document.getElementById("panel-confiteria"),
  "pasteleria": document.getElementById("panel-pasteleria"),
  "cafeteria": document.getElementById("panel-cafeteria"),
  "bebidas": document.getElementById("panel-bebidas"),
};

function renderCategory(nombreCategoria, targetId){
  const list = DATA[nombreCategoria] || [];
  const mount = panels[targetId];
  if(!mount) return;

  const grid = document.createElement("div");
  grid.className = "cards";

  list.forEach(item => {
    const card = document.createElement("article");
    card.className = "card";
    const title = document.createElement("h3");
    title.textContent = item.nombre;
    card.appendChild(title);

    if(Array.isArray(item.variantes) && item.variantes.length){
      const variants = document.createElement("div");
      variants.className = "variants";
      item.variantes.forEach(v => {
        const chip = document.createElement("span");
        chip.className = "variant";
        chip.textContent = v;
        variants.appendChild(chip);
      });
      card.appendChild(variants);
    }else{
      const note = document.createElement("p");
      note.className = "note";
      note.textContent = "—";
      card.appendChild(note);
    }

    grid.appendChild(card);
  });

  mount.replaceChildren(grid);
}

// Render inicial
renderCategory("Panadería", "panaderia");
renderCategory("Confitería", "confiteria");
renderCategory("Pastelería", "pasteleria");
renderCategory("Cafetería", "cafeteria");
renderCategory("Bebidas", "bebidas");

/* ----------------------- Tabs accesibles ----------------------- */
const tabButtons = Array.from(document.querySelectorAll('[role="tab"]'));
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function activateTab(targetKey, setHash=true){
  // targetKey coincide con IDs (#panaderia, etc.) y con data-target de tabs
  tabButtons.forEach(btn => {
    const isActive = btn.dataset.target === targetKey;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
    if(isActive) btn.focus({preventScroll:true});
  });
  tabPanels.forEach(p => p.classList.toggle("is-active", p.id === `panel-${targetKey}`));
  if(setHash) history.replaceState(null, "", `#${targetKey}`);
}

function handleClickTab(e){
  const key = e.currentTarget.dataset.target;
  activateTab(key);
}

tabButtons.forEach(b => b.addEventListener("click", handleClickTab));

// Teclado: ←/→ rota tabs; Home/End salta a extremos
function onTabKeydown(e){
  const idx = tabButtons.indexOf(e.currentTarget);
  if(idx === -1) return;
  let nextIdx = idx;

  switch(e.key){
    case "ArrowRight": nextIdx = (idx + 1) % tabButtons.length; break;
    case "ArrowLeft": nextIdx = (idx - 1 + tabButtons.length) % tabButtons.length; break;
    case "Home": nextIdx = 0; break;
    case "End": nextIdx = tabButtons.length - 1; break;
    default: return;
  }
  e.preventDefault();
  const next = tabButtons[nextIdx];
  next.focus();
  next.click();
}
tabButtons.forEach(b => b.addEventListener("keydown", onTabKeydown));

/* ----------------------- Deep-links ----------------------- */
function initFromHash(){
  const hash = (location.hash || "").replace("#","");
  const valid = ["panaderia","confiteria","pasteleria","cafeteria","bebidas"];
  if(valid.includes(hash)){
    activateTab(hash, /*setHash*/false);
  }else{
    activateTab("panaderia", /*setHash*/false);
  }
}
window.addEventListener("hashchange", initFromHash);
initFromHash();

/* ===================================================================
   FUTURA INTEGRACIÓN: Google Sheets (CSV público)  — NO implementado
   -------------------------------------------------------------------
   1) Publica tu hoja de cálculo como CSV accesible públicamente.
   2) Estructura sugerida de columnas (con encabezados exactos):
      - categoria   (Texto EXACTO: Panadería, Confitería, Pastelería, Cafetería, Bebidas)
      - producto    (Nombre del producto, ej: "Facturas")
      - variantes   (Lista separada por |, ej: "unidad|1/2 docena|docena")
      - nota        (Opcional; texto libre)
   3) Cada fila representa un producto (o subproducto).

   Ejemplo de fila:
   categoria=Panadería, producto=Facturas, variantes="unidad|1/2 docena|docena"

   A futuro, puedes reemplazar el objeto DATA leyendo desde CSV con:
==================================================================== */

/*
async function loadFromCSV(url){
  // Descarga el CSV (debe ser público). SIN librerías externas.
  const res = await fetch(url);
  const csvText = await res.text();

  // Parseo mínimo del CSV (asume separador coma y sin comillas escapadas complejas).
  const lines = csvText.split(/\r?\n/).filter(Boolean);
  const headers = lines.shift().split(",");

  const idx = {
    categoria: headers.indexOf("categoria"),
    producto: headers.indexOf("producto"),
    variantes: headers.indexOf("variantes"),
    nota: headers.indexOf("nota"),
  };

  const nextData = { "Panadería":[], "Confitería":[], "Pastelería":[], "Cafetería":[], "Bebidas":[] };

  for(const line of lines){
    const cols = line.split(",");
    const cat = cols[idx.categoria]?.trim();
    const prod = cols[idx.producto]?.trim();
    const vars = (cols[idx.variantes] || "").split("|").map(s => s.trim()).filter(Boolean);
    const note = cols[idx.nota]?.trim();

    if(nextData[cat]){
      const entry = { nombre: prod, variantes: vars };
      if(note) entry.note = note;
      nextData[cat].push(entry);
    }
  }

  // Reemplaza DATA y re-renderiza
  Object.keys(nextData).forEach(cat => {
    DATA[cat] = nextData[cat];
  });

  // Re-render de la pestaña activa
  const activeBtn = document.querySelector('.tab.is-active');
  if(activeBtn){
    const key = activeBtn.dataset.target;
    const map = {
      "panaderia":"Panadería",
      "confiteria":"Confitería",
      "pasteleria":"Pastelería",
      "cafeteria":"Cafetería",
      "bebidas":"Bebidas",
    };
    renderCategory(map[key], key);
  }
}

// Para usarlo en el futuro:
// loadFromCSV('https://docs.google.com/spreadsheets/d/.../pub?output=csv');
*/

