const tooltip = document.getElementById("tooltip");

/* Attach tooltip behavior to all tooltip elements */
document.querySelectorAll(".tooltip-container").forEach(el => {
    /* Show tooltip */
    function showTooltip(event) {
        /* Get tooltip text */
        tooltip.textContent = el.dataset.tooltip;

        /* Temporarily show tooltip for measurement */
        tooltip.style.visibility = "hidden";
        tooltip.style.opacity = "1";
        tooltip.style.display = "block";

        /* Measure tooltip size */
        const ttRect = tooltip.getBoundingClientRect();

        /* Screen margin */
        const margin = 8;

        /* Mouse/tap position */
        let mouseX;
        let mouseY;

        if (event.touches && event.touches.length > 0) {
            mouseX = event.touches[0].clientX;
            mouseY = event.touches[0].clientY;
        } else {
            mouseX = event.clientX;
            mouseY = event.clientY;
        }

        /* Default position: above cursor */
        let left = mouseX - (ttRect.width / 2);
        let top = mouseY - ttRect.height - 12;

        /* Left overflow fix */
        if (left < margin) {
            left = margin;
        }

        /* Right overflow fix */
        if (left + ttRect.width > window.innerWidth - margin) {
            left = window.innerWidth - ttRect.width - margin;
        }

        /* If no space above, show below */
        if (top < margin) {
            top = mouseY + 12;
        }

        /* Top overflow fix */
        if (top < margin) {
            top = margin;
        }

        /* Bottom overflow fix */
        if (top + ttRect.height > window.innerHeight - margin) {
            top = window.innerHeight - ttRect.height - margin;
        }

        /* Apply position */
        tooltip.style.left = left + "px";
        tooltip.style.top = top + "px";

        /* Show tooltip */
        tooltip.style.visibility = "visible";
        tooltip.style.opacity = "1";
    }

    /* Hide tooltip */
    function hideTooltip() {
        tooltip.style.opacity = "0";
        tooltip.style.visibility = "hidden";
    }

    /* Desktop hover */
    el.addEventListener("mouseenter", showTooltip);

    /* Mouse move update */
    el.addEventListener("mousemove", showTooltip);

    /* Hide on leave */
    el.addEventListener("mouseleave", hideTooltip);

    /* Mobile tap */
    el.addEventListener("click", (e) => {
        e.stopPropagation();
        showTooltip(e);
    });

    /* Mobile touch */
    el.addEventListener("touchstart", (e) => {
        e.stopPropagation();
        showTooltip(e);
    });
});

/* Hide when clicking outside */
document.addEventListener("click", () => {
    tooltip.style.opacity = "0";
    tooltip.style.visibility = "hidden";
});

/* Hide when touching outside */
document.addEventListener("touchstart", () => {
    tooltip.style.opacity = "0";
    tooltip.style.visibility = "hidden";
});
