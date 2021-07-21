<template>
  <div class="nav1">
    <div class="site-mobile-menu site-navbar-target">
      <div class="site-mobile-menu-header">
        <div class="site-mobile-menu-close mt-3">
          <span class="icon-close2 js-menu-toggle"></span>
        </div>
      </div>
      <div class="site-mobile-menu-body"></div>
    </div>

    <div class="site-navbar js-sticky-header site-navbar-target" role="banner">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-6 col-xl-2">
            <h1 id="lsi" class="mb-0 site-logo">
              <a to="/">LSI<span class="text-light">.fstt</span> </a>
            </h1>
          </div>

          <div class="col-12 col-md-10 d-none d-xl-block">
            <nav
              class="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul
                class="
                  site-menu
                  main-menu
                  js-clone-nav
                  mr-auto
                  d-none d-lg-block
                "
              >
                <b-nav-item to="/">Home</b-nav-item>

                <li class="has-children">
                  <a href="#about-section" class="nav-link">Esapce Etudiant</a>
                  <ul class="dropdown">
                    <b-dropdown-item>Emploi de temps</b-dropdown-item>
                  </ul>
                </li>
                <!-- e-services -->
                <li class="has-children">
                  <a href="#about-section" class="nav-link">E-services</a>
                  <ul class="dropdown">
                    <b-dropdown-item>les attestations </b-dropdown-item>
                    <b-dropdown-item>releves des Notes</b-dropdown-item>
                    <b-dropdown-item>FAQ</b-dropdown-item>
                  </ul>
                </li>
                <b-nav-item  v-if="this.$store.state.access_token == ''" to="/login">Login</b-nav-item>
                <b-nav-item @click="userVue" v-esle style="margin-right:-35px" > {{user}} </b-nav-item>

                <!-- user -->

                
                  
                  <li class="has-children">
                  <a
                
                    href="#"
                    id="navbarDropdownMenuLink"
                 
                  >
                  <vue-initials-img style="margin-left:10px " width="50"
                      height="50"
                      class="rounded-circle" :name="user"/>
                  </a>
                  <ul class="dropdown">
                    <b-dropdown-item :to="role">Mon Profile </b-dropdown-item>
                    <b-dropdown-item>Paramétre</b-dropdown-item>
                    <b-dropdown-item @click="logout">Déconnexion</b-dropdown-item>
                  </ul>
                </li>
                
              </ul>
            </nav>
          </div>

          <div
            class="col-6 d-inline-block d-xl-none ml-md-0 py-3"
            style="position: relative; top: 3px"
          >
            <a href="#" class="site-menu-toggle js-menu-toggle float-right"
              ><span class="icon-menu h3"></span
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  
  name: "Navbar",
  data(){
    return {
      nom : '',
      prenom : '',
      url : ''
    }
  },
  mounted(){
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
  },
  methods :{
      logout(){
          axios.post('http://127.0.0.1:8000/api/logout',{token : this.$store.state.access_token})
          .then(response=>{
            console.log(response)
             this.$router.push('/');
          this.$store.commit('clear')
          }).catch(err => {
            console.log(err)
          })
         
      },
      userVue(){
        if(this.$store.state.user_role == "Admin")
          this.$router.push('/admin');
        else if(this.$store.state.user_role  == "Student")
            this.$router.push('/etudiant');
        else if(this.$store.state.user_role  == "Teacher")
            this.$router.push('/prof');
      }     
  },
  
  computed:{
    user() {
     return this.$store.state.username; 
    }
  },

};

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#lsi {
  font-size: 40px;
}
.text-light {
  font-size: 20px;
}
.bg-custom-1 {
  background-color: #85144b;
}

.bg-custom-2 {
  background-image: linear-gradient(15deg, #13547a 0%, #80d0c7 100%);
}
/* navbar-staylesh */
</style>
