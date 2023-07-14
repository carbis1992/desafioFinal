<template>
  <div>
    <h1>Pedidos</h1>
    <div v-if="compras.length === 0">
      No tienes compras realizadas.
    </div>
    <div v-else>
      <div v-for="pedido in compras" :key="pedido.id">
        <h2>Pedido {{ pedido.id }}: </h2>
        <p>Usuario: {{ pedido.usuario.user.email }}</p>
        <table class="table">
          <thead>
            <tr>
              <th>Imagen</th>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="producto in pedido.productos" :key="producto.id">
              <td>
                <img :src="producto.imagen" class="card-img-top img-carrito" :alt="producto.nombre" style="width: 50px" />
              </td>
              <td>{{ producto.nombre }}</td>
              <td>{{ producto.precio }}</td>
              <td>{{ producto.cantidad }}</td>
            </tr>
          </tbody>
        </table>
        <p class="total-pedidos"><strong> Total: {{ pedido.total }}</strong></p>
      </div>
    </div>
  </div>
</template>
  
<script>
import { API_URL_COMPRAS } from '../constants';
export default {
  name: "comprasCarrito",
  data() {
    return {
      compras: [],
      usuario: {
        email: '',
      },
    };
  },
  created() {
    this.fetchCompras();
  },
  methods: {
    fetchCompras() {
      fetch(API_URL_COMPRAS)
        .then(response => response.json())
        .then(data => {
          this.compras = data;
          for (let i = 0; i < this.compras.length; i++) {
            this.usuario = this.compras[i].usuario;
            return this.usuario;
          }
          this.usuario = this.compras.usuario;
        })
        .catch(error => {
          console.error('Error al obtener las compras:', error);
        });
    },
  },
};
</script>

<style scoped>
.total-pedidos {
  float: right;
}
</style>
  