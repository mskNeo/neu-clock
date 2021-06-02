const s = document.querySelector(".sec"),
    m = document.querySelector(".min"),
    h = document.querySelector(".hr");

document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        let time = new Date();

        let seconds = time.getSeconds() * 6;
        let minutes = time.getMinutes() * 6;
        let hours = time.getHours() * 30;

        s.style.transform = `rotate(${seconds}deg)`;
        m.style.transform = `rotate(${minutes}deg)`;
        h.style.transform = `rotate(${hours+(minutes/12)}deg)`;
    });
});

