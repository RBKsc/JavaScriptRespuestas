import { conexionAPI } from "./conexionAPI.js";
const lista = document.querySelector("[data-lista]");

export default function crearCard (titulo, descripcion, url, imagen){
    const video = document.createElement("li");
    video.className="videos__item";
    video.innerHTML=`<iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
<div class="descripcion-video">
    <img src="${imagen}">
    <h3>${titulo}</h3>
    <p>${descripcion}</p>
</div>`;

return video;
}

async function listaVideos(){
    try{
        const listaAPI= await conexionAPI.listaVideos();

    listaAPI.forEach(video=>lista.appendChild(crearCard(video.titulo,video.descripcion,video.url,video.imagen)))
    }catch {
        lista.innerHTML=`<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión</h2>`
    }
    
}

listaVideos();