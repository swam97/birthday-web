document.addEventListener('DOMContentLoaded', () => {

    const muteButton = document.getElementById('mute-button');
    const audioElement = document.getElementById('background-music');

    muteButton.addEventListener('click', () => {
        if (audioElement.muted) {
            audioElement.muted = false;
            muteButton.textContent = 'Mute'; // Update button text to 'Mute'
        } else {
            audioElement.muted = true;
            muteButton.textContent = 'Unmute'; // Update button text to 'Unmute'
        }
    });

});
