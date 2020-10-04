import {
  find,
  propEq,
} from 'ramda'

import {
  ORDERS
} from "@/constants";

import {
  chageStatus
} from "@/helpers";

const state = {
  orders: ORDERS,
  order: {}
}

const getters = {
  orders (state) {
    return state.orders
  },
  order (state) {
    return state.order
  }
}

const actions = {
  getOrder({ state, commit }, id) {
    let result = find(propEq('orderNumber', id))(state.orders);
    commit ('setOrderItems', result);

    return result;
  },

  updateOrder({ state, commit }, data) {
    let filterItem = chageStatus(data.status, data.id, state.orders);

    let result = find(propEq('orderNumber', data.id))(filterItem);
    commit ('setOrderItemsStatus', result);
  },
}

/* eslint no-param-reassign: ["error", { "props": false }] */
const mutations = {
  setOrderItems (state, items) {
    state.order = items
  },

  setOrderItemsStatus (state, items) {
    state.order = items
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
