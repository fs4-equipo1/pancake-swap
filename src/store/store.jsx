import { action, createStore } from "easy-peasy";

export const store = createStore({
  todos: ["Create store", "Wrap application", "Use store"],
  user: {
    uid: "",
    username: "",
    isLoggedIn: false,
  },
  theme: "dark",

  toggleTheme: action((state) => {
    if (state.theme === "dark") state.theme = "light";
    else if (state.theme === "light") state.theme = "dark";
  }),

  addTodo: action((state, payload) => {
    state.todos.push(payload);
  }),

  setUser: action((state, payload) => {
    state.user = { ...payload };
  }),
});
