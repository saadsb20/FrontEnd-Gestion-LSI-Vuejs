<template>
  <div>
    <div class="container-xl">
      <div class="table-responsive">
        <div class="table-wrapper">
          <div class="table-title">
            <div class="row">
              <div class="col-sm-6">
                <h2>gestion <b>Professeurs</b></h2>
              </div>
              <div class="col-sm-6">
                <a
                  href="#addTeacherModal"
                  class="btn btn-success"
                  data-toggle="modal"
                  ><i class="material-icons">&#xE147;</i>
                  <span>Ajouter un professeur</span></a
                >
                <a
                  href="#deleteEmployeeModal"
                  class="btn btn-danger"
                  data-toggle="modal"
                  ><i class="material-icons">&#xE15C;</i> <span>Supprimer</span></a
                >
              </div>
            </div>
          </div>
          <table v-if="Reloading" class="table table-striped table-hover">
            <thead>
              <tr>
                <th>
                  <span class="custom-checkbox">
                    <input type="checkbox" id="selectAll" />
                    <label for="selectAll"></label>
                  </span>
                </th>
                <th>Id</th>
                <th>Nom</th>
                <th>Prenom</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prof in profs" :key="prof.id" >
                <td></td>
                <td>{{prof.id}}</td>
                <td>{{prof.nom}}</td>
                <td>{{prof.prenom}}</td>
                <td>{{prof.email}}</td>
                <td>
                  <a  class="edit" data-toggle="modal"
                    ><i
                      class="material-icons"
                      data-toggle="tooltip"
                      title="Edit"
                      >&#xE254;</i
                    ></a
                  >
                  <a @click="deleteStudent(prof.id)"
                    class="delete"
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
          </table>
          <div v-if="!Reloading"  class="text-center">
                   
                  <b-spinner  variant="primary" type="grow" label="Spinning"></b-spinner>
                
          </div>
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
    <!-- Edit Modal HTML -->
    <div id="addTeacherModal" class="modal fade">
      <div class="modal-dialog">
        <div class="modal-content">
          <form>
            <div class="modal-header">
              <h4 class="modal-title">Ajouter professeur</h4>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
            </div>
            <div >
              <ProfRegister/>
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


  </div>
</template>


<script>
import ProfRegister from "../ProfRegistre.vue";
import axios from 'axios';
export default{
data(){
return {
  profs:[],
  Reloading : true,
}
},
components:{
  ProfRegister
},
mounted(){

  axios.get('http://127.0.0.1:8000/api/getpro',{ headers: {"Authorization" : `Bearer ${this.$store.state.access_token}`} })
  .then(res => {
    this.profs = res.data
  }).catch(err=>{
    console.log(err)
  })
}, 
methods:{
   deleteStudent(id) {
      this.Reloading = false;
      axios
        .delete(`http://localhost:8000/api/deleteuser/${id}`, {
          headers: {
            Authorization: `Bearer ${this.$store.state.access_token}`,
          },
        }).then(res =>{
          console.log(res)
             axios.get('http://127.0.0.1:8000/api/getpro',{ headers: {"Authorization" : `Bearer ${this.$store.state.access_token}`} })
              .then((res) => {
                this.Reloading = false;
              this.$nextTick(()=>{ 
                this.profs = res.data;
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
}
};
</script>

<style scoped>
.modal-title{
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