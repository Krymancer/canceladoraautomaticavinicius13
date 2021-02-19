const button = document.getElementById('cancel');
const input = document.getElementById('input');
const msg = document.getElementById('text');

button.addEventListener('click', (event) => {
  const text = input.value;
  const message = `Você cancelou ${text} com sucesso!!`;
  msg.innerHTML = message;
  button.style.display = 'none';
  input.style.display = 'none';
  msg.style.display = 'flex';

  console.log(text);
});
