const crearNuevaLinea = (titulo, precio) =>{
    const linea = document.createElement("div");
    const contenido = `<div class="product__box" id="producto-001">
                    <div class="product__img--container">
                        <img class="product__img" src="/assets/img/mandalorian-grogu-armor.jpg" alt="grogu-cute">
                    </div>
                    <h2 class="product__title">${titulo}</h2>
                    <h6 class="product__price">${precio}</h6>
                    <ul class="product__stars--container">
                        <li class="product__stars"><i class="fa fa-star checked"></i></li>
                        <li class="product__stars"><i class="fa fa-star checked"></i></li>
                        <li class="product__stars"><i class="fa fa-star checked"></i></li>
                        <li class="product__stars"><i class="fa fa-star checked"></i></li>
                        <li class="product__stars"><i class="fa fa-star checked"></i></li>
                    </ul>
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
       const  nuevaLinea = crearNuevaLinea(Menu.titulo, Menu.precio);
       product.appendChild(nuevaLinea);
    });
};