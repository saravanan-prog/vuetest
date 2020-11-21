<template>
  <div class="hello">
   {{todo | json}}
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  //lifecycle
  
  //communcation props
  props: {
    todo: Object
  },
  //data loading comp
  data(){
    return {
      childname:{name:'sss'}
    }
  },
  //method
  method:{

  },
  componets:{

  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
