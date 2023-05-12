const crearNuevaLinea = (titulo, precio,img,alt,id) =>{
    const linea = document.createElement("div");
    const contenido = `<div class="product__box" id="${id}">
                    <div class="product__img--container">
                        <img class="product__img" src="${img}" alt="${alt}">
                    </div>
                    <h2 class="product__title">${titulo}</h2>
                    <h6 class="product__price">${precio}</h6>
                    <a class="product__link" href="#">Ver producto</a>
                </div>`
                linea.innerHTML = contenido;
                return linea;
};

const product = document.querySelector("[data-product]");


const http =  new XMLHttpRequest();


//abrir http(metodo, URL)

//CRUD - Metodos HTTP
//CREATE - POST
//READ - GET
//UPDATE - PUT/PATCH
//DELETE - Delete
http.open("GET", "http://localhost:3000/Menu")

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach((Menu) =>  {
       const  nuevaLinea = crearNuevaLinea(Menu.titulo, Menu.precio,Menu.img,Menu.alt,Menu.id);
       product.appendChild(nuevaLinea);
    });
};