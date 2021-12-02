// obtine un elemento con el id = contenedor

const contenedor = document.getElementById("contenedor"); //

// un solo elemento con al clase loader
// . == clase, # == id
const loader = document.querySelector(".loader");

export async function solicitarDatos(url) {
  // activar laoder
  loader.classList.add("loading");

  // texto o json
  const res = await fetch(url); // esperando

  // convertir a objetos de javacript
  const datos = await res.json(); // esperando

  // quitar loader
  loader.classList.remove("loading");

  insertarDatos(datos);
}

function insertarDatos(datos = [{ img: "", price: "", name: "" }]) {
  datos.forEach((element) => {
    const div = document.createElement("div");
    // template string
    div.classList.add("item");
    div.innerHTML = `
    <img src="${element.img}" alt="${element.name}">
    <span class="item-price">${element.price}</span>
    <span class="item-title">${element.name}</span>
    `;
    contenedor.append(div);
  });
}
