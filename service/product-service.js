
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

const productStar = document.querySelector("[data-product-star-wars]");
const productConsoles = document.querySelector("[data-product-consolas]");

const http =  new XMLHttpRequest();


//abrir http(metodo, URL)

//CRUD - Metodos HTTP
//CREATE - POST
//READ - GET
//UPDATE - PUT/PATCH
//DELETE - Delete
http.open("GET", "http://localhost:3000/products")

http.send();

http.onload = () => {
    const data = JSON.parse(http.response);
    console.log(data);
    data.forEach((products) =>  {
       const  nuevaLinea = crearNuevaLinea(products.titulo, products.precio,products.img,products.alt,products.id);
       if(products <= [4]){
        productStar.appendChild(nuevaLinea);
       }if(products > [4]){
        productConsoles.appendChild(nuevaLinea);
       }
       
    });
};