(function(){"use strict";var t={4236:function(t,r,e){var s=e(6369),a=function(){var t=this,r=t._self._c;return r("div",[r("HeaderBar",{attrs:{isAdmin:t.esAdmin}}),r("router-view",{attrs:{emitter:t.emitter}})],1)},o=[],i=function(){var t=this,r=t._self._c;return r("div",{staticClass:"header"},[r("div",{staticClass:"header__menu"},[r("ul",{staticClass:"list-menu"},[r("li",{staticClass:"item-menu"},[r("router-link",{staticClass:"item-menu",attrs:{to:"/"}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M61.1 224C45 224 32 211 32 194.9c0-1.9 .2-3.7 .6-5.6C37.9 168.3 78.8 32 256 32s218.1 136.3 223.4 157.3c.5 1.9 .6 3.7 .6 5.6c0 16.1-13 29.1-29.1 29.1H61.1zM144 128a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zm240 16a16 16 0 1 0 0-32 16 16 0 1 0 0 32zM272 96a16 16 0 1 0 -32 0 16 16 0 1 0 32 0zM16 304c0-26.5 21.5-48 48-48H448c26.5 0 48 21.5 48 48s-21.5 48-48 48H64c-26.5 0-48-21.5-48-48zm16 96c0-8.8 7.2-16 16-16H464c8.8 0 16 7.2 16 16v16c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V400z"}})])]),r("p",{staticClass:"hover-menu"},[t._v("Home")])],1),r("div",{staticClass:"user-carrito-menu"},[r("li",{directives:[{name:"show",rawName:"v-show",value:!t.loggedIn,expression:"!loggedIn"}],staticClass:"item-menu menu-item"},[r("router-link",{staticClass:"item-menu",attrs:{to:{name:"loginUsuario"}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 448 512"}},[r("path",{attrs:{d:"M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"}})])]),r("p",{staticClass:"hover-menu account"},[t._v("Account")])],1),r("li",{directives:[{name:"show",rawName:"v-show",value:t.loggedIn,expression:"loggedIn"}],staticClass:"item-menu menu-item"},[r("button",{on:{click:function(r){return t.logout()}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128zM160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0z"}})])]),r("p",{staticClass:"hover-menu account"},[t._v("Cerrar Sesion")])]),r("li",{directives:[{name:"show",rawName:"v-show",value:!t.isAdmin,expression:"!isAdmin"}],staticClass:"item-menu menu-item"},[r("router-link",{staticClass:"item-menu",attrs:{to:{name:"carrito"}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 576 512"}},[r("path",{attrs:{d:"M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"}})])]),r("p",{staticClass:"hover-menu account"},[t._v("Carrito")]),r("p",{staticClass:"cant-prod-carrito"},[t._v(t._s(t.cartItemCount))])],1),r("li",{directives:[{name:"show",rawName:"v-show",value:t.isAdmin,expression:"isAdmin"}],staticClass:"item-menu menu-item"},[r("router-link",{staticClass:"item-menu",attrs:{to:{name:"listadoProductosAdmin"}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 512 512"}},[r("path",{attrs:{d:"M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"}})])]),r("p",{staticClass:"hover-menu account"},[t._v("Admin Productos")])],1),r("li",{directives:[{name:"show",rawName:"v-show",value:t.isAdmin,expression:"isAdmin"}],staticClass:"item-menu menu-item"},[r("router-link",{staticClass:"item-menu",attrs:{to:{name:"comprasCarrito"}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 384 512"}},[r("path",{attrs:{d:"M64 464c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H224v80c0 17.7 14.3 32 32 32h80V448c0 8.8-7.2 16-16 16H64zM64 0C28.7 0 0 28.7 0 64V448c0 35.3 28.7 64 64 64H320c35.3 0 64-28.7 64-64V154.5c0-17-6.7-33.3-18.7-45.3L274.7 18.7C262.7 6.7 246.5 0 229.5 0H64zm56 256c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H120z"}})])]),r("p",{staticClass:"hover-menu account"},[t._v("Pedidos")])],1)])])])])},n=[],c=(e(7658),e(3822)),l={name:"HeaderBar",data(){return{showMenu:!0}},computed:{...(0,c.Se)(["cartItemCount","loggedIn","isAdmin"])},methods:{...(0,c.nv)(["logoutUser"]),logout(){this.logoutUser(),this.showMenu=!1,"listadoProductos"!==this.$route.name&&this.$router.push({name:"listadoProductos"})}}},d=l,u=e(1001),m=(0,u.Z)(d,i,n,!1,null,"21d9e3d2",null),p=m.exports,v=e(1373),h={name:"App",components:{HeaderBar:p},data(){return{esAdmin:!1,emitter:(0,v.Z)()}},mounted(){this.emitter.on("isAdmin",(t=>{this.esAdmin=t}))}},g=h,f=(0,u.Z)(g,a,o,!1,null,null,null),C=f.exports,b=e(2631),_=function(){var t=this,r=t._self._c;return r("div",[t._m(0),r("div",{staticClass:"card-wrapper"},t._l(t.productos,(function(e){return r("div",{key:e.id,staticClass:"card flip-card",staticStyle:{width:"15rem"}},[r("div",[r("img",{staticClass:"card-img-top",staticStyle:{height:"215px"},attrs:{src:e.imagen,alt:e.nombre}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.nombre))]),r("p",[t._v("$ "+t._s(e.precio))]),r("button",{staticClass:"btn btn-light btn-card",attrs:{type:"button"},on:{click:function(r){return t.agregarAlCarrito(e)}}},[r("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",height:"1em",viewBox:"0 0 576 512"}},[r("path",{attrs:{d:"M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM252 160c0 11 9 20 20 20h44v44c0 11 9 20 20 20s20-9 20-20V180h44c11 0 20-9 20-20s-9-20-20-20H356V96c0-11-9-20-20-20s-20 9-20 20v44H272c-11 0-20 9-20 20z"}})])]),r("button",{staticClass:"btn btn-light btn-card",attrs:{type:"button"},on:{click:function(r){return t.sendProduct(e)}}},[t._v(" Detalle ")])])])])})),0)])},w=[function(){var t=this,r=t._self._c;return r("div",{staticClass:"header-list"},[r("h1",[t._v("Productos")])])}];async function y(t){if(!t.ok){const r=await t.json();throw new Error(r.message||"Error en la solicitud")}return t.json()}async function P(t){const r=await fetch(`${t}`);return y(r)}async function x(t,r){const e={...r,isAdmin:!1},s=await fetch(`${t}`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)});return y(s)}async function k(t,r){const e=await fetch(`${t}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(r)});return y(e)}async function I(t,r){const e=await fetch(`${t}/${r}`,{method:"DELETE"});return y(e)}var A=e(2492),H=e.n(A);function z(t,r="info"){H().fire({icon:r,text:t})}const E="https://649e051f9bac4a8e669e87a4.mockapi.io/users",S="https://649e051f9bac4a8e669e87a4.mockapi.io/products",$="https://64b0700ac60b8f941af5b66f.mockapi.io/compras";var N={name:"listadoProductos",data(){return{productos:[]}},created(){this.getProducts()},methods:{async getProducts(){try{const t=await P(S);this.productos=t.map((t=>({...t,cantidad:0})))}catch(t){console.error("Error:",t),z("Error al obtener los productos","error")}},sendProduct(t){this.$router.push({name:"detalleProducto",params:{id:t.id}})},...(0,c.nv)(["addProductToCart"]),async agregarAlCarrito(t){this.addProductToCart(t)}}},U=N,Z=(0,u.Z)(U,_,w,!1,null,"709117bc",null),M=Z.exports,L=function(){var t=this,r=t._self._c;return t.showSection?r("div",[t._m(0),r("div",{staticClass:"form-wrapper"},[r("div",{staticClass:"mb-3 row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputEmail"}},[t._v("Email")]),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail",placeholder:"juanperez@mail.com"},domProps:{value:t.email},on:{input:function(r){r.target.composing||(t.email=r.target.value)}}})])]),r("div",{staticClass:"mb-3 row"},[r("label",{staticClass:"col-sm-2 col-form-label",attrs:{for:"inputPassword"}},[t._v("Password")]),r("div",{staticClass:"col-sm-10"},[r("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword",placeholder:"Juanperez123"},domProps:{value:t.password},on:{input:function(r){r.target.composing||(t.password=r.target.value)}}})])]),r("div",{staticClass:"col-12",attrs:{id:"submit"}},[r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"},on:{click:function(r){return r.preventDefault(),t.login.apply(null,arguments)}}},[t._v("Log In")]),r("div",{staticClass:"registrarse"},[r("p",[t._v("No tienes cuenta?")]),r("router-link",{staticClass:"item-menu",attrs:{to:{name:"registroUsuario"}}},[t._v("Registrate")])],1)])])]):t._e()},T=[function(){var t=this,r=t._self._c;return r("div",{staticClass:"header-login"},[r("h3",[t._v("Login")])])}],O={name:"loginUsuario",props:["emitter"],data(){return{showSection:!0,email:"",password:""}},methods:{...(0,c.nv)(["loginUser"]),close(){this.showSection=!1},validateEmail(t){const r=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return r.test(t)},validatePassword(t){const r=/^(?=.*[A-Z])(?=.*\d).{6,}$/;return r.test(t)},validateFields(){return this.email&&this.password?this.validateEmail(this.email)?!!this.validatePassword(this.password)||(z("La contraseña debe contener al menos una letra mayúscula y un número, y tener una longitud mínima de 6 caracteres","error"),!1):(z("Por favor, ingrese un correo electrónico válido","error"),!1):(z("Por favor, complete todos los campos","error"),!1)},async login(){if(this.validateFields())try{const t=await P(E),r=t.find((t=>t.email===this.email&&t.password===this.password));r?(this.loginUser(r),localStorage.setItem("user",JSON.stringify(r)),z("Inicio de sesión exitoso","success"),r.isAdmin?this.$router.push({name:"listadoProductosAdmin"}):this.$router.push({name:"listadoProductos"})):z("Usuario o contraseña incorrectos","error")}catch(t){console.error("Error:",t),z("Error al iniciar sesión","error")}}}},D=O,B=(0,u.Z)(D,L,T,!1,null,"69c05600",null),V=B.exports,j=function(){var t=this,r=t._self._c;return r("div",[r("div",[t._m(0),r("div",{staticClass:"form-wrapper"},[r("form",{staticClass:"row g-3 form"},[r("div",{staticClass:"col-sm"},[r("label",{staticClass:"form-label",attrs:{for:"inputEmail4"}},[t._v("Email")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.email,expression:"user.email"}],staticClass:"form-control",attrs:{type:"email",id:"inputEmail4",placeholder:"juanperez@mail.com"},domProps:{value:t.user.email},on:{input:function(r){r.target.composing||t.$set(t.user,"email",r.target.value)}}})]),r("div",{staticClass:"col-md-6"},[r("label",{staticClass:"form-label",attrs:{for:"inputPassword4"}},[t._v("Contraseña")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.user.password,expression:"user.password"}],staticClass:"form-control",attrs:{type:"password",id:"inputPassword4"},domProps:{value:t.user.password},on:{input:function(r){r.target.composing||t.$set(t.user,"password",r.target.value)}}})]),t._m(1),t._m(2),r("div",{staticClass:"col-md-6"},[r("label",{staticClass:"form-label",attrs:{for:"inputState"}},[t._v("Provincia")]),r("select",{directives:[{name:"model",rawName:"v-model",value:t.user.state,expression:"user.state"}],staticClass:"form-select",attrs:{id:"inputState"},on:{change:function(r){var e=Array.prototype.filter.call(r.target.options,(function(t){return t.selected})).map((function(t){var r="_value"in t?t._value:t.value;return r}));t.$set(t.user,"state",r.target.multiple?e:e[0])}}},[r("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Choose...")]),r("option",{attrs:{value:"provincia1"}},[t._v("Provincia 1")]),r("option",{attrs:{value:"provincia2"}},[t._v("Provincia 2")]),r("option",{attrs:{value:"provincia3"}},[t._v("Provincia 3")])])]),r("div",{staticClass:"col-12",attrs:{id:"submit"}},[r("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button",id:"liveAlertBtn"},on:{click:function(r){return r.preventDefault(),t.alertSuccess.apply(null,arguments)}}},[t._v(" Sign in ")])])])])]),t.registered?r("router-link",{attrs:{to:{name:"listadoProductos"}}}):t._e()],1)},Q=[function(){var t=this,r=t._self._c;return r("div",{staticClass:"header-register"},[r("h3",[t._v("Registrate")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-12"},[r("label",{staticClass:"form-label",attrs:{for:"inputAddress"}},[t._v("Direccion")]),r("input",{staticClass:"form-control",attrs:{type:"text",id:"inputAddress",placeholder:"España 1309"}})])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-md-6"},[r("label",{staticClass:"form-label",attrs:{for:"inputCity"}},[t._v("Ciudad")]),r("input",{staticClass:"form-control",attrs:{type:"text",id:"inputCity"}})])}],F={name:"registroUsuario",data(){return{registered:!1,user:{email:"",password:"",address:"",city:"",state:""}}},methods:{...(0,c.nv)(["initializeUser"]),async alertSuccess(){const t=this.user.email,r=this.user.password,e=/^(?=.*[A-Z])(?=.*\d).+$/;if(""===t||""===r)z("Por favor, complete todos los campos","error");else if(e.test(r))try{await x(E,this.user),this.initializeUser(this.user),localStorage.setItem("user",JSON.stringify(this.user)),z("Registro exitoso","success"),this.$router.push({name:"listadoProductos"}),this.registered=!0}catch(s){console.error("Error:",s),z("Error al registrar el usuario","error")}else z("La contraseña debe contener al menos una mayúscula y un número","error")}}},q=F,J=(0,u.Z)(q,j,Q,!1,null,"62acae90",null),R=J.exports,G=function(){var t=this,r=t._self._c;return r("div",[r("h1",[t._v("Carrito de Compras")]),0===t.cartItems.length?r("div",[r("p",[t._v("No hay productos en el carrito.")])]):r("div",[r("table",{staticClass:"table"},[t._m(0),r("tbody",t._l(t.cartItems,(function(e){return r("tr",{key:e.id},[r("td",[r("img",{staticClass:"card-img-top img-carrito",attrs:{src:e.imagen,alt:e.nombre}})]),r("td",[t._v(t._s(e.nombre))]),r("td",[t._v(t._s(e.precio))]),r("td",[r("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(r){return t.decrementQuantity(e)}}},[t._v(" - ")]),e&&e.cantidad?r("span",{staticClass:"cantidad"},[t._v(t._s(e.cantidad))]):t._e(),r("button",{staticClass:"btn btn-sm btn-secondary",on:{click:function(r){return t.incrementQuantity(e)}}},[t._v(" + ")])]),r("td",[r("button",{staticClass:"btn btn-danger",on:{click:function(r){return t.removeFromCart(e)}}},[r("svg",{staticClass:"bi bi-trash3",attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",fill:"currentColor",viewBox:"0 0 16 16"}},[r("path",{attrs:{d:"M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"}})])])])])})),0)]),r("div",{staticClass:"total-carrito"},[r("span",[t._v("Total: ")]),t._v(t._s(t.calculateTotalPrice)+" "),r("button",{staticClass:"btn btn-primary",on:{click:t.realizarCompra}},[t._v("Comprar")])])])])},K=[function(){var t=this,r=t._self._c;return r("thead",[r("tr",[r("th",[t._v("Imagen")]),r("th",[t._v("Nombre")]),r("th",[t._v("Precio")]),r("th",[t._v("Cantidad")]),r("th",[t._v("Acciones")])])])}],W={computed:{...(0,c.rn)({cartItems:t=>t.cart.cartItems,setUser:t=>t.user}),...(0,c.rn)(["user"]),...(0,c.Se)(["loggedIn"]),...(0,c.Se)(["cartItemCount"]),calculateTotalPrice(){return this.cartItems.reduce(((t,r)=>t+r.precio*r.cantidad),0)}},methods:{...(0,c.nv)(["updateQuantity","removeProductFromCart"]),incrementQuantity(t){const r=t.cantidad+1;this.updateQuantity({productId:t.id,quantity:r})},decrementQuantity(t){if(t.cantidad>0){const r=t.cantidad-1;this.updateQuantity({productId:t.id,quantity:r})}},removeFromCart(t){this.removeProductFromCart(t.id)},realizarCompra(){if(!this.loggedIn)return void this.$router.push({name:"loginUsuario"});const t={usuario:this.user,productos:this.cartItems,total:this.calculateTotalPrice};x($,t).then((()=>{this.$store.dispatch("vaciarCarrito"),z("Compra realizada","success"),this.$router.push({name:"listadoProductos"})})).catch((t=>{console.error("Error al realizar la compra:",t),z("Error al realizar la compra","error")}))}}},X=W,Y=(0,u.Z)(X,G,K,!1,null,"a0f7e89a",null),tt=Y.exports,rt=function(){var t=this,r=t._self._c;return r("div",{staticClass:"card"},[t.producto?r("div",{staticClass:"card-body"},[r("img",{staticClass:"card-img-top",attrs:{src:t.producto.imagen,alt:t.producto.nombre}}),r("h5",{staticClass:"card-title title-back"},[t._v(t._s(t.producto.nombre))]),r("h6",[t._v("Detalle:")]),r("p",{staticClass:"card-text"},[t._v(t._s(t.producto.descripcion))]),r("p",[t._v("Stock: "+t._s(t.producto.stock))]),r("button",{staticClass:"btn btn-light btn-card",on:{click:function(r){return t.agregarProductoAlCarrito(t.producto)}}},[t._v("Agregar al carrito")]),r("button",{staticClass:"btn btn-light btn-card"},[r("router-link",{attrs:{to:{name:"listadoProductos"}}},[t._v(" Volver ")])],1)]):r("div",[r("p",[t._v("Cargando...")])])])},et=[],st={name:"detalleProducto",data(){return{producto:null,id:this.$route.params.id}},created(){this.getDetalleProducto()},methods:{async getDetalleProducto(){try{const t=await P(`${S}/${this.id}`);this.producto=t,this.producto.cantidad=0}catch(t){console.error("Error:",t),z("Error al obtener el detalle del producto","error")}},...(0,c.nv)(["addProductToCart"]),agregarProductoAlCarrito(t){this.addProductToCart(t)}}},at=st,ot=(0,u.Z)(at,rt,et,!1,null,"bb160108",null),it=ot.exports,nt=function(){var t=this,r=t._self._c;return r("div",{staticClass:"pedidos-container"},[r("h1",[t._v("Pedidos")]),0===t.compras.length?r("div",[t._v(" No tienes compras realizadas. ")]):r("div",t._l(t.compras,(function(e){return r("div",{key:e.id},[r("div",{staticClass:"usuario-pedido"},[r("h4",[t._v("Pedido "+t._s(e.id)+": ")]),r("p",[t._v("Usuario: "+t._s(e.usuario.user.email))])]),r("table",{staticClass:"table"},[t._m(0,!0),r("tbody",t._l(e.productos,(function(e){return r("tr",{key:e.id},[r("td",[r("img",{staticClass:"card-img-top img-carrito",staticStyle:{width:"50px"},attrs:{src:e.imagen,alt:e.nombre}})]),r("td",[t._v(t._s(e.nombre))]),r("td",[t._v(t._s(e.precio))]),r("td",[t._v(t._s(e.cantidad))])])})),0)]),r("p",{staticClass:"total-pedidos"},[r("strong",[t._v(" Total: "+t._s(e.total))])])])})),0)])},ct=[function(){var t=this,r=t._self._c;return r("thead",[r("tr",[r("th",[t._v("Imagen")]),r("th",[t._v("Nombre")]),r("th",[t._v("Precio")]),r("th",[t._v("Cantidad")])])])}],lt={name:"comprasCarrito",data(){return{compras:[],usuario:{email:""}}},created(){this.loggedIn&&this.isAdmin?this.fetchCompras():this.$router.push({name:"loginUsuario"})},computed:{...(0,c.Se)(["loggedIn","isAdmin"])},methods:{fetchCompras(){P($).then((t=>{this.compras=t,this.usuario=t.usuario})).catch((t=>{console.error("Error al obtener las compras:",t),z("Error al obtener las compras","error")}))}}},dt=lt,ut=(0,u.Z)(dt,nt,ct,!1,null,"905b4128",null),mt=ut.exports,pt=function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[r("div",{staticClass:"row"},[t._m(0),r("div",{staticClass:"col-12"},[r("form",{staticClass:"row g-3 form"},[r("div",{staticClass:"col-sm"},[r("label",{staticClass:"form-label",attrs:{for:"idInput"}},[t._v("ID")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control",attrs:{type:"text",id:"idInput",placeholder:"id"},domProps:{value:t.id},on:{input:function(r){r.target.composing||(t.id=r.target.value)}}})]),r("div",{staticClass:"col-sm"},[r("label",{staticClass:"form-label",attrs:{for:"nombre"}},[t._v("Nombre")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"nombre"}],staticClass:"form-control",attrs:{type:"nombre",id:"nombre",placeholder:"nombre"},domProps:{value:t.nombre},on:{input:function(r){r.target.composing||(t.nombre=r.target.value)}}})]),r("div",{staticClass:"col-6"},[r("label",{staticClass:"form-label",attrs:{for:"precio"}},[t._v("Precio")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.precio,expression:"precio"}],staticClass:"form-control",attrs:{type:"text",id:"precio"},domProps:{value:t.precio},on:{input:function(r){r.target.composing||(t.precio=r.target.value)}}})]),r("div",{staticClass:"col-md-12"},[r("label",{staticClass:"form-label",attrs:{for:"descripcion"}},[t._v("Descripcion")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.descripcion,expression:"descripcion"}],staticClass:"form-control",attrs:{type:"text",id:"descripcion"},domProps:{value:t.descripcion},on:{input:function(r){r.target.composing||(t.descripcion=r.target.value)}}})]),r("div",{staticClass:"col-md-6"},[r("label",{staticClass:"form-label",attrs:{for:"stock"}},[t._v("Stock")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.stock,expression:"stock"}],staticClass:"form-control",attrs:{type:"text",id:"stock"},domProps:{value:t.stock},on:{input:function(r){r.target.composing||(t.stock=r.target.value)}}})]),r("div",{staticClass:"col-md-6"},[r("label",{staticClass:"form-label",attrs:{for:"inputState"}},[t._v("imagen")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.imagen,expression:"imagen"}],staticClass:"form-control",attrs:{type:"text",id:"imagen"},domProps:{value:t.imagen},on:{input:function(r){r.target.composing||(t.imagen=r.target.value)}}})])])]),r("div",{staticClass:"col-12"},[r("button",{staticClass:"btn btn-primary agregar-prod",on:{click:t.agregarProductos}},[t._v(" Agregar productos ")])])]),r("div",{staticClass:"card-wrapper"},t._l(t.productos,(function(e){return r("div",{key:e.id,staticClass:"card flip-card",staticStyle:{width:"15rem"}},[r("div",[r("img",{staticClass:"card-img-top",attrs:{src:e.imagen,alt:e.nombre}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(e.nombre))]),r("p",[t._v("$ "+t._s(e.precio))])])]),r("button",{staticClass:"btn btn-light btn-card",on:{click:function(r){return t.editarProducto(e)}}},[t._v("Edit")]),r("button",{staticClass:"btn btn-light btn-card",on:{click:function(r){return t.eliminarProducto(e.id)}}},[t._v("Delete")])])})),0)])},vt=[function(){var t=this,r=t._self._c;return r("div",{staticClass:"col-12"},[r("h1",[t._v("Agregar productos")])])}],ht={name:"listadoProductosAdmin",data(){return{id:"",nombre:"",descripcion:"",precio:"",stock:"",imagen:"",productos:[]}},created(){this.isAdmin||this.$router.push({name:"loginUsuario"}),this.fetchProducts()},computed:{...(0,c.Se)(["loggedIn","isAdmin"])},methods:{async fetchProducts(){try{const t=await P(S);this.productos=t.map((t=>({...t,cantidad:0})))}catch(t){console.error("Error:",t),z("Error al obtener los productos","error")}},async agregarProducto(t){try{const r=await x(S,t),e={...r,cantidad:0};this.productos.unshift(e),z("Producto agregado exitosamente","success")}catch(r){console.error("Error:",r),z("Error al agregar el producto","error")}},async eliminarProducto(t){try{await I(S,t),this.productos=this.productos.filter((r=>r.id!==t)),z("Producto eliminado exitosamente","success")}catch(r){console.error("Error:",r),z("Error al eliminar el producto","error")}},agregarProductos(){const t={nombre:this.nombre,descripcion:this.descripcion,precio:this.precio,stock:this.stock,imagen:this.imagen};this.agregarProducto(t)},editarProducto(t){this.id=t.id,this.nombre=t.nombre,this.descripcion=t.descripcion,this.precio=t.precio,this.stock=t.stock,this.imagen=t.imagen,this.$router.push({name:"editarProducto",params:{id:t.id}})}}},gt=ht,ft=(0,u.Z)(gt,pt,vt,!1,null,"5d3af020",null),Ct=ft.exports,bt=function(){var t=this,r=t._self._c;return r("div",{staticClass:"container"},[r("h1",[t._v("Editar producto")]),r("form",{staticClass:"row g-3 form"},[r("div",{staticClass:"col-sm"},[r("label",{staticClass:"form-label",attrs:{for:"idInput"}},[t._v("ID")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.id,expression:"id"}],staticClass:"form-control",attrs:{type:"text",id:"idInput",disabled:!0},domProps:{value:t.id},on:{input:function(r){r.target.composing||(t.id=r.target.value)}}})]),r("div",{staticClass:"col-sm"},[r("label",{staticClass:"form-label",attrs:{for:"nombre"}},[t._v("Nombre")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.nombre,expression:"nombre"}],staticClass:"form-control",attrs:{type:"text",id:"nombre"},domProps:{value:t.nombre},on:{input:function(r){r.target.composing||(t.nombre=r.target.value)}}})]),r("div",{staticClass:"col-6"},[r("label",{staticClass:"form-label",attrs:{for:"precio"}},[t._v("Precio")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.precio,expression:"precio"}],staticClass:"form-control",attrs:{type:"text",id:"precio"},domProps:{value:t.precio},on:{input:function(r){r.target.composing||(t.precio=r.target.value)}}})]),r("div",{staticClass:"col-md-12"},[r("label",{staticClass:"form-label",attrs:{for:"descripcion"}},[t._v("Descripcion")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.descripcion,expression:"descripcion"}],staticClass:"form-control",attrs:{type:"text",id:"descripcion"},domProps:{value:t.descripcion},on:{input:function(r){r.target.composing||(t.descripcion=r.target.value)}}})]),r("div",{staticClass:"col-md-6"},[r("label",{staticClass:"form-label",attrs:{for:"stock"}},[t._v("Stock")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.stock,expression:"stock"}],staticClass:"form-control",attrs:{type:"text",id:"stock"},domProps:{value:t.stock},on:{input:function(r){r.target.composing||(t.stock=r.target.value)}}})]),r("div",{staticClass:"col-md-6"},[r("label",{staticClass:"form-label",attrs:{for:"inputState"}},[t._v("imagen")]),r("input",{directives:[{name:"model",rawName:"v-model",value:t.imagen,expression:"imagen"}],staticClass:"form-control",attrs:{type:"text",id:"imagen"},domProps:{value:t.imagen},on:{input:function(r){r.target.composing||(t.imagen=r.target.value)}}})])]),r("button",{staticClass:"btn btn-primary",on:{click:t.guardarCambios}},[t._v("Guardar")]),r("button",{staticClass:"btn btn-primary btn-volver",on:{click:t.volverListadoAdmin}},[t._v("Volver")])])},_t=[],wt={name:"editarProducto",data(){return{id:"",nombre:"",descripcion:"",precio:"",stock:"",imagen:""}},created(){if(this.loggedIn&&this.isAdmin){const t=this.$route.params.id;this.getProductDetails(t)}else this.$router.push({name:"loginUsuario"})},computed:{...(0,c.Se)(["loggedIn","isAdmin"])},methods:{async getProductDetails(t){try{const r=await P(`${S}/${t}`);this.id=r.id,this.nombre=r.nombre,this.descripcion=r.descripcion,this.precio=r.precio,this.stock=r.stock,this.imagen=r.imagen}catch(r){console.error("Error:",r),z("Error al obtener el detalle del producto","error")}},async guardarCambios(){try{const t={nombre:this.nombre,descripcion:this.descripcion,precio:this.precio,stock:this.stock,imagen:this.imagen};await k(`${S}/${this.id}`,t),this.$router.push({name:"listadoProductosAdmin"})}catch(t){console.error("Error:",t),z("Error al guardar los cambios","error")}},volverListadoAdmin(){this.$router.push({name:"listadoProductosAdmin"})}}},yt=wt,Pt=(0,u.Z)(yt,bt,_t,!1,null,"07858028",null),xt=Pt.exports;s.ZP.use(b.ZP);const kt=[{path:"/",component:M,name:"listadoProductos"},{path:"/login",component:V,name:"loginUsuario"},{path:"/registro",component:R,name:"registroUsuario"},{path:"/carrito",component:tt,name:"carrito"},{path:"/detalle/:id",component:it,name:"detalleProducto"},{path:"/compras",component:mt,name:"comprasCarrito"},{path:"/admin",component:Ct,name:"listadoProductosAdmin",meta:{requiresAuth:!0,isAdmin:!0}},{path:"/editar/:id",component:xt,name:"editarProducto"}],It=new b.ZP({mode:"history",base:"/vue-production/",routes:kt});var At=It;const Ht={cartItems:[]},zt={cartItemCount:t=>t.cartItems.reduce(((t,r)=>t+r.cantidad),0),getCartItemById:t=>r=>t.cartItems.find((t=>t.id===r))},Et={addToCart(t,r){const e=t.cartItems.find((t=>t.id===r.id));e?e.cantidad+=1:t.cartItems.push({...r,cantidad:1})},updateCartItemQuantity(t,{productId:r,quantity:e}){const s=t.cartItems.find((t=>t.id===r));s&&(s.cantidad=e)},removeProductFromCart(t,r){t.cartItems=t.cartItems.filter((t=>t.id!==r))},setCartItems(t,r){t.cartItems=r},clearCartItems(t){t.cartItems=[]}},St={addProductToCart({commit:t,getters:r},e){const s=r.getCartItemById(e.id);s?t("updateCartItemQuantity",{productId:e.id,quantity:s.cantidad+1}):t("addToCart",e)},updateQuantity({commit:t},{productId:r,quantity:e}){t("updateCartItemQuantity",{productId:r,quantity:e})},removeProductFromCart({commit:t},r){t("removeProductFromCart",r)},vaciarCarrito({commit:t}){t("setCartItems",[])}};var $t={state:Ht,getters:zt,mutations:Et,actions:St};const Nt={user:null},Ut={user:t=>t.user,loggedIn:t=>!!t.user,isAdmin:t=>t.user?.isAdmin||!1},Zt={setUser(t,r){t.user=r},clearUser(t){t.user=null}},Mt={loginUser({commit:t},r){localStorage.setItem("user",JSON.stringify(r)),t("setUser",r)},logoutUser({commit:t}){localStorage.removeItem("user"),t("clearUser")},initializeUser({commit:t}){const r=JSON.parse(localStorage.getItem("user"));t("setUser",r)}};var Lt={state:Nt,getters:Ut,mutations:Zt,actions:Mt};s.ZP.use(c.ZP);const Tt=new c.ZP.Store({modules:{cart:$t,user:Lt}});var Ot=e(3204);s.ZP.config.productionTip=!1,s.ZP.component("font-awesome-icon",Ot.GN),new s.ZP({router:At,store:Tt,render:t=>t(C)}).$mount("#app")}},r={};function e(s){var a=r[s];if(void 0!==a)return a.exports;var o=r[s]={exports:{}};return t[s].call(o.exports,o,o.exports,e),o.exports}e.m=t,function(){var t=[];e.O=function(r,s,a,o){if(!s){var i=1/0;for(d=0;d<t.length;d++){s=t[d][0],a=t[d][1],o=t[d][2];for(var n=!0,c=0;c<s.length;c++)(!1&o||i>=o)&&Object.keys(e.O).every((function(t){return e.O[t](s[c])}))?s.splice(c--,1):(n=!1,o<i&&(i=o));if(n){t.splice(d--,1);var l=a();void 0!==l&&(r=l)}}return r}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[s,a,o]}}(),function(){e.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return e.d(r,{a:r}),r}}(),function(){e.d=function(t,r){for(var s in r)e.o(r,s)&&!e.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:r[s]})}}(),function(){e.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){e.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){var t={143:0};e.O.j=function(r){return 0===t[r]};var r=function(r,s){var a,o,i=s[0],n=s[1],c=s[2],l=0;if(i.some((function(r){return 0!==t[r]}))){for(a in n)e.o(n,a)&&(e.m[a]=n[a]);if(c)var d=c(e)}for(r&&r(s);l<i.length;l++)o=i[l],e.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return e.O(d)},s=self["webpackChunkproyecto_final"]=self["webpackChunkproyecto_final"]||[];s.forEach(r.bind(null,0)),s.push=r.bind(null,s.push.bind(s))}();var s=e.O(void 0,[998],(function(){return e(4236)}));s=e.O(s)})();
//# sourceMappingURL=app.ec360543.js.map