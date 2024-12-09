document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('review-form');
    const reviewsContainer = document.getElementById('reviews');

    // Función para agregar una nueva opinión al contenedor
    function addReview(name, stars, comment) {
        const reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        const starsText = '⭐'.repeat(stars);

        reviewElement.innerHTML = `
            <h3>${name} - ${starsText}</h3>
            <p>${comment}</p>
        `;

        reviewsContainer.appendChild(reviewElement);
    }

    // Función para cargar opiniones desde localStorage
    function loadReviews() {
        const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        storedReviews.forEach(review => {
            addReview(review.name, review.stars, review.comment);
        });
    }

    // Función para guardar una nueva opinión en localStorage
    function saveReview(name, stars, comment) {
        const storedReviews = JSON.parse(localStorage.getItem('reviews')) || [];
        storedReviews.push({ name, stars, comment });
        localStorage.setItem('reviews', JSON.stringify(storedReviews));
    }

    // Manejar el envío del formulario
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Evitar que la página se recargue

        const name = document.getElementById('name').value.trim();
        const stars = parseInt(document.getElementById('stars').value);
        const comment = document.getElementById('comment').value.trim();

        // Validar que los campos no estén vacíos
        if (name && comment) {
            addReview(name, stars, comment); // Agregar la opinión
            saveReview(name, stars, comment); // Guardar la opinión en localStorage
            form.reset(); // Limpiar el formulario
        } else {
            alert('Por favor, completa todos los campos antes de enviar.');
        }
    });

    // Cargar las opiniones al iniciar
    loadReviews();
});

