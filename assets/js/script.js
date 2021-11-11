import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import Splitting from "splitting";

// Split the letters so I can animate them in
Splitting();

const wrapper = document.getElementById("wrapper");

// Disable Animation
const button1 = document.getElementById("click-trigger");

button1.addEventListener(
    "touchstart",
    function (event) {
        event.preventDefault();

        if (wrapper.classList.contains("animation")) {
            wrapper.classList.remove("animation");
            button1.textContent = "Start Animation";
        } else {
            wrapper.classList.add("forced");
            button1.textContent = "Stop Animation";
        }
    },
    true
);

button1.addEventListener("click", function (event) {
    if (wrapper.classList.contains("animation")) {
        wrapper.classList.remove("animation");
        button1.textContent = "Start Animation";
    } else {
        wrapper.classList.add("animation");
        button1.textContent = "Stop Animation";
    }
});
