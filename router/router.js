const { Router } = require ("express");
const router = new Router();
const mysql = require('mysql');

//Conexion base de datos

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud",
    });
    
    conn.connect((err) => {
        if (err) throw err;
        console.log("CONEXION ESTABLECIDA...");
    });



// Rutas
router.get("/producto", (req, res) => {
    let sql = " SELECT * FROM producto";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render("producto", {
            results: results,
        });
        });
    });
    
    // INSERT
    router.post("/save", (req, res) => {
        let data = {
        producto_nombre: req.body.producto_nombre,
        producto_precio: req.body.producto_precio,
        };
        let sql = "INSERT INTO producto SET ?";
        let query = conn.query(sql, data, (err, results) => {
        if (err) throw err;
        res.redirect("/");
        });
    });
    
    //UPDATE
    router.post("/update", (req, res) => {
        let sql =
        "UPDATE producto SET producto_nombre='" +
        req.body.producto_nombre +
        "', producto_precio='" +
        req.body.producto_precio +
        "' WHERE producto_id=" +
        req.body.id;
        let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.redirect("/");
        });
    });
    
    // DELETE
    
    router.post("/delete", (req, res) => {
        let sql = "DELETE FROM producto WHERE producto_id=" + req.body.producto_id + "";
        let query = conn.query(sql, (err, results) => {
            if (err) throw err;
            res.redirect("/");
        });
    });

    //statics




router.get('/', (req, res) => {
    res.render('home', {
          nombre: 'borga',
          titulo: 'Ingenieria Civil'
    }
    );
  });

  router.get('/quienes_somos', (req, res) => {
    res.render('quienes_somos', {
          nombre: 'borga Servicios',
          titulo: 'Ingenieria Civil'
    }
    );
  });

  router.get('/proyectos', (req, res) => {
    res.render('proyectos', {
          nombre: 'borga',
          titulo: 'Ingenieria Civil'
    }
    );
  });

  router.get('/topografia', (req, res) => {
    res.render('topografia', {
          nombre: 'borga',
          titulo: 'Ingenieria Civil'
    }
    );
  });

  router.get('/proy-calle30y5', (req, res) => {
    res.render('proy-calle30y5', {
          nombre: 'borga',
          titulo: 'Ingenieria Civil'
    }
    );
  });

  router.get('/temario-cursos', (req, res) => {
    res.render('temario-cursos', {
          nombre: 'borga',
          titulo: 'Ingenieria Civil'
    }
    );
  });

  router.get('/form', (req, res) => {
    res.render('form', {
          nombre: 'borga',
          titulo: 'Ingenieria Civil'
    }
    );
  });

    module.exports = router;
