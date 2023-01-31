import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'
import { ZiggyVue } from 'ziggy';
import { Ziggy } from './ziggy';

createInertiaApp({
  resolve: (name) => require(`./Pages/${name}`),
  setup({ el, App, props, plugin }) {
    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(ZiggyVue,Ziggy)
      .mount(el)
  },
})

require('./bootstrap');