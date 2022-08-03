
 import BaseController from "../controllers/BaseController";
 const PRODUCT_URL = "/products/{:id}";
 class ProductController {
   /**
    * Method to get products based on given params
    */
   getProducts = (params = {}) => {
     return new Promise((resolve, reject) => {
       let url = PRODUCT_URL.replace("/{:id}", "");
       BaseController.query("products", url, params, true)
         .then(response => {
          resolve(response)
         })
         .catch(error => {
           reject(error);
         });
     });
   };

   /**
    * Method to get single product details
    */
   getSingleProduct = (id) => {
     return new Promise((resolve, reject) => {
         let url = PRODUCT_URL.replace("{:id}", id);
         BaseController.query("products", url)
           .then(response => {
            console.log(response)
             resolve(response);

           })
           .catch(error => {
             reject(error);
           });
     });
   };
 }

 export default new ProductController();
