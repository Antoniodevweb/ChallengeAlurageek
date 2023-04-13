const stars = document.querySelectorAll(".product__stars--container i")
console.log(stars)
stars.forEach((star, index1) =>{
    star.addEventListener("click" , () => {
        stars.forEach((star, index2) =>{
                index1 >= index2 ? star.classList.add("active") : star.classList.remove("active")
            })
    });
});