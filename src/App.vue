<template>
  <div id="app">
    <div id="nav" class="navbar">
      <router-link
        v-for="link in links"
        :key="link.Title"
        :to="link.To"
        class="nav"
      >{{ link.Title }}</router-link>
    </div>
    <div href="javascript:void(0);" class="icon nav" v-on:click="toggleCollapse">
      <b>Ahmed ElSabbagh</b>
      <i class="fa fa-bars"></i>
    </div>
    <div id="collapseBar">
      <router-link v-for="link in links" :key="link.Title" :to="link.To" class="collapseNav">
        <div v-on:click="toggleCollapse">{{ link.Title }}</div>
      </router-link>
    </div>
    <router-view class="small-container" />
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      links: [
        {
          Title: "About",
          To: "/about"
        },
        {
          Title: "Skills",
          To: "/skills"
        },
        {
          Title: "Education",
          To: "/education"
        },
        {
          Title: "Blog",
          To: "/blog"
        },
        {
          Title: "Achievements",
          To: "/achievements"
        },
        {
          Title: "Contacts",
          To: "/contacts"
        }
      ]
    };
  },
  methods: {
    toggleCollapse: function() {
      const x = document.querySelector("#collapseBar");

      x.classList.toggle("responsive");
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  padding: 1em;
  border-color: green;
  border-style: solid;
  border-width: thin;
  color: green;
  text-decoration: none;
}
.nav {
  width: 10em;
}

.icon {
  display: none;
}
#nav a:hover {
  color: white;
  background-color: rgb(4, 158, 4);
  overflow: hidden;
}

#nav a.router-link-exact-active {
  color: white;
  background-color: green;
}
#collapseBar {
  display: none;
}

#collapseBar a.router-link-exact-active {
  color: white;
  background-color: green;
}
@media screen and (max-width: 600px) {
  .icon {
    display: block;
    border-style: solid;
    border-color: green;
    color: white;
    background-color: green;
    padding: 0.5em 0em 0.5em 0.5em;
    text-decoration: none;
    width: 100%;
    margin: 0%;
  }

  .icon {
    text-align: left;
  }
  .icon i {
    float: right;
    font-size: 1.5em;
    margin-right: 1em;
  }

  #nav {
    display: none;
  }
  #collapseBar.responsive {
    display: block;
  }
  .collapseNav {
    display: block;
    border: 0.1em solid green;
    color: green;
    padding: 0.5em;
    font-weight: bold;
    text-decoration: none !important;
  }
}
</style>
