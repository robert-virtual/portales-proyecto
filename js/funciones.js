// obtine un elemento con el id = contenedor

const contenedor = document.getElementById("contenedor"); //
const template = document.createElement("template");

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

function insertarDatos(datos = [{ img: "", price: "", name: "", link: "" }]) {
  datos.forEach((element) => {
    // template string
    template.innerHTML = `
    <a 
      title="click para ver"
      target="_blank" 
      rel="noreferrer"
      class="item"
      href="${element.link}" 
      >
      <img src="${element.img}" alt="${element.name}">
      <span class="item-price">${element.price}</span>
      <span  class="item-title">${element.name}</span>
      <div class="msg">
        <span>Ver Detalles</span>
      </div>    
      </a>
    `;
    contenedor.append(template.content);
  });
}
