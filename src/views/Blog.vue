<template>
  <div id="Blog">
    <h3>Personal Blog</h3>

    <h6 class="posts">Pinned Posts</h6>
    <div v-for="post in pinnedBlogPosts" :key="post.id" class="posts">
      <div class="right">
        <b>{{ post.dateStamp }}</b>
        <br />
        <b>{{ post.timeStamp }}</b>
      </div>
      <h5>{{ post.subject }}</h5>
      <br />
      <p>{{ post.text }}</p>
      <hr />
    </div>
    <hr />
    <div v-for="post in RegularPosts" :key="post.id" class="posts">
      <div class="right">
        <b>{{ post.dateStamp }}</b>
        <br />
        <b>{{ post.timeStamp }}</b>
      </div>

      <h5 class="left">{{ post.subject }}</h5>
      <br />
      <p>{{ post.text }}</p>
      <hr />
    </div>
    <button class="loadMore accent-button" v-on:click="
        getPosts()
      ">Load More</button>
  </div>
</template>

<script>
import store from "../store/index";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  components: {},
  data: function() {
    return {
      page: 0
    };
  },

  mounted() {
    //console.log(this);
    this.$store.dispatch("fetchRegularPosts", { self: this });
    this.$store.dispatch("fetchPinnedPosts");
  },
  methods: {
    getPosts() {
      this.$store.dispatch("fetchRegularPosts", { self: this });
    }
  },
  computed: {
    RegularPosts() {
      return this.$store.state.regularPosts;
    },
    pinnedBlogPosts() {
      return this.$store.state.pinnedBlogPosts;
    }
  }
};
</script>

<style>
#Blog {
  border: green;
  border-style: solid;
  margin-bottom: 1em;
}
.right {
  float: right;
}
.posts {
  text-align: left;
}
hr {
  border: 2px solid green;
}
h6 {
  color: green;
}
.loadMore {
  margin-top: 1em;
  margin-bottom: 1em;
  color: green;
  background-color: transparent;
  border-color: green;
}

.loadMore:hover {
  color: white;
  background-color: green;
  border-color: green;
}

.loadMore:after {
  color: white;
  background-color: green;
  border-color: green;
}
</style>
