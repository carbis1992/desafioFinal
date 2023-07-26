<template>
  <div class="pedidos-container">
    <h1>Pedidos</h1>
    <div v-if="compras.length === 0">
      No tienes compras realizadas.
    </div>
    <div v-else>
      <div v-for="pedido in compras" :key="pedido.id">
        <div  v-if="pedido.usuario.user">
          <div class="usuario-pedido">
          <h4>Pedido {{ pedido.id }}: </h4>
          <p>Usuario: {{ pedido.usuario.user.email }}</p>
        </div>
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
  </div>
</template>
  
<script>
import { fetchData } from '../api/api';
import { showAlert } from '../utils/utils';
import { API_URL_COMPRAS } from '../constants';
import { mapGetters } from 'vuex';

export default {
  name: 'comprasCarrito',
  data() {
    return {
      compras: [],
      usuario: {
        user: {
        },
      },
    };
  },
  created() {
    if (!this.loggedIn || !this.isAdmin) {
      this.$router.push({ name: 'loginUsuario' });
    } else {
      this.fetchCompras();
    }
  },
  computed: {
    ...mapGetters(['loggedIn', 'isAdmin']),
  },
  methods: {
    fetchCompras() {
      fetchData(API_URL_COMPRAS)
        .then((data) => {
          this.compras = data;
          this.usuario = data.usuario;
        })
        .catch((error) => {
          console.error('Error al obtener las compras:', error);
          showAlert('Error al obtener las compras', 'error');
        });
    },
  },
};

</script>

<style scoped lang="scss">
.total-pedidos {
  float: right;
}

.pedidos-container{
  margin-right: 40px;
  margin-left: 40px;
}

.usuario-pedido{
  display: flex;
  align-items: center;
  column-gap: 10px;
  h4{
    margin: 0;
  }

  p{
    margin: 0;
  }
}
</style>
  