const Contenedor = require('./ClassContenedor');

const contenedor = new Contenedor();

contenedor.save({id: "3rEAZ", title: "prueba1", price: 500, thumbnail: "http://google.com"})
contenedor.getByID("3rEAZ");
contenedor.getAll();
contenedor.deleteById("3rEAZ");
contenedor.deleteAll();
