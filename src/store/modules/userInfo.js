import { AUTH_USER } from "../actionTypes";
import { SET_USER_INFO } from "../mutationTypes";

import { authenticateUser } from "@/api/login";

export const state = {
  userInfo: {},
};

export const actions = {
  [AUTH_USER]({ commit }, { email, password }) {
    return authenticateUser({ email, password })
      .then(({ data }) => {
        commit(SET_USER_INFO, data.result);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

export const mutations = {
  [SET_USER_INFO](currentState, userInfo) {
    currentState.userInfo = userInfo;
  },
};

export default {
  state,
  actions,
  mutations,
};
