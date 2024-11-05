function validateForm() {
    const correo = document.getElementById("correoInstitucional").value;
    const correoError = document.getElementById("correoError");
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const passwordError = document.getElementById("passwordError");
  
    // Validación del correo
    const correoRegex = /^[s,g,i,a]\w*@alumnos\.itsur\.edu\.mx$/;
    if (!correoRegex.test(correo)) {
      correoError.style.display = "block";
      return false;
    } else {
      correoError.style.display = "none";
    }
  
    // Validación de la contraseña
    if (password !== confirmPassword) {
      passwordError.style.display = "block";
      return false;
    } else {
      passwordError.style.display = "none";
    }
  
    return true;
  }
  
  function resetForms() {
    document.getElementById("generalForm").reset();
    document.getElementById("academicForm").reset();
  }
  