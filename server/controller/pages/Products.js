const db = require("../../connection/Connection");

const getAllProducts = (req, res) => {
  const q = "SELECT * FROM products";
  db.query(q, (err, result) => {
    if (err) {
      return res.status(500);
    }
    return res.json(result);
  });
};
const getProductsById = (req, res) => {
  const id = req.params;
  const q = "SELECT * FROM products WHERE id =?";
  db.query(id, q, (err, result) => {
    if (err) {
      return res.status(500);
    }
    return res.json(result);
  });
};

const addProducts = (req, res) => {
  const { name, price, description } = req.body;
  const image = req.file ? req.file.filename : null;
  const q =
    "INSERT INTO product (name, price, description,image) VALUES (?,?,?,?)";
  const values = [name, price, description, image];
  db.query(q, values, (err, data) => {
    if (err) {
      return res.status(500);
    }
    return res.json(data);
  });
};

const updateProducts = (req, res) => {
  const id = req.params;
  const { name, price, description } = req.body;
  const image = req.file ? req.file.filename : req.body.image;
  const q =
    "UPDATE products SET name =? ,price =? ,description =?, image=? WHERE id =?";
  const values = [name, price, description, image, id];
  db.query(q, values, (err, result) => {
    if (err) {
      return res.status(500);
    }
    return res.json(result);
  });
};
const deleteProducts = (req, res) => {
  const id = req.params;
  const q = "DELETE FROM products WHERE id";
  db.query(q, id, (err, result) => {
    if (err) {
      return res.status(500);
    }
    return res.json(200);
  });
};

const getProductsByCategory = (req, res) => {
  const category = req.params.categories;
  console.log(category);
  const q = "SELECT * FROM products WHERE category_id = ?";
  db.query(q, category, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
};

module.exports = {
  getAllProducts,
  getProductsById,
  addProducts,
  updateProducts,
  deleteProducts,
  getProductsByCategory,
};
