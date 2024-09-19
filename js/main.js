// localStorage
//guarda informacion indefinidamente 
// sessionStorage

// la forma conrecta seria 

// localStorage.setItem("iva", 21);
// localStorage.setItem("nombre","Mauro");

// let usuario ="matias";
// localStorage.setItem("usuario","matias");

// para estrer informacion del localStorage metodo
// let usuarioEnLocalStorage =localStorage.getItem("usuario")
// console.log(usuarioEnLocalStorage);

// let usuarioIngresado =prompt("Ingrese su nombre");
// localStorage.setItem("usuario-ingresado",usuarioIngresado);

// let usuarioIngresadoEnLocalStora =localStorage.setItem("usuario-ingresado");
// console.log(usuarioIngresadoEnLocalStora);


// /** OBJETOS **/
// const usuario = {
//     nombre: "Mauro",
//     edad: 38
// }

// // Opción 1
// const usuarioJSON = JSON.stringify(usuario);
// localStorage.setItem("usuario", usuarioJSON);

// // Opción 2
// localStorage.setItem("usuario", JSON.stringify(usuario));


// // Opción 1
// const usuarioEnLocalStorage = localStorage.getItem("usuario");
// const usuarioObjeto = JSON.parse(usuarioEnLocalStorage);

// // Opción 2
// const usuarioEnLS = JSON.parse(localStorage.getItem("usuario"));

// console.log(usuarioEnLS);

// /** ARRAY DE OBJETOS **/
// const productos = [
//     { nombre: "Silla", precio: 1500 }, 
//     { nombre: "Sillón", precio: 1500 },
//     { nombre: "Mesa", precio: 1500 },
// ];

// localStorage.setItem("productos", JSON.stringify(productos));
// const productosEnLS = JSON.parse(localStorage.getItem("productos"));
// console.log(productosEnLS);



