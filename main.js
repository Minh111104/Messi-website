function showWelcome() {
  document.querySelector('.container').style.display = 'none';
  document.getElementById('welcome-message').style.display = 'block';
}

function moveButton() {
  const noBtn = document.getElementById('no-btn');
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;

  // Calculate new positions ensuring they are within the viewport bounds
  const newLeft = Math.floor(Math.random() * (viewportWidth - noBtn.offsetWidth - 20));
  const newTop = Math.floor(Math.random() * (viewportHeight - noBtn.offsetHeight - 20));

  noBtn.style.left = `${newLeft}px`;
  noBtn.style.top = `${newTop}px`;

  // Increase the size of the Yes button on each hover
  const yesBtn = document.getElementById('yes-btn');
  const currentSize = parseInt(window.getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = `${currentSize + 2}px`;
}
