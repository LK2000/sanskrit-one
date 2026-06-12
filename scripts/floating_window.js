document.querySelectorAll(".hover-container").forEach(container => {

    const trigger = container.querySelector(".hover-trigger");
    const windowEl = container.querySelector(".floating-window");

    function showWindow(event) {

        windowEl.style.display = "block";
        windowEl.style.visibility = "hidden";
        windowEl.style.opacity = "1";

        const rect = windowEl.getBoundingClientRect();
        const margin = 8;

        let x = event.clientX;
        let y = event.clientY;

        if (event.touches && event.touches.length > 0) {
            x = event.touches[0].clientX;
            y = event.touches[0].clientY;
        }

        let left = x - rect.width / 2;
        let top = y - rect.height - 12;

        if (left < margin) left = margin;
        if (left + rect.width > window.innerWidth - margin) {
            left = window.innerWidth - rect.width - margin;
        }

        if (top < margin) top = y + 12;

        windowEl.style.left = left + "px";
        windowEl.style.top = top + "px";

        windowEl.style.visibility = "visible";
        windowEl.style.opacity = "1";
    }

    function hideWindow() {
        windowEl.style.opacity = "0";
        windowEl.style.visibility = "hidden";

        setTimeout(() => {
            windowEl.style.display = "none";
        }, 150);
    }

    trigger.addEventListener("mouseenter", showWindow);
    trigger.addEventListener("mousemove", showWindow);
    trigger.addEventListener("mouseleave", hideWindow);

    trigger.addEventListener("click", (e) => {
        e.stopPropagation();
        showWindow(e);
    });

    document.addEventListener("click", hideWindow);
});
