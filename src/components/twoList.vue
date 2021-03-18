<template>
  <div class="twolist">
    <h1>福布斯排行榜</h1>
    <ul>
      <li v-for="product,index in saleProducts" :key="index">
        {{product.name}}-----------------${{product.price}}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed:{
    // products(){
    //   return this.$store.state.products;
    // },
    saleProducts(){
      return this.$store.getters.saleProducts;
    }
  }
}
</script>

<style scoped>
.twolist {
  width: 100%;
  text-align: center;
  padding: 70px 0;
  background-color: rgb(33, 151, 155);
  color: #fff;
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

</style>