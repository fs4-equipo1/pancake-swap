import { action } from "easy-peasy";

export const UserModel = {
  user: {
    uid: "",
    username: "",
    isLoggedIn: false,
  },
  setUser: action((state, payload) => {
    state.user = { ...payload };
  }),
};
