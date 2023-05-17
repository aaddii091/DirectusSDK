<template>
  <div>
    <Navbar />
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import Navbar from '../components/Navbar.vue'
import { Directus } from '@directus/sdk'

import { onMounted, ref } from 'vue'
const apiURL = import.meta.env.VITE_APP_URL
const directus = new Directus(apiURL)
export default {
  components: { Navbar },
  setup() {
    const route = useRoute()
    console.log(route.params)
    const fieldName = useRoute()
    const res = ref()
    const articles = directus.items(fieldName.params.id)

    onMounted(async () => {
      setTimeout(async () => {
        const field = await articles
          .readByQuery({
            filter: {
              id: route.params.uid
            }
          })
          .then((e) => {
            return e.data
          }) //doesn't currently support query parameter
        console.log(field, 'data')
        res.value = field
      }, 1000)
    })
    return { fieldName, res }
  }
}
</script>

<style></style>
