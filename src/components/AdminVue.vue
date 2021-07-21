<template>
  <div class="admin-vue">
    <div class="container py-5">
      <!-- For Demo Purpose-->
      <header class="text-center py-5">
        <h1 class="display-4">Welcome Admin</h1>
        <p class="text-muted font-italic mb-0">
        </p>
      </header>
      <div class="py-3">
        <div class="row">

          <div class="col-lg-12 mb-5">
            <a data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="true" aria-controls="collapseExample1" class="btn btn-primary btn-block py-2 shadow-sm with-chevron">
              <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2">
                <strong class="text-uppercase">Crud etudiant</strong><i class="fa fa-angle-up"></i>
              </p>
            </a>
              <div id="collapseExample1" class="collapse shadow-sm">
                <Crud-E />
              </div>
          </div>

          <div class="col-lg-12 mb-5">
            <!-- Collapse Panel 2-->
            <button data-toggle="collapse" data-target="#collapseExample2" role="button" aria-expanded="true" aria-controls="collapseExample2" class="btn btn-success btn-block py-2 shadow-sm with-chevron">
              <p class="d-flex  align-items-center justify-content-between  mb-0 px-3 py-2">
                <strong class="text-uppercase">Crud professeurs</strong><i class="fa fa-angle-up"></i>
              </p>
            </button>
            <div id="collapseExample2" class="collapse shadow-sm">
              <Crud-P />
            </div>
          </div>

          <div class="col-lg-12 mb-5">
                <a data-toggle="collapse" href="#collapseExample3" role="button" aria-expanded="true" aria-controls="collapseExample1" class="btn btn-info btn-block py-2 shadow-sm with-chevron">
                  <p class="d-flex align-items-center justify-content-between mb-0 px-3 py-2">
                    <strong class="text-uppercase">Crud Module</strong><i class="fa fa-angle-up"></i>
                  </p>
                </a>
                <div id="collapseExample3" class="collapse shadow-sm">
                  <CrudM />
                </div>
          </div>

          <div class="col-lg-12 mb-5">
              <a data-toggle="collapse" href="#collapseExample4" role="button" aria-expanded="true" aria-controls="collapseExample1" class="btn btn-info btn-block py-2 shadow-sm with-chevron">
                  <p  class="d-flex align-items-center justify-content-between mb-0 px-3 py-2">
                    <strong class="text-uppercase">Crud Emplois</strong
                    ><i class="fa fa-angle-up"></i>
                  </p>
              </a>
              <div id="collapseExample4" class="collapse shadow-sm">
                  <CrudEmploi/>
              </div>
          </div>
          <div class="col-lg-12 mb-5">
              <a data-toggle="collapse" href="#collapseExample5" role="button" aria-expanded="true" aria-controls="collapseExample1" class="btn btn-info btn-block py-2 shadow-sm with-chevron">
                  <p  class="d-flex align-items-center justify-content-between mb-0 px-3 py-2">
                    <strong class="text-uppercase">gestion PFE  </strong
                    ><i class="fa fa-angle-up"></i>
                  </p>
              </a>
              <div id="collapseExample5" class="collapse shadow-sm">
                  <GestPFE/>
              </div>
          </div>


        </div>
      </div>

    </div>

</div>
</template>
<script>
import CrudE from "./Crud/Crud-E.vue";
import CrudP from "./Crud/Crud-P.vue";
import CrudM from "./Crud/Crud-M.vue";
import CrudEmploi from "./Crud/CrudEmploi.vue";
import GestPFE from "./Crud/GestPFE.vue";
export default {
  name: "adminVue",
  components: {
    CrudE,
    CrudP,
    CrudM,
    CrudEmploi,
    GestPFE,
  },
};
</script>

<style scoped>
* {
  color: aliceblue;
}
.with-chevron[aria-expanded="false"] i {
  display: block;
  transform: rotate(180deg) !important;
}
</style>