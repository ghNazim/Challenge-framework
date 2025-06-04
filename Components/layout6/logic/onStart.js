
    let overlayUp = false;
    function showWorkingOverlay(message) {
        const overlay = document.getElementById("workingOverlay");
        const overlayContent = document.getElementById("overlayContent");
        overlayContent.innerHTML = message;
        overlay.style.backgroundColor = "rgba(65, 105, 225, 0.7)";
        overlay.classList.add("show");
      }
    function closeOverlay() {
      overlayUp = false;
      document.getElementById("workingOverlay").classList.remove("show");
    }
    document
      .getElementById("closeOverlay")
      .addEventListener("click", closeOverlay);
    function setUpListenersForHighlights() {
      const keys = Object.keys(definitions);
      keys.forEach((key) => {
        document
          .querySelector(`[data-def="${key}"]`)
          .addEventListener("click", () => {
            if(overlayUp) {
              overlayUp = false;
              closeOverlay();
              return;
            }
            showWorkingOverlay(definitions[key]);
            overlayUp = true;
          });
      });
    }
    setUpListenersForHighlights();