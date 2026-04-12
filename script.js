function startCountdown() {
    const hoursElement = document.getElementById('hours');
    const minutesElement = document.getElementById('minutes');
    const secondsElement = document.getElementById('seconds');

    // Set the target: Today at 11:00 PM (23:00:00)
    const target = new Date();
    target.setHours(23, 0, 0, 0);

    const updateTimer = () => {
        const now = new Date().getTime();
        const distance = target.getTime() - now;

        if (distance < 0) {
            document.querySelector('.maintenance-container h1').innerText = "Maintenance in Progress";
            clearInterval(timerInterval);
            return;
        }

        // Time calculations
        const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM with leading zeros
        hoursElement.innerText = h < 10 ? '0' + h : h;
        minutesElement.innerText = m < 10 ? '0' + m : m;
        secondsElement.innerText = s < 10 ? '0' + s : s;
    };

    const timerInterval = setInterval(updateTimer, 1000);
    updateTimer(); // Initial call to avoid 1-second delay
}

document.addEventListener('DOMContentLoaded', startCountdown);