<template>
    <div class="container py-5">
        <div class="row">
          <div class="col-lg-12 mb-5">
              <b-tabs content-class="mt-3" align="center">
                      <b-tab
                        :title="'Semestre ' + id_semestre"
                        :active="active">
                        <!-- emploi du temps s1 -->
                        <div class="text-center">
                          <br />
                          <h4 style="color: #000">
                            l' emploi de temps LSI 1 2020/2021
                          </h4>
                          <br />
                        </div>
                        <table class="table table-bordered text-center">
                          <thead>
                            <tr class="bg-light-gray">
                              <td class="text-uppercase">Time</td>
                              <th  class="col-5">09:00-12:00</th>
                              <th class="col-1"></th>
                              <th class=" col-5">13:00-16:00</th>
                              
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td class="text-uppercase">lundi</td>
                              <td class="col-5">{{this.Seances[0].ModuleName[0].nom}}</td>
                              <td class="col-1"></td>
                              <td class="col-5"></td>
                              
                            </tr>

                            <tr>
                              <td class="text-uppercase">mardi</td>

                              <td class="col-5"></td>
                              <td class="col-1"></td>
                              <td class="col-5" ></td>
                            </tr>

                            <tr>
                              <td class="text-uppercase">mercredi</td>
                              <td class="col-5"></td>
                              <td class="col-1"></td>
                              <td class="col-5" ></td>
                            </tr>

                            <tr>
                              <td class="text-uppercase">jeudi</td>
                              <td class="col-5"></td>
                              <td class="col-1"></td>
                              <td class="col-5">{{this.Seances[1].ModuleName[0].nom}}</td>
                            </tr>

                            <tr>
                              <td class="text-uppercase">vendredi</td>
                              <td class="col-5"></td>
                              <td class="col-1"></td>
                              <td class="col-5"></td>
                            </tr>
                          </tbody>
                        </table>
                      </b-tab>
                    </b-tabs>
                
        </div>
      </div>

  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      Seances: [],
      id_semestre : this.$store.state.EtuSemestre
    };
  },
  computed: {
    user() {
      return this.$store.state.username;
    },
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
    axios
      .get("http://127.0.0.1:8000/api/Modules/" + this.$store.state.id_prof, {
        headers: { Authorization: `Bearer ${this.$store.state.access_token}` },
      })
      .then((res) => {
        this.moduls = res.data.module;
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get(`http://127.0.0.1:8000/api/Seance/${this.id_semestre}`, {
        headers: { Authorization: `Bearer ${this.$store.state.access_token}` },
      })
      .then((res) => {
        this.Seances = res.data;
        console.log(this.Seances)
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