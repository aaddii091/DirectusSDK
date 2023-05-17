import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import TableView from '../views/TableView.vue'
import FieldView from '../views/FieldView.vue'
import FieldDetails from '../views/FieldDetails.vue'
import { Directus } from '@directus/sdk'
// import { ref } from 'vue'
const apiURL = import.meta.env.VITE_APP_URL
const directus = new Directus(apiURL)
const ok = await directus.auth.token

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/table',
      name: 'table',
      component: TableView
    },
    {
      path: '/field/:id',
      name: 'field',
      component: FieldView
    },
    {
      path: '/details/:id/:uid',
      name: 'details',
      component: FieldDetails,
      props: true
    }
  ]
})
// router.beforeEach((to, from) => {
//   console.log(to)
// })

// router.beforeEach(async (to, from, next) => {
//   if (to.matched.some((rec) => rec.meta.requireAuth)) {
//     ok = auth.currentUser
//     if (ok) {
//       next()
//     } else {
//       next({ name: 'login' })
//     }
//   } else {
//     next()
//   }
// })
export default router
