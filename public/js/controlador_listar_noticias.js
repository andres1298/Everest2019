'use strict';
const lista_noticias = document.querySelector('#lista_noticias');

let mostrar_noticias = () => {
    let noticias = listar_noticias();


    for(let i = 1; i <= noticias.length; i++){
        let noticia = document.createElement('div');
        noticia.classList.add('noticia');

        let titulo_noticia = document.createElement('div');
        titulo_noticia.classList.add('titulo_noticia');

        let texto_titulo_noticia = document.createElement('p');
        texto_titulo_noticia.innerHTML = noticias[i]['titulo'];

        titulo_noticia.appendChild(texto_titulo_noticia);
        //fecha
        let fecha_noticia = document.createElement('div');
        fecha_noticia.classList.add('fecha_noticia');

        let texto_fecha_noticia = document.createElement('p');
        texto_fecha_noticia.innerHTML = noticias[i]['fecha'];

        fecha_noticia.appendChild(texto_fecha_noticia);
        //descripcion
        let descripcion_noticia = document.createElement('div');
        descripcion_noticia.classList.add('descripcion_noticia');

        let texto_descricion_noticia = document.createElement('p');
        texto_descricion_noticia.innerHTML = noticias[i]['descripcion'];

        descripcion_noticia.appendChild(texto_descricion_noticia);
        
        //todo
        noticia.appendChild(titulo_noticia);
        noticia.appendChild(fecha_noticia);
        noticia.appendChild(descripcion_noticia);

        lista_noticias.appendChild(noticia);
    }
  }



//const input_filtrar = document.querySelector('#txt_filtrar_noticia');




mostrar_noticias();
//input_filtrar.addEventListener('keyup', mostrar_noticias);
