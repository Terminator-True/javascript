//Slider code
$(document).ready(function(){
    $('.slider').bxSlider();
  });
var respostas_correctes=[];
document.addEventListener("DOMContentLoaded",function(){

  cambiar_color(localStorage.getItem("color"))
  var today = new Date();
  var date = today.getDate()+'/'+(today.getMonth()+1)+'/'+today.getFullYear();

  // Validació del Formulari
  const form  = document.getElementsByTagName('form')[0]
  var email = form["email"];
  var nom = form["nom"];
  var cognoms = form["cognoms"];
  var data = form["data"];
  var edat = form["edat"];
  var correctes= 0;
  nom.addEventListener("blur",function(){
    const error = document.getElementById('nomError')
    if (/^([a-zA-Z ]{1,})$/.test(nom.value)) {
      error.innerText=""
      error.classList.remove("error")
    }else if(nom.value==""){
      error.classList.add("error")
      error.innerText="Error, Fa falta escriure un nom"
    }else{
      error.classList.add("error")
      error.innerText="Error, caràcters incorrectes"
    }
  });

  cognoms.addEventListener("blur",function(){
    const error = document.getElementById('cognomError')
    if (/^([a-zA-Z ]{1,})$/.test(cognoms.value)) {
      error.innerText=""
      error.classList.remove("error")
      correctes++;
    }else if(cognoms.value==""){
      error.classList.add("error")
      error.innerText="Error, Fa falta escriure un cognom"
    }else{
      error.classList.add("error")
      error.innerText="Error, caràcters incorrectes"
    }
  });
  
  data.addEventListener("blur",function(){
    const error = document.getElementById('dataerror')
    if (/^(?:3[01]|[12][0-9]|0?[1-9])([\-/.])(0?[1-9]|1[1-2])\1\d{4}$/.test(data.value)) {
      var data_naix = new Date(data.value);
      error.innerText=""
      error.classList.remove("error")
      var resta = today.getTime() - data_naix.getTime()
      var num_edat=Math.round(resta/(1000*60*60*24*365))
      edat.value=num_edat;
      correctes++;
    }else if(data.value==""){
      error.classList.add("error")
      error.innerText="Error, Fa falta escriure una data"
    }else{
      error.classList.add("error")
      error.innerText="Error, caràcters incorrectes"
    }
  });

  email.addEventListener("blur",function(){
    const error = document.getElementById('emailError')
    if (/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(email.value)) {
      error.innerText=""
      error.classList.remove("error")
      correctes++;
    }else if(email.value==""){
      error.classList.add("error")
      error.innerText="Error, Fa falta escriure un email"
    }else{
      error.classList.add("error")
      error.innerText="Error, caràcters incorrectes"
    }
  });
  if (correctes>=4) {
    form.getElementById("signupbtn").disabled= false
  }
  
  //Botó de tornar adalt

  mybutton = document.getElementById("myBtn");

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // api videojocs

  fetch("https://www.cheapshark.com/api/1.0/deals?upperPrice=15")
    .then(data => data.json())
    .then(data => {
      //console.log(data)
      for (let i = 0; i < 15; i++) {
        var node = document.createElement("div");
        node.classList.add("joc")
        node.innerHTML="<h2>"+data[i].title+"</h2> <p>"+date+"</p><img style='width:100%;' src='"+data[i].thumb+"'> <img src='https://www.cheapshark.com/img/stores/banners/"+data[i].storeID+".png'> <br> <strike>"+data[i].normalPrice+" €</strike> <p>"+data[i].salePrice+" €</p> <button onclick='Informacio("+data[i].dealRating+","+data[i].metacriticScore+","+data[i].releaseDate+","+data[i].steamRatingPercent+","+data[i].steamRatingCount+")'>Llegir més</button>"                       
        document.getElementById("principal").appendChild(node)
    }
    })
    .catch(error=>
      console.log(error)
      );
  })
  //Api del trivial
  fetch("https://opentdb.com/api.php?amount=10&category=15&difficulty=medium&type=multiple")
    .then(quest => quest.json())
    .then(quest => {
      for (let i = 0; i < 10; i++) {
        var respostas_html ="";
        var div = document.createElement("div");
        var node = document.createElement("form");
        node.classList.add("joc")
        node.classList.add("quests")
        node.setAttribute("id", i);

        var pregunta = "<h2>"+quest.results[i].question+"</h2>"
        var respostas = quest.results[i].incorrect_answers
        respostas.push(quest.results[i].correct_answer)
        respostas_correctes.push(quest.results[i].correct_answer)
        //Randomitza les respostas per a que siguin aleatòries
        respostas.sort(function() { return Math.random() - 0.5 })
        for(var key in respostas){
          respostas_html = respostas_html.concat("<label><input type='radio' name='"+i+"' id='"+i+"' placeholder='"+respostas[key]+"' value='"+respostas[key]+"'>"+respostas[key]+"</label><br>")
        }
        node.innerHTML=  pregunta+respostas_html+"<p id='text_"+i+"'></p>"
        div.appendChild(node)              
        document.getElementById("quest").appendChild(div)
    }
    var boto = document.createElement("button")
    boto.classList.add("avaluar")
    boto.innerText="Avaluar"
    boto.addEventListener("click",function(){validar()})
    document.getElementById("quest").appendChild(boto)
    })

function validar() {
  console.log(respostas_correctes)
  i=0;
  j=0;
  acabat=false
  var forms = document.getElementsByClassName("quests")
  do {
    j=0
      while (j<4) {
        if(forms[i][j].checked){
          if (forms[i][j].value==respostas_correctes[i]) {
            var name = "text_"+i
            document.getElementById(name).style.color="#4fee41"  
            document.getElementById(name).innerText="Correcte"
          }else{
            var name = "text_"+i
            document.getElementById(name).style.color="#ee5b41"  
            document.getElementById(name).innerText="Incorrecte, la correcte es: "+respostas_correctes[i]
          }
      }
        j++
        correcte=false
      }
    i++
    if (i==10) {
      acabat=true
    }
  } while (acabat==false);

}

//Mostrar més informació
function Informacio(calidad,nota,releasedate,steam,reseñas) {
  if (releasedate==0) {
    release_date="Sense data de sortida"
  }else{
    var date=new Date(parseInt(releasedate) * 1000);
    var release_date = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
  }
  if (nota==0) {
    nota=" Sense nota mitja"
  }
  if (steam==0) {
    steam=" Sense nota mitja"
  }
  if (reseñas==0) {
    reseñas=" Sense informació de les resenyes"
  }
    var node = document.createElement("div");
    node.classList.add("mes-content")
    node.classList.add("animate")
    node.innerHTML="<span o nclick='tencar()' class='close' title='Close Modal'>&times;</span> <h2>Més informació</h2> <hr style='color:white;'> <p>Data de sortida: "+release_date+"</p> <p>Calitat de l'oferta: "+calidad+"</p> <p>Nota en metacritick:"+nota+"</p> <p>Nota en steam:"+steam+"</p>  <p>Número de resenyes a steam:"+reseñas+"</p>"
    document.getElementById("more").appendChild(node)
    document.getElementById('more').style.display='block'
}

function tencar() {
  document.getElementById('more').style.display='none'
  var pare=document.getElementById('more')
  while (pare.firstChild) {
    pare.removeChild(pare.firstChild);
  }
}


function topFunction() {
  document.documentElement.scrollTop = 0;
}

// Funció canvi de Tema
function cambiar_color(color) {
  document.body.style.backgroundColor=color
  document.getElementById("header").style.backgroundColor=color
  localStorage.setItem("color",color);

}

//Rellotge

function currentTime() {
  let date = new Date();
  let time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() ;
  document.getElementById("clock").innerHTML = "        <span onclick='tencar_rellotge()' class='close' title='Close Modal'>&times;</span><h1>"+time+"</h1>"; 
  let t = setTimeout(function(){ currentTime() }, 5000);
}

function tencar_rellotge() {
  document.getElementById('clock').style.display='none'  
}
