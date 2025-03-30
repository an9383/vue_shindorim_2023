<template>
  <section>
    <form @submit.prevent="createPost">
      <div>
        <label for="userId">UserID:</label>
        <input type="text" id="userId" v-model="postData.userId" />
      </div>
      <div>
        <label for="title">Title: </label>
        <input type="text" id="title" v-model="postData.title" />
      </div>
      <div>
        <label for="body">Body: </label>
        <textarea id="body" rows="6" cols="22" v-model="postData.body"></textarea>
      </div>
      <button>Create Post</button>
    </form>
  </section>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      postData:{
        userId: '',
        title: '',
        body: ''
      }
    };
  },
  methods: {
    createPost(){
      axios.post('https://jsonplaceholder.typicode.com/posts', this.postData).then( (response)=>console.log(response) )
    }
  },
};
</script>

<style scoped></style>