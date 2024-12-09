function toggleStory(button) {
    // Obtiene el contenido de la historia relacionado con el botón
    const storyContent = button.nextElementSibling;
    
    // Verifica si el contenido está visible o no
    if (storyContent.style.display === "block") {
        // Si está visible, lo oculta
        storyContent.style.display = "none";
        button.textContent = "Leer relato";
    } else {
        // Si está oculto, lo muestra
        storyContent.style.display = "block";
        button.textContent = "leer menos";
    }
}
