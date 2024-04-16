// Obtener referencia al botón
const toggleButton = document.getElementById('toggleButton');

// Estado inicial del motor (apagado)
let motorEncendido = false;

// Función para cambiar el estado del motor y actualizar la apariencia del botón
function toggleMotor() {
  motorEncendido = !motorEncendido;
  if (motorEncendido) {
    toggleButton.innerText = 'Apagar';
    toggleButton.classList.remove('off');
    toggleButton.classList.add('on');
  } else {
    toggleButton.innerText = 'Encender';
    toggleButton.classList.remove('on');
    toggleButton.classList.add('off');
  }
}

// Agregar un evento de clic al botón para controlar el motor
toggleButton.addEventListener('click', toggleMotor);
