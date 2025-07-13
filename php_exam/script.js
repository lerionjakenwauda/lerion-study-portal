document.addEventListener('DOMContentLoaded', () => {
  const timer = document.getElementById('timer');
  if (!timer) return;
  const minutes = parseInt(timer.dataset.minutes, 10);
  let time = minutes * 60;
  const interval = setInterval(() => {
    const mins = Math.floor(time / 60);
    const secs = time % 60;
    timer.textContent = `Time Remaining: ${mins}:${secs.toString().padStart(2,'0')}`;
    if (time <= 0) {
      clearInterval(interval);
      alert('Time is up! Submitting your answers.');
      document.querySelector('form').submit();
    }
    time--;
  }, 1000);
});
