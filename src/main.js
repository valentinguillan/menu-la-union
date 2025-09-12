/* ===================================================================
   Menú La Unión — Lógica de Tabs + Render de productos
   - Datos locales con imágenes y precios en ARS.
   - SIN planilla externa para evitar problemas de parseo.
   =================================================================== */

// Datos locales
const DATA = {
  "Panadería": [
    { nombre: "Facturas", img: "./assets/img/facturas.jpg", variantes: [
      { etiqueta: "Unidad", precio: 1100 },
      { etiqueta: "1/2 Docena", precio: 6400 },
      { etiqueta: "Docena", precio: 11200 }
    ]},
    { nombre: "Churros", img: "./assets/img/churros.jpg", variantes: [
      { etiqueta: "Unidad", precio: 1100 },
      { etiqueta: "1/2 Docena", precio: 6400 },
      { etiqueta: "Docena", precio: 11200 }
    ]},
    { nombre: "Pan", img: "./assets/img/pan.jpg", variantes: [
      { etiqueta: "Kg", precio: 2800 }
    ]},
    { nombre: "Bizcocho – Criollito", img: "./assets/img/bizcocho-criollito.jpg", variantes: [
      { etiqueta: "1/4 Kg", precio: 4000 },
      { etiqueta: "1 Kg", precio: 16000 }
    ]},
        { nombre: "Palmeritas", img: "./assets/img/palmeritas.jpg", variantes: [
      { etiqueta: "1/4 Kg", precio: 4000 }
    ]},
    { nombre: "Chipa – Pan de queso", img: "./assets/img/chipa-pan-de-queso.jpg", variantes: [
      { etiqueta: "1/4 Kg", precio: 5000 }
    ]},
    { nombre: "Cookies", img: "./assets/img/cookies.jpg", variantes: [
      { etiqueta: "Unidad", precio: 5500 }
    ]}
  ],
  "Confitería": [
    { nombre: "Sandwich de Lomo", img: "./assets/img/sandwich-de-lomo.jpg", variantes: [
      { etiqueta: "Clásico", precio: 17500 }
    ]},
    { nombre: "Sandwich de Milanesa", img: "./assets/img/sandwich-de-milanesa.jpg", variantes: [
      { etiqueta: "Clásico", precio: 16500 }
    ]},
    { nombre: "Sandwich de hamburguesa Paty", img: "./assets/img/sandwich-hamburguesa.jpg", variantes: [
      { etiqueta: "Clásico", precio: 14000 }
    ]},
    { nombre: "La Unión con Queso", img: "./assets/img/sandwich-queso.jpg", variantes: [
      { etiqueta: "Simple", precio: 11000 },
      { etiqueta: "Doble", precio: 14000 }
    ]},
    { nombre: "La Unión con Panceta", img: "./assets/img/sandwich-panceta.jpg", variantes: [
      { etiqueta: "Simple", precio: 12500 },
      { etiqueta: "Doble", precio: 15500 }
    ]},
    { nombre: "Sandwich de Fiambre", img: "./assets/img/sandwich-fiambre.jpg", variantes: [
      { etiqueta: "Clásico", precio: 7000 }
    ]},
    { nombre: "Sandwich de Crudo", img: "./assets/img/sandwich-crudo.jpg", variantes: [
      { etiqueta: "Clásico", precio: 13000 }
    ]},
    { nombre: "Sandwich de Miga", img: "./assets/img/sandwich-miga.jpg", variantes: [
      { etiqueta: "1/2 Docena", precio: 15000 },
      { etiqueta: "3 Unidades", precio: 8500 }
    ]},
    { nombre: "Sandwich Chip", img: "./assets/img/sandwich-chip.jpg", variantes: [
      { etiqueta: "3 Unidades", precio: 4500 }
    ]},
    { nombre: "Sandwich Medialunas", img: "./assets/img/sandwich-medialunas.jpg", variantes: [
      { etiqueta: "3 Unidades", precio: 7000 }
    ]},
    { nombre: "Sandwich Betitas", img: "./assets/img/sandwich-betitas.jpg", variantes: [
      { etiqueta: "1/2 Docena", precio: 9000 }
    ]},
    { nombre: "Sandwich Vegano", img: "./assets/img/sandwich-veg.jpg", variantes: [
      { etiqueta: "Clásico", precio: 11000 }
    ]},
    { nombre: "Pizza Muzzarella", img: "./assets/img/pizza-muzzarella.jpg", variantes: [
      { etiqueta: "Entera", precio: 14000 }
    ]},
    { nombre: "Pizza Especial", img: "./assets/img/pizza-especial.jpg", variantes: [
      { etiqueta: "Entera", precio: 18000 }
    ]},
    { nombre: "Papas Fritas", img: "./assets/img/papas-fritas.jpg", variantes: [
      { etiqueta: "Porción", precio: 4700 }
    ]},
    { nombre: "Menú", img: "./assets/img/menu.jpg", variantes: [
      { etiqueta: "Plato", precio: 12000 }
    ]},
    { nombre: "Empanadas", img: "./assets/img/empanadas.jpg", variantes: [
      { etiqueta: "Docena", precio: 23000 },
      { etiqueta: "Media Docena", precio: 13000 },
      { etiqueta: "Unidad", precio: 2200 },
      { etiqueta: "Cordero", precio: 3000 }
    ]}
  ],
  "Pastelería": [
    { nombre: "Alfajores", img: "./assets/img/alfajores.jpg", variantes: [
      { etiqueta: "Unidad", precio: 2600 },
      { etiqueta: "6 Unidades", precio: 15000 },
      { etiqueta: "Hojaldre", precio: 3000 }
    ]},
    { nombre: "Chocolates", img: "./assets/img/chocolates.jpg", variantes: [
      { etiqueta: "1/4 Kg", precio: 20000 },
      { etiqueta: "1/2 Kg", precio: 40000 },
      { etiqueta: "1 Kg", precio: 80000 }
    ]},
    { nombre: "Arrollado", img: "./assets/img/arrollado.jpg", variantes: [
      { etiqueta: "Porción", precio: 10000 }
    ]},
    { nombre: "Brownie", img: "./assets/img/brownie.jpg", variantes: [
      { etiqueta: "Porción", precio: 5500 }
    ]},
    { nombre: "Brownie Lingote", img: "./assets/img/brownie-lingote.jpg", variantes: [
      { etiqueta: "Unidad", precio: 7000 }
    ]},
    { nombre: "Chocotorta", img: "./assets/img/chocotorta.jpg", variantes: [
      { etiqueta: "Porción", precio: 7000 }
    ]},
    { nombre: "Crumble", img: "./assets/img/crumble.jpg", variantes: [
      { etiqueta: "Porción", precio: 5500 }
    ]},
    { nombre: "Cheesecake", img: "./assets/img/cheesecake.jpg", variantes: [
      { etiqueta: "Porción", precio: 8500 }
    ]},
    { nombre: "Imperial", img: "./assets/img/imperial.jpg", variantes: [
      { etiqueta: "Porción", precio: 1200 }
    ]},
    { nombre: "Lemon Pie", img: "./assets/img/lemon-pie.jpg", variantes: [
      { etiqueta: "Porción", precio: 5500 }
    ]},
    { nombre: "Milhoja", img: "./assets/img/milhoja.jpg", variantes: [
      { etiqueta: "Porción", precio: 4500 }
    ]},
    { nombre: "Mini Shot", img: "./assets/img/mini-shot.jpg", variantes: [
      { etiqueta: "Unidad", precio: 2500 }
    ]},
    { nombre: "Pastaflora", img: "./assets/img/pastaflora.jpg", variantes: [
      { etiqueta: "Porción", precio: 2500 }
    ]},
    { nombre: "Red Velvet", img: "./assets/img/red-velvet.jpg", variantes: [
      { etiqueta: "Porción", precio: 7000 }
    ]},
    { nombre: "Tartitas Dulce de Leche", img: "./assets/img/tartita-dulce-leche.jpg", variantes: [
      { etiqueta: "Unidad", precio: 4500 }
    ]},
    { nombre: "Tartitas Ricota", img: "./assets/img/tartita-ricota.jpg", variantes: [
      { etiqueta: "Unidad", precio: 5500 }
    ]},
    { nombre: "Torta Ricota", img: "./assets/img/torta-ricota.jpg", variantes: [
      { etiqueta: "Porción", precio: 10000 }
    ]},
    { nombre: "Torta Galesa", img: "./assets/img/torta-galesa.jpg", variantes: [
      { etiqueta: "1 Kg", precio: 26000 }
    ]},
    { nombre: "Torta Kg", img: "./assets/img/torta.jpg", variantes: [
      { etiqueta: "1 Kg", precio: 35000 }
    ]},
    { nombre: "Macaron", img: "./assets/img/macaron.jpg", variantes: [
      { etiqueta: "Unidad", precio: 2500 }
    ]}
  ],
  "Cafetería": [
    { nombre: "Nestlé: Café", img: "./assets/img/nestle-cafe.´jpg", variantes: [
      { etiqueta: "Mediano", precio: 3800 },
      { etiqueta: "Grande", precio: 5900 }
    ]},
       { nombre: "Cabrales: Café", img: "./assets/img/cabrales-cafe.jpg", variantes: [
      { etiqueta: "Chico", precio: 2500 },
      { etiqueta: "Mediano", precio: 3800 },
      { etiqueta: "Grande", precio: 5900 }
    ]},
    { nombre: "Cabrales: Submarino", img: "./assets/img/cabrales-submarino.jpg", variantes: [
      { etiqueta: "Taza", precio: 5900 }
    ]}
  ],
  "Bebidas": [
    { nombre: "Exprimido Naranja 180cc", img: "./assets/img/exprimido-naranja.jpg", variantes: [
      { etiqueta: "Vaso", precio: 5000 }
    ]},
    { nombre: "Licuados", img: "./assets/img/licuados.´jpg", variantes: [
      { etiqueta: "Vaso", precio: 6000 }
    ]},
    { nombre: "Chocolatada caliente", img: "./assets/img/chocolatada.jpg", variantes: [
      { etiqueta: "Taza", precio: 5900 }
    ]},
    { nombre: "Ades o Baggio 200cc", img: "./assets/img/ades-baggio.jpg", variantes: [
      { etiqueta: "Caja", precio: 1100 }
    ]},
    { nombre: "Agua", img: "./assets/img/agua.jpg", variantes: [
      { etiqueta: "1.5 L", precio: 3300 },
      { etiqueta: "750cc (sports)", precio: 2200 },
      { etiqueta: "500cc estándar", precio: 1800 },
      { etiqueta: "500cc mesa (local)", precio: 1500 }
    ]},
    { nombre: "Aquarius 500cc", img: "./assets/img/aquarius.jpg", variantes: [
      { etiqueta: "Botella", precio: 2200 }
    ]},
    { nombre: "Cepita 300cc", img: "./assets/img/cepita.jpg", variantes: [
      { etiqueta: "Botella", precio: 1200 }
    ]},
    { nombre: "Coca Cola", img: "./assets/img/coca-cola.jpg", variantes: [
      { etiqueta: "Mini lata", precio: 1400 },
      { etiqueta: "Lata 473cc", precio: 1800 },
      { etiqueta: "500cc", precio: 2400 }
    ]},
    { nombre: "Levite", img: "./assets/img/levite.jpg", variantes: [
      { etiqueta: "Botella 500cc", precio: 2200 }
    ]},
    { nombre: "Monster", img: "./assets/img/monster.jpg", variantes: [
      { etiqueta: "Lata", precio: 3800 }
    ]},
    { nombre: "Powerade", img: "./assets/img/powerade.jpg", variantes: [
      { etiqueta: "Botella", precio: 3000 }
    ]},
    { nombre: "Cerveza", img: "./assets/img/cerveza.jpg", variantes: [
      { etiqueta: "Lata 473cc", precio: 3500 }
    ]},
  ]
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
        chip.textContent = `${v.etiqueta} · $ ${v.precio}`;
        variants.appendChild(chip);
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

/* ----------------------- Tabs accesibles ----------------------- */
const tabButtons = Array.from(document.querySelectorAll('[role="tab"]'));
const tabPanels = Array.from(document.querySelectorAll('[role="tabpanel"]'));

function activateTab(targetKey, setHash=true){
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

function initFromHash(){
  const hash = (location.hash || "").replace("#","");
  const valid = ["panaderia","confiteria","pasteleria","cafeteria","bebidas"];
  if(valid.includes(hash)){ activateTab(hash, false); }
  else { activateTab("panaderia", false); }
}
window.addEventListener("hashchange", initFromHash);
initFromHash();
