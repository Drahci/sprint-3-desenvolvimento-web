window.onload=()=>{
  document.getElementById("myForm").addEventListener("submit", function(event) {
    const nome = document.getElementById("nome").value.trim();
    const assunto = document.getElementById("assunto").value.trim();
    const detalhes = document.getElementById("detalhes").value.trim();
    const nomeError = document.getElementById("nomeError");
    const assuntoError = document.getElementById("assuntoError");
    const detalhesError = document.getElementById("detalhesError");
    event.preventDefault();
    let isValid = true;
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

    if(isValid){
      let xhttp = new XMLHttpRequest();
      xhttp.onloadend = ()=> {
        if(xhttp.status === 200 && xhttp.readyState === 4){
          document.getElementById('submitFeedback').innerHTML = "Mensagem enviada!";
          document.getElementById('submitFeedback').className = "success"
        }else{
          document.getElementById('submitFeedback').innerHTML = "Ocorreu um erro ao enviar sua mensagem, tente novamente mais tarde!";
          document.getElementById('submitFeedback').className = "error"
        }
      }
      xhttp.open("POST", "../api/insert.php", true);
      xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhttp.send("name="+nome+"&subject="+assunto+"&details="+detalhes)
    }
  });
}