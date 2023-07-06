import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import { formularioModule } from './modules/formulario'

export default new Vuex.Store({
  state: {},
  modules: {
      formulario: formularioModule,
  }
})
