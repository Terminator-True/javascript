//Slider code
$(document).ready(function(){
    $('.slider').bxSlider();
  });

document.addEventListener("DOMContentLoaded",function(){
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
      console.log(data)
      for (let i = 0; i < 6; i++) {
        var node = document.createElement("div");
        node.classList.add("joc")
        node.innerHTML="<h2>"+data[i].title+"</h2> <p>"+date+"</p><img style='width:100%;' src='"+data[i].thumb+"'> <img src='https://www.cheapshark.com/img/stores/banners/"+data[i].storeID+".png'> <br> <strike>"+data[i].normalPrice+" €</strike> <p>"+data[i].salePrice+" €</p> <button onclick='Informacio("+data[i].gameID+","+data[i].metacriticScore+","+data[i].metacriticLink+","+data[i].releaseDate+")'>Llegir més</button>"                       
        document.getElementById("row").appendChild(node)
    }
    })
    .catch(error=>
      console.log(error)
      );
})

function Informacio(id,nota,link,releasedate) {
  
  fetch("https://www.cheapshark.com/api/1.0/games?id="+id)
  .then(data => data.json())
  .then(data => {
    console.log(data)
    var date=new Date(releasedate * 1000);
    var release_date = date.getDate()+'-'+(date.getMonth()+1)+'-'+date.getFullYear();
    var node = document.createElement("div");
    node.classList.add("mes-content")
    node.classList.add("animate")
    node.innerHTML="<span onclick='tencar()' class='close' title='Close Modal'>&times;</span> <p>Data de sortida: "+release_date+"</p> <p>Nota:"+nota+"</p> <a href='https://www.metacritic.com/"+link+"'>Veure més</a> <a href='http://store.steampowered.com/app/"+data.info.steamAppID+"'>Veure a Steam</a> "
    document.getElementById("id01").appendChild(node)
  })
  .catch(error=>
    console.log(error)
    );
    document.getElementById('id01').style.display='block'
}
function tencar() {
  document.getElementById('id01').style.display='none'
  var pare=document.getElementById('id01')
  while (pare.firstChild) {
    pare.removeChild(pare.firstChild);
  }
}

function topFunction() {
  document.documentElement.scrollTop = 0;
}
