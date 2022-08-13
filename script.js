const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const container = document.querySelector('.countdown-container');


const launch = "13 Aug 2024";

function countdown() {

    const launchDate = new Date(launch);
    const currentDate = new Date();

    const oneDay = 60*60*24;
    const oneHour = 60*60;
    const oneMinute = 60;
    const oneSecond = 1000;

    if ( launchDate > currentDate) {

        const totalseconds = (launchDate - currentDate) / oneSecond;

        const days = Math.floor(totalseconds / oneDay);
        const hours = Math.floor(totalseconds / oneHour) % 24;
        const minutes = Math.floor(totalseconds / oneMinute) % 60;
        const seconds = Math.floor(totalseconds) % 60;
    
        daysEl.innerHTML = days; 
        hoursEl.innerHTML = `: ${formatTime(hours)}`;
        minutesEl.innerHTML = `: ${formatTime(minutes)}`;
        secondsEl.innerHTML = `: ${formatTime(seconds)}`;
    } else {
        container.innerHTML = "O lançamento já foi realizado!"; 
        container.style.fontSize=30+"px"; 
    }
    
}

function formatTime (time) {
    return time < 10 ? `0${time}` : time; 
}

countdown();
setInterval(countdown, 1000);

function openModal() {
    const modal = document.getElementById('modal-window');
    modal.classList.add('active');

    modal.addEventListener('click', (e) => {
        if (e.target.id == 'close' || e.target.id == 'modal-window'){
            modal.classList.remove('active');
        } 
    })
}

