// Custom Matrix cursor: "hola mundo" con contorno negro y verde oscuro, sin ocultar el cursor nativo
const cursor = document.createElement('div');
cursor.id = 'matrix-cursor';
cursor.innerText = 'Hola mundo';
document.body.appendChild(cursor);

document.addEventListener('mousemove', e => {
  cursor.style.left = `${e.clientX + 12}px`;
  cursor.style.top = `${e.clientY + 6}px`;
});
