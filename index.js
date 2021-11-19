require ('dotenv').config();
const express = require("express");
const hbs = require("hbs");
const mysql = require("mysql");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;


//handlebars
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
hbs.registerPartials(__dirname + "/views/partials/")

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/assets", express.static(__dirname + "/public"));
app.use(require('./router/router'))
app.use(require('./router/contacto'))






app.listen(port, () => {
  console.log(`Usando el puerto http://localhost:${port}`);
});



/*const path = require ('path');
const express = require ('express');
const hbs = require ('hbs');
const bodyParser = require ('body-parser');
const mysql = require ('mysql');
const { isBuffer } = require('util');

const app = express ();

// conexion a la base de datos
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'crud',

})

conn.connect ((err) => {
    if (err) throw err;
    console.log('conexion establecida....')
}
);    

app.set ('views' , path.join(__dirname, 'views'));
app.set('view engine' , 'hbs');


app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use('/assets' , express.static (__dirname + '/public'));

//routes
app.get('/', (req, res) =>{
    let sql = "SELECT * FROM producto";
    let query = conn.query(sql, (err, results)=>{
        if(err) throw err;
        res.render('producto' ,{
            results: results
        });
    });
});

// insertar
app.post('/save',(req, res) => {
    let data = {producto_nombre: req.body.producto_nombre, producto_precio: req.body.producto_precio};
    let sql = "INSERT INTO producto SET ?";
    let query = conn.query(sql, data, (err, results) => {
        if(err) throw err;
        res.redirect('/');
    });
});

//UPDATE
app.post('/update', (req, res) => {
    let sql = "UPDATE producto SET producto_nombre='" + req.body.producto_nombre + "', producto_precio='" + req.body.producto_precio + "' WHERE producto_id=" + req.body.id;
    let query = conn.query(sql, (err, results) => {
      if (err) throw err;
      res.redirect('/');
    });
  });
  //DELETE
  app.post('/delete',(req, res) => {
    let sql = "DELETE FROM producto WHERE producto_id="+req.body.producto_id+"";
      let query = conn.query(sql, (err, results) => {
        if(err) throw err;
        res.redirect('/');
      });
    });




//server listening

app.listen(8000, () => {
    console.log('server is running at port 8000');
})*/