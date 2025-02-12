const express = require("express");
const Category = require("../../controller/pages/ProductsCategory");

const router = express.Router();

router.get("/category", Category.getCategories);

module.exports = router;
