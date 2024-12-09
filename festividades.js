// Función para manejar el formulario de opiniones
document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Obtener los datos del formulario
    const name = document.getElementById('name').value;
    const stars = document.getElementById('stars').value;
    const comment = document.getElementById('comment').value;

    // Crear una nueva revisión
    const review = document.createElement('div');
    review.classList.add('review');
    review.innerHTML = `
        <h3>${name} - ${stars} estrellas</h3>
        <p>${comment}</p>
    `;

    // Agregar la nueva revisión a la lista de opiniones
    document.getElementById('reviews').appendChild(review);

    // Limpiar el formulario
    document.getElementById('review-form').reset();
});
