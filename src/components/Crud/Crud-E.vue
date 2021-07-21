<template>
<div>
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-6">
                <h2>gestion <b>Etudiants</b></h2>
                <br />
                <b-input
                  type="search"
                  class="search"
                  placeholder="search"
                ></b-input>
              </div>

              <div class="col-sm-6">
                <a href="#addStudentModal" class="btn btn" data-toggle="modal" @click="show2(semestre_id)"><i class="material-icons">&#xE147;</i>
                  <span>Ajouter Etudiant</span></a
                >
                <a
                  href="#deleteEmployeeModal"
                  class="btn btn"
                  data-toggle="modal"
                  ><i class="material-icons">&#xE15C;</i>
                  <span>Supprimer</span></a
                >
              </div>
            </div>
          </div>
          <b-tabs content-class="mt-3" align="center">
          <b-tab @click="show(1)"  title="Semestre 1" :active="active">
            <table v-if="Reloading" class="table table-striped table-hover center">
                <thead>
                  <tr>
                    <th>
                      <span class="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label for="selectAll"></label>
                      </span>
                    </th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>CNE</th>
                    <th>CIN</th>
                    <th>Email</th>
                    <th>Date de naissance</th>
                    <th>edit | delete</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="etudiant in etudiants" :key="etudiant.id">
                    <td></td>
                    <td class="col-2">{{ etudiant.nom }}</td>
                    <td class="col-2">{{ etudiant.prenom }}</td>
                    <td>{{ etudiant.CNE }}</td>
                    <td class="col-2">{{ etudiant.CIN }}</td>
                    <td class="col-2">{{ etudiant.email }}</td>
                    <td class="col-2">{{ etudiant.date_n }}</td>

                    <td class="col-2">
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        @click="edit(etudiant.id)"
                        data-toggle="modal"
                        ><i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                          >&#xE254;</i
                        ></a
                      >
                      &nbsp; &nbsp;

                      <a href="#"
                        class="delete"
                        data-toggle="modal"
                        ><i
                          class="material-icons  pointer"
                        @click="deleteStudent(etudiant.id)"
                          data-toggle="tooltip"
                          title="Delete"
                          >&#xE872;</i
                        ></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="!Reloading"  class="text-center">
                   
                  <b-spinner  variant="primary" type="grow" label="Spinning"></b-spinner>
                
                </div>
          </b-tab>
          <b-tab @click="show(2)"  title="Semestre 2" :active="active">
            <table v-if="Reloading" class="table table-striped table-hover center">
                <thead>
                  <tr>
                    <th>
                      <span class="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label for="selectAll"></label>
                      </span>
                    </th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>CNE</th>
                    <th>CIN</th>
                    <th>Email</th>
                    <th>Date de naissance</th>
                    <th>edit | delete</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="etudiant in etudiants" :key="etudiant.id">
                    <td></td>
                    <td class="col-2">{{ etudiant.nom }}</td>
                    <td class="col-2">{{ etudiant.prenom }}</td>
                    <td>{{ etudiant.CNE }}</td>
                    <td class="col-2">{{ etudiant.CIN }}</td>
                    <td class="col-2">{{ etudiant.email }}</td>
                    <td class="col-2">{{ etudiant.date_n }}</td>

                    <td class="col-2">
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        @click="edit(etudiant.id)"
                        data-toggle="modal"
                        ><i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                          >&#xE254;</i
                        ></a
                      >
                      &nbsp; &nbsp;

                      <a href="#"
                        class="delete"
                        data-toggle="modal"
                        ><i
                          class="material-icons  pointer"
                        @click="deleteStudent(etudiant.id)"
                          data-toggle="tooltip"
                          title="Delete"
                          >&#xE872;</i
                        ></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="!Reloading"  class="text-center">
                   
                  <b-spinner  variant="primary" type="grow" label="Spinning"></b-spinner>
                
                </div>
          </b-tab>
          <b-tab @click="show(3)"  title="Semestre 3" :active="active">
            <table v-if="Reloading" class="table table-striped table-hover center">
                <thead>
                  <tr>
                    <th>
                      <span class="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label for="selectAll"></label>
                      </span>
                    </th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>CNE</th>
                    <th>CIN</th>
                    <th>Email</th>
                    <th>Date de naissance</th>
                    <th>edit | delete</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="etudiant in etudiants" :key="etudiant.id">
                    <td></td>
                    <td class="col-2">{{ etudiant.nom }}</td>
                    <td class="col-2">{{ etudiant.prenom }}</td>
                    <td>{{ etudiant.CNE }}</td>
                    <td class="col-2">{{ etudiant.CIN }}</td>
                    <td class="col-2">{{ etudiant.email }}</td>
                    <td class="col-2">{{ etudiant.date_n }}</td>

                    <td class="col-2">
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        @click="edit(etudiant.id)"
                        data-toggle="modal"
                        ><i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                          >&#xE254;</i
                        ></a
                      >
                      &nbsp; &nbsp;

                      <a href="#"
                        class="delete"
                        data-toggle="modal"
                        ><i
                          class="material-icons  pointer"
                        @click="deleteStudent(etudiant.id)"
                          data-toggle="tooltip"
                          title="Delete"
                          >&#xE872;</i
                        ></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="!Reloading"  class="text-center">
                   
                  <b-spinner  variant="primary" type="grow" label="Spinning"></b-spinner>
                
                </div>
          </b-tab>
          <b-tab @click="show(4)"  title="Semestre 4" :active="active">
            <table v-if="Reloading" class="table table-striped table-hover center">
                <thead>
                  <tr>
                    <th>
                      <span class="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label for="selectAll"></label>
                      </span>
                    </th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>CNE</th>
                    <th>CIN</th>
                    <th>Email</th>
                    <th>Date de naissance</th>
                    <th>edit | delete</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="etudiant in etudiants" :key="etudiant.id">
                    <td></td>
                    <td class="col-2">{{ etudiant.nom }}</td>
                    <td class="col-2">{{ etudiant.prenom }}</td>
                    <td>{{ etudiant.CNE }}</td>
                    <td class="col-2">{{ etudiant.CIN }}</td>
                    <td class="col-2">{{ etudiant.email }}</td>
                    <td class="col-2">{{ etudiant.date_n }}</td>

                    <td class="col-2">
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        @click="edit(etudiant.id)"
                        data-toggle="modal"
                        ><i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                          >&#xE254;</i
                        ></a
                      >
                      &nbsp; &nbsp;

                      <a href="#"
                        class="delete"
                        data-toggle="modal"
                        ><i
                          class="material-icons  pointer"
                        @click="deleteStudent(etudiant.id)"
                          data-toggle="tooltip"
                          title="Delete"
                          >&#xE872;</i
                        ></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="!Reloading"  class="text-center">
                   
                  <b-spinner  variant="primary" type="grow" label="Spinning"></b-spinner>
                
                </div>
          </b-tab>
          <b-tab @click="show(5)"  title="Semestre 5" :active="active">
            <table v-if="Reloading" class="table table-striped table-hover center">
                <thead>
                  <tr>
                    <th>
                      <span class="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label for="selectAll"></label>
                      </span>
                    </th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>CNE</th>
                    <th>CIN</th>
                    <th>Email</th>
                    <th>Date de naissance</th>
                    <th>edit | delete</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="etudiant in etudiants" :key="etudiant.id">
                    <td></td>
                    <td class="col-2">{{ etudiant.nom }}</td>
                    <td class="col-2">{{ etudiant.prenom }}</td>
                    <td>{{ etudiant.CNE }}</td>
                    <td class="col-2">{{ etudiant.CIN }}</td>
                    <td class="col-2">{{ etudiant.email }}</td>
                    <td class="col-2">{{ etudiant.date_n }}</td>

                    <td class="col-2">
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        @click="edit(etudiant.id)"
                        data-toggle="modal"
                        ><i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                          >&#xE254;</i
                        ></a
                      >
                      &nbsp; &nbsp;

                      <a href="#"
                        class="delete"
                        data-toggle="modal"
                        ><i
                          class="material-icons  pointer"
                        @click="deleteStudent(etudiant.id)"
                          data-toggle="tooltip"
                          title="Delete"
                          >&#xE872;</i
                        ></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="!Reloading"  class="text-center">
                   
                  <b-spinner  variant="primary" type="grow" label="Spinning"></b-spinner>
                
                </div>
          </b-tab>
          <b-tab @click="show(6)"  title="Semestre 6" :active="active">
            <table v-if="Reloading" class="table table-striped table-hover center">
                <thead>
                  <tr>
                    <th>
                      <span class="custom-checkbox">
                        <input type="checkbox" id="selectAll" />
                        <label for="selectAll"></label>
                      </span>
                    </th>
                    <th>Nom</th>
                    <th>Prenom</th>
                    <th>CNE</th>
                    <th>CIN</th>
                    <th>Email</th>
                    <th>Date de naissance</th>
                    <th>edit | delete</th>
                  </tr>
                </thead>
                <tbody >
                  <tr v-for="etudiant in etudiants" :key="etudiant.id">
                    <td></td>
                    <td class="col-2">{{ etudiant.nom }}</td>
                    <td class="col-2">{{ etudiant.prenom }}</td>
                    <td>{{ etudiant.CNE }}</td>
                    <td class="col-2">{{ etudiant.CIN }}</td>
                    <td class="col-2">{{ etudiant.email }}</td>
                    <td class="col-2">{{ etudiant.date_n }}</td>

                    <td class="col-2">
                      <a
                        href="#editEmployeeModal"
                        class="edit"
                        @click="edit(etudiant.id)"
                        data-toggle="modal"
                        ><i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Edit"
                          >&#xE254;</i
                        ></a
                      >
                      &nbsp; &nbsp;

                      <a href="#"
                        class="delete"
                        data-toggle="modal"
                        ><i
                          class="material-icons  pointer"
                        @click="deleteStudent(etudiant.id)"
                          data-toggle="tooltip"
                          title="Delete"
                          >&#xE872;</i
                        ></a
                      >
                    </td>
                  </tr>
                </tbody>
              </table>
              <div v-if="!Reloading"  class="text-center">
                   
                  <b-spinner  variant="primary" type="grow" label="Spinning"></b-spinner>
                
                </div>
          </b-tab>

           
          </b-tabs>

          
          <div class="clearfix">
            <div class="center">
              <b-pagination
                class="text-center"
                v-model="currentPage"
                :total-rows="rows"
              ></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Edit Modal HTML -->
    <div id="addStudentModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">Ajouter étudiant</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div>
                <div class="container">
                  <b-card class="registre-form">
                    <b-form  class="mt-3 card-body" >
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
                    

                      <b-button  class="mx-2"  @click="register"  variant="primary"> Enregistrer </b-button>
                    </b-form>
                  </b-card>

                  <b-card class="mt-3 mb-5" header="Form Data Result">
                    <pre class="m-0">{{ form }}</pre>
                  </b-card>
                </div>
                </div>
                <div class="modal-footer">
                  <input
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                    value="Cancel"
                  />
                </div>
              </form>
            </div>
        </div>
      </div>
    <!-- Edit Modal HTML -->
    <div id="editEmployeeModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">modifier</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div>
              <div v-if="!Reloading">
                <div class="text-center">
                  <b-spinner type="grow" label="Spinning"></b-spinner>
                </div>
              </div>
              <div v-else class="container">
                  <b-card class="registre-form">
                    <b-form  class="mt-3 card-body" >
                      <b-form-group id="input-group-1" label="Nom :" label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="EtudiantModifier.nom"
                          type="text"
                          :placeholder="EtudiantData.nom"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-1" label="Prenom :" label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="EtudiantModifier.prenom"
                          type="text"
                          :placeholder="EtudiantData.prenom"
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
                          v-model="EtudiantModifier.date_n"
                          type="date"
                          :placeholder = "EtudiantData.date_n"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-1" label="CIN" label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="EtudiantModifier.CIN"
                          type="text"
                          :placeholder="EtudiantData.CIN"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <b-form-group id="input-group-1" label="CNE" label-for="input-1">
                        <b-form-input
                          id="input-1"
                          v-model="EtudiantModifier.CNE"
                          type="text"
                          :placeholder="EtudiantData.CNE"
                          required
                        ></b-form-input>
                      </b-form-group>
                      <!--------------------------- email-------------------- -->
                      <b-form-group id="input-group-6" label="Email" label-for="input-5">
                        <b-form-input
                          id="input-5"
                          type="email"
                          v-model="EtudiantModifier.email"
                          :placeholder="EtudiantData.email"
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
                          :placeholder="EtudiantData.password"
                          v-model="EtudiantModifier.password"
                          required
                        ></b-form-input>
                      </b-form-group>
                    

                      <b-button class="mx-2"  @click="Update"  variant="primary"> Modifier </b-button>
                    </b-form>
                  </b-card>

                  <b-card class="mt-3 mb-5" header="Form Data Result">
                    <pre class="m-0">{{ EtudiantModifier }}</pre>
                  </b-card>
              </div>
            </div>
            <div class="modal-footer">
                  <input
                    type="button"
                    class="btn btn-default"
                    data-dismiss="modal"
                    value="Cancel"
                  />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <input
            type="button"
            class="btn btn-default"
            data-dismiss="modal"
            value="Cancel"
          />
        </div>
      </div>
    </div>
</div>
</template>


<script>
import axios from "axios";
export default {
  data() {
    return {
      etudiants: [],
      EtudiantModifier : {
        nom: "",
        prenom: "",
        CIN: "",
        CNE: "",
        email: "",
        password: "",
        date_n: "",
        role: "Student",
        id_semestre: null ,
      },
      EtudiantData :  {
        id: null,
        nom: "",
        prenom: "",
        CIN: "",
        CNE: "",
        email: "",
        password: "",
        date_n: "",
        role: "Student",
        id_semestre: null ,
      },
      semestre_id : 1, 
      form: {
        nom: "",
        prenom: "",
        CIN: "",
        CNE: "",
        email: "",
        password: "",
        date_n: "",
        role: "Student",
        id_semestre: 1 ,
      },
      loading: true,   
      Reloading:true,  
    };
  },
  methods: {
     register(){
          axios.post('http://127.0.0.1:8000/api/register', this.form)
          .then(response => {
            console.log(response)
            this.$forceupdate()
          }).catch(err => { 
            console.log(err)
          })
      },

    edit(id) {
      axios
            .get(`http://127.0.0.1:8000/api/getonestu/${id}`, {
              headers: { Authorization: `Bearer ${this.$store.state.access_token}` },
            })
            .then((res) => {
              this.EtudiantData.id = res.data[0].id;
              this.EtudiantData.nom = res.data[0].nom;
              this.EtudiantData.prenom = res.data[0].prenom;
              this.EtudiantData.CNE = res.data[0].CNE;
              this.EtudiantData.CIN = res.data[0].CIN;
              this.EtudiantData.email = res.data[0].email;
              this.EtudiantData.password = res.data[0].password;
              this.EtudiantData.date_n = res.data[0].date_n;
              this.EtudiantModifier.id_semestre = res.data[0].id_semestre;

            })
      .catch((err) => {
        console.log(err);
      });
    },



    show2(value){
      this.semestre_id = value;
      this.$store.commit("setSemestre", value);
    },
    show(value){
      this.semestre_id = value;
      this.Reloading = false;
      this.form.id_semestre = value;
      this.$store.commit("setSemestre", value);
       axios
      .get(`http://127.0.0.1:8000/api/getstu/${this.semestre_id}`, {
        headers: { Authorization: `Bearer ${this.$store.state.access_token}` },
      })
      .then((res) => {
        this.etudiants = res.data;
        this.$nextTick(()=>{
          this.Reloading = true;
        })
      })
      .catch((err) => {
        console.log(err);
      });
    },


    deleteStudent(id) {
      this.Reloading = false;
      axios
        .delete(`http://localhost:8000/api/deleteuser/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        }).then(res =>{
          console.log(res)
              axios.get(`http://127.0.0.1:8000/api/getstu/${this.semestre_id}`, {
              headers: { Authorization: `Bearer ${this.$store.state.access_token}` },})
            .then((res) => {
                this.Reloading = false;
              this.$nextTick(()=>{ 
                this.etudiants = res.data;
                this.Reloading = true;
        }).catch(err=>{
          console.log(err)
        })

      })
      .catch((err) => {
        console.log(err);
      });
        })
        
 },
    
    Update(){

         axios.put(`http://localhost:8000/api/updateuser/${this.EtudiantData.id}`, this.EtudiantModifier,{
              headers: { Authorization: `Bearer ${this.$store.state.access_token}`}})
          .then((res) => {
            console.log(res)}).catch(err=>{
          console.log(err);
      })
      
    },

  
  },


  mounted() {
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
 axios
      .get(`http://127.0.0.1:8000/api/getstu/${this.semestre_id}`, {
        headers: { Authorization: `Bearer ${this.$store.state.access_token}` },
      })
      .then((res) => {
          this.Reloading = false;
        this.$nextTick(()=>{ 
         this.etudiants = res.data;
          this.Reloading = true;
        })

      })
      .catch((err) => {
        console.log(err);
      });
   
  },
  
};
</script>

<style scoped>
.search {
  width: 300px;
}
.modal-title {
  color: #566787;
}
.table-responsive {
  margin: 30px 0;
}
.table-wrapper {
  background: #fff;
  padding: 20px 25px;
  border-radius: 3px;
  min-width: 1000px;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}
.table-title {
  padding-bottom: 15px;
  background: #435d7d;
  color: #fff;
  padding: 16px 30px;
  min-width: 100%;
  margin: -20px -25px 10px;
  border-radius: 3px 3px 0 0;
}
.table-title h2 {
  margin: 5px 0 0;
  font-size: 24px;
}
.table-title .btn-group {
  float: right;
}
.table-title .btn {
  color: #fff;
  float: right;
  font-size: 13px;
  border: none;
  min-width: 50px;
  border-radius: 2px;
  border: none;
  outline: none !important;
  margin-left: 10px;
}
.table-title .btn i {
  float: left;
  font-size: 21px;
  margin-right: 5px;
}
.table-title .btn span {
  float: left;
  margin-top: 2px;
}
table.table tr th,
table.table tr td {
  border-color: #e9e9e9;
  padding: 12px 15px;
  vertical-align: middle;
}
table.table tr th:first-child {
  width: 60px;
}
table.table tr th:last-child {
  width: 100px;
}
table.table-striped tbody tr:nth-of-type(odd) {
  background-color: #fcfcfc;
}
table.table-striped.table-hover tbody tr:hover {
  background: #f5f5f5;
}
table.table th i {
  font-size: 13px;
  margin: 0 5px;
  cursor: pointer;
}
table.table td:last-child i {
  opacity: 0.9;
  font-size: 22px;
  margin: 0 5px;
}
table.table td a {
  font-weight: bold;
  color: #566787;
  display: inline-block;
  text-decoration: none;
  outline: none !important;
}
table.table td a:hover {
  color: #2196f3;
}
table.table td a.edit {
  color: #3a807a;
}
table.table td a.delete {
  color: #f44336;
}
table.table td i {
  font-size: 19px;
}
table.table .avatar {
  border-radius: 50%;
  vertical-align: middle;
  margin-right: 10px;
}
.pagination {
  float: right;
  margin: 0 0 5px;
}

.hint-text {
  float: left;
  margin-top: 10px;
  font-size: 13px;
}

/* Modal styles */
.modal .modal-dialog {
  max-width: 700px;
}
.modal .modal-header,
.modal .modal-body,
.modal .modal-footer {
  padding: 20px 30px;
}
.modal .modal-content {
  border-radius: 3px;
  font-size: 14px;
}
.modal .modal-footer {
  background: #ecf0f1;
  border-radius: 0 0 3px 3px;
}
.modal .modal-title {
  display: inline-block;
}
.modal .form-control {
  border-radius: 2px;
  box-shadow: none;
  border-color: #dddddd;
}
.modal textarea.form-control {
  resize: vertical;
}
.modal .btn {
  border-radius: 2px;
  min-width: 100px;
}
.modal form label {
  font-weight: normal;
}
</style>