<template>
  <div class="container">
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
                <h2>Gestion <b>PFE</b></h2>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-4" >
              <select class="form-select m-1" v-model="form.id_etudiant" v-if="!edit">
                <option value="" disabled selected>--Etudiant--</option>
                <option 
                  v-for="etudiant in etudiants"
                  :key="etudiant.id"
                  :value="etudiant.id"
                  
                >
                
                  {{ etudiant.nom }} {{ etudiant.prenom }}
                </option >
              </select>
              <div id="etu" class="m-2" v-else>Etudiant : {{nometudiant}}</div>
            </div>
            <div class="col-3">
              <select class="form-select m-1" v-model="form.id_prof">
                <option value="" disabled selected>--Encadrant--</option>
                <option v-for="prof in profs" :key="prof.id" :value="prof.id">
                  {{ prof.nom }} {{ prof.prenom }}
                </option>
              </select>
            </div>
            <div class="col-2">
              <input
                v-model="form.Sujet"
                type="text"
                class="form-control m-1"
                placeholder="sujet"
              />
            </div>
            <div v-if="edit == false" class="col-1">
                <b-button
                  type="submit"
                  variant="primary"
                  id="btns"
                  @click="affecterSujet"
                >
                  confirmer
                </b-button>
              </div>
              <div v-else class="col-1">
                
                <b-button
                  type="submit"
                  variant="success"
                  id="btns"
                  @click="editSujet"
                >
                  edite
                </b-button>

               
              </div>
              <div v-if="edit" class="col-1 ml-3">
                 <b-button
                  type="submit"
                  variant="warning"
                  id="btns"
                  @click="clearForm"
                >
                  cancel
                </b-button>
              </div>
          </div>
          <b-tabs content-class="mt-3">
            <b-tab
              title="l'affectation des sujet"
              @click="form.id_semestre = '6'"
              :active="active"
              ><table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th class="col-2 text-center">CNE</th>
                    <th class="col-2 text-center">Etudiant</th>
                    <th class="col-2 text-center">professeure</th>
                    <th class="col-2 text-center">Sujet</th>
                    <th class="col-1text-center"></th>
                    <th class="col-2 text-center">action</th>
                  </tr>
                </thead>
                <tbody v-if="!loading">
                  <tr v-for="pfe in pfes" :key="pfe.id">
                    <td class="col-2 text-center">{{ pfe.E_Name[0].CNE }}</td>
                    <td class="col-2 text-center">
                      {{ pfe.E_Name[0].nom }} {{ pfe.E_Name[0].prenom }}
                    </td>
                    <td class="col-2 text-center">
                      {{ pfe.P_Name[0].nom }} {{ pfe.P_Name[0].prenom }}
                    </td>
                    <td class="col-2 text-center">
                      {{ pfe.Sujet }}
                    </td>
                    <td class="col-1 text-center"></td>
                    <td class="col-2 text-center">
                      <a
                        @click="
                          getinfos(
                            pfe.E_Name[0].id,
                            pfe.P_Name[0].id,
                            pfe.Sujet,
                            pfe.E_Name[0].nom,pfe.E_Name[0].prenom
                          )
                        "
                        class="btn btn-light"
                        ><i
                          class="material-icons"
                          data-toggle="tooltip"
                          title="Affecter"
                          >&#xE254;</i
                        ></a
                      >
                      <a
                        class="delete btn btn-light"
                        @click="deletepfe(pfe.id)"
                        data-toggle="modal"
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
              </table></b-tab
            >
          </b-tabs>

          <div class="clearfix">
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

  </div>
</template>
<script>
// import AddModule from "../AddModule.vue";
import axios from "axios";

export default {
  data() {
    return {
      form: {
        id_etudiant: "",
        Sujet: "",
        id_prof: "",
        note: 0,
      },
      etudiants: [],
      pfes: [],
      profs: [],
      edit: false,
      loading: true,
      nometudiant:"",
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

    this.getprofs();
    this.getEtudiants();
    this.getpfe();
  },
  methods: {
    getEtudiants() {
      axios
        .get("http://127.0.0.1:8000/api/getstu/6", {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
          this.etudiants = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
       
    },
    getprofs() {
      axios
        .get("http://127.0.0.1:8000/api/getpro", {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
          this.profs = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    affecterSujet() {
      axios
        .post("http://127.0.0.1:8000/api/Pfe", this.form, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
          this.getpfe();
          this.$nextTick(() => {
            this.loading = false;
          });
        })
        .catch((err) => {
          console.log(err);
        });

      this.clearForm();
    },
    clearForm() {
      this.form.id_etudiant = "";
      this.form.id_prof = "";
      this.form.Sujet = "";
      this.nometudiant="";

      this.edit = false;
    },
    editSujet() {
      axios
        .put("http://127.0.0.1:8000/api/Pfe/"+this.form.id_etudiant,this.form, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
         console.log(res);
          this.getpfe();
          this.$nextTick(() => {
            this.loading = false;
          });
        })
        .catch((err) => {
          console.log(err);
        });
      this.edit = false;
      
         this.clearForm()
    },
    getinfos(ide, idp, sjt,nometu,prnetu) {
      this.form.id_etudiant = "" + ide;
      this.form.id_prof = "" + idp;
      this.form.Sujet = "" + sjt;
      this.nometudiant=nometu+" "+prnetu;
      this.edit = true;
      return this.form.id_etudiant    },
    getpfe() {
      axios
        .get("http://127.0.0.1:8000/api/Pfe", {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
          this.pfes = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
   
    },
    deletepfe(id){
axios
        .delete(`http://localhost:8000/api/Pfe/` + id, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
         console.log(res); 
         this.getpfe();
          this.$nextTick(() => {
            this.loading = false;
          });
          console.log(res);
        });
    }
  },
};
</script>

<style scoped>
#btns {
  margin-left: 10px;
  width: 100px;
  height: 40px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 15px;
  border: solid 2px #747474;
  font-family: "Times New Roman", Times, serif;
}
#etu{
  color: #000;
  font-size: 18px;
  font-weight: 400;
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