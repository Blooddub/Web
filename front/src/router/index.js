import { createRouter, createWebHistory  } from 'vue-router'


const routes = [
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import( '../views/LoginView.vue')
  },{
    path: '/signup',
    name: 'signup',
    meta: {layout: 'empty'},
    component: () => import( '../views/SignUpView.vue')
  },{
    path: '/main',
    name: 'main',
    meta: {layout: 'main'},
    component: () => import( '../views/MainView.vue')
  },{
    path: '/profile',
    name: 'profile',
    meta: {layout: 'main'},
    component: () => import( '../views/ProfileView.vue')
  },{
    path: '/universites',
    name: 'universites',
    meta: {layout: 'main'},
    component: () => import( '../views/UniversityView.vue')
  },{
    path: '/adduniversity',
    name: 'addnewuniversity',
    meta: {layout: 'main'},
    component: () => import( '../components/university/AddUniversityComponent.vue')
  },{
    path: '/groups',
    name: 'groups',
    meta: {layout: 'main'},
    component: () => import( '../views/GroupsView.vue')
  },{
    path: '/addgroup',
    name: 'addgroup',
    meta: {layout: 'main'},
    component: () => import( '../components/group/AddGroupComponent.vue')
  },{
    path: '/students',
    name: 'students',
    meta: {layout: 'main'},
    component: () => import( '../views/StudentsView.vue')
  },{
    path: '/addstudent',
    name: 'addstudent',
    meta: {layout: 'main'},
    component: () => import( '../components/student/AddStudentComponent.vue')
  },{
    path: '/:pathMatch(.*)*',
    name: '404',
    meta: {layout: 'empty'},
    component: () => import( '../views/NotFoundView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
