<template>
  <div id="app">
    <oneList />
    <twoList />
  </div>
</template>

<script>
import oneList from './components/oneList';
import twoList from './components/twoList';

export default {
  name:'app',
  data(){
    return {
      
    }
  },
  components:{
    oneList,
    twoList
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>