import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useProductsStore = defineStore('products',  {
   state: () => {
        const products= {
            0:{
                id: 1,
                name: "Pumpkin",
                category: "Fruit",
                price: 200,
                availability: true,
                image: 'sample1 (1).jpg'
            },
            1:{
                id:2,
                name:"Cherry",
                 category: "Vegetable",
                price: 400,
                availability: true,
                image: 'sample1 (3).jpg'
            },
            
                2:{
                id:3,
                name:"cabbage",
                category: "Fruit",
                price: 1200,
                availability: true,
                image: 'sample1 (4).jpg'
            },
            3:{
                id:4,
                name:"strabery",
                category: "Fruit",
                price: 200,
                availability: true,
                image: 'sample1 (5).jpg'
            },
            4:{
                id:5,
                name:"Avacado",
                category: "Fruit",
                price: 200,
                availability: true,
                image: 'sample1 (6).jpg'
            },
            5:{
                id:7,
                name:"tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: 'image11.jpg'
            },
            6:{
                id:8,
                name:"tomato",
                category: "Fruit",
                price: 200,
                availability: true,
                image: 'image10.jpg'
            },
            7:{
                id:9,
                name:"Carrot",
                category: "Fruit",
                price: 200,
                availability: true,
                image: 'sample1 (7).jpg'
            },
            8:{
                id:10,
                name:"Mango",
                category: "Fruit",
                price: 200,
                availability: true,
                image: 'sample1 (8).jpg'
            },
            9:{
                id:11,
                name:"Apples",
                category: "Fruit",
                price: 200,
                availability: true,
                image: 'sample1 (9).jpg'
            },
          
           
        }
        const selectedProduct = ref(null)
       
        return{
            products,selectedProduct
        }
   },
   actions:{
       updateSelectedProduct (payload) {
        this.selectedProduct =payload
       },
   },
   persist: true,
})