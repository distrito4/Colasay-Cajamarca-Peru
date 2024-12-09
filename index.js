// Asegúrate de que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function() {
    // Mostrar un mensaje de bienvenida en consola cuando se carga la página
    console.log("¡Bienvenido a la página de Turismo en Colasay!");

    // Opcional: Mostrar un mensaje en pantalla al cargar
    const heroText = document.querySelector('.hero-text');
    heroText.innerHTML += '<p>¡Gracias por visitar nuestro sitio!</p>';
});
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío inmediato del formulario

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Validación de campos
        if (name === "" || email === "" || message === "") {
            alert("Por favor, completa todos los campos.");
        } else if (!validateEmail(email)) {
            alert("Por favor, ingresa un correo válido.");
        } else {
            alert("¡Gracias por contactarnos! Nos pondremos en contacto contigo pronto.");
            form.reset(); // Limpia el formulario
        }
    });

    // Función para validar el formato del correo
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
});

