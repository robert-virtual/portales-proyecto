const contenedor = document.getElementById("contenedor");

async function solicitarDatos() {
  const res = await fetch("https://gamestop-api.herokuapp.com/games");
  console.log(res);
  const datos = await res.json();
  console.log(datos);
  insertarDatos(datos);
}

function insertarDatos(datos) {
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

solicitarDatos();
