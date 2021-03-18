<template>
  <div class="onelist">
    <h1>福布斯排行榜</h1>
    <ul>
      <li v-for="product,index in saleProducts" :key="index">
        {{product.name}}.............................${{product.price}}
      </li>
    </ul>
    <button @click="reducePrice">三秒后修改</button>
  </div>
</template>

<script>
// import {mapActions} from 'vuex';

export default {
  computed:{
    // products(){
    //   return this.$store.state.products;
    // },
    saleProducts(){
      return this.$store.getters.saleProducts;
    },
   
  },
  methods:{
    // reducePrice:function(){
    //   return this.$store.state.products.forEach(product=>{
    //     product.price -=1;
    //   })
    // }
    reducePrice(){
      this.$store.dispatch('reducePrice');
    }
    // ...mapActions({
    //   reducePrice:'reducePrice'
    // })
  }
}
</script>

<style scoped>
.onelist {
  width: 100%;
  padding: 200px;
  text-align: center;
  padding: 70px 0;
  background-color: rgb(185, 122, 39);
  color: #fff;
  margin-bottom: 50px;
}

h1 {
  padding-bottom: 50px;
}

ul {
  margin: 0 300px;
  line-height: 40px;
  background-color: #fff;
  color: #000;
}

button {
  padding: 10px;
  float: left;
  margin-left: 300px;
}
</style>