const numero1 = document.getElementById('numero1');
const numero2 = document.getElementById('numero2');
const operacion = document.getElementById('operacion');
const btnCalcular = document.getElementById('btnCalcular');
const resultado = document.getElementById('resultado');

function validar() {
  const esDivision = operacion.value === 'divi';
  const divisorCero = Number(numero2.value) === 0;
  btnCalcular.disabled = esDivision && divisorCero;
}

numero2.addEventListener('input', validar);
operacion.addEventListener('change', validar);

document.getElementById('formCalculadora').addEventListener('submit', function (e) {
  e.preventDefault();


  if (numero1.value.trim() === '' || numero2.value.trim() === '') {
    resultado.textContent = 'Por favor, ingresa ambos números.';
    return;
  }

  const a = parseFloat(numero1.value);
  const b = parseFloat(numero2.value);

  if (isNaN(a) || isNaN(b)) {
    resultado.textContent = 'Los valores ingresados no son números válidos.';
    return;
  }

  const op = operacion.value;
  let res;
  let simbolo = '';
  let nombreOperacion = '';

  if (op === 'sum') {
    res = a + b;
    simbolo = '+';
    nombreOperacion = 'Suma';
  } else if (op === 'res') {
    res = a - b;
    simbolo = '-';
    nombreOperacion = 'Resta';
  } else if (op === 'mult') {
    res = a * b;
    simbolo = '×';
    nombreOperacion = 'Multiplicación';
  } else if (op === 'divi') {
  
    res = a / b;
    simbolo = '÷';
    nombreOperacion = 'División';
  }

  resultado.textContent = `Resultado de la ${nombreOperacion} (${a} ${simbolo} ${b}) = ${res}`;
});

validar();
