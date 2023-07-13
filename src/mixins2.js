export default {
    data() {
      return {
        carritoLocal: JSON.parse(localStorage.getItem("carrito")) || [],
      };
    },
    methods: {
      agregarAlCarrito(producto) {
        const carritoCopia = [...this.carritoLocal];
        const index = carritoCopia.findIndex((item) => item.id === producto.id);
        if (index !== -1) {
          carritoCopia[index].cantidad++;
        } else {
          carritoCopia.push({ ...producto, cantidad: 1 });
        }
        this.carritoLocal = carritoCopia;
        localStorage.setItem("carrito", JSON.stringify(carritoCopia));
        console.log("carrito desde el mixin", this.carritoLocal);
      },
      removeFromCartMixin(producto) {
        const carritoCopia = [...this.carritoLocal];
        const index = carritoCopia.findIndex((item) => item.id === producto.id);
        if (index !== -1) {
          carritoCopia.splice(index, 1);
          this.carritoLocal = carritoCopia;
          localStorage.setItem("carrito", JSON.stringify(carritoCopia));
        }
      },
    },
  };
  