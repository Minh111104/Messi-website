function showWelcome() {
  document.querySelector('.container').style.display = 'none';
  document.getElementById('welcome-message').style.display = 'block';
}

function moveButton() {
  const noBtn = document.getElementById('no-btn');
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  const newLeft = Math.floor(Math.random() * (viewportWidth - noBtn.offsetWidth));
  const newTop = Math.floor(Math.random() * (viewportHeight - noBtn.offsetHeight));

  noBtn.style.left = `${newLeft}px`;
  noBtn.style.top = `${newTop}px`;
}
