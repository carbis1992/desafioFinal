<template>
  <div class="header">
    <div class="header__menu">
      <ul class="list-menu">
        <li class="item-menu">
          <router-link class="item-menu" to="/"><svg xmlns="http://www.w3.org/2000/svg" height="1em"
              viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
              <path
                d="M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z" />
            </svg></router-link>
          <p class="hover-menu">Home</p>
        </li>
        <div class="user-carrito-menu">
          <li class="item-menu menu-item" v-show="!loggedIn">
            <router-link class="item-menu" :to="{ name: 'loginUsuario' }"><svg
                xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
              </svg></router-link>
            <p class="hover-menu account">Account</p>
          </li>
          <li class="item-menu menu-item" v-show="loggedIn">
            <button @click="logout()"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"/></svg></button>
            <p class="hover-menu account">Cerrar Sesion</p>
          </li>
          <li class="item-menu menu-item" v-show="!isAdmin">
            <router-link class="item-menu" :to="{ name: 'carrito' }"><svg xmlns="http://www.w3.org/2000/svg" height="1em"
                viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z" />
              </svg></router-link>
            <p class="hover-menu account">Carrito</p>
            <p class="cant-prod-carrito">{{ cartItemCount }}</p>
          </li>
          <li class="item-menu menu-item" v-show="isAdmin">
            <router-link class="item-menu" :to="{ name: 'listadoProductosAdmin' }"><svg xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 512 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z" />
              </svg></router-link>
            <p class="hover-menu account">Admin Productos</p>
          </li>
          <li class="item-menu menu-item" v-show="isAdmin">
            <router-link class="item-menu" :to="{ name: 'comprasCarrito' }"><svg xmlns="http://www.w3.org/2000/svg"
                height="1em"
                viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z" />
              </svg></router-link>
            <p class="hover-menu account">Pedidos</p>
          </li>
        </div>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { mapGetters } from "vuex";
export default {
  name: "HeaderBar",
  data() {
    return {
      showMenu: true,
    };
  },
  computed: {
    ...mapGetters(["cartItemCount", "loggedIn", "isAdmin"]),
  },
  methods: {
    ...mapActions(["logoutUser"]),
    logout() {
      this.logoutUser();
      this.showMenu = false;
      if (this.$route.name !== "listadoProductos") {
    this.$router.push({ name: "listadoProductos" });
  }
    },
  },
};
</script>

<style lang="scss" scoped>
.list-menu {
  display: flex;
  justify-content: space-between;
  height: 70px;
  border-bottom: 1px solid #dcdcdc;

  .menu-item {
    width: 75px;
  }

  .item-menu {
    list-style: none;
    color: black;
    text-decoration: none;

    display: flex;
    /* justify-content: space-evenly; */
    align-items: center;

    &:visited {
      color: black;
    }

    router-link {
      text-decoration: none;
      color: black;
    }

    &:hover {
      .hover-menu {
        display: block;
        font-size: 10px;
        padding: 2px;
        border: 1px solid lightslategrey;
        border-radius: 10%;
        background: #dcdcdc61;
        height: auto;
        width: auto;
        margin-left: 10px;
        margin-bottom: 0;
      }

      .account {
        width: 45px;
      }
    }

    .hover-menu {
      display: none;
    }


  }

  .cant-prod-carrito {
    padding: 4px;
    background-color: rgb(151, 31, 31);
    border-radius: 15px;
    color: white;
    margin-left: 2px;
    font-size: 10px;
  }

  .user-carrito-menu {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 250px;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
}</style>