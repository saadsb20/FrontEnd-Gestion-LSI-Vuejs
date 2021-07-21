<template>
  <div>
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-3">
                <h2>gestion <b>Modules</b></h2>
              </div>
              <div class="col-sm-3">
                <b-input
                  id="input-1"
                  v-model="form.nom"
                  type="text"
                  placeholder="module"
                  required
                ></b-input>
              </div>
              <div class="col-sm-2">
                <select class="form-select" v-model="form.id_semestre">
                  <option value="" selected>--semestre--</option>
                  <option
                    v-for="semestre in semestres"
                    :key="semestre.id"
                    :value="semestre.id"
                  >
                    {{ semestre.name }}
                  </option>
                </select>
              </div>
              <div class="col-sm-2">
                <select class="form-select" v-model="form.id_prof">
                  <option value="" selected>--Prof--</option>
                  <option v-for="prof in profs" :key="prof.id" :value="prof.id">
                    {{ prof.nom }} {{ prof.prenom }}
                  </option>
                </select>
              </div>
             <div v-if="edit == false" class="col-2">
                <b-button
                  type="submit"
                  variant="primary"
                  id="btns"
                  @click="addmodule"
                >
                  confirmer
                </b-button>
              </div>
              <div v-else class="col-2">
                <b-button
                  type="submit"
                  variant="warning"
                  id="btns"
                  @click="clearForm"
                >
                  cancel
                </b-button>
                <b-button
                  type="submit"
                  variant="success"
                  id="btns"
                  @click="editModule"
                >
                  edite
                </b-button>
              </div>
            </div>
          </div>
          <table class="table table-striped table-hover">
            <thead>
              <tr>
                <th></th>
                <th>Module</th>
                <th>professeure</th>
                <th>Semestre</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody v-if="!loading">
              <tr v-for="modul in moduls" :key="modul.id">
                <td></td>
                <td class="col-3">{{ modul.nom }}</td>
                <td class="col-3">{{ modul.ProfName[0].nom }} {{ modul.ProfName[0].prenom }}</td>
                <td class="col-3">Semestre {{ modul.id_semestre }}</td>
                <td class="col-3">
                  <a
                    class="btn btn-light"
                    @click="
                      getinfos(modul.id,modul.nom, modul.id_prof, modul.id_semestre)
                    "
                    ><i
                      class="material-icons"
                      data-toggle="tooltip"
                      title="Edit"
                      >&#xE254;</i
                    ></a
                  >
                  <a
                    class="delete btn btn-light"
                    @click="deleteModule(modul.id)"
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
            <div v-else>
              <div class="text-center">
                <b-spinner
                  variant="success"
                  type="grow"
                  label="Spinning"
                ></b-spinner>
              </div>
            </div>
          </table>
          <div class="clearfix">
            <div>
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
// import AddModule from "../AddModule.vue";
import axios from "axios";

export default {
  data() {
    return {
      loading: true,

      form: {
        nom: "",
        id_prof: "",
        id_semestre: "",
      },
      profs: [],
      moduls: [],
      semestres: [],
      moduleId: null,
        edit: false,
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
    this.getmodules();
    this.getsemestre();
    this.getprofs();
  },
  methods: {
    getsemestre() {
      axios
        .get("http://127.0.0.1:8000/api/Semestres", {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
          this.semestres = res.data;
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
    deleteModule(id) {
      axios
        .delete(`http://localhost:8000/api/Modules/` + id, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((response) => {
          this.getmodules();
          this.$nextTick(() => {
            this.loading = false;
          });
          console.log(response);
        });
    },
    getinfos(id,nom, id_prof, id_sem) {
      this.moduleId=id;
      this.form.nom = nom;
      this.form.id_prof = id_prof;
      this.form.id_semestre = id_sem;
      this.edit=true;
    },
    addmodule() {
      axios
        .post("http://127.0.0.1:8000/api/Modules", this.form, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
          this.clearForm();
          this.getmodules();
          this.$nextTick(() => {
            this.loading = false;
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    getmodules() {
      axios
        .get("http://127.0.0.1:8000/api/Modules/", {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
          this.moduls = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  
    editModule() {
      axios
        .put("http://127.0.0.1:8000/api/Modules/"+this.moduleId , this.form, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        })
        .then((res) => {
          console.log(res);
          this.getmodules();
          this.$nextTick(() => {
            this.loading = false;
          });
        })
        .catch((err) => {
          console.log(err);
        });
        this.edit=false;
        this.clearForm();
    },
    clearForm(){
      this.form.nom="";
      this.form.id_prof="";
      this.form.id_semestre="";
      this.edit = false;
    }
  },
};
</script>

<style scoped>
#submit {
  height: 40px;
  border-radius: 20px;
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