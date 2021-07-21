<template>
  <div class="body">
    <div>
      <b-carousel
        id="carousel-1"
        v-model="slide"
        :interval="9000"
        controls
        indicators
        background="#ababab"
        img-width="1024"
        img-height="300"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slide with blank fluid image to maintain slide aspect ratio -->
        <b-carousel-slide img-blank img-alt="LSI">
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="300"
              src="../img/1.jpg"
              alt="image slot"
            />
          </template>
          <div class="slug">
            <h1 class="slugan">LSI : Logiciels et Systemes Intelligents</h1>
          </div>
        </b-carousel-slide>
        <b-carousel-slide img-blank img-alt="LSI">
          <template #img>
            <img
              class="d-block img-fluid w-100"
              width="1024"
              height="300"
              src="../img/1.jpg"
              alt="image slot"
            />
          </template>
          <div class="text1">
            <h1 class="">LSI :</h1>
            <h4>
              Concevoir et développer des plates formes logiciels desktop,
              logiciel et mobile Concevoir et mettre en place des systèmes
              d’aide à la décision Administrer une infrastructure informatique
              Gérer et conduire un projet informatique
            </h4>
          </div>
        </b-carousel-slide>
      </b-carousel>
    </div>
    
    <div class="row">
      <div class="col-3" id="news">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          incidunt harum doloremque rem nesciunt ullam laboriosam sequi deleniti
          quisquam quos repellendus libero asperiores doloribus fuga
          consequuntur optio. Fugiat, voluptatem aspernatur?
        </p>
      </div>
      <div id="annonce-card" class="content-anno col-6">
        <h3 class="titre-anno">annoces poure les etudiant LSI 1</h3>
        <p class="content-anno">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          nesciunt repellat tempora corporis fugit perspiciatis provident
          placeat commodi magni, voluptatem similique ut aliquid, ad sed ullam
          natus vel blanditiis maiores, Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Ducimus nesciunt repellat tempora corporis fugit
          perspiciatis provident placeat commodi magni, voluptatem similique ut
          aliquid, ad sed ullam natus vel blanditiis maiores?
        </p>
        <hr class="solide" />
        <h3 class="titre-anno">annoces poure les etudiant LSI 1</h3>
        <p class="content-anno">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
          nesciunt repellat tempora corporis fugit perspiciatis provident
          placeat commodi magni, voluptatem similique ut aliquid, ad sed ullam
          natus vel blanditiis maiores, Lorem ipsum dolor, sit amet consectetur
          adipisicing elit. Ducimus nesciunt repellat tempora corporis fugit
          perspiciatis provident placeat commodi magni, voluptatem similique ut
          aliquid, ad sed ullam natus vel blanditiis maiores?
        </p>
      </div>

      <div class="col-2" id="news2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
          incidunt harum doloremque rem nesciunt ullam laboriosam sequi deleniti
          quisquam quos repellendus libero asperiores doloribus fuga
          consequuntur optio. Fugiat, voluptatem aspernatur?
        </p>
      </div>
    </div>
    <div class="section-infos">
      <h1 id="h1">section-Infos</h1>
      <div class="row">
        <div class="column">
          <div class="card">
            <p><i class="fa fa-user"></i></p>
            <h3>1100+</h3>
            <p>Etudiants</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <p><i class="fa fa-check"></i></p>
            <h3>55+</h3>
            <p>LSI Projects</p>
          </div>
        </div>

        <div class="column">
          <div class="card">
            <p><i class="fa fa-smile-o"></i></p>
            <h3>1000+</h3>
            <p>Happy etudiants</p>
          </div>
        </div>
      </div>
    </div>  
  </div>
</template>


<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  methods: {
    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    },
  },
};
</script>
<style scoped>
.text1 {
  margin-bottom: 24%;
}
.slugan {
  margin-bottom: 28%;
}
#calendar {
  position: relative;
}
.titre-anno,
#h1 {
  font-family: "Times New Roman", Times, serif;
  color: rgb(255, 255, 255);
  font-size: 50px;
}
.content-anno {
  font-size: 20px;
}
hr.solide {
  border-top: 4px solid rgb(255, 255, 255);
}
#news,
#news2,
#annonce-card {
  margin: 20px 0px 0px 30px;
  border-style: inset;
  text-align: center;
  font-size: 25px;
}
/* section-infos */
.section-infos {
  box-sizing: border-box;
  margin: 15% auto auto 17%;
}

/* Float four columns side by side */
.column {
  float: left;
  width: 20%;
  padding: 0 5px;
  margin-left: 60px;
}

.row {
  margin: 0 -5px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Responsive columns */
@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 10px;
  }
}

/* Style the counter cards */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 16px;
  text-align: center;
  background: #16222a;
  background: -webkit-linear-gradient(59deg, #3a6073, #16222a);

  color: white;
}

.fa {
  font-size: 70px;
}
</style>
