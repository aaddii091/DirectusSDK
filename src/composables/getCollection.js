import { Directus } from '@directus/sdk'

const apiURL = import.meta.env.VITE_APP_URL
const directus = new Directus(apiURL, {
  headers: {
    Authorization: 'Bearer <your_access_token>'
  }
})

const collectionData = async () => {
  let typ
  try {
    typ = await directus.collections.readAll()
    //   console.log(data)
  } catch (e) {
    console.log(e)
  }
  return typ
}

const getCollection = () => {
  return { collectionData }
}
export default getCollection
