(() => {
    const initializeModal = (triggerSelector, modalSelector, closeSelector) => {
        const closeModal = (modal) => {
            console.log("Closing modal");
            modal.style.display = "none";
            const video = modal.querySelector('video');
            const videoIframe = modal.querySelector('iframe');
            if (video) {
                video.load();
            }
            if (videoIframe) {
                videoIframe.src = videoIframe.src;
            }
            document.body.classList.remove('no-scroll');
        };

        document.addEventListener('click', (event) => {
            const trigger = event.target.closest(triggerSelector);
            if (!trigger) return;
            const modalId = trigger.getAttribute('data-modal-id');
            console.log(`id ${modalId}`);
            const modal = document.getElementById(modalId);
            const enablePopup = trigger.getAttribute('data-enablepopup');
            const playButton = modal.querySelector('.play-butn-css');
            const videoContainer = modal.querySelector('.video-div');
            const videoIframe = videoContainer.querySelector('iframe');
            const videoSrc = videoIframe ? videoIframe.src : '';

            const isYouTube = videoSrc.includes('youtube.com');

            if (enablePopup === 'true') {
                event.preventDefault();
                modal.style.display = "block";
                document.body.classList.add('no-scroll');

                window.onclick = (event) => {
                    if (event.target === modal) {
                        closeModal(modal);
                        if (playButton) {
                            playButton.style.display = '';
                        }
                    }
                };

                const closeBtn = modal.querySelector(closeSelector);
                closeBtn.onclick = () => {
                    closeModal(modal);
                    if (playButton) {
                        playButton.style.display = '';
                    }
                };

                if (isYouTube) {
                    if (playButton) {
                        playButton.style.display = 'none';
                    }
                } else {
                    const video = videoContainer.querySelector('video');

                    if (video) {
                        video.addEventListener('mouseover', () => {
                            video.controls = true;
                        });

                        video.addEventListener('mouseout', () => {
                            video.controls = false;
                        });

                        playButton.addEventListener('click', () => {
                            playButton.style.display = 'none';
                            video.play();
                        });

                        video.addEventListener('play', () => {
                            playButton.style.display = 'none';
                        });

                        video.addEventListener('pause', () => {
                            if (video.currentTime === 0 || video.currentTime === video.duration) {
                                playButton.style.display = 'block';
                            }
                        });

                        video.addEventListener('ended', () => {
                            playButton.style.display = 'block';
                        });
                    }
                }
            }
        });
    };

    initializeModal(".videoTrigger", ".modal", ".close");
})();
