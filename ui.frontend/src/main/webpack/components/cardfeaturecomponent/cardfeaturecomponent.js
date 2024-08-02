(() => {
  const initializeModal = (triggerSelector, modalSelector, closeSelector) => {
    let cardSelect = document.querySelectorAll(triggerSelector);

    cardSelect?.forEach((element) => {
      const enaPop = element.getAttribute("data-enablepopup");
      if (enaPop === "true") {
        element.style.cursor = "pointer";
      }
    });
    const closeModal = (modal) => {
      modal.style.display = "none";
      const video = modal.querySelector("video");
      const videoIframe = modal.querySelector("iframe");
      if (video) {
        video.load();
        video.controls=false;
      }
      if (videoIframe) {
        videoIframe.src = videoIframe.src;
      }
      document.body.classList.remove("no-scroll");
    };

    document.addEventListener("click", (event) => {
      const trigger = event.target.closest(triggerSelector);
      if (!trigger) return;
      const modalId = trigger.getAttribute("data-modal-id");
      const modal = document.getElementById(modalId);
      const enablePopup = trigger.getAttribute("data-enablepopup");
      const playButton = modal.querySelector(".play-butn-css");
      const playButtonVidC = modal.querySelector(".play-button");
      const videoContainer = modal.querySelector(".video-div");
      const videoIframe = videoContainer.querySelector("iframe");
      const videoSrc = videoIframe ? videoIframe.src : "";

      const isYouTube = videoSrc.includes("youtube.com");
      const video = videoContainer.querySelector("video");


      if (enablePopup === "true") {
        event.preventDefault();
        modal.style.display = "flex";
        modal.style.alignItems="center";
        if(video && playButtonVidC.style.display ==="none"){
            playButtonVidC.style.display="block";
        }
        document.body.classList.add("no-scroll");

        window.onclick = (event) => {
          if (event.target === modal) {
            closeModal(modal);
            if (playButton) {
              playButton.style.display = "";
            }
          }
        };

        const closeBtn = modal.querySelector(closeSelector);
        closeBtn.onclick = () => {
          closeModal(modal);
          if (playButton) {
            playButton.style.display = "";
          }
        };

        if (isYouTube) {
          if (playButton) {
            playButton.style.display = "none";
          }
        } else {
          if (video) {
            video.addEventListener("mouseover", () => {
              if (playButton.style.display === "" || playButton.style.display === "block") {
                  video.controls = false;
              }
               else{
                    video.controls = true;
                }
            });

            video.addEventListener("mouseout", () => {
              video.controls = false;
            });

            playButton.addEventListener("click", () => {
              playButton.style.display = "none";
              video.play();
            });

            video.addEventListener("play", () => {
              playButton.style.display = "none";
            });

          }
        }
      }
    });
  };

  initializeModal(".videoTrigger", ".modal", ".close");
})();
