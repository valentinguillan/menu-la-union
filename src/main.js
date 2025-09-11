/* ===================================================================
   Menú La Unión — Lógica de Tabs + Render de productos
   - Este archivo renderiza categorías, productos e imágenes.
   - Si SHEET_CSV_URL tiene un CSV público de Google Sheets, se usa
     la planilla y reemplaza el DATA local (fallback).
   =================================================================== */

// Fallback local mínimo (se usa SOLO si no hay planilla o falla la carga)
const DATA = {
  "Panadería": [],
  "Confitería": [],
  "Pastelería": [],
  "Cafetería": [],
  "Bebidas": [],
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

    // Imagen
    const figure = document.createElement("figure");
    figure.className = "card-media";
    const img = document.createElement("img");
    img.src = item.img || "./assets/logo.svg";
    img.alt = item.nombre || "";
    img.loading = "lazy";
    figure.appendChild(img);
    card.appendChild(figure);

    // Título
    const title = document.createElement("h3");
    title.textContent = item.nombre || "";
    card.appendChild(title);

    // Variantes con precio
    if (Array.isArray(item.variantes) && item.variantes.length){
      const variants = document.createElement("div");
      variants.className = "variants";
      item.variantes.forEach(v => {
        const chip = document.createElement("span");
        chip.className = "variant";
        const label = typeof v === "string" ? v : v.etiqueta;
        const price = typeof v === "string" ? null : v.precio;
        chip.textContent = price ? `${label} · $ ${price}` : label;
        variants.appendChild(chip);
      });
      card.appendChild(variants);
    } else if (item.precio){
      const p = document.createElement("p");
      p.className = "note";
      p.textContent = `$ ${item.precio}`;
      card.appendChild(p);
    } else {
      const note = document.createElement("p");
      note.className = "note";
      note.textContent = "—";
      card.appendChild(note);
    }

    grid.appendChild(card);
  });

  mount.replaceChildren(grid);
}

// Render inicial (con fallback vacío, hasta que llegue la planilla)
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
   INTEGRACIÓN OPCIONAL CON GOOGLE SHEETS (CSV PÚBLICO)
   ----------------------------------------------------
   1) Publica tu hoja: Archivo → Compartir → Publicar en la web → CSV.
   2) Usa una URL con este formato:
      https://docs.google.com/spreadsheets/d/ID/export?format=csv&gid=GID
   3) Cabeceras OBLIGATORIAS de columnas (exactas):
      - categoria   (Panadería | Confitería | Pastelería | Cafetería | Bebidas)
      - producto    (Nombre del producto, ej: "Sandwich de lomo")
      - variantes   (lista separada por |, cada item puede ser "etiqueta:precio" o solo "etiqueta".
                     Ej: "unidad:900|1/2 docena:4800|docena:8800")
      - img         (opcional: URL absoluta o ruta relativa ./assets/img/archivo.jpg/png/svg)
      - nota        (opcional)
   4) Si una variante trae precio, se muestra como "etiqueta · $ precio".
   5) Si la hoja no carga o la URL está vacía, se usan los datos locales de DATA.
   =================================================================== */

// 👇👇 Tu CSV público (el que me pasaste)
const SHEET_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRInjVdTq9gCZKGcXjfXNEYdfyaD89yYjmQIcH67qbGOwRTlzUUeesIloyGnmhJw9Wcz-YLnZn9mGBl/pub?output=csv";

async function loadFromCSV(url){
  try{
    const res = await fetch(url, { cache: "no-store" });
    if(!res.ok) throw new Error("No se pudo descargar el CSV");
    const csvText = await res.text();

    const lines = csvText.split(/\r?\n/).filter(Boolean);
    const headers = lines.shift().split(",").map(h => h.trim());

    const idx = {
      categoria: headers.indexOf("categoria"),
      producto: headers.indexOf("producto"),
      variantes: headers.indexOf("variantes"),
      img: headers.indexOf("img"),
      nota: headers.indexOf("nota"),
    };

    const nextData = { "Panadería":[], "Confitería":[], "Pastelería":[], "Cafetería":[], "Bebidas":[] };

    for(const raw of lines){
      const cols = raw.split(",");
      const cat = (cols[idx.categoria] || "").trim();
      const prod = (cols[idx.producto] || "").trim();
      const img = (idx.img >= 0 ? (cols[idx.img] || "").trim() : "");
      const nota = (idx.nota >= 0 ? (cols[idx.nota] || "").trim() : "");

      // Variantes "etiqueta:precio|etiqueta:precio"
      const varStr = (cols[idx.variantes] || "").trim();
      const variantes = varStr
        ? varStr.split("|").map(tok => {
            const [etqRaw, precioRaw] = tok.split(":");
            const etq = etqRaw?.trim();
            const precio = precioRaw?.trim();
            if(etq && precio && !Number.isNaN(Number(precio))){
              return { etiqueta: etq, precio: Number(precio) };
            }
            return etq ? { etiqueta: etq } : null;
          }).filter(Boolean)
        : [];

      if(nextData[cat] && prod){
        const entry = { nombre: prod, variantes };
        if(img) entry.img = img;
        if(nota) entry.note = nota;
        nextData[cat].push(entry);
      }
    }

    // Reemplaza DATA y re-renderiza pestaña activa
    Object.keys(nextData).forEach(cat => { DATA[cat] = nextData[cat]; });

    const activeBtn = document.querySelector('.tab.is-active');
    const key = activeBtn ? activeBtn.dataset.target : "panaderia";
    const map = {"panaderia":"Panadería","confiteria":"Confitería","pasteleria":"Pastelería","cafeteria":"Cafetería","bebidas":"Bebidas"};
    renderCategory(map[key], key);
  }catch(err){
    console.warn("CSV no cargado:", err.message);
  }
}

// Activa automáticamente si pegaste una URL
if(SHEET_CSV_URL){
  loadFromCSV(SHEET_CSV_URL);
}
