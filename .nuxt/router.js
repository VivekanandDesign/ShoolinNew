import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0f6827b3 = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _4f0c4974 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _03b7e128 = () => interopDefault(import('../pages/services.vue' /* webpackChunkName: "pages/services" */))
const _e872540a = () => interopDefault(import('../pages/services-new.vue' /* webpackChunkName: "pages/services-new" */))
const _68d981fc = () => interopDefault(import('../pages/services-old.vue' /* webpackChunkName: "pages/services-old" */))
const _0b3736b2 = () => interopDefault(import('../pages/team.vue' /* webpackChunkName: "pages/team" */))
const _2f200278 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _44774e04 = () => interopDefault(import('../pages/consultation/_id.vue' /* webpackChunkName: "pages/consultation/_id" */))
const _421e3b0c = () => interopDefault(import('../pages/profile/_id.vue' /* webpackChunkName: "pages/profile/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _0f6827b3,
    name: "about"
  }, {
    path: "/contact",
    component: _4f0c4974,
    name: "contact"
  }, {
    path: "/services",
    component: _03b7e128,
    name: "services"
  }, {
    path: "/services-new",
    component: _e872540a,
    name: "services-new"
  }, {
    path: "/services-old",
    component: _68d981fc,
    name: "services-old"
  }, {
    path: "/team",
    component: _0b3736b2,
    name: "team"
  }, {
    path: "/",
    component: _2f200278,
    name: "index"
  }, {
    path: "/consultation/:id?",
    component: _44774e04,
    name: "consultation-id"
  }, {
    path: "/profile/:id?",
    component: _421e3b0c,
    name: "profile-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
