<template>
  <div>
    <div class="header-list">
      <h1>Productos</h1>
    </div>
    <div class="card-wrapper">
      <div class="card flip-card" style="width: 15rem" v-for="producto in productos" :key="producto.id">
        <div>
          <img :src="producto.imagen" class="card-img-top" style="height: 215px;" :alt="producto.nombre" />
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre }}</h5>
            <p>$ {{ producto.precio }}</p>
            <button type="button" class="btn btn-light btn-card" @click="agregarAlCarrito(producto)">
              <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 576 512">
                <path
                  d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z" />
              </svg>
            </button>
            <button type="button" class="btn btn-light btn-card" @click="sendProduct(producto)">
              Detalle
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
<script>
import { fetchData } from "../api/api";
import { showAlert } from '../utils/utils';
import { mapActions } from "vuex";
import { API_URL_PRODUCTS } from "../constants";
export default {
  name: "listadoProductos",
  data() {
    return {
      productos: [],
    };
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        const data = await fetchData(API_URL_PRODUCTS);
        this.productos = data.map((producto) => ({
          ...producto,
          cantidad: 0,
        }));
      } catch (error) {
        console.error("Error:", error);
        showAlert("Error al obtener los productos", "error");
      }
    },
    sendProduct(producto) {
      this.$router.push({
        name: "detalleProducto",
        params: { id: producto.id },
      });
    },
    ...mapActions(["addProductToCart", ]),
    async agregarAlCarrito(producto) {
      this.addProductToCart(producto);
    },
  },
};
</script>
  
<style scoped lang="scss">
.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.card {
  margin: 10px;
}

.card-title {
  font-size: 15px;
  font-weight: bold;
}

.header-list {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
}

.btn-card {
  border: 1px solid darkseagreen;
  background: none;
  font-size: 11px;
  margin-right: 10px;

  &:hover {
    background-color: rgb(181, 181, 181);
  }
}

.hidden {
  display: none;
}

a {
  text-decoration: none;
  color: black;
}

.item-menu {
  cursor: pointer;
  margin-left: 10px;

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
      height: 20px;
      width: 40px;
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

  .menu-item {
    cursor: pointer;
  }

}
</style>