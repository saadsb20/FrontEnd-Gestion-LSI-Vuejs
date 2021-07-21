<template>
    <div class="container mt-5">
        <b-nav tabs justified>
        <b-nav-item :active='this.$route.name == "Admin" ' to='/Admin'  >Admin</b-nav-item>
        <b-nav-item :active='this.$route.name == "Etudiant"' to='/Etudiant'  >Etudiant</b-nav-item>
        <b-nav-item :active='this.$route.name == "Prof"' to = '/Prof'  >Professeur </b-nav-item>
  </b-nav>
    </div>
</template>
<script>
    export default{
      
    };
</script>

