<template>
  <div class="container">
  
    <b-card class="registre-form">
    
      <b-form @submit.prevent ="addmodule" class="mt-3 card-body" >
        <!-- =========================================================== -->
        <b-form-group id="input-group-1" label="Nom :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.nom"
            type="text"
            placeholder="nom"
            required
          ></b-form-input>
        </b-form-group>
        <!-- =============================================== -->
        <b-form-group id="input-group-1" label="id prof :" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.id_prof"
            type="text"
            placeholder="id_prof"
            required
          ></b-form-input>
        </b-form-group>
        <!-- ================================================== -->
        <b-form-group id="input-group-1" label="id semestre" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.id_semestre"
            type="text"
            placeholder="id_semestre"
            required
          ></b-form-input>
        </b-form-group>
        <!--------------------------- email-------------------- -->
        <b-button class="mx-2" type="submit"  variant="primary"> Enregistrer </b-button>
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
        id_prof: "",
        id_semestre: "",
      },
    };
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
    addmodule(){
          axios.post('http://127.0.0.1:8000/api/Modules', this.form,{ headers: {"Authorization" : `Bearer ${this.$store.state.access_token}`}})
          .then(res=>{
            console.log(res)
            this.$forceUpdate();
          }).catch(err=>{
            console.log(err)
          })
      },

  }




};

</script>

<style scoped>
.registre-form {
 
  background: #16222a;
  background: -webkit-linear-gradient(59deg, #8ad0f3, #1c324b);
}
</style>