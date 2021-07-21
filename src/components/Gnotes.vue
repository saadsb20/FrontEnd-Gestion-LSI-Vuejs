<template>
  <div class="note">
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-3">
                <h2>gestion des <b>notes</b></h2>
              </div>

              <div class="col-3">
                <select
                  id="selectetudiant"
                  v-model="form.id_etudiant"
                  class="form-select"
                  aria-label="Default select example"
                >
                <option value="">--Etudiant--</option>
                  <option
                    v-for="etudiant in etudiants"
                    :key="etudiant.id"
                    :value="etudiant.id"
                  >
                    {{ etudiant.nom }} {{ etudiant.prenom }}
                  </option>
                </select>
              </div>
              <div class="col-sm-2">
                <input class="form-control"
                  v-model="form.valeur"
                  
                  placeholder="note"
                >
              </div>
              <div v-if="edit == false" class="col-2">
                <b-button
                  type="submit"
                  variant="primary"
                  id="btns"
                  @click="addNotes"
                >
                  confirmer
                </b-button>
              </div>
              <div v-if="edit == true" class="col-4">
                <b-button
                  type="submit"
                  variant="warning"
                  id="btns"
                  @click="this.clearForm()"
                >
                  cancel
                </b-button>
                <b-button
                  type="submit"
                  variant="success"
                  id="btns"
                  @click="editnote"
                >
                  edite
                </b-button>
              </div>
            </div>
          </div>

          <div class="clearfix">
            <table class="table table-striped table-hover">
              <thead>
                <tr class="">
                  <th>
                    <select
                      v-model="form.id_module"
                      class="form-select"
                      aria-label="Default select example"
                    >
                      <option :value="modules[0].id" disabled>
                        {{ modules[0].nom }}
                      </option>
                      <option
                        v-for="modul in modules"
                        :key="modul.id"
                        :value="modul.id"
                        :@click="getId(form.id_module,modul.id_semestre)"
                      >
                        {{ modul.nom }}
                      </option>
                    </select>
                  </th>
                  <th class="col-3">etudiant</th>
                  <th class="col-2">note</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="note in notes" :key="note.id">
                  <td class="col-3">{{ note.id_module }}</td>
                  <td
                    class="col-3"
                    v-for="etudiant in note.EtudiantName"
                    :key="etudiant.id"
                  >
                    {{ etudiant.nom + " " + etudiant.prenom }}
                  </td>
                  <td class="col-3">{{ note.valeur }}</td>

                  <td class="col-3">
                    <a
                      href="#editEmployeeModal"
                      class="edit"
                      @click="getinfo(note.id, note.id_etudiant, note.valeur)"
                      data-toggle="modal"
                      ><i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Edit"
                        >&#xE254;</i
                      ></a
                    >
                    &nbsp; &nbsp;

                    <a
                      href="#deleteEmployeeModal"
                      class="delete"
                      data-toggle="modal"
                      @click="deleteModule(note.id)"
                      ><i
                        class="material-icons"
                        data-toggle="tooltip"
                        title="Delete"
                        >&#xE872;</i
                      ></a
                    >
                  </td>
                </tr>
              </tbody>
            </table>
            <div class="paginat">
              <b-pagination
                v-model="currentPage"
                :total-rows="rows"
              ></b-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-card class="mt-3 mb-5" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      prof: "3",

      form: {
        valeur: "",
        id_etudiant: "",
        id_module: this.$store.state.id_module,
      },
      id_et: "",
      edit: false,
      loading:true,
      varF: {
        id_semestre: this.$store.state.semestre_P,
      },
      notes: [],
      modules: [],
      etudiants: [],
    };
  },

  mounted() {
    if (this.$store.state.access_token !== "") {
      axios
        .post("http://127.0.0.1:8000/api/checkToken", {
          token: this.$store.state.access_token,
        })
        .then((response) => {
          if (response) {
            this.loading = false;
          }
        })
        .catch((err) => {
          this.loading = false;
          this.$store.commit("clear");
          this.$router.push("/");

          console.log(err);
        });
    } else {
      this.loading = false;
    }
    this.getNotes();
    this.getModules();
    
    
  },
  methods: {
    addNotes() {
      axios
        .post("http://127.0.0.1:8000/api/Note/", this.form, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
          
          
        })
        .catch((err) => {
          console.log(err);
        });
        
        this.clearForm();
    },
    getId(data,s) {
      this.$store.commit("setIdModule", data);
      this.form.id_module = this.$store.state.id_module;
      this.$store.commit("setSemestreProf", s);
      this.varF.id_semestre = this.$store.state.semestre_P;
      
      
    },
    deleteModule(id) {
      alert(" are u  shure");
      axios
        .delete("http://127.0.0.1:8000/api/Note/" + id, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((response) => {
          console.log(response);
        });
    },
    editnote() {
      axios
        .put("http://127.0.0.1:8000/api/Note/" + this.id_et, this.form, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((response) => {
          console.log(response);
          
        });
       this.clearForm()
      
    },
    getinfo(id, id_etudiant, valeur) {
      this.id_et = ""+id;
      this.form.valeur = ""+valeur;
      this.form.id_etudiant = ""+id_etudiant;
      this.edit = true;
    },
    getNotes() {
      axios
        .get("http://127.0.0.1:8000/api/Note/" + this.$store.state.id_module, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
          this.notes = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getModules(){
      
      axios
      .get("http://127.0.0.1:8000/api/Modules/" + this.$store.state.id_prof, {
        headers: { Authorization: `Bearer ${this.$store.state.access_token}` },
      })
      .then((res) => {
        this.modules = res.data.module;
    
      })
      .catch((err) => {
        console.log(err);
      });
     this.getstu();
    },
    getstu(){
      
    axios
      .get("http://127.0.0.1:8000/api/getstu", {
        headers: { Authorization: `Bearer ${this.$store.state.access_token}` },
      })
      .then((res) => {
        this.etudiants = res.data;
      })
      .catch((err) => {
        console.log(err);
      });
    },
     clearForm(){
       this.id_et = "";
      this.form.valeur = "";
      this.form.id_etudiant = "";
      this.edit = false;
    }
  },
};
</script>

<style scoped>
#btns {
  width: 100px;
  height: 40px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 15px;
  border: solid 2px #dddddd;
  font-family: "Times New Roman", Times, serif;
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
.paginat {
  margin-right: 40%;
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