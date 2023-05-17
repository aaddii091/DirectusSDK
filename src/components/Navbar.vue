<template>
  <nav>
    <div class="side-bar">
      <h1>
        <span>Welcome {{ fname }}</span>
      </h1>
      <RouterLink to="/" class="route">Home</RouterLink>
      <RouterLink to="/table" class="route">Collection</RouterLink>
      <!-- <RouterLink to="/field" class="route">Field</RouterLink> -->
      <RouterLink to="/field/projects" class="route">Projects</RouterLink>
      <RouterLink to="/field/issues" class="route">Issues</RouterLink>
      <RouterLink to="/field/sprints" class="route">Sprints</RouterLink>
      <RouterLink to="/field/tasks" class="route">Tasks</RouterLink>
      <RouterLink to="/field/teams" class="route">Teams</RouterLink>
      <RouterLink to="/field/divisions" class="route">Divisions</RouterLink>
      <RouterLink to="/login" v-if="state" class="route">Login</RouterLink>
    </div>
  </nav>
</template>
<script>
// import userData from '../composables/userData'
import { ref } from 'vue'
export default {
  setup() {
    const localData = JSON.parse(localStorage.getItem('currentUserData'))
    console.log(localData)
    const fname = ref('')
    if (localData) {
      fname.value = localData.first_name
    }

    const state = ref(true)
    const name = ref()
    if (localStorage.getItem('auth_token')) {
      name.value = localStorage.getItem('')
      state.value = false
    }
    return { state, fname, localData }
  }
}
</script>

<style scoped>
* {
  z-index: 22;
}
div {
  display: flex;
  flex-direction: column;
}
span {
  color: white;
  margin: 5px 10px;
}
.side-bar {
  display: flex;
  flex-direction: column;
  max-width: 12vw;
  min-width: fit-content;
  position: relative;
  background-color: rgb(128, 128, 128);
  min-height: 100vh;
  height: 100%;
  padding-top: 20px;
}
.route {
  margin: 20px 10px;

  color: white;
  list-style: none;
  text-decoration: none;
  font-size: 1.5rem;
}
.route:hover {
  color: black;
}
</style>
