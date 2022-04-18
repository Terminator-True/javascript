<template>
  <div class="container">
      <div v-if="mode=='list'" >
        <h2>{{ msg }}</h2>
        <ul class="list-group"  v-for="modul in Moduls" :key="modul" >
          <li class="list-group-item accordion"> 
            <p @click="toggleDetails(modul.Modul)">Modul {{modul.Modul}}:{{modul.Nom}} 
            <span v-if="modul.UFs==modul.Fetes"  class="badge bg-success">√</span>
            <span v-if="modul.UFs!=modul.Fetes"  class="badge bg-danger">X</span>
            </p>            
            <div v-if="details_modul==modul.Modul">
              <ul class="list-group list-group-flush" v-for="(campo, key) in modul" :key="key" >
                <li class="list-group-item">{{key}}: {{ campo }}
                    <span v-if="key=='Fetes'"><button class="btn btn-primary col-1 m-2" @click="doneUF(details_modul)" v-if="key=='Fetes'" >+1</button></span>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
        <Form_Component :moduls="Moduls" 
        v-if="mode=='form'"></Form_Component>
    </div>
</template>

<script>
import Form_Component from './Form_Component.vue';

export default {
  name: 'Home_Component',
  emits: ['Moduls'],
  mounted(){
    this.mode=this.$route.params.mode

  },
  props: {
    msg: String
  },
  data() {
    return {
      mode: "list",
      details_modul:"",
      Moduls:[
        {
          Modul: "5",
          Nom: "Entorns de desenvolupament",
          Hores: "66",
          HoresLLD:"-",
          ECTS: "6",
          UFs: 3,
          Fetes: 2,
        },
        {
          Modul: "6",
          Nom: "Desenvolupament web en entorn client",
          hores: "165 ",
          horesLLD:"33 ",
          ECTS: "9",
          UFs: 4,
          Fetes: 4,
        },
                {
          Modul: "7",
          Nom: "Desenvolupament web en entorn servidor",
          hores: "165  ",
          horesLLD:"33 ",
          ECTS: "12",
          UFs: 4,
          Fetes: 3,
        }
      ]
    }
  },
  methods:{
    toggleDetails(modul){
      this.details_modul=modul==this.details_modul? "":modul
    },
    doneUF(modul){
      var acabat=false;
      var i = 0;
      while(!acabat) {
        //console.log(modul)
        if(this.Moduls[i].Modul===modul && this.Moduls[i].UFs>this.Moduls[i].Fetes){
          acabat=true;
          this.Moduls[i].Fetes++;
        }else if (this.Moduls[i].Modul===modul && this.Moduls[i].UFs===this.Moduls[i].Fetes){
           acabat=true;
        }
        i++;
      }
    }
  },
  components: {
    Form_Component
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.accordion {
  background-color: #eee;
  color: #444;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
  transition: 0.4s;
}

.active, .accordion:hover {
  background-color: #ccc; 
}


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
