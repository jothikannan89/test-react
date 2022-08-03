
/**
 * Base Controller
 */
 import axios from "axios";
 import Qs from "qs";

 const BASE_URL = "https://fakestoreapi.com";

 class BaseController {
   /**
    * Method to get data using api call
    */
   query = (
     resource,
     url,
     params = {},
     resolveData = true,
   ) => {
     return new Promise((resolve, reject) => {
       axios({
         url:BASE_URL+ url,
         method: "get",
         params: params,
         paramsSerializer: function(params) {
           return Qs.stringify(params, { arrayFormat: "repeat" });
         }
       })
         .then(response => {
           resolve(resolveData ? response.data : response);
         })
         .catch(error => {
             reject(error);
         });
     });
   };

   /**
    * Method to create resource
    */
   create = (url, formData = {}, params = {}) => {
     return new Promise((resolve, reject) => {
       axios({
         url: url,
         method: "post",
         data: formData,
         params: params,
       })
         .then(response => {
           resolve(response.data);
         })
         .catch(error => {
           if (error && error.response) {
             if (
               error.response.data &&
               error.response.data.statusCode &&
               error.response.data.statusCode === 401
             ) {
               this.checkCurrentSession();
             }
             reject(error);
           }
         });
     });
   };

   /**
    * Method to update resource
    */
   update = (url, formData = {}, params = {}) => {
     return new Promise((resolve, reject) => {
       axios({
         url: url,
         method: "put",
         data: formData,
         params: params,
       })
         .then(response => {
           resolve(response.data);
         })
         .catch(error => {
           if (error && error.response) {
             if (
               error.response.data &&
               error.response.data.statusCode &&
               error.response.data.statusCode === 401
             ) {
               this.checkCurrentSession();
             }
             reject(error);
           }
         });
     });
   };

   /**
    * Method to delete single/multiple resource
    */
   delete = (urls = [], params = {}) => {
     return new Promise((resolve, reject) => {
       axios
         .all(
           urls.map(url => {
             return axios.delete(url, { params });
           }),
         )
         .then(response => {
           let responses = response.map(resp => {
             return resp.data;
           });
           resolve(responses);
         })
         .catch(error => {
             reject(error);
         });
     });
   };

 }

 export default new BaseController();
