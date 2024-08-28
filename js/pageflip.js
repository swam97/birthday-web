document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('flipButton')?.addEventListener('click', function () {
        const page = document.getElementById('page');
        const audioElement = document.getElementById('background-music');
        page.classList.add('flipped');

        // Navigate to the next page after the flip animation completes
        setTimeout(function () {
            window.location.href = 'birthday.html'; // Replace with your second page URL
            audioElement.play().catch(error => {
                console.log('Audio playback was prevented:', error);
            });
        }, 700); // Matches the CSS animation duration
    });

    document.getElementById('backButton')?.addEventListener('click', function () {
        window.location.href = 'index.html'; // Replace with your first page URL
    });
});
