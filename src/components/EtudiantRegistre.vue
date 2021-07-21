<template>
  <div class="container">
  
    <b-card class="registre-form">
    
      <b-form class="mt-3 card-body" >
        <b-form-group id="input-group-1" label="Nom :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.nom"
            type="text"
            placeholder="nom"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="Prenom :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.prenom"
            type="text"
            placeholder="prénom"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Date naissance"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="form.date_n"
            type="date"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="CIN" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.CIN"
            type="text"
            placeholder="XX12345"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group id="input-group-1" label="CNE" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.CNE"
            type="text"
            placeholder="X12345678"
            required
          ></b-form-input>
        </b-form-group>
        <!--------------------------- email-------------------- -->
        <b-form-group id="input-group-6" label="Email" label-for="input-5">
          <b-form-input
            id="input-5"
            type="email"
            v-model="form.email"
            placeholder="Ex: exemple@gmail.com"
            required
          ></b-form-input>
        </b-form-group>

        <!--------------------------- password-------------------- -->
        <b-form-group
          id="input-group-6"
          label="Mote de passe"
          label-for="input-5"
        >
          <b-form-input
            id="input-5"
            type="text"
            placeholder="********"
            v-model="form.password"
            required
          ></b-form-input>
        </b-form-group>
       

        <b-button  class="mx-2" @click ="register"  variant="primary"> Enregistrer </b-button>
      </b-form>
    </b-card>

    <b-card class="mt-3 mb-5" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      form: {
        nom: "",
        prenom: "",
        CIN: "",
        CNE: "",
        id_semestre:"",
        email: "",
        password: "",
        
        date_n: "",
        role: "Student"
      },
    };
  },
  props:{
id_semestre:String
  },
  mounted(){
    if(this.$store.state.access_token !== ''){
      axios.post('http://127.0.0.1:8000/api/checkToken',{token : this.$store.state.access_token})
      .then(response => {
        if(response){
          this.loading = false;
        }
      }).catch(err => {
        this.loading = false;
        this.$store.commit('clear');
        this.$router.push('/');

        console.log(err);
      })

    }else{
            this.loading = false;
          }
  },
  methods: {
    register(){
          axios.post('http://127.0.0.1:8000/api/register', this.form)
          .then(response => {
            console.log(response)
          }).catch(err => {
            console.log(err)
          })
      },

  }




};

</script>

<style scoped>
.registre-form {
 color: black;
}
</style>