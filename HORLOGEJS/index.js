


window.addEventListener('load', () =>{ 
    let hourSpan = document.querySelector('.heure');
    let minuteSpan = document.querySelector('.minute');
    let secondSpan = document.querySelector('.seconde');

    let hours = 12;
    let minutes = 3;
    let seconds = 0;

    function updateTime () {
        seconds ++;
        if (seconds === 60){
            minutes += 1;
            seconds = 0;
            minutes++;
            console.log(minutes);
        };
        if (minutes === 60){
            minutes = 0;
            hours++;
            console.log(hours);
        };
        if (hours === 24){
            hours = 0;
        }
        
    const h = String(hours).padStart(2, "0");
    const m = String(minutes).padStart(2, "0");
    const s = String(seconds).padStart(2, "0");

    hourSpan.textContent = h;
    minuteSpan.textContent = m;
    secondSpan.textContent = s;

    console.log(`Il est actuellement :${h} :${m} :${s}`);
    }  
updateTime();
setInterval(updateTime, 1000);
});  



