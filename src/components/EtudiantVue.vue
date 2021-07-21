<template>
<div class="etudaint-vue">
   
<br><br><br>
    <div class="container py-5">
      <!-- For Demo Purpose-->
      <header class="text">
        <h1 class="display-4"  >Bienvenu {{user}}</h1>
        <p class="text-muted font-italic mb-0">
        </p>
      </header>


      <div class="py-5">
        <div class="row">
          <div class="col-lg-12 mb-5">
            <!-- Collapse Panel 1--><a
              data-toggle="collapse"
              href="#collapseExample1"
              role="button"
              aria-expanded="true"
              aria-controls="collapseExample1"
              class="btn btn-primary btn-block py-2 shadow-sm with-chevron"
            >
              <p
                class="
                  d-flex
                  align-items-center
                  justify-content-between
                  mb-0
                  px-3
                  py-2
                "
              >
                <strong class="text-uppercase">L'emploi de Temps </strong
                ><i class="fa fa-angle-up"></i>
              </p>
            </a>
            <div id="collapseExample1" class="collapse shadow-sm">
              <div class="card">
                <div class="card-body">
                 <Emploi/>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12 mb-5">
            <!-- Collapse Panel 2-->
            <button
              data-toggle="collapse"
              data-target="#collapseExample2"
              role="button"
              aria-expanded="true"
              aria-controls="collapseExample2"
              class="btn btn-success btn-block py-2 shadow-sm with-chevron"
            >
              <p
                class="
                  d-flex
                  align-items-center
                  justify-content-between
                  mb-0
                  px-3
                  py-2
                "
              >
                <strong class="text-uppercase">mes cours</strong
                ><i class="fa fa-angle-up"></i>
              </p>
            </button>
            <div id="collapseExample2" class="collapse shadow-sm">
              <div class="card">
                <div class="card-body">
                  <Cours/>
                </div>
              </div>
            </div>
          </div>

          <div class="col-lg-12 mb-5">
            <!-- Collapse Panel 3--><a
              data-toggle="collapse"
              href="#collapseExample3"
              role="button"
              aria-expanded="true"
              aria-controls="collapseExample3"
              class="btn btn-warning btn-block p2-3 shadow-sm with-chevron"
            >
              <p
                class="
                  d-flex
                  align-items-center
                  justify-content-between
                  mb-0
                  px-3
                  py-2
                "
              >
                <strong class="text-uppercase">relevé de notes </strong
                ><i class="fa fa-angle-up"></i>
              </p>
            </a>
            <div id="collapseExample3" class="collapse shadow-sm">
              <div class="card">
                <div class="card-body">
                  <NotesEtu/>
                </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
</div>
</template>
<script>
import Emploi from "./Emploi.vue";
import Cours from "./Cours.vue";
import NotesEtu from "./NotesEtu.vue";
export default {
    data(){
        
        return {
          
        };
    },
    components:{
      Emploi,
      Cours,
      NotesEtu

    },
   computed:{
    user() {
     return this.$store.state.username
    }
  },
    
}
</script>