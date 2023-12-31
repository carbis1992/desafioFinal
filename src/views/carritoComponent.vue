<template>
  <div>
    <h1>Carrito de Compras</h1>
    <div v-if="cartItems.length === 0">
      <p>No hay productos en el carrito.</p>
    </div>
    <div v-else>
      <table class="table">
        <thead>
          <tr>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(producto) in cartItems" :key="producto.id">
            <td>
              <img :src="producto.imagen" class="card-img-top img-carrito" :alt="producto.nombre" />
            </td>
            <td>{{ producto.nombre }}</td>
            <td>{{ producto.precio }}</td>
            <td>
              <button class="btn btn-sm btn-secondary" @click="decrementQuantity(producto)">
                -
              </button>
              <span class="cantidad" v-if="producto && producto.cantidad">{{ producto.cantidad }}</span>
              <button class="btn btn-sm btn-secondary" @click="incrementQuantity(producto)">
                +
              </button>
            </td>
            <td>
              <button class="btn btn-danger" @click="removeFromCart(producto)">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash3"
                  viewBox="0 0 16 16">
                  <path
                    d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                </svg>
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="total-carrito">
        <span>Total: </span>{{ calculateTotalPrice }}
        <button class="btn btn-primary" @click="realizarCompra">Comprar</button>
      </div>
    </div>
  </div>
</template>

<script>
import { postData } from '../api/api';
import { showAlert } from '../utils/utils';
import { API_URL_COMPRAS } from '../constants';
import { mapGetters, mapActions } from 'vuex';

export default {
  computed: {
    ...mapGetters(['loggedIn', 'cartItems', 'calculateTotalPrice']),
  },
  methods: {
    ...mapActions(['incrementQuantity', 'decrementQuantity', 'removeProductFromCart', 'vaciarCarrito']),
    realizarCompra() {
      if (!this.loggedIn) {
        this.$router.push({ name: 'loginUsuario' });
        return;
      }

      const compraData = {
        usuario: this.user,
        productos: this.cartItems,
        total: this.calculateTotalPrice,
      };

      postData(API_URL_COMPRAS, compraData)
        .then(() => {
          this.$store.dispatch('vaciarCarrito');
          showAlert('Compra realizada', 'success');
          this.$router.push({ name: 'listadoProductos' });
        })
        .catch((error) => {
          console.error('Error al realizar la compra:', error);
          showAlert('Error al realizar la compra', 'error');
        });
    },
    incrementQuantity(producto) {
      this.$store.dispatch('incrementQuantity', producto);
    },
    decrementQuantity(producto) {
      this.$store.dispatch('decrementQuantity', producto);
    },
    removeFromCart(producto) {
      this.$store.dispatch('removeProductFromCart', producto.id);
    },
  },
};
</script>

<style scoped>
.header-carrito {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ccc;
}

.btn-cerrar {
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.table {
  margin-top: 10px;
}

.img-carrito {
  width: 50px;
  height: 50px;
  object-fit: cover;
}

.cantidad {
  margin: 0 5px;
}

.total-carrito {
  margin-top: 10px;
  font-weight: bold;
}

.carrito-icono {
  top: -10px;
  right: -10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  background-color: #dc3545;
  color: #fff;
  font-size: 12px;
  border-radius: 50%;
}
</style>