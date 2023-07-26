<template>
  <div class="container">
    <div class="row">
      <div class="col-12">
        <h1>Agregar productos</h1>
      </div>
      <div class="col-12">
        <form class="row g-3 form">
          <div class="col-sm">
            <label for="idInput" class="form-label">ID</label>
            <input type="text" class="form-control" id="idInput" placeholder="id" v-model="id" />
          </div>
          <div class="col-sm">
            <label for="nombre" class="form-label">Nombre</label>
            <input type="nombre" class="form-control" id="nombre" placeholder="nombre" v-model="nombre" />
          </div>
          <div class="col-6">
            <label for="precio" class="form-label">Precio</label>
            <input type="text" class="form-control" id="precio" v-model="precio" />
          </div>
          <div class="col-md-12">
            <label for="descripcion" class="form-label">Descripcion</label>
            <input type="text" class="form-control" id="descripcion" v-model="descripcion" />
          </div>
          <div class="col-md-6">
            <label for="stock" class="form-label">Stock</label>
            <input type="text" class="form-control" id="stock" v-model="stock" />
          </div>
          <div class="col-md-6">
            <label for="inputState" class="form-label">imagen</label>
            <input type="text" class="form-control" id="imagen" v-model="imagen" />
          </div>
        </form>
      </div>
      <div class="col-12">
        <button class="btn btn-primary agregar-prod" @click="agregarProductos">
          Agregar productos
        </button>
      </div>
    </div>
    <div class="card-wrapper">
      <div class="card flip-card" style="width: 15rem" v-for="producto in productos" :key="producto.id">
        <div>
          <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre" />
          <div class="card-body">
            <h5 class="card-title">{{ producto.nombre }}</h5>
            <p>$ {{ producto.precio }}</p>
          </div>
        </div>
        <button @click="editarProducto(producto)" class="btn btn-light btn-card">Edit</button>
        <button @click="eliminarProducto(producto.id)" class="btn btn-light btn-card">Delete</button>
      </div>
    </div>
  </div>
</template>
  
<script>
import { mapGetters } from "vuex";
import { fetchData, postData, deleteData } from '../api/api';
import { showAlert } from '../utils/utils';
import { API_URL_PRODUCTS } from '../constants';

export default {
  name: "listadoProductosAdmin",
  data() {
    return {
      id: "",
      nombre: "",
      descripcion: "",
      precio: "",
      stock: "",
      imagen: "",
      productos: [],
    };
  },
  created() {
    if (!this.isAdmin) {
      this.$router.push({ name: "loginUsuario" });
    }
    this.fetchProducts();
  },
  computed: {
    ...mapGetters(["loggedIn", "isAdmin"])
  },
  methods: {
    async fetchProducts() {
      try {
        const data = await fetchData(API_URL_PRODUCTS);
        this.productos = data.map((producto) => ({
          ...producto,
          cantidad: 0,
        }));
      } catch (error) {
        console.error('Error:', error);
        showAlert('Error al obtener los productos', 'error');
      }
    },

    async agregarProducto(producto) {
      try {
        const data = await postData(API_URL_PRODUCTS, producto);
        const nuevoProducto = { ...data, cantidad: 0 };
        this.productos.unshift(nuevoProducto);
        showAlert('Producto agregado exitosamente', 'success');
        this.id= "",
        this.nombre= "",
        this.descripcion= "",
        this.precio= "",
        this.stock= "",
        this.imagen= ""
      } catch (error) {
        console.error('Error:', error);
        showAlert('Error al agregar el producto', 'error');
      }
    },

    async eliminarProducto(id) {
      try {
        await deleteData(API_URL_PRODUCTS, id);
        this.productos = this.productos.filter((producto) => producto.id !== id);
        showAlert('Producto eliminado exitosamente', 'success');
      } catch (error) {
        console.error('Error:', error);
        showAlert('Error al eliminar el producto', 'error');
      }
    },
    agregarProductos() {
      const producto = {
        nombre: this.nombre,
        descripcion: this.descripcion,
        precio: this.precio,
        stock: this.stock,
        imagen: this.imagen,
      };

      this.agregarProducto(producto);
    },
    editarProducto(producto) {
      this.id = producto.id;
      this.nombre = producto.nombre;
      this.descripcion = producto.descripcion;
      this.precio = producto.precio;
      this.stock = producto.stock;
      this.imagen = producto.imagen;
      this.$router.push({ name: 'editarProducto', params: { id: producto.id } });
    },
  },
};
</script>
  
<style lang="scss" scoped>
.agregar-prod {
  margin-top: 20px;
}

.card-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 20px;
}

.card {
  margin: 10px;
}

.card-title {
  font-size: 15px;
  font-weight: bold;
}

.card-img-top {
  height: 215px;
}

.btn-card {
  border: 1px solid darkseagreen;
  background: none;
  font-size: 11px;

  &:hover {
    background-color: rgba(181, 181, 181, 0.1);
  }
}
</style>
  