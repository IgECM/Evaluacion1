const patronCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const formServicio = document.querySelector('#formServicio')

formServicio.addEventListener('submit', function(e) {
  e.preventDefault();

  const nombreCuidador = document.querySelector('#nombreCuidador');
  const correoCliente = document.querySelector('#correoCliente');
  const telefonoCliente = document.querySelector('#telefonoCliente');
  const nombreMascota = document.querySelector('#nombreMascota');
  const edadMascota = document.querySelector('#edadMascota');
  const consultaCliente = document.querySelector('#consultaCliente');
  const fechaCita = document.querySelector('#fechaCita');
  
  let citaValida = true;

  if (nombreCuidador.value.trim() === '') {
    nombreCuidador.classList.add('campo-error');
    citaValida = false;
  } else {
    nombreCuidador.classList.remove('campo-error');
  }

  if (!patronCorreo.test(correoCliente.value.trim())) {
    correoCliente.classList.add('campo-error');
    citaValida = false;
  } else {
    correoCliente.classList.remove('campo-error');
  }

  if (telefonoCliente.value.trim() === '') {
    telefonoCliente.classList.add('campo-error');
    citaValida = false;
  } else if (telefonoCliente.value.trim() < 1) {
    telefonoCliente.classList.add('campo-error');
    citaValida = false;
  } else {
    telefonoCliente.classList.remove('campo-error');
  }

  if (nombreMascota.value.trim() === '') {
    nombreMascota.classList.add('campo-error');
    citaValida = false;
  } else {
    nombreMascota.classList.remove('campo-error');
  }

  if (edadMascota.value.trim() === '') {
    edadMascota.classList.add('campo-error');
    citaValida = false;
  } else if (edadMascota.value.trim() < 1) {
    edadMascota.classList.add('campo-error');
    citaValida = false;
  } else {
    edadMascota.classList.remove('campo-error');
  }

  if (consultaCliente.value.trim() === '') {
    consultaCliente.classList.add('campo-error');
    citaValida = false;
  } else {
    consultaCliente.classList.remove('campo-error');
  }

  if (fechaCita.value.trim() === '') {
    fechaCita.classList.add('campo-error');
    citaValida = false;
  } else {
    fechaCita.classList.remove('campo-error');
  }

  if (citaValida) {
    document.querySelector('#confirmarAgenda').textContent = 'Cita agendada de forma exitosa.'
  } else {
    document.querySelector('#confirmarAgenda').textContent = 'Datos invalidos.'
  }
});