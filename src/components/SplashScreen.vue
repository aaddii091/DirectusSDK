<template lang="">
  <div>THIS IS A SPLASH SCREEN</div>
</template>
<script>
import { Directus } from '@directus/sdk'
import { ref } from 'vue'
export default {

const apiURL = import.meta.env.VITE_APP_URL
const directus = new Directus(apiURL)
// const dataAvail = ref(false)
const userData = async () => {
    const currentUserData = await directus.users.me.read()
  localStorage.setItem('currentUserData', currentUserData)
}
userData()
}
</script>
<style lang=""></style>
