document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flipButton')?.addEventListener('click', function () {
        const page = document.getElementById('page');
        page.classList.add('flipped');

        // Navigate to the next page after the flip animation completes
        setTimeout(function () {
            window.location.href = 'birthday.html'; // Replace with your second page URL
        }, 700); // Matches the CSS animation duration
    });

    document.getElementById('backButton')?.addEventListener('click', function () {
        window.location.href = 'greeting.html'; // Replace with your first page URL
    });
});
