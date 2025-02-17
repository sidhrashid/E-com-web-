const express = require("express");
const Category = require("../../controller/pages/ProductsCategory");
const upload = require("../../middleware/fileHandler");

const router = express.Router();

router.get("/category", Category.getCategories);
router.get("/getcategorybyid/:id", Category.getCategoryById);
router.delete("/deletecategory/:id", Category.deleteCategory);
router.post("/addcategory", upload.single("image"), Category.addCategory);
router.put("/updatecategory", upload.single("image"), Category.addCategory);

module.exports = router;
