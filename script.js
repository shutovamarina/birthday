function birthdayCountdown() {
    const birthdayDate = new Date("September 10, 2024 00:00");
    const now = new Date();
    const diff = birthdayDate - now;

    const msInSecond = 1000; // Сколько миллисекунд в секундах
    const msInMinute = 60 * 1000; // Сколько миллисекунд в минутах 
    const msInHour = 60 * 60 * 1000; // Сколько миллисекунд в часах
    const msInDay = 24 * 60 * 60 * 1000; // Сколько миллисекунд в днях

    const displayDay = Math.floor(diff / msInDay); // Расчет дней
    document.querySelector(".days").textContent = displayDay;

    const displayHour = Math.floor((diff % msInDay) / msInHour); // Расчет часов
    document.querySelector(".hours").textContent = displayHour;

    const displayMinute = Math.floor((diff % msInDay % msInHour) / msInMinute); // Расчет минут
    document.querySelector(".minutes").textContent = displayMinute;

    const displaySecond = Math.floor((diff % msInMinute) / msInSecond); // Расчет секунд
    document.querySelector(".seconds").textContent = displaySecond;

    // Когда обратный отсчет = 0, остановить счетчик на 0
    if (diff <= 0) {
        document.querySelector(".days").textContent = 0;
        document.querySelector(".hours").textContent = 0;
        document.querySelector(".minutes").textContent = 0;
        document.querySelector(".seconds").textContent = 0;
        clearInterval(timerID);
        happyBirthday();
    }
};

let timerID = setInterval(birthdayCountdown, 1000);

function happyBirthday() {
    const heading = document.querySelector("h1");
    heading.textContent = "С днем рождения Марина!!!";
    heading.classList.add("red");

    // Запуск конфетти
    confetti({
        particleCount: 200, // Увеличиваем количество конфетти
        spread: 90, // Увеличиваем радиус разлета
        origin: { y: 0.6 },
        scalar: 1.5, // Увеличиваем размер конфетти
        gravity: 0.8 // Замедляем падение конфетти
    });

}

document.addEventListener("DOMContentLoaded", function() {
    const playPauseButton = document.querySelector("#playPauseButton");
    const audio = document.querySelector("#myAudio");
    const playImage = 'play.png';
    const pauseImage = 'pause.png';

    if (playPauseButton && audio) {
        playPauseButton.addEventListener("click", function() {
            const img = playPauseButton.querySelector("img");

            if (audio.paused) {
                audio.play().catch(error => {
                    console.error("Error playing audio:", error);
                });
                img.src = pauseImage; // Change image to pause
            } else {
                audio.pause();
                img.src = playImage; // Change image to play
            }
        });
    } else {
        console.error("Button or audio element not found.");
    }
});