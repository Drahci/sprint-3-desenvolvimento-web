window.onload = () => {
  xhttp = new XMLHttpRequest();
  xhttp.onload=()=>{
    if(xhttp.status === 200 && xhttp.readyState === 4){
      const table = document.getElementById("contatos")
      table.innerHTML+=xhttp.responseText;
    }
  }
  xhttp.open("GET","http://localhost:8080/api/select.jsp");
  xhttp.send();
}