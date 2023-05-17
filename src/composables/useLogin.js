import { Directus } from '@directus/sdk'
import router from '@/router'
// SPLASH IMPORTS

//
const apiURL = import.meta.env.VITE_APP_URL
import { ref } from 'vue'
const directus = new Directus(apiURL)
// const articles = directus.items('articles')

const error = ref('')

const login = async (emailVal, passwordVal) => {
  // AUTHENTICATION

  let authenticated = false
  // Let's login in case we don't have token or it is invalid / expired
  const email = emailVal
  const password = passwordVal
  const error = ref('')

  if (!authenticated) {
    const headers = {
      'Content-Type': 'application/json',
      'X-Requested-With': 'XMLHttpRequest'
    }
    await directus.auth
      .login({ email, password }, { mode: 'no-cors', headers })
      .then(() => {
        authenticated = true
        console.log('logged in !!!')
        splash()
      })
      .catch((err) => {
        error.value = err.message
      })
  }
  // const token = await directus.auth.token
  // localStorage.setItem('UID', token)
  // console.log(token)

  // const privateData = await directus.items('tasks').readByQuery({
  //   sort: 'name' // sort by name in ascending order
  // })
  // console.log('all', privateData.data)
  // const single = await directus.collections.readOne(/* collection name */ 'tasks')
  // console.log(single, 'ok')
}
const splash = async () => {
  const currentUser = await directus.users.me.read()
  const currentUserData = JSON.stringify(currentUser)
  localStorage.setItem('currentUserData', currentUserData)
  router.push({ name: 'home' })
}
const useLogin = () => {
  return { login, error }
}

export default useLogin
