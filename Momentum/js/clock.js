const clock = document.querySelector("h2#clock");

function getTime() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}`;
};


getTime();
setInterval(getTime, 60000);