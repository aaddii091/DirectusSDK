<template lang="">
  <div class="nav-display">
    <Navbar />
    <div class="nav-inner">
      <div>
        <h1>{{ fieldName.params.id }}</h1>
        <div v-for="data in res" :key="data.id">
          <router-link :to="{ name: 'details', params: { id: fieldName.params.id, uid: data.id } }">
            <div class="card-display">
              <div class="cards">
                <h2>{{ data.name }}</h2>
                <h3>{{ Date(data.date_created) }}</h3>
                <h3>{{ data.status }}</h3>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import { Directus } from '@directus/sdk'
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue'

const apiURL = import.meta.env.VITE_APP_URL
const directus = new Directus(apiURL)
export default {
  components: { Navbar },
  setup() {
    const fieldName = useRoute()
    const res = ref()
    const articles = directus.items(fieldName.params.id)

    onMounted(async () => {
      setTimeout(async () => {
        const field = await articles
          .readByQuery({
            limit: -1
          })
          .then((e) => {
            return e.data
          }) //doesn't currently support query parameter
        console.log(field)
        res.value = field
      }, 1000)
    })
    return { fieldName, res }
  }
}
</script>
<style scoped>
.nav-display {
  width: 70vw;
}
router-link {
  text-decoration: none;
}
h1 {
  font-weight: 200;
  font-size: 7rem;
  text-transform: capitalize;
}
.cards {
  border: 1px solid black;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
  cursor: pointer;
  height: 30vh;
}
.card-display {
  display: flex;
}
</style>
