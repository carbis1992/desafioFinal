<template>
    <div>
        <div>
            <div class="header-register">
                <h3>Registrate</h3>
            </div>
            <div class="form-wrapper">
                <form class="row g-3 form">
                    <div class="col-sm">
                        <label for="inputEmail4" class="form-label">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="juanperez@mail.com"
                            v-model="user.email" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputPassword4" class="form-label">Contraseña</label>
                        <input type="password" class="form-control" id="inputPassword4" v-model="user.password" />
                    </div>
                    <div class="col-12">
                        <label for="inputAddress" class="form-label">Direccion</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="España 1309" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputCity" class="form-label">Ciudad</label>
                        <input type="text" class="form-control" id="inputCity" />
                    </div>
                    <div class="col-md-6">
                        <label for="inputState" class="form-label">Provincia</label>
                        <select id="inputState" class="form-select" v-model="user.state">
                            <option value="" disabled selected>Choose...</option>
                            <option value="provincia1">Provincia 1</option>
                            <option value="provincia2">Provincia 2</option>
                            <option value="provincia3">Provincia 3</option>
                        </select>
                    </div>
                    <div class="col-12" id="submit">
                        <button type="button" class="btn btn-outline-primary" id="liveAlertBtn"
                            @click.prevent="alertSuccess">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <router-link v-if="registered" :to="{ name: 'listadoProductos' }"></router-link>
    </div>
</template>
  
<script>
import { showAlert } from '../utils/utils';
import { postData } from "../api/api";
import { mapActions } from "vuex";
import { API_URL_USERS } from "../constants";

export default {
  name: "registroUsuario",
  data() {
    return {
      registered: false,
      user: {
        email: "",
        password: "",
        address: "",
        city: "",
        state: "",
      },
    };
  },
  methods: {
    ...mapActions(["initializeUser"]),
    async alertSuccess() {
      const email = this.user.email;
      const password = this.user.password;
      const passwordRegex = /^(?=.*[A-Z])(?=.*\d).+$/;

      if (email === "" || password === "") {
        showAlert("Por favor, complete todos los campos", "error");
      } else if (!passwordRegex.test(password)) {
        showAlert(
          "La contraseña debe contener al menos una mayúscula y un número",
          "error"
        );
      } else {
        try {
          await postData(API_URL_USERS, this.user);
          this.initializeUser(this.user);
          localStorage.setItem("user", JSON.stringify(this.user));
          showAlert("Registro exitoso", "success");
          this.$router.push({ name: "listadoProductos" });
          this.registered = true;
        } catch (error) {
          console.error("Error:", error);
          showAlert("Error al registrar el usuario", "error");
        }
      }
    },
}
};
</script>
  
  
<style scoped lang="scss">
.form-wrapper {
    width: 50%;
    align-content: center;
    padding: 15px;
    margin: auto;
}

.form {
    text-align: left;
}

#submit {
    text-align: center;
}

.header-register {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;

    h3 {
        margin: 0;
    }
}

.btn-cerrar {
    background-color: transparent;
    border: none;
    cursor: pointer;
}
</style>