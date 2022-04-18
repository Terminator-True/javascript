<template>
  <h2>{{ msg }}</h2>
  <div class="registration-form">
        <form @submit.prevent="setData" >
            <div class="form-icon">
                <span> <img src="https://cdn-icons.flaticon.com/png/512/3489/premium/3489104.png?token=exp=1650274579~hmac=281d6db4812b22795810a3a0ad0639b6"> </span>
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="modul_id" placeholder="Id del Modul" v-model="modul.Modul">
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="modul_name" placeholder="Nom de Modul" v-model="modul.Nom" >
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="durada" placeholder="Durada en hores" v-model="modul.Hores" >
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="durada" placeholder="Hores de lliure dispocició" v-model="modul.horesLLD" >
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="ects" placeholder="Crèdits ECTS" v-model="modul.ECTS" >
            </div>
            <div class="form-group">
                <input type="text" class="form-control item" id="uf" placeholder="Quantitat d'UFs"  v-model="modul.UFs">
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-block create-account">Puja</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
  name: 'Form_Component',
  props: {
    msg: String,
    moduls: Array
  },
  validations:{
     
  },
  data(){
    return{
        repetit:false,
        modul: {
          Modul: "",
          Nom: "",
          hores: "",
          horesLLD:"",
          ECTS: "",
          UFs: 0,
          Fetes: 0,
          }
    }
  },
  methods: {
    setData(){
      var moduls_existents=this.moduls.map((modul)=>{return modul.Modul})
      for (const id in moduls_existents) {
          console.log(this.repetit)
          if (id===this.modul.Modul) {
              this.repetit=true
              return
          }
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
img{
  width: 50px;
}
body{
    background-color: #dee9ff;
}

.registration-form{
	padding: 50px 0;
}

.registration-form form{
    background-color: #fff;
    max-width: 600px;
    margin: auto;
    padding: 50px 70px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .form-icon{
	text-align: center;
    background-color: #5891ff;
    border-radius: 50%;
    font-size: 40px;
    color: white;
    width: 100px;
    height: 100px;
    margin: auto;
    margin-bottom: 50px;
    line-height: 100px;
}

.registration-form .item{
	border-radius: 20px;
    margin-bottom: 25px;
    padding: 10px 20px;
}

.registration-form .create-account{
    border-radius: 30px;
    padding: 10px 20px;
    font-size: 18px;
    font-weight: bold;
    background-color: #5791ff;
    border: none;
    color: white;
    margin-top: 20px;
}

.registration-form .social-media{
    max-width: 600px;
    background-color: #fff;
    margin: auto;
    padding: 35px 0;
    text-align: center;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    color: #9fadca;
    border-top: 1px solid #dee9ff;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.075);
}

.registration-form .social-icons{
    margin-top: 30px;
    margin-bottom: 16px;
}

.registration-form .social-icons a{
    font-size: 23px;
    margin: 0 3px;
    color: #5691ff;
    border: 1px solid;
    border-radius: 50%;
    width: 45px;
    display: inline-block;
    height: 45px;
    text-align: center;
    background-color: #fff;
    line-height: 45px;
}

.registration-form .social-icons a:hover{
    text-decoration: none;
    opacity: 0.6;
}

@media (max-width: 576px) {
    .registration-form form{
        padding: 50px 20px;
    }

    .registration-form .form-icon{
        width: 70px;
        height: 70px;
        font-size: 30px;
        line-height: 70px;
    }
}
/*---Form---*/
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
