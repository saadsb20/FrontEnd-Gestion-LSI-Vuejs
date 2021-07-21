<template>
  <div class="container">
    
    <b-form class="mt-5" @submit="onSubmit" v-if="show">
      <b-form-group
        id="input-group-1"
        label="Email address:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          v-model="form.email"
          type="email"
          placeholder="Enter email"
          required
        ></b-form-input>
      </b-form-group>
      <p v-if="!form.email.match(RegEmail) && form.email != ''" style="color : red;">Email invalide</p>
      <p v-if="form.email.match(RegEmail)" style="color : green;">Email valide</p>

     
      <!--------------------------- password-------------------- -->
      <b-form-group
        id="input-group-6"
        label="Your Password:"
        label-for="input-5"
      >
        <b-form-input
          id="input-5"
          type="password"
          v-model="form.Password"
          placeholder="Enter Password"
          required
        ></b-form-input>
      </b-form-group>
      <p v-if="form.Password.length < 8 && form.Password != ''" style="color : red;">Insuffisant</p>

      
    
      <!--------------------------- password-------------------- -->

      

      <b-button class="mx-2" type="submit" variant="primary">Submit</b-button>
      
    </b-form>
    <b-card class="mt-3 mb-5" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      RegEmail: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      form: {
        email: "", 
        Password: ""
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();
      alert(JSON.stringify(this.form));
    },
    onReset(event) {
      event.preventDefault();
      // Reset our form values
      this.form.email = "";
      this.form.Password = "";
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
};
</script>
