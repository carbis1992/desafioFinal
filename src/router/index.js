import Vue from 'vue'
import VueRouter from 'vue-router'

import listadoProductos from '../views/listadoProductos.vue';
import loginUsuario from '../views/loginUsuario.vue';
import registroUsuario from '../views/registroUsuario.vue';
import carrito from '../views/carritoComponent.vue';
import detalleProducto from '../views/detalleProducto.vue';
import comprasCarrito from '../views/comprasCarrito.vue';
import listadoProductosAdmin from '../views/listadoProductosAdmin.vue';
import editarProducto from '../views/editarProducto.vue';

Vue.use(VueRouter)

const routes = [
  { path: "/", component: listadoProductos, name: "listadoProductos" },
  { path: "/login", component: loginUsuario, name: "loginUsuario" },
  { path: "/registro", component: registroUsuario, name: "registroUsuario" },
  { path: "/carrito", component: carrito, name: "carrito" },
  { path: "/detalle/:id", component: detalleProducto, name: "detalleProducto" },
  { path: "/compras", component: comprasCarrito, name: "comprasCarrito" },
  { path: "/admin", component: listadoProductosAdmin, name: "listadoProductosAdmin", meta: { requiresAuth: true, isAdmin: true } },
  { path: "/editar/:id", component: editarProducto, name: "editarProducto" },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.VUE_APP_BASE_URL,
  routes,
})

export default router
