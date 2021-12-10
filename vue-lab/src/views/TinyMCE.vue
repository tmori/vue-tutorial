<template>
  <div id="app">
    <section>
      <h1>Hello TinyMCE!</h1>
    </section>
    <section>
      <editor 
        v-model="content"
        :value = "content"
        :init="{
          height: 500,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | bold italic backcolor | \
            alignleft aligncenter alignright alignjustify | \
            bullist numlist outdent indent | removeformat | help',
          language: `ja`
        }"
      />
    </section>
    <section>
      <button @click="getContent">getContent</button>
    </section>    
  </div>
</template>
<script lang="ts" >
import Vue from "vue";
import Editor from '@tinymce/tinymce-vue';

// Table画面のビューモデル
export default Vue.extend({
  data() {
    return {
      content: "<p>Edit <strong>me</strong>!</p>"
    };
  },
  components: {
      'editor': Editor
  },
  methods: {
    getContent(): void {
      console.log(this.content)
    }
  }  
});
</script>
<style scoped>
.translator {
  text-align: left;
}

</style>