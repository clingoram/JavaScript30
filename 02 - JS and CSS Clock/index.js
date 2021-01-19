function showClock() {
    const now = new Date();
    const hours = now.getHours(); // Returns the hour (from 0-23)
    const minutes = now.getMinutes(); // Returns the minutes (from 0-59)
    const seconds = now.getSeconds(); // 	Returns the seconds (from 0-59)

    const ampm = (hours == 0 || hours >= 12) ? 'PM' : 'AM'; // now is AM or PM

    const h = (hours < 10) ? '0' + hours : hours;
    const m = (minutes < 10) ? '0' + minutes : minutes;
    const s = (seconds < 10) ? '0' + seconds : seconds;

    const time = h + ':' + m + ':' + s + ' ' + ampm;

    document.getElementById('clockDisplay').innerText = time;
    document.getElementById('clockDisplay').textContent = time;

    setTimeout(showClock, 1000);
}
showClock();