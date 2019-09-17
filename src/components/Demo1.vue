<template>
  <div>
    <ul>
      <li v-for="(item,index) in collection" :key="index">{{ item.note }}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  data: () => ({
    collection: []
  }),
  c8db: {
    collection: "test"
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
ul {
  padding-left: 20px;
}
li {
  margin: 5px 10px;
}
</style>