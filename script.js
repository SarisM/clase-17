const render = () =>{
    const contenedor = document.querySelector("#cuadro");

    console.log (contenedor);
    
    contenedor.addEventListener("click", ()=> {
        alert("se hace click en el cuadro");
    });
    
    contenedor.addEventListener("mouseenter", ()=> {
        contenedor.classList.remove("contenedor");
        contenedor.classList.add("contenedorDos");
        // alert("entre al componente");
    });
    
    contenedor.addEventListener("mouseleave", ()=> {
        contenedor.classList.add("contenedor");
        contenedor.classList.remove("contenedorDos");
        // alert("salir al componente");
    });
};
document.addEventListener("DOMContentLoaded", render);
