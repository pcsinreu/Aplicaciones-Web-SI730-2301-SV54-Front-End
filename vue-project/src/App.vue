<script setup>
    import HelloWorld from './components/HelloWorld.vue'
    import ListComponent from "@/components/list-component.vue";
</script>

<template>

    <div class="container">
      <nav class="nav-container">
              <router-link to="/">Go to Home</router-link>
              <router-link to="/ListUser">Users</router-link>
              <router-link to="/User">Ad User</router-link>
              <router-link to="/posts">Posts</router-link>
      </nav>
      <main>
          <router-view />
      </main>
      <footer>
          <div>Footer</div>
      </footer>
    </div>
</template>

<style scoped>
.container{
    display : flex;
    flex-direction:column;
}
.nav-container {
    display : flex;
    flex-direction:row;
    grid-gap:10px;
}
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
