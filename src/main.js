/* ===================================================================
   Menú La Unión — Lógica de Tabs + Render de productos
   - Datos locales con imágenes y precios en ARS.
   - SIN planilla externa para evitar problemas de parseo.
   =================================================================== */

// Datos locales
const DATA = {
  "Panadería": [
    { nombre: "Facturas", img: "./assets/img/facturas.jpg", variantes: [
      { etiqueta: "Unidad", precio: 1500 },
      { etiqueta: "1/2 Docena", precio: 7500 },
      { etiqueta: "Docena", precio: 14000 }
    ]},
    { nombre: "Churros", img: "./assets/img/churros.jpg", variantes: [
      { etiqueta: "Unidad", precio: 1500 },
      { etiqueta: "1/2 Docena", precio: 7500 },
      { etiqueta: "Docena", precio: 14000 }
    ]},
    { nombre: "Pan", img: "./assets/img/pan.jpg", variantes: [
      { etiqueta: "Kg", precio: 3000 }
    ]},
    { nombre: "Bizcocho – Criollito", img: "./assets/img/bizcocho-criollito.jpg", variantes: [
      { etiqueta: "1/4 Kg", precio: 5000 }
    ]},
        { nombre: "Palmeritas", img: "./assets/img/palmeritas.jpg", variantes: [
      { etiqueta: "1/4 Kg", precio: 5000 }
    ]},
    { nombre: "Chipa – Pan de queso", img: "./assets/img/chipa-pan-de-queso.jpg", variantes: [
      { etiqueta: "1/4 Kg", precio: 7000 }
    ]}
  ],
  "Confitería": [
    { nombre: "Combo Sandwich de Milanesa", img: "./assets/img/combo-de-milanesa.jpg", variantes: [
      { etiqueta: "Milanesa + Fritas + Bebida", precio: 26000 }/*,
      { etiqueta: "+ Helado Soft", precio: 1000 }*/
    ]},
    { nombre: "Combo Sandwich de Lomo", img: "./assets/img/combo-de-lomo.jpg", variantes: [
      { etiqueta: "Lomo + Fritas + Bebida", precio: 28000 }/*,
      { etiqueta: "+ Helado Soft", precio: 1000 }*/
    ]},
    { nombre: "Combo Hamburguesa", img: "./assets/img/combo-de-hamburguesa.jpg", variantes: [
      { etiqueta: "Hamburguesa Simple + Fritas + Bebida", precio: 17000 }/*,
      { etiqueta: "+ Helado Soft", precio: 1000 }*/
    ]},
    { nombre: "Sandwich de Lomo", img: "./assets/img/sandwich-de-lomo.jpg", variantes: [
      { etiqueta: "Clásico", precio: 24000 }
    ]},
    { nombre: "Sandwich de Milanesa", img: "./assets/img/sandwich-de-milanesa.jpg", variantes: [
      { etiqueta: "Clásico", precio: 22000 }
    ]},
    { nombre: "Sandwich de Hamburguesa Paty", img: "./assets/img/sandwich-hamburguesa.jpg", variantes: [
      { etiqueta: "Clásico", precio: 18500 }
    ]},
    { nombre: "La Unión con Queso", img: "./assets/img/sandwich-queso.jpg", variantes: [
      { etiqueta: "Simple", precio: 14000 },
      { etiqueta: "Doble", precio: 18000 }
    ]},
    { nombre: "La Unión con Panceta", img: "./assets/img/sandwich-panceta.jpg", variantes: [
      { etiqueta: "Simple", precio: 17000 },
      { etiqueta: "Doble", precio: 21000 }
    ]},
    { nombre: "Sandwich de Fiambre", img: "./assets/img/sandwich-fiambre.jpg", variantes: [
      { etiqueta: "Clásico", precio: 9000 }
    ]},
    { nombre: "Sandwich de Crudo", img: "./assets/img/sandwich-crudo.jpg", variantes: [
      { etiqueta: "Clásico", precio: 17000 }
    ]},
    { nombre: "Sandwich de Miga", img: "./assets/img/sandwich-miga.jpg", variantes: [
      { etiqueta: "Jamón y Queso · 1/2 Docena", precio: 18000 },
      { etiqueta: "Jamón y Queso · 3 Unidades", precio: 10000 },
      { etiqueta: "Otros sabores", precio: "Consultar" }
    ]},
    { nombre: "Chips con jamón y queso", img: "./assets/img/sandwich-chip.jpg", variantes: [
      { etiqueta: "3 Unidades", precio: 7000 }
    ]},
    { nombre: "Medialuna con jamón y queso", img: "./assets/img/sandwich-medialunas.jpg", variantes: [
      { etiqueta: "Unidad", precio: 3500 }
    ]},
    { nombre: "Sandwich Betitas", img: "./assets/img/sandwich-betitas.jpg", variantes: [
      { etiqueta: "1/2", precio: 12000 }
    ]},
    { nombre: "Sandwich Vegetariano", img: "./assets/img/sandwich-veg.jpg", variantes: [
      { etiqueta: "Clásico", precio: 16000 }
    ]},
    { nombre: "Pizza Muzzarella", img: "./assets/img/pizza-muzzarella.jpg", variantes: [
      { etiqueta: "Entera", precio: 18000 }
    ]},
    { nombre: "Pizza Napolitana", img: "./assets/img/pizza-especial.jpg", variantes: [
      { etiqueta: "Entera", precio: 21000 }
    ]},
    { nombre: "Papas Fritas", img: "./assets/img/papas-fritas.jpg", variantes: [
      { etiqueta: "Porción", precio: 7000 }
    ]},
    /*{ nombre: "Menú", img: "./assets/img/menu.jpg", variantes: [
      { etiqueta: "Plato", precio: 15000 }
    ]},*/
    { nombre: "Empanadas", img: "./assets/img/empanadas.jpg", variantes: [
      { etiqueta: "Docena", precio: 32000 },
      { etiqueta: "Media Docena", precio: 18000 },
      { etiqueta: "Unidad", precio: 3000 },
      { etiqueta: "Cordero", precio: 3500 }
    ]}
  ],
  "Pastelería": [
    { nombre: "Alfajores", img: "./assets/img/alfajores.jpg", variantes: [
      { etiqueta: "Unidad", precio: 3500 },
      { etiqueta: "6 Unidades", precio: 18000 },
      { etiqueta: "Hojaldre", precio: 5000 }
    ]},
    { nombre: "Chocolates", img: "./assets/img/chocolates.jpg", variantes: [
      { etiqueta: "1/4 Kg", precio: 25000 },
      { etiqueta: "1/2 Kg", precio: 50000 },
      { etiqueta: "1 Kg", precio: 100000 }
    ]},
    { nombre: "Arrollado", img: "./assets/img/arrollado.jpg", variantes: [
      { etiqueta: "Porción", precio: 15000 }
    ]},
    { nombre: "Brownie", img: "./assets/img/brownie.jpg", variantes: [
      { etiqueta: "Porción", precio: 7000 }
    ]},
    { nombre: "Brownie Lingote", img: "./assets/img/brownie-lingote.jpg", variantes: [
      { etiqueta: "Unidad", precio: 9000 }
    ]},
    { nombre: "Chocotorta", img: "./assets/img/chocotorta.jpg", variantes: [
      { etiqueta: "Porción", precio: 9000 }
    ]},
    { nombre: "Crumble", img: "./assets/img/crumble.jpg", variantes: [
      { etiqueta: "Porción", precio: 7000 }
    ]},
    { nombre: "Cheesecake", img: "./assets/img/cheesecake.jpg", variantes: [
      { etiqueta: "Porción", precio: 11000 }
    ]},
    { nombre: "Imperial", img: "./assets/img/imperial.jpg", variantes: [
      { etiqueta: "Porción", precio: 15000 }
    ]},
    { nombre: "Lemon Pie", img: "./assets/img/lemon-pie.jpg", variantes: [
      { etiqueta: "Porción", precio: 7000 }
    ]},
    { nombre: "Milhoja", img: "./assets/img/milhoja.jpg", variantes: [
      { etiqueta: "Porción", precio: 6000 }
    ]},
    { nombre: "Pastaflora", img: "./assets/img/pastaflora.jpg", variantes: [
      { etiqueta: "Porción", precio: 3500 }
    ]},
    { nombre: "Red Velvet", img: "./assets/img/red-velvet.jpg", variantes: [
      { etiqueta: "Porción", precio: 9000 }
    ]},
    { nombre: "Tartita de Ricota", img: "./assets/img/tartita-ricota.jpg", variantes: [
      { etiqueta: "Unidad", precio: 7000 }
    ]},
    { nombre: "Torta Galesa", img: "./assets/img/torta-galesa.jpg", variantes: [
      { etiqueta: "1 Kg", precio: 30000 }
    ]},
    { nombre: "Torta Kg", img: "./assets/img/torta.jpg", variantes: [
      { etiqueta: "1 Kg", precio: 40000 }
    ]},
    { nombre: "Macaron", img: "./assets/img/macaron.jpg", variantes: [
      { etiqueta: "Unidad", precio: 3500 }
    ]},
    { nombre: "Cookies", img: "./assets/img/cookies.jpg", variantes: [
      { etiqueta: "Unidad", precio: 7000 }
    ]}
  ],
  "Cafetería": [
    { nombre: "Nestlé: Café", variantes: [
      { etiqueta: "Mediano", precio: 5000 },
      { etiqueta: "Grande", precio: 7000 },
      { etiqueta: "Capuccino Mediano", precio: 5000 },
      { etiqueta: "Capuccino Grande", precio: 7000 }
    ]},
       { nombre: "Cabrales: Café", variantes: [
      { etiqueta: "Chico", precio: 3500 },
      { etiqueta: "Mediano", precio: 5000 },
      { etiqueta: "Grande", precio: 7000 }
    ]},
    { nombre: "Cabrales: Submarino", variantes: [
      { etiqueta: "Taza", precio: 7000 }
    ]},
    { nombre: "Exprimido Naranja 180cc", variantes: [
      { etiqueta: "Vaso", precio: 7000 }
    ]},
    { nombre: "Licuados", variantes: [
      { etiqueta: "Vaso", precio: 8000 }
    ]}
  ],
  "Bebidas": [
    { nombre: "Ades o Baggio 200cc", variantes: [
      { etiqueta: "Caja", precio: 1500 }
    ]},
    { nombre: "Agua", variantes: [
      { etiqueta: "1.5 L", precio: 4000 },
      { etiqueta: "750cc (sports)", precio: 2800 },
      { etiqueta: "500cc estándar", precio: 2500 },
      { etiqueta: "500cc mesa (local)", precio: 1500 }
    ]},
    { nombre: "Aquarius 500cc", variantes: [
      { etiqueta: "Botella", precio: 3000 }
    ]},
    { nombre: "Cepita 300cc", variantes: [
      { etiqueta: "Botella", precio: 1500 }
    ]},
    { nombre: "Coca Cola", variantes: [
      { etiqueta: "Mini lata", precio: 2500 },
      { etiqueta: "Lata 473cc", precio: 3000 },
      { etiqueta: "500cc", precio: 3500 }
    ]},
    { nombre: "Levite", variantes: [
      { etiqueta: "Botella 500cc", precio: 3000 }
    ]},
    { nombre: "Monster", variantes: [
      { etiqueta: "Lata", precio: 5000 }
    ]},
    { nombre: "Powerade", variantes: [
      { etiqueta: "Botella", precio: 4500 }
    ]},
    { nombre: "Cerveza", variantes: [
      { etiqueta: "Lata 473cc", precio: 3700 }
    ]},
  ],
  "SIN TACC": [
   { nombre: "Empanadas", img: "./assets/img/empanadasintac.jpg", variantes: [ 
    { etiqueta: "Carne", precio: 4000 },
    { etiqueta: "Jamón y Queso", precio: 4000 },
    { etiqueta: "Verdura", precio: 4000 }
  ]},
  { nombre: "Muffins", img: "./assets/img/muffins.jpg", variantes: [ 
    { etiqueta: "Unidad", precio: 4500 } 
  ]},
  { nombre: "Medialunas", img: "./assets/img/medialunas-sin-tacc.jpg", variantes: [ 
    { etiqueta: "Unidad", precio: 3500 } 
  ]}, 
  { nombre: "Alfajor de Maicena", variantes: [ 
    { etiqueta: "Unidad", precio: 5000 } 
  ]},
  { nombre: "Budín de Limón", variantes: [ 
    { etiqueta: "Unidad", precio: 5200 } 
  ]},
  { nombre: "Bocadito de Vainilla", variantes: [ 
    { etiqueta: "Unidad", precio: 2500 } 
  ]},
  { nombre: "Brownie", variantes: [ 
    { etiqueta: "Unidad", precio: 4500 },
    { etiqueta: "Porción grande", precio: 10000 }
  ]},
  { nombre: "Alfajor de Coco + Dulce de Leche", variantes: [ 
    { etiqueta: "Unidad", precio: 8500 } 
  ]},
  ],
 };

/* ----------------------- Render Helpers ----------------------- */
const panels = {
  "panaderia": document.getElementById("panel-panaderia"),
  "confiteria": document.getElementById("panel-confiteria"),
  "pasteleria": document.getElementById("panel-pasteleria"),
  "cafeteria": document.getElementById("panel-cafeteria"),
  "bebidas": document.getElementById("panel-bebidas"),
  "sin-tacc": document.getElementById("panel-sin-tacc"),
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
    if (item.img) {
  const figure = document.createElement("figure");
  figure.className = "card-media";

  const img = document.createElement("img");
  img.src = item.img;
  img.alt = item.nombre || "";
  img.loading = "lazy";
  img.decoding = "async";
  img.addEventListener("error", () => figure.remove());

  figure.appendChild(img);
  card.appendChild(figure);
}

    // Título
    const title = document.createElement("h3");
    title.textContent = item.nombre || "";
    card.appendChild(title);

    // Variantes con precio
    if (Array.isArray(item.variantes) && item.variantes.length){
      const variants = document.createElement("div");
      variants.className = "variants";
      item.variantes.forEach(v => {
        const row = document.createElement("div");
        row.className = "variant";

        const label = document.createElement("span");
        label.className = "variant-label";
        label.textContent = v.etiqueta;

        const price = document.createElement("span");
        price.className = "variant-price";
        price.textContent = typeof v.precio === "number"
          ? `$ ${new Intl.NumberFormat("es-AR").format(v.precio)}`
          : v.precio;

        row.append(label, price);
        variants.appendChild(row);
      });
      card.appendChild(variants);
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

// Render inicial
renderCategory("Panadería", "panaderia");
renderCategory("Confitería", "confiteria");
renderCategory("Pastelería", "pasteleria");
renderCategory("Cafetería", "cafeteria");
renderCategory("Bebidas", "bebidas");
renderCategory("SIN TACC", "sin-tacc");

/* ----------------------- Tabs accesibles ----------------------- */
const tabButtons = Array.from(document.querySelectorAll('[role="tab"]'));
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function activateTab(targetKey, setHash=true, moveFocus=false){
  tabButtons.forEach(btn => {
    const isActive = btn.dataset.target === targetKey;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-selected", String(isActive));
    btn.tabIndex = isActive ? 0 : -1;
    if(isActive && moveFocus){
      btn.focus({preventScroll:true});
      btn.scrollIntoView({behavior:"smooth", block:"nearest", inline:"center"});
    }
  });
  tabPanels.forEach(p => {
    const isActive = p.id === `panel-${targetKey}`;
    p.classList.toggle("is-active", isActive);
    p.hidden = !isActive;
  });
  if(setHash) history.replaceState(null, "", `#${targetKey}`);
}

function handleClickTab(e){
  const key = e.currentTarget.dataset.target;
  activateTab(key, true, true);
}
tabButtons.forEach(b => b.addEventListener("click", handleClickTab));

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
  activateTab(next.dataset.target, true, true);
}
tabButtons.forEach(b => b.addEventListener("keydown", onTabKeydown));

function initFromHash(){
  const hash = (location.hash || "").replace("#","");
  const valid = ["panaderia","confiteria","pasteleria","cafeteria","bebidas","sin-tacc"];
  if(valid.includes(hash)){ activateTab(hash, false); }
  else { activateTab("panaderia", false); }
}
window.addEventListener("hashchange", initFromHash);
initFromHash();
