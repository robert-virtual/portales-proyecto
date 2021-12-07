// obtine un elemento con el id = contenedor

const contenedor = document.getElementById("contenedor"); //
const template = document.createElement("template");

// un solo elemento con al clase loader
// . == clase, # == id
const loader = document.querySelector(".loader"); /* . = selector por clase */

/* 
async = funcion asincrona = hay q esperar que termine de realizar su trabajo

*/
export async function solicitarDatos(url) {
  // activar laoder
  loader.classList.add("loading");
  try {
    // texto o json
    const res = await fetch(url); // esperando

    // convertir a objetos de javacript
    const datos = await res.json(); // esperando
    insertarDatos(datos);
  } catch (error) {
    insertarError("Ups ha habido un error");
  }
  // quitar loader
  loader.classList.remove("loading");
}

function insertarDatos(datos = [{ img: "", price: "", name: "" }]) {
  /* inicializacion del parametro datos = con fines de documentacion */
  datos.forEach((element) => {
    // template string
    template.innerHTML = `
    <div 
      class="item">
      <img src="${element.img}" alt="${element.name}">
      <span class="item-price">${element.price}</span>
      <span  class="item-title">${element.name}</span>
          
      </div>
    `;
    contenedor.append(template.content);
  });
}

function insertarError(msg) {
  const div = document.createElement("div");
  div.classList = "error visible";

  /* 
    template strings
    "hola " + name +" como esta";
    `hola ${name} cmo esta `
  */
  div.innerHTML = `
    <img src="https://cdn-icons-png.flaticon.com/512/2026/2026502.png" alt="error">
    <p>${msg}</p>
  `;
  contenedor.append(div);
}
