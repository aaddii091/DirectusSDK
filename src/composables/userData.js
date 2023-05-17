import { Directus } from '@directus/sdk'
import { ref } from 'vue'

const apiURL = import.meta.env.VITE_APP_URL
const directus = new Directus(apiURL)
const dataAvail = ref(false)
const userData = async () => {
  const currentUserData = await directus.users.me.read()
  dataAvail.value = true
  //   console.log(currentUserData)
  return { currentUserData, dataAvail }
}

export default userData
