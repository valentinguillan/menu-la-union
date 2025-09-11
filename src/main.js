/* ===================================================================
   Menú La Unión — Lógica de Tabs + Render de productos
   - Este archivo renderiza categorías, productos e imágenes.
   - Si SHEET_CSV_URL tiene un CSV público de Google Sheets, se usa
     la planilla y reemplaza el DATA local (fallback).
   =================================================================== */

// Fallback local mínimo (se usa SOLO si no hay planilla o falla la carga)
const DATA = {
<<<<<<< HEAD
  "Panadería": [
    { nombre: "Facturas", img: "./assets/img/facturas.svg", variantes: [{ etiqueta: "unidad", precio: 900 }, { etiqueta: "1/2 docena", precio: 4800 }, { etiqueta: "docena", precio: 8800 }] },
    { nombre: "Pan (precios por kg)", img: "./assets/img/pan-precios-por-kg.svg", variantes: [{ etiqueta: "kg", precio: 2500 }] },
    { nombre: "Pan rallado", img: "./assets/img/pan-rallado.svg", variantes: [{ etiqueta: "500 g", precio: 1600 }] },
    { nombre: "Pan de pancho x doc", img: "./assets/img/pan-de-pancho-x-doc.svg", variantes: [{ etiqueta: "docena", precio: 3500 }] },
    { nombre: "Pan de salvado", img: "./assets/img/pan-de-salvado.svg", variantes: [{ etiqueta: "pieza", precio: 1900 }] },
    { nombre: "Pan super pancho x doc", img: "./assets/img/pan-super-pancho-x-doc.svg", variantes: [{ etiqueta: "docena", precio: 4200 }] },
    { nombre: "Pan de chip x doc", img: "./assets/img/pan-de-chip-x-doc.svg", variantes: [{ etiqueta: "docena", precio: 4200 }] },
    { nombre: "Pan de miga (feta) x doc", img: "./assets/img/pan-de-miga-feta-x-doc.svg", variantes: [{ etiqueta: "docena", precio: 3000 }] },
    { nombre: "Pan terraza x doc", img: "./assets/img/pan-terraza-x-doc.svg", variantes: [{ etiqueta: "docena", precio: 3600 }] },
    { nombre: "Prepizzas", img: "./assets/img/prepizzas.svg", variantes: [{ etiqueta: "unidad", precio: 1800 }] },
    { nombre: "Tapas empanadas", img: "./assets/img/tapas-empanadas.svg", variantes: [{ etiqueta: "docena", precio: 2600 }] },
    { nombre: "Bizcocho – Criollito", img: "./assets/img/bizcocho-criollito.svg", variantes: [{ etiqueta: "1/4 kg", precio: 1500 }, { etiqueta: "1 kg", precio: 5200 }] },
    { nombre: "Palitos", img: "./assets/img/palitos.svg", variantes: [{ etiqueta: "1/4 kg", precio: 1600 }] },
    { nombre: "Palmeritas", img: "./assets/img/palmeritas.svg", variantes: [{ etiqueta: "1/4 kg", precio: 1700 }] },
    { nombre: "Raspaditas", img: "./assets/img/raspaditas.svg", variantes: [{ etiqueta: "1/4 kg", precio: 1600 }] },
    { nombre: "Chipacas", img: "./assets/img/chipacas.svg", variantes: [{ etiqueta: "1/4 kg", precio: 1600 }] },
    { nombre: "Chipa – Pan de queso", img: "./assets/img/chipa-pan-de-queso.svg", variantes: [{ etiqueta: "1/4 kg", precio: 2400 }] },
    { nombre: "Pepas", img: "./assets/img/pepas.svg", variantes: [{ etiqueta: "1/4 kg", precio: 1700 }] },
    { nombre: "Chocochips", img: "./assets/img/chocochips.svg", variantes: [{ etiqueta: "1/4 kg", precio: 1700 }] },
    { nombre: "Cookies", img: "./assets/img/cookies.svg", variantes: [{ etiqueta: "unidad", precio: 900 }] }
  ],
  "Confitería": [
    { nombre: "Sandwich de lomo", img: "./assets/img/sandwich-de-lomo.svg", variantes: [{ etiqueta: "clásico", precio: 5200 }] },
    { nombre: "Sandwich de milanesa", img: "./assets/img/sandwich-de-milanesa.svg", variantes: [{ etiqueta: "clásico", precio: 4800 }] },
    { nombre: "Hamburguesa", img: "./assets/img/hamburguesa.svg", variantes: [{ etiqueta: "simple", precio: 4200 }, { etiqueta: "doble", precio: 5600 }] },
    { nombre: "Sandwich de queso", img: "./assets/img/sandwich-de-queso.svg", variantes: [{ etiqueta: "simple", precio: 2500 }, { etiqueta: "doble", precio: 3200 }] },
    { nombre: "Sandwich de panceta", img: "./assets/img/sandwich-de-panceta.svg", variantes: [{ etiqueta: "simple", precio: 3500 }, { etiqueta: "doble", precio: 4200 }] },
    { nombre: "Sandwich de fiambre", img: "./assets/img/sandwich-de-fiambre.svg", variantes: [{ etiqueta: "clásico", precio: 2900 }] },
    { nombre: "Sandwich de crudo", img: "./assets/img/sandwich-de-crudo.svg", variantes: [{ etiqueta: "clásico", precio: 3600 }] },
    { nombre: "Sandwich de miga", img: "./assets/img/sandwich-de-miga.svg", variantes: [{ etiqueta: "1/2 docena", precio: 4200 }, { etiqueta: "3 unidades", precio: 2400 }] },
    { nombre: "Chip x3", img: "./assets/img/chip-x3.svg", variantes: [{ etiqueta: "porción", precio: 1500 }] },
    { nombre: "Medialunas x3", img: "./assets/img/medialunas-x3.svg", variantes: [{ etiqueta: "porción", precio: 1500 }] },
    { nombre: "Betitas 1/2", img: "./assets/img/betitas-1-2.svg", variantes: [{ etiqueta: "porción", precio: 1200 }] },
    { nombre: "Sandwich veg", img: "./assets/img/sandwich-veg.svg", variantes: [{ etiqueta: "clásico", precio: 3900 }] },
    { nombre: "Pizza muzzarella", img: "./assets/img/pizza-muzzarella.svg", variantes: [{ etiqueta: "entera", precio: 6500 }] },
    { nombre: "Pizza especial", img: "./assets/img/pizza-especial.svg", variantes: [{ etiqueta: "entera", precio: 7200 }] },
    { nombre: "Papas fritas", img: "./assets/img/papas-fritas.svg", variantes: [{ etiqueta: "porción", precio: 2500 }] }
  ],
  "Pastelería": [
    { nombre: "Alfajores", img: "./assets/img/alfajores.svg", variantes: [{ etiqueta: "unidad", precio: 900 }, { etiqueta: "calafate/ruibarbo", precio: 1100 }, { etiqueta: "6 unidades", precio: 5200 }, { etiqueta: "hojaldre", precio: 1200 }] },
    { nombre: "Chocolates", img: "./assets/img/chocolates.svg", variantes: [{ etiqueta: "1/4 kg", precio: 3500 }, { etiqueta: "1/2 kg", precio: 6500 }, { etiqueta: "1 kg", precio: 12000 }] },
    { nombre: "Brownie", img: "./assets/img/brownie.svg", variantes: [{ etiqueta: "porción", precio: 1400 }] },
    { nombre: "Brownie lingote", img: "./assets/img/brownie-lingote.svg", variantes: [{ etiqueta: "unidad", precio: 2600 }] },
    { nombre: "Chocotorta", img: "./assets/img/chocotorta.svg", variantes: [{ etiqueta: "porción", precio: 1800 }] },
    { nombre: "Crumble", img: "./assets/img/crumble.svg", variantes: [{ etiqueta: "porción", precio: 1800 }] },
    { nombre: "Cheesecake", img: "./assets/img/cheesecake.svg", variantes: [{ etiqueta: "porción", precio: 2000 }] },
    { nombre: "Imperial", img: "./assets/img/imperial.svg", variantes: [{ etiqueta: "porción", precio: 2000 }] },
    { nombre: "Lemon Pie", img: "./assets/img/lemon-pie.svg", variantes: [{ etiqueta: "porción", precio: 2000 }] },
    { nombre: "Milhoja (porción)", img: "./assets/img/milhoja-porci-n.svg", variantes: [{ etiqueta: "porción", precio: 2000 }] },
    { nombre: "Mini Shot", img: "./assets/img/mini-shot.svg", variantes: [{ etiqueta: "unidad", precio: 1200 }] },
    { nombre: "Pastaflora (porción)", img: "./assets/img/pastaflora-porci-n.svg", variantes: [{ etiqueta: "porción", precio: 1600 }] },
    { nombre: "Red Velvet", img: "./assets/img/red-velvet.svg", variantes: [{ etiqueta: "porción", precio: 2200 }] },
    { nombre: "Arrollado", img: "./assets/img/arrollado.svg", variantes: [{ etiqueta: "porción", precio: 1800 }] },
    { nombre: "Tartitas dulce de leche", img: "./assets/img/tartitas-dulce-de-leche.svg", variantes: [{ etiqueta: "unidad", precio: 1200 }] },
    { nombre: "Tartitas ricota", img: "./assets/img/tartitas-ricota.svg", variantes: [{ etiqueta: "unidad", precio: 1200 }] },
    { nombre: "Torta ricota", img: "./assets/img/torta-ricota.svg", variantes: [{ etiqueta: "1 kg", precio: 8000 }, { etiqueta: "1/4", precio: 2400 }] },
    { nombre: "Torta galesa", img: "./assets/img/torta-galesa.svg", variantes: [{ etiqueta: "porción", precio: 2200 }] },
    { nombre: "Torta kg", img: "./assets/img/torta-kg.svg", variantes: [{ etiqueta: "1 kg", precio: 9000 }] },
    { nombre: "Macaron", img: "./assets/img/macaron.svg", variantes: [{ etiqueta: "unidad", precio: 800 }] }
  ],
  "Cafetería": [
    { nombre: "Nestlé: Café", img: "./assets/img/nestl-caf.svg", variantes: [{ etiqueta: "mediano", precio: 1200 }, { etiqueta: "grande", precio: 1500 }] },
    { nombre: "Nestlé: Capuccino", img: "./assets/img/nestl-capuccino.svg", variantes: [{ etiqueta: "mediano", precio: 1400 }, { etiqueta: "grande", precio: 1700 }] },
    { nombre: "Cabrales: Café", img: "./assets/img/cabrales-caf.svg", variantes: [{ etiqueta: "chico", precio: 900 }, { etiqueta: "mediano", precio: 1200 }, { etiqueta: "grande", precio: 1500 }] },
    { nombre: "Cabrales: Submarino", img: "./assets/img/cabrales-submarino.svg", variantes: [{ etiqueta: "taza", precio: 2000 }] }
  ],
  "Bebidas": [
    { nombre: "Exprimido naranja 180cc", img: "./assets/img/exprimido-naranja-180cc.svg", variantes: [{ etiqueta: "vaso", precio: 1600 }] },
    { nombre: "Licuados", img: "./assets/img/licuados.svg", variantes: [{ etiqueta: "vaso", precio: 1800 }] },
    { nombre: "Chocolatada caliente", img: "./assets/img/chocolatada-caliente.svg", variantes: [{ etiqueta: "taza", precio: 1500 }] },
    { nombre: "Ades o Baggio 200cc", img: "./assets/img/ades-o-baggio-200cc.svg", variantes: [{ etiqueta: "caja", precio: 900 }] },
    { nombre: "Agua", img: "./assets/img/agua.svg", variantes: [{ etiqueta: "1.5 L", precio: 1500 }, { etiqueta: "750cc", precio: 1200 }, { etiqueta: "500cc mesa", precio: 900 }, { etiqueta: "500cc estándar", precio: 900 }] },
    { nombre: "Aquarius 500cc", img: "./assets/img/aquarius-500cc.svg", variantes: [{ etiqueta: "botella", precio: 1200 }] },
    { nombre: "Cepita 300cc", img: "./assets/img/cepita-300cc.svg", variantes: [{ etiqueta: "botella", precio: 1000 }] },
    { nombre: "Coca Cola", img: "./assets/img/coca-cola.svg", variantes: [{ etiqueta: "mini lata", precio: 900 }, { etiqueta: "lata 473cc", precio: 1400 }, { etiqueta: "500cc", precio: 1300 }] },
    { nombre: "Levite 500cc", img: "./assets/img/levite-500cc.svg", variantes: [{ etiqueta: "botella", precio: 1100 }] },
    { nombre: "Monster", img: "./assets/img/monster.svg", variantes: [{ etiqueta: "lata", precio: 2200 }] },
    { nombre: "Powerade", img: "./assets/img/powerade.svg", variantes: [{ etiqueta: "botella", precio: 1800 }] },
    { nombre: "Cerveza lata 473cc", img: "./assets/img/cerveza-lata-473cc.svg", variantes: [{ etiqueta: "lata", precio: 1700 }] }
  ]
=======
  "Panadería": [],
  "Confitería": [],
  "Pastelería": [],
  "Cafetería": [],
  "Bebidas": [],
>>>>>>> 6a0317cb2fd63fb706a83e3669910a67c2d4a4c6
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
<<<<<<< HEAD
    img.alt = item.nombre;
=======
    img.alt = item.nombre || "";
>>>>>>> 6a0317cb2fd63fb706a83e3669910a67c2d4a4c6
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
