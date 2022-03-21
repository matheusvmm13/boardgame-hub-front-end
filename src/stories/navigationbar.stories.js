import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navigationbar from "../components/navigationbar/Navigationbar";
import store from "../redux/store";
import theme from "../themes/theme";

export default {
  title: "Navbar",
  component: Navigationbar,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Provider store={store}>
        <Navigationbar {...args} />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);

export const NavigationBarComponent = Template.bind({});

NavigationBarComponent.args = {
  isOpen: false,
};
