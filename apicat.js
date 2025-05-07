const codeInput = document.getElementById('codeInput');
const codeDisplay = document.getElementById('code');
const catImg = document.getElementById('catImg');
const errorMsg = document.getElementById('error-msg');

codeInput.addEventListener('input', () => {
  const code = codeInput.value;
  codeDisplay.textContent = code;

  const url = `https://http.cat/${code}`;
  
  if (code < 100 || code > 599) {
    errorMsg.textContent = '⚠️ Código fuera de rango (100-599).';
    catImg.style.display = 'none';
    return;
  }

  const img = new Image();
  img.src = url;
  img.onload = () => {
    catImg.src = url;
    catImg.style.display = 'block';
    errorMsg.textContent = '';
  };
});
