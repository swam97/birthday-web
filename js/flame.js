window.onload = function () {

    const flame = document.getElementById('flame');
    const audioElement = document.getElementById('background-music');
    audioElement.play().catch(error => {
        console.log('Audio playback was prevented:', error);
    });
    // Check if the browser supports the getUserMedia API
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(function (stream) {
                const audioContext = new (window.AudioContext || window.webkitAudioContext)();
                const analyser = audioContext.createAnalyser();
                const microphone = audioContext.createMediaStreamSource(stream);

                analyser.smoothingTimeConstant = 0.8;
                analyser.fftSize = 1024;

                microphone.connect(analyser);

                const dataArray = new Uint8Array(analyser.frequencyBinCount);

                function checkSound() {
                    analyser.getByteFrequencyData(dataArray);

                    const values = dataArray.reduce((a, b) => a + b, 0);
                    const average = values / dataArray.length;

                    if (average > 50) {  // Adjust this threshold based on testing
                        flame.style.display = 'none';  // "Blow out" the candle
                        audioElement.muted = true;
                    }

                    requestAnimationFrame(checkSound);
                }

                // Start checking sound levels
                checkSound();

            })
            .catch(function (err) {
                console.error('The following gUM error occurred: ' + err);
            });
    } else {
        console.log('getUserMedia not supported on your browser!');
    }

};

// document.addEventListener('DOMContentLoaded', () => {

//     const audioElement = document.getElementById('background-music');
//     audioElement.play().catch(error => {
//         console.log('Audio playback was prevented:', error);
//     });
// });
