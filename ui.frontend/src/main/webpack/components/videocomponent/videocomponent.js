document.addEventListener('click', (event) => {
    if (event.target.classList.contains('play-button')) {
        const container = event.target.closest('.video-container');
        const video = container.querySelector('video');

        if (video) {
            video.setAttribute('controls', 'controls');
            video.play();
            event.target.style.display = 'none';

            video.addEventListener('play', () => {
                event.target.style.display = 'none';
            });

            video.addEventListener('pause', () => {
                if (video.currentTime === 0 || video.currentTime === video.duration) {
                    event.target.style.display = 'block';
                }
            });

            video.addEventListener('ended', () => {
                event.target.style.display = 'block';
            });
        }
    }
});