//Slider code
$(document).ready(function(){
    $('.slider').bxSlider();
  });

document.addEventListener("DOMContentLoaded",function(){
  // Validació del Formulari
  const form  = document.getElementsByTagName('form')[0]
  const emailError = document.getElementById('emailError')
  console.log(emailError)

  var email = form["email"];
  var nom = form["nom"];
  var cognoms = form["cognoms"];
  var data = form["data"];
  var edat = form["edat"];
  email.addEventListener('input', function (event) {
    if (email.validity.valid) {
      emailError.innerHTML = ''; 
      emailError.className = 'error';
    } else {
      showError();
      email.style.border = "solid #ee5b41"
      console.log("gola")

    }
  function showError() {
    if(email.validity.valueMissing) {
      emailError.textContent = 'Error, fa falta escriure un correu';
    } else if(email.validity.typeMismatch) {
        emailError.textContent = 'Error, fa falta escriure un correu vàlid';
    }
    emailError.className = 'error activo';
}
});

  cambiar_color(localStorage.getItem("color"))
  var today = new Date();
  var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+today.getFullYear();

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
    node.innerHTML="<span onclick='tencar()' class='close' title='Close Modal'>&times;</span> <h2>Més informació</h2> <hr style='color:white;'> <p>Data de sortida: "+release_date+"</p> <p>Calitat de l'oferta: "+calidad+"</p> <p>Nota en metacritick:"+nota+"</p> <p>Nota en steam:"+steam+"</p>  <p>Número de resenyes a steam:"+reseñas+"</p>"
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
  let t = setTimeout(function(){ currentTime() }, 1000);
}

function tencar_rellotge() {
  document.getElementById('clock').style.display='none'  
}


function validar() {
  form.addEventListener('submit', function (event) {
  
    if(!email.validity.valid) {
      showError();
      event.preventDefault();
    }
  });
}