import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    products:[
      {name:"Lis",price:112},
      {name:"AASs",price:110},
      {name:"FWW",price:54},
      {name:"SDS-S",price:12},
    ]
  }, 
  
  getters: {
    saleProducts: state => {
      let saleProducts = state.products.map(
        products => {
          return {
            name: "**" + products.name + "**",
            price: products.price 
          }
        })
      return saleProducts
    }
  },

  mutations: {
    reducePrice: state => {
      state.products.forEach(product=>{
        product.price -=1;
      })
    }
  },

  actions: {
    reducePrice: context => {
      setTimeout(function () {
        context.commit('reducePrice')
      },3000)
    }
  }
})