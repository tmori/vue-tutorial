<template>
  <div class="home">
    <h3>テキストバインディング</h3>
    <span>{{msg}}</span>
    <ul id="item-list">
      <li v-for="item in items" :key="item.id">
        {{item.name}}
      </li>
    </ul>
    <button v-on:click="onClick">実行</button>    
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

// ここにインターフェースを追加
declare interface Item {
  id: number;
  name: string;
}

export default Vue.extend({
  data() {
    return {
      msg: "Hello Vue.js!",
      items: [
        {
          id: 1,
          name: "キーボード"
        },
        {
          id: 2,
          name: "マウス"
        }
      ] as Item[]
    };
  },
  // ここにメソッドを追加する
  methods: {
  onClick(): void {
    alert(this.msg);
  }
}

});
</script>

<style scoped>
.home {
  text-align: left;
}
</style>
