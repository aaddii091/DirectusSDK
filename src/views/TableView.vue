<template lang="">
  <div class="nav-display">
    <Navbar />
    <div class="nav-inner">
      <button @click="showing">Show Collections</button>
      <div class="collection-box">
        <div class="loader" v-if="show">
          <div class="lds-ripple">
            <div></div>
            <div></div>
          </div>
        </div>
        <div class="collection" v-else v-for="data in res" :key="data.id">
          <router-link :to="{ name: 'field', params: { id: data.collection } }" class="ok">
            <div class="cards" v-if="!data.meta.hidden">
              <h1>{{ data.collection }}</h1>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from '../components/Navbar.vue'
import { onMounted, ref } from 'vue'
import getCollection from '../composables/getCollection'
export default {
  components: { Navbar },
  setup() {
    const show = ref(true)
    const res = ref()
    const { collectionData } = getCollection()
    onMounted(async () => {
      setTimeout(async () => {
        const result = await collectionData().then((e) => {
          return e.data
        })
        res.value = result
        show.value = false
        console.log(res.value, 'fhghfhf')
      }, 1000)
    })
    const showing = () => {
      console.log()
    }
    // setTimeout(() => {
    // }, 2000)
    return { res, show, showing }
  }
}
</script>
<style scoped>
button {
  margin-top: 20px;
  padding: 15px 45px;
  border-radius: 5px;
  font-size: 1rem;
  height: fit-content;
  cursor: pointer;
  transition: all 0.25s;
}
button:hover {
  box-shadow: 2px 2px 2px 1px black;
}
.collection-box {
  overflow-y: scroll;
  height: 85vh;
  width: 85vw;
  border: 1px solid black;
  margin-top: 2vw;
  border-radius: 10px;
}
.collection {
  margin: 5px 10px;
}
.cards {
  margin: 5px;
  border: 1px solid black;
  border-radius: 5px;
  padding: 5px 10px;
}
.cards h1 {
  font-size: 1.5rem;

  font-weight: 400;
  font-style: normal;
  list-style: none;
  color: rgba(0, 0, 0, 0.897);
}
.ok {
  text-decoration: none;
}

.cards:hover {
  background-color: rgba(128, 128, 128, 0.74);

  cursor: pointer;
}
</style>
