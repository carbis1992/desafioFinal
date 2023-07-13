<template>
  <div v-if="showSection">
    <div class="header-carrito">
      <h3>Carrito</h3>
      <div class="carrito-icono" v-if="cantidadProductos > 0">{{ cantidadProductos }}</div>
      <button @click="close" class="btn-cerrar">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-x"
          viewBox="0 0 16 16">
          <path
            d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
        </svg>

      </button>
    </div>
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
        <tr v-for="(producto, index) in carritoLocal" :key="producto.id">
          <td>
            <img :src="producto.imagen" class="card-img-top img-carrito" :alt="producto.nombre" />
          </td>
          <td>{{ producto.nombre }}</td>
          <td>{{ producto.precio }}</td>
          <td>
            <button class="btn btn-sm btn-secondary" @click="restarCantidad(index)">
              -
            </button>
            <span class="cantidad" v-if="producto && producto.cantidad">{{ producto.cantidad }}</span>
            <button class="btn btn-sm btn-secondary" @click="sumarCantidad(index)">
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
    <div class="total-carrito">Total Carrito: {{ calcularTotalCarrito() }}</div>
    <button type="button" class="btn btn-outline-success" @click="comprar">Comprar</button>
  </div>
</template>

<script>
import Swal from 'sweetalert2';
import { API_URL_COMPRAS } from '@/constants';
export default {
  name: "carritoCompras",
  props: {
    carritoProp: {
      type: Array,
      default: () => [],
    }
  },
  data() {
    return {
      showSection: true,
      carritoLocal: [], // Inicializa el carrito local como un array vacío
    };
  },
  computed: {
    cantidadProductos() {
      return this.carritoLocal.reduce((total, producto) => total + producto.cantidad, 0);
    },
  },
  created() {
    const carritoLocalStorage = localStorage.getItem("carrito");
    if (carritoLocalStorage) {
      this.carritoLocal = JSON.parse(carritoLocalStorage);
    } else {
      this.carritoLocal = [...this.carritoProp];
    }
  },
  methods: {
    close() {
      this.$router.push({ name: 'listadoProductos' });
    },
    removeFromCart(producto) {
      this.removeFromCartMixin(producto);
      this.$emit("update-carrito", this.carritoProp); // Emitir evento para actualizar el carrito en el componente padre
    },
    sumarCantidad(index) {
      this.carritoLocal[index].cantidad++;
    },
    restarCantidad(index) {
      if (this.carritoLocal[index].cantidad > 1) {
        this.carritoLocal[index].cantidad--;
      }
    },
    calcularTotalCarrito() {
      return this.carritoLocal.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    },
    limpiarCarrito() {
      this.carritoLocal = [];
      localStorage.removeItem("carrito");
    },
    comprar() {
      const sinStock = this.carritoProp.some(producto => producto.cantidad > producto.stock);
      if (sinStock) {
        Swal.fire({
          icon: 'error',
          title: 'No hay suficiente stock',
          text: 'Por favor, revisa la cantidad de productos en tu carrito',
          timer: 2000,
          width: 300,
        });
        return;
      }

      const compra = {
        productos: this.carritoProp.map(producto => ({
          id: producto.id,
          nombre: producto.nombre,
          descripcion: producto.descripcion,
          precio: producto.precio,
          stock: producto.stock,
          imagen: producto.imagen,
          cantidad: producto.cantidad,
        })),
      };

      const carritoCopia = [...this.carritoLocal];

      carritoCopia.forEach(producto => {
        producto.stock -= producto.cantidad;
        producto.cantidad = 1;
      });

      this.$emit("update-carrito", carritoCopia);
      localStorage.setItem("carrito", JSON.stringify(carritoCopia));
      fetch(API_URL_COMPRAS, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(compra),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Compras enviadas:', data);
        })
        .catch(error => {
          console.error('Error al enviar las compras:', error);
        });
      Swal.fire({
        icon: 'success',
        title: 'Compra realizada con éxito',
        text: 'Gracias por tu compra',
        timer: 800,
        width: 300,
      })

      this.$router.push({ name: 'listadoProductos' });
      this.limpiarCarrito();
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
