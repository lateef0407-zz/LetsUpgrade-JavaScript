// This function starts the timer when user set input and click 'START' button
function start() {
    const inputMinutes = document.getElementById('minutes').value;
    const inputSeconds = document.getElementById('seconds').value;
    const timertext = document.getElementById('show');
    timertext.innerHTML = `<h2>Your timer is set to ${inputMinutes}:${inputSeconds}</h2>`;
    timertext.classList.add("timertext");

    let timer = 0;
    let counter = document.getElementById('counter');
    var interval = setInterval(()=>{
        // STARTS FROM 00:00 AND STOPS WHEN IT REACHES THE TIME GIVEN BY USER
        ++timer;
        let seconds = timer % 60;
        let minutes = parseInt(timer / 60);
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        counter.innerHTML = `${minutes}:${seconds}`;
        if (minutes == inputMinutes && seconds == inputSeconds) {
            clearInterval(interval);
        }
    }, 1000);        
}

// This function clear all the input fields and set timer to 00:00
// This function only resets the timer after completion, it wont stop in middle of the countdown
function reset() {
    document.getElementById('counter').innerHTML = '00:00';
    document.getElementById('show').innerHTML = '';
    document.getElementById('minutes').value = '';
    document.getElementById('seconds').value = '';
}