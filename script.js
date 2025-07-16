
document.addEventListener("DOMContentLoaded", function() {
  const speedRadios = document.querySelectorAll('input[name="speed"]');
  speedRadios.forEach(radio => {
    radio.addEventListener('change', (e) => {
      console.log('Selected speed:', e.target.value);
    });
  });

  document.getElementById('backButton').addEventListener('click', () => {
    document.getElementById('library').classList.add('hidden');
    document.querySelector('main').style.display = 'block';
  });
});
