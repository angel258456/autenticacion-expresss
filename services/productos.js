const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple(page = 1){
  const offset = helper.getOffset(page, config.listPerPage);
  const rows = await db.query(
    `SELECT id,nombre,imagen,costo,descripcion
    FROM  Productos LIMIT ${offset},${config.listPerPage}`
  );
  const data = helper.emptyOrRows(rows);
  const meta = {page};

  return {
    data,
    meta
  }
}
async function  getSingle(id){
    const rows= await db.query(
        `SELECT id,nombre,imagen,costo,descripcion
    FROM  Productos where id=${id}`
    );
    const data = helper.emptyOrRows(rows);
   
    return {
      data
      
    }
}

async function create(producto){
    const result = await db.query(
      `INSERT INTO Productos
      
      VALUES 
      (default,"${producto.nombre}","${producto.imagen}","${producto.descripcion}",${producto.costo})`
    );
   console.log("hola")
    let message = 'Error in creating Producto';
  
    if (result.affectedRows) {
      message = 'Producto  created successfully';
    }
  
    return {message};
  }
  async function remove(id){
    const result = await db.query(
      `DELETE FROM Productos WHERE id=${id}`
    );
  consolelog(id)
    let message = 'Error in deleting programming language';
  
    if (result.affectedRows) {
      message = 'Programming language deleted successfully';
    }
  
    return {message};
  }

module.exports = {
  getMultiple,
  create,getSingle,remove
}