document.getElementById("registroForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const correo = document.getElementById("correo").value.trim();
  const contraseña = document.getElementById("contraseña").value.trim();

  // Validar correo
  if (correo === "" || !/\S+@\S+\.\S+/.test(correo)) {
    alert("Por favor, ingresa un correo valido.");
    return;
  }

  // Validar contraseña
  if (contraseña.length < 8) {
    alert("La contraseña debe tener al menos 8 caracteres.");
    return;
  }

  alert("Registro exitoso");
  window.location.href = "pagina.html";
});
