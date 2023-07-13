<template>
    <div class="container">
      <h1>Editar producto</h1>
      <form class="row g-3 form">
        <div class="col-sm">
          <label for="idInput" class="form-label">ID</label>
          <input type="text" class="form-control" id="idInput" v-model="id" :disabled="true" />
        </div>
        <div class="col-sm">
          <label for="nombre" class="form-label">Nombre</label>
          <input type="text" class="form-control" id="nombre" v-model="nombre" />
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
      <button class="btn btn-primary" @click="guardarCambios">Guardar</button>
      <button class="btn btn-primary btn-volver" @click="volverListadoAdmin">Volver</button>
  
    </div>
  </template>
    
  <script>
  import { API_URL_PRODUCTS } from "../constants";
  export default {
    name: "editarProducto",
    data() {
      return {
        id: "",
        nombre: "",
        descripcion: "",
        precio: "",
        stock: "",
        imagen: "",
      };
    },
    created() {
      const productId = this.$route.params.id;
      this.getProductDetails(productId);
    },
    methods: {
      getProductDetails(productId) {
        fetch(`${API_URL_PRODUCTS}/${productId}`)
          .then((response) => response.json())
          .then((data) => {
            this.id = data.id;
            this.nombre = data.nombre;
            this.descripcion = data.descripcion;
            this.precio = data.precio;
            this.stock = data.stock;
            this.imagen = data.imagen;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      guardarCambios() {
        const producto = {
          nombre: this.nombre,
          descripcion: this.descripcion,
          precio: this.precio,
          stock: this.stock,
          imagen: this.imagen,
        };
  
        fetch(`${API_URL_PRODUCTS}/${this.id}`, {
          method: "PUT",
          body: JSON.stringify(producto),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((response) => response.json())
          .then((data) => {
            console.log("Success:", data);
            this.$router.push({ name: "listadoProductosAdmin" });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      },
      volverListadoAdmin() {
        this.$router.push({ name: "listadoProductosAdmin" });
      },
    },
  };
  </script>
  <style scoped>
  .btn-volver {
    margin-left: 10px;
  }
  
  .btn {
    margin-top: 15px;
  }
  </style>