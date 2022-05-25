<template>
  <h1 class="ml-5 mt-5">Comments</h1>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6" md="3">
          <v-text-field v-model="commentInfo" label="Comment"></v-text-field>
        </v-col>
        <v-col>
          <v-btn color="green" @click="createComment()">Make a comment</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
  <v-card v-for="comment in comments" :key="comment.id" class="ma-5" color="#FFAA97">
    <v-card-text>
      <img :src="comment.photo" alt="profile photo" class="float-left"/>
      <div class="float-start ml-10">
        <div class="font-weight-bold">{{comment.name}}</div>
        <div>{{comment.comment}}</div>
      </div>
      <div class="pt-10 float-end">{{comment.date}}</div>
    </v-card-text>
  </v-card>

</template>

<script>
import {CommentsService} from "../services/comments.service";

export default {
  name: "comments",
  data(){
    return{
      comments: [],
      date: new Date(),
      commentInfo: '',
      values: {},
      commentPhoto: '',
      commentName: ''

    }
  },
  created(){
    this.begin()
  },
  methods: {
    async begin(){
      this.commentsService = new CommentsService();
      await this.commentsService.getAll()
          .then(res=>{this.comments = res.data;})
          .catch(err => console.log(err))
    },
    async createComment(){
      if (this.commentInfo === ''){
        return;
      }
      if (this.commentPhoto === '')
        this.commentPhoto = 'https://pbs.twimg.com/profile_images/1185798852/anonimo2_400x400.jpg'
      if (this.commentName === '')
        this.commentName = 'anonymous'
      this.values = {"comment": this.commentInfo, "date": this.date.toLocaleDateString(), "photo": this.commentPhoto, "name": this.commentName};
      await this.commentsService.create(this.values)
          .then(res=>{this.comments.push(res.data);})
          .catch(err=>console.log(err))
      this.commentInfo = '';
      this.commentPhoto = '';
      this.commentName = '';
    }

  }
}
</script>

<style scoped>
img{
  max-width: 100px;
}
</style>