document.getElementById("myForm").addEventListener("submit", function(event) {
    var nome = document.getElementById("nome").value.trim();
    var assunto = document.getElementById("assunto").value.trim();
    var detalhes = document.getElementById("detalhes").value.trim();
    var nomeError = document.getElementById("nomeError");
    var assuntoError = document.getElementById("assuntoError");
    var detalhesError = document.getElementById("detalhesError");
    var isValid = true;

    nomeError.textContent = "";
    assuntoError.textContent = "";
    detalhesError.textContent = "";

    if (nome === "" || nome === ' ') {
      nomeError.textContent = "Por favor, preencha o campo Nome.";
      isValid = false;
    }
    if (assunto === "" || assunto === ' ') {
      assuntoError.textContent = "Por favor, preencha o campo Assunto.";
      isValid = false;
    }
    if (detalhes === "" || detalhes === ' ') {
      detalhesError.textContent = "Por favor, preencha o campo Mais detalhes.";
      isValid = false;
    }
    if (!isValid) {
      event.preventDefault(); 
    }
  });