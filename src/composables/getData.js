import { Directus } from '@directus/sdk'
import { ref } from 'vue'
const apiURL = import.meta.env.VITE_APP_URL
const directus = new Directus(apiURL)
const state = ref(false)
const docData = async () => {
  // We don't need to authenticate if the public role has access to some_public_collection.
  const publicData = await directus.items('teams').readByQuery({ sort: 'name' })
  state.value = true
  return { publicData, state }
}
const getData = () => {
  return { docData, publicData }
}
export default getData
