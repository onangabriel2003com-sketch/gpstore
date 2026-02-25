function toggleDescripcion(button) {
  const descripcion = button.previousElementSibling;
  if (descripcion.style.webkitLineClamp === "unset") {
    descripcion.style.webkitLineClamp = "3";
    button.textContent = "Ver más";
  } else {
    descripcion.style.webkitLineClamp = "unset";
    button.textContent = "Ver menos";
  }
}
const categorias = document.querySelectorAll(".cat");
const productos = document.querySelectorAll(".producto");

categorias.forEach(cat => {
  cat.addEventListener("click", () => {
    const filtro = cat.getAttribute("data-filter");

    productos.forEach(prod => {
      if (filtro === "variedades") {
        prod.style.display = "block"; // mostrar todos
      } else {
        if (prod.getAttribute("data-categoria") === filtro) {
          prod.style.display = "block";
        } else {
          prod.style.display = "none";
        }
      }
    });
  });
});