<template>
  <div>
    <br />

    <br />
    

    <div class="container ">
      <div class="login_box">
        <div class="left ">
          <div class="top_link">
            <a href="/"
              ><img
                src="https://drive.google.com/u/0/uc?id=16U__U5dJdaTfNGobB_OpwAJ73vM50rPV&export=download"
                alt=""
              />Retour</a
            >
          </div>
          <div class="contact">
            <form>
              <h3 style="color:#000;">Login</h3>
              <input
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              />
              <p
                v-if="!form.email.match(RegEmail) && form.email != ''"
                style="color: red"
              >
                Email invalide
              </p>
              <p v-if="form.email.match(RegEmail)" style="color: green">
                Email valide
              </p>
              <input
                id="input-5"
                type="password"
                v-model="form.password"
                placeholder="Enter password"
                required
              />
              <p
                v-if="form.password.length < 8 && form.password != ''"
                style="color: red"
              >
                Insuffisant
              </p>
              <b-button class="submit " @click.prevent="login" type="submit" variant="primary">Connecxion</b-button>
            </form>
          </div>
        </div>
        <div class="display-4 right ">
          <div class="right-text ">
            <h2>LSI</h2>
            <h5>Département Informatique FSTT</h5>
          </div>
          <div class="right-inductor"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data() {
    return {
      RegEmail:
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      form: {
        email: "",
        password: "",
      },
      loading: true,
    };
  },
  mounted() {
    if (this.$store.state.access_token !== "") {
      axios
        .post("http://127.0.0.1:8000/api/checkToken", {
          access_token: this.$store.state.access_token,
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
  },
  methods: {
    login() {
      axios
        .post("http://127.0.0.1:8000/api/login", this.form)
        .then((response) => {
          this.$store.commit("setToken", response.data.access_token);
          this.$store.commit("setUser", response.data);
          if (response.data.role == "Student") {
            this.$router.push("/etudiant");
          } else if (response.data.role == "Teacher") {
            this.$router.push("/prof");
          } else {
            this.$router.push("/admin");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<style scoped>

.login {
  position: relative;
  
  height: 1000px;
  width: 90%;

  position: relative;
}
.login_box {
  width: 60%;
  height: 600px;
  position: absolute;
  top: 390px;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background: #fff; */
  border-radius: 10px;
  box-shadow: 1px 4px 22px -8px #0004;
  display: flex;
  overflow: hidden;
}
.login_box .left {
  width: 41%;
  height: 100%;
  padding: 25px 25px;
}
.login_box .right {
  width: 59%;
  height: 100%;
}
.left .top_link a {
  color: #2a3d5a;
  font-weight: 400;
}
.left .top_link {
  height: 20px;
}
.left .contact {
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  height: 100%;
  width: 73%;
  margin: auto;
}
.left h3 {
  text-align: center;
  margin-bottom: 40px;
}
.left input {
  border: none;
  width: 80%;
  margin: 15px 0px;
  border-bottom: 1px solid #4f30677d;
  padding: 7px 9px;
  width: 100%;
  overflow: hidden;
  background: transparent;
  font-weight: 600;
  font-size: 14px;
}
.left {
  background: linear-gradient(-45deg, #dcd7e0, #fff);
}
.submit {
  border: none;
  padding: 15px 70px;
  border-radius: 8px;
  display: block;
  margin: auto;
  margin-top: 120px;
  background: #365072;
  color: #fff;
  font-weight: bold;
  -webkit-box-shadow: 0px 9px 15px -11px rgb(54, 90, 114);
  -moz-box-shadow: 0px 9px 15px -11px rgb(60, 54, 114);
  box-shadow: 0px 9px 15px -11px rgb(54, 95, 114);
}

.right {
  background: linear-gradient(
      212.38deg,
      rgba(57, 106, 242, 0.7) 0%,
      rgba(70, 125, 189, 0.71) 100%
    ),
    url();

  color: #fff;
  position: relative;
}

.right .right-text {
  height: 100%;
  position: relative;
  transform: translate(0%, 45%);
}
.right-text h2 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 50px;
  font-weight: 500;
}
.right-text h5 {
  display: block;
  width: 100%;
  text-align: center;
  font-size: 19px;
  font-weight: 400;
}

.right .right-inductor {
  position: absolute;
  width: 100px;
  height: 7px;
  background: #fff0;
  left: 50%;
  bottom: 100px;
  transform: translate(-50%, 0%);
}
.top_link img {
  width: 28px;
  padding-right: 7px;
  margin-top: -3px;
}

.container {
  margin-top: 45%;
}
</style>