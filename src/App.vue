<template>
  <div id="App">
    <Navbar />
   <br><br><br>
    <router-view></router-view>
    <br><br><br>
    <Footer />
  </div>
</template>

<script>
// import Header from './components/Header'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default {
  name: "App",
  components: {
    // Header,
    Navbar,
    Footer,
  },
};
</script>

<style>
body {

  color: rgb(255, 255, 255);
 
  background: #16222a;
  background: -webkit-linear-gradient(59deg, #3a6073, #16222a);
  background: linear-gradient(59deg, #3A6073, #16222A);
}
Footer{
  
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
}
</style>
