

let horloge = document.querySelector('.horloge');
let toggleBtn  = document.querySelector('#toggle-mode');
const body = document.body;

const alarmInput = document.getElementById('alarm-time');
const setAlarmBtn = document.getElementById('set-alarm');
const alarmMsg = document.getElementById('alarm-message');

let alarmTime = null;
function upDateTime (){
    const currentTime = new Date();
    const h = currentTime.getHours().toString().padStart(2, "0");
    const m = currentTime.getMinutes().toString().padStart(2, "0");
    const s = currentTime.getSeconds().toString().padStart(2, "0");

    let time = ` Bref, il est... \n  ${currentTime.getHours().toString().padStart(2, "0")} :  ${currentTime.getMinutes().toString().padStart(2, "0")} : ${currentTime.getSeconds().toString().padStart(2, "0")}`

    horloge.innerText = time;

    if (alarmTime && `${h}:${m}:${s}` === alarmTime) {
        alarmMsg.innerHTML = `⏰ Get up, stand up !`;
        const beep = new Audio("./SOUNDS/Bob Marley - Get Up Stand Up [HQ Sound].mp3");
        beep.play();
        alarmTime = null; 
    }
}

upDateTime();
setInterval(upDateTime, 1000);

// ESSAI MODE DARK 

body.classList.add('dark');

    toggleBtn.addEventListener('click', () => {
        if (body.classList.contains('dark')) {
            body.classList.remove('dark');
            body.classList.add('light');
            toggleBtn.textContent = '🌙';
        } else {
            body.classList.remove('light');
            body.classList.add('dark');
            toggleBtn.textContent = '☀️';
        }
    });

    // Alarme

    setAlarmBtn.addEventListener('click', () => {
    if (alarmInput.value) {
        alarmTime = alarmInput.value;
        alarmMsg.textContent = `✅ Alarme réglée pour ${alarmTime}`;
    }
});



