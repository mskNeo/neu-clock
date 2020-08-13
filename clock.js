const sec = document.querySelector(".sec"),
    min = document.querySelector(".min"),
    hr = document.querySelector(".hr");

document.addEventListener("DOMContentLoaded", function() {
    setInterval(function() {
        let time = new Date();

        let seconds = time.getSeconds() * 6;
        let minutes = time.getMinutes() * 6;
        let hours = time.getHours() * 30;

        sec.style.transform = `rotate(${seconds}deg)`;
        min.style.transform = `rotate(${minutes}deg)`;
        hr.style.transform = `rotate(${hours+(minutes/12)}deg)`;
    });
});