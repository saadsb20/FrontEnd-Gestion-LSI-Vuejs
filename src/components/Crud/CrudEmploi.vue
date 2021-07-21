<template>
  <div>
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-3">
                <h2>gestion <b>Emplois</b></h2>
              </div>
              <div class="col-sm-2">
                <b-input v-model="form.jour" placeholder="jour"></b-input>
              </div>
              <div class="col-sm-2">
                <b-input
                  v-model="form.id_module"
                  placeholder="module"
                ></b-input>
              </div>
              <div class="col-sm-2">
                <b-form-select
                  v-model="form.id_semestre"
                  :options="options"
                ></b-form-select>
              </div>
              <div class="col-sm-2">
                <b-form-select
                  v-model="form.temps"
                  :options="Temps"
                  ></b-form-select>
              </div>
           
                 <b-button class="btn btn-info col-sm-1 text-center mx-5" @click="AjouterSeance" >Ajouter</b-button>              

            </div>
          </div>
          <div id="table" class="container bg-light">
            <b-tabs content-class="mt-3" align="center">
              <b-tab
                title="Semestre 1"
                @click="PushData(1)"
                :active="active">
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
                      <th  class="align-middle col-5">09:00-12:00</th>
                      <th class="col-1"></th>
                      <th class="align-middle col-5">13:00-16:00</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td  class="text-uppercase">lundi</td>
                      <td v-if="this.Seances[0].temps == '0909:0606'" class="col-5"> {{this.Seances[0].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[1].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td v-if="this.Seances[1].temps == '0101:0606'" class="col-5"> {{this.Seances[1].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[0].ModuleName[0].nom}} </td>
                      
                    </tr>

                    <tr>
                      <td class="text-uppercase">mardi</td>

                      <td v-if="this.Seances[2].temps == '0909:0606'" class="col-5"> {{this.Seances[2].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td  class="col-5">  </td>
                      
                    </tr>

                    <tr>
                      <td class="text-uppercase">mercredi</td>

                        <td class="col-5"></td>
                      <td class="col-1"></td>
                      <td class="col-5"></td>
                    </tr>

                    <tr>
                      <td class="text-uppercase">jeudi</td>
                       <td class="col-5"></td>
                      <td class="col-1"></td>
                      <td class="col-5"></td>
                    </tr>

                    <tr>
                      <td class="text-uppercase">vendredi</td>
                     <td v-if="this.Seances[3].temps == '0909:0606'" class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td v-if="this.Seances[4].temps == '0101:0606'" class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab
                title="Semestre 2"
                @click="PushData(2)"
                :active="active">
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
                      <th  class="align-middle col-5">09:00-12:00</th>
                      <th class="col-1"></th>
                      <th class="align-middle col-5">13:00-16:00</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td  class="text-uppercase">lundi</td>
                      <td v-if="this.Seances[0].temps == '0909:0606'" class="col-5"> {{this.Seances[0].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[1].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td v-if="this.Seances[1].temps == '0101:0606'" class="col-5"> {{this.Seances[1].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[0].ModuleName[0].nom}} </td>
                      
                    </tr>

                    <tr>
                      <td class="text-uppercase">mardi</td>

                      <td v-if="this.Seances[2].temps == '0909:0606'" class="col-5"> {{this.Seances[2].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td  class="col-5">  </td>
                      
                    </tr>

                    <tr>
                      <td class="text-uppercase">mercredi</td>

                      <td v-if="this.Seances[4].temps == '0909:0606'" class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td class="col-5"></td>
                    </tr>

                    <tr>
                      <td class="text-uppercase">jeudi</td>
                       <td v-if="this.Seances[4].temps == '0909:0606'" class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td class="col-5"></td>
                    </tr>

                    <tr>
                      <td class="text-uppercase">vendredi</td>
                     <td v-if="this.Seances[3].temps == '0909:0606'" class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td v-if="this.Seances[4].temps == '0101:0606'" class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab
                title="Semestre 3"
                @click="PushData(3)"
                :active="active">
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
                      <th  class="align-middle col-5">09:00-12:00</th>
                      <th class="col-1"></th>
                      <th class="align-middle col-5">13:00-16:00</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td  class="text-uppercase">lundi</td>
                      <td v-if="this.Seances[0].temps == '0909:0606'" class="col-5"> {{this.Seances[0].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[1].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td v-if="this.Seances[1].temps == '0101:0606'" class="col-5"> {{this.Seances[1].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[0].ModuleName[0].nom}} </td>
                      
                    </tr>

                    <tr>
                      <td class="text-uppercase">mardi</td>

                      <td v-if="this.Seances[2].temps == '0909:0606'" class="col-5"> {{this.Seances[2].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td  class="col-5">  </td>
                      
                    </tr>

                    <tr>
                      <td class="text-uppercase">mercredi</td>

                        <td class="col-5"></td>
                      <td class="col-1"></td>
                      <td class="col-5"></td>
                    </tr>

                    <tr>
                      <td class="text-uppercase">jeudi</td>
                       <td class="col-5"></td>
                      <td class="col-1"></td>
                      <td class="col-5"></td>
                    </tr>

                    <tr>
                      <td class="text-uppercase">vendredi</td>
                     <td v-if="this.Seances[3].temps == '0909:0606'" class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td v-if="this.Seances[4].temps == '0101:0606'" class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab
                title="Semestre 4"
                @click="PushData(4)"
                :active="active">
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
                      <th  class="align-middle col-5">09:00-12:00</th>
                      <th class="col-1"></th>
                      <th class="align-middle col-5">13:00-16:00</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td  class="text-uppercase">lundi</td>
                      <td v-if="this.Seances[0].temps == '0909:0606'" class="col-5"> {{this.Seances[0].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[1].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td v-if="this.Seances[1].temps == '0101:0606'" class="col-5"> {{this.Seances[1].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[0].ModuleName[0].nom}} </td>
                      
                    </tr>

                    <tr>
                      <td class="text-uppercase">mardi</td>

                      <td v-if="this.Seances[2].temps == '0909:0606'" class="col-5"> {{this.Seances[2].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td  class="col-5">  </td>
                      
                    </tr>

                    <tr>
                      <td class="text-uppercase">mercredi</td>

                        <td class="col-5"></td>
                      <td class="col-1"></td>
                      <td class="col-5"></td>
                    </tr>

                    <tr>
                      <td class="text-uppercase">jeudi</td>
                       <td class="col-5"></td>
                      <td class="col-1"></td>
                      <td class="col-5"></td>
                    </tr>

                    <tr>
                      <td class="text-uppercase">vendredi</td>
                     <td v-if="this.Seances[3].temps == '0909:0606'" class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td v-if="this.Seances[4].temps == '0101:0606'" class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              <b-tab
                title="Semestre 5"
                @click="PushData(5)"
                :active="active">
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
                      <th  class="align-middle col-5">09:00-12:00</th>
                      <th class="col-1"></th>
                      <th class="align-middle col-5">13:00-16:00</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td  class="text-uppercase">lundi</td>
                      <td v-if="this.Seances[0].temps == '0909:0606'" class="col-5"> {{this.Seances[0].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[1].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td v-if="this.Seances[1].temps == '0101:0606'" class="col-5"> {{this.Seances[1].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[0].ModuleName[0].nom}} </td>
                      
                    </tr>

                    <tr>
                      <td class="text-uppercase">mardi</td>

                      <td v-if="this.Seances[2].temps == '0909:0606'" class="col-5"> {{this.Seances[2].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td  class="col-5">  </td>
                      
                    </tr>

                    <tr>
                      <td class="text-uppercase">mercredi</td>

                        <td class="col-5"></td>
                      <td class="col-1"></td>
                      <td class="col-5"></td>
                    </tr>

                    <tr>
                      <td class="text-uppercase">jeudi</td>
                       <td class="col-5"></td>
                      <td class="col-1"></td>
                      <td class="col-5"></td>
                    </tr>

                    <tr>
                      <td class="text-uppercase">vendredi</td>
                     <td v-if="this.Seances[3].temps == '0909:0606'" class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td class="col-1"></td>
                      <td v-if="this.Seances[4].temps == '0101:0606'" class="col-5"> {{this.Seances[4].ModuleName[0].nom}} </td>
                      <td v-else class="col-5"> {{this.Seances[3].ModuleName[0].nom}} </td>
                    </tr>
                  </tbody>
                </table>
              </b-tab>
              
            </b-tabs>
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
      Seances: [],
      options: [
        { value: "", text: "semestre" },
        { value: "1", text: "s1" },
        { value: "2", text: "s2" },
        { value: "3", text: "s3" },
        { value: "4", text: "s4" },
        { value: "5", text: "s5" },
      ],
      Temps: [
        { value: "", text: "Temps" },
        { value: "09:00", text: "09:00 - 11:00" },
        { value: "13:00", text: "13:00 - 16:00" },
      ],
      form: {
        jour: "",
        temps: "09:00",
        id_module: "",
        id_semestre: "2",
        salle: "LSI 1  ",
      },
      
    };
  },  

  mounted() {
    axios
      .get(`http://127.0.0.1:8000/api/Seance/${this.form.id_semestre}`, {
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
  methods:{

    PushData(sm){
      if(sm == 1){
      this.form.id_semestre = '1'
      this.form.salle = 'LSI 1'
      }
      else if(sm == 2){
      this.form.id_semestre = '2'
      this.form.salle = 'LSI 1'
      }
      if(sm == 3){
      this.form.id_semestre = '3'
      this.form.salle = 'LSI 2'
      }
      if(sm == 4){
      this.form.id_semestre = '4'
      this.form.salle = 'LSI 2'
      }
      if(sm == 5){
      this.form.id_semestre = '5'
      this.form.salle = 'LSI 3'
      }

    },
    AjouterSeance(){
      axios
      .post(`http://127.0.0.1:8000/api/Seance`,this.form , {
        headers: { Authorization: `Bearer ${this.$store.state.access_token}` },
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err);
      });
    }
  }

};
</script>

<style scoped>

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