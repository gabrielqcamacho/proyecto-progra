// se encarga de preparar el formulario para nuestra logica custom de login, sobreescribe el comportamiento 
// por defecto del navegador
function handleLogin() {
  const form = document.querySelector("#login-form");
  // si no esta el form, no se hace nada y se regresa temprano para evitar un error de javascript
  if (!form) return;
  // arrow function: () => {} === function() {}
  form.addEventListener("submit", (event) => {
    console.log(event);
    // previene el compartamiento por defecto del form: refresh + parametros en el url
    event.preventDefault();
    // Agarra todos los datos enviados en el form, se le pasa el mismo formulario, el elemento que ya teniamos asignado
    const formData = new FormData(form);
    const username = formData.get("username");
    const password = formData.get("password");

    if (username === "Cenfo" && password === "123") {
        console.log("login existoso! redireccionando...");
        window.location.href = `${window.location.origin}/landing.html`; // es lo mismo a window.location.origin + "/landing.html"
    } else {
        // Se puede mejorar agregando clases de error a los formularios y mostrar un text de feedback en vez del alert
        window.alert("Combinacion de usuario y contrasena incorrecta");
    }
  });
}

// Se ejecuta despues de que cargue todo el DOM (Document Object Model - El arbol)
document.addEventListener("DOMContentLoaded", () => {
  handleLogin();
});

// Aunque es la ultima linea, la vemos en la consola antes que el resultado de loginSetUp()
console.log("hola desde login.js");
