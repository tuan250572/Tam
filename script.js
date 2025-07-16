
document.querySelectorAll('input[name="speed"]').forEach(radio => {
  radio.addEventListener('change', () => {
    const speed = document.querySelector('input[name="speed"]:checked').value;
    console.log("Selected speed:", speed);
    // Tùy chỉnh hành vi phát lại theo tốc độ ở đây nếu cần
  });
});

document.getElementById("replay").addEventListener("click", () => {
  alert("Replay clicked!");
});

document.getElementById("mic").addEventListener("click", () => {
  alert("Mic clicked!");
});

document.getElementById("save").addEventListener("click", () => {
  alert("Save clicked!");
});
