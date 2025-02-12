const express = require("express");
const products = require("../../controller/pages/Products");
const upload = require("../../middleware/fileHandler");

const router = express.Router();

router.get("/getallproducts", products.getAllProducts);
router.get("/getproductsbyid/:id", products.getProductsById);
router.post("/addproducts", upload.single("image"), products.addProducts);
router.put(
  "/updateproducts/:id",
  upload.single("image"),
  products.updateProducts
);
router.delete("/deleteproducts/:id", products.deleteProducts);
router.get(
  "/getproductsbycategory/:categories",
  products.getProductsByCategory
);

module.exports = router;
