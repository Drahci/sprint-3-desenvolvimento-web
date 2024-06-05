window.onload = () => {
  xhttp = new XMLHttpRequest();
  xhttp.onload=()=>{
    if(xhttp.status === 200 && xhttp.readyState === 4){
      const data = JSON.parse(xhttp.response);
      const table = document.getElementById("contatos")
      data.forEach((v)=>{
        let row = document.createElement("tr");
        let name = document.createElement("td");
        name.innerHTML = v.name;
        name.className = "name";
        let subject = document.createElement("td");
        subject.innerHTML = v.subject;
        subject.className = "subject";
        let details = document.createElement("td");
        details.innerHTML = v.details;
        details.className = "details";
        row.appendChild(name);
        row.appendChild(subject);
        row.appendChild(details);
        table.appendChild(row);
      })
    }
  }
  xhttp.open("GET","../api/select.php");
  xhttp.send();
}