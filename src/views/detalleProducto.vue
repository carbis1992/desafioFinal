<template>
    <div class="card">
        <div v-if="producto" class="card-body">
            <img :src="producto.imagen" class="card-img-top" :alt="producto.nombre">
            <h5 class="card-title title-back">{{ producto.nombre }}</h5>
            <h6>Detalle:</h6>
            <p class="card-text">{{ producto.descripcion }}</p>
            <p>Stock: {{ producto.stock }}</p>
            <button class="btn btn-light btn-card" @click="agregarProductoAlCarrito(producto)">Agregar al carrito</button>
            <button class="btn btn-light btn-card">
                <router-link :to="{ name: 'listadoProductos' }">
                    Volver
                </router-link>
            </button>
        </div>
        <div v-else>
            <p>Cargando...</p>
        </div>
    </div>
</template>

<script>
import { API_URL_PRODUCTS } from "../constants";
import { mapActions } from "vuex";
export default {
    name: 'detalleProducto',
    data() {
        return {
            producto: null,
            id: this.$route.params.id,
        }
    },
    created() {
        this.getDetalleProducto();
    },
    methods: {
        getDetalleProducto() {
            fetch(`${API_URL_PRODUCTS}/${this.id}`)
                .then(response => response.json())
                .then(data => {
                    this.producto = data;
                    this.producto.cantidad = 0;
                });
        },
        ...mapActions(["addProductToCart"]),
        agregarProductoAlCarrito(producto) {
            producto.cantidad++; 
            this.addProductToCart(producto);
        },
    }
}
</script>

<style lang="scss" scoped>
a {
    text-decoration: none;
    color: black;
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

.card {
    width: 50%;
    margin-left: 25%;
}

.card-title {
    margin-top: 10px;
    font-size: 15px;
    font-weight: bold;
}

.card-text {
    width: 70%;
    margin-left: 85px;
}

.card-img-top {
    width: 200px;
}
</style>