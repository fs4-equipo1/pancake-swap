import { action } from "easy-peasy";

export const ThemeModel = {
  theme: "dark",
  toggleTheme: action((state) => {
    if (state.theme === "dark") state.theme = "light";
    else if (state.theme === "light") state.theme = "dark";
  }),
};
