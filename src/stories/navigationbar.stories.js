import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import Navigationbar from "../components/navigationbar/Navigationbar";
import theme from "../themes/theme";

export default {
  title: "Navbar",
  component: Navigationbar,
};

const Template = (args) => (
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Navigationbar {...args} />
    </BrowserRouter>
  </ThemeProvider>
);

export const NavigationBarComponent = Template.bind({});

NavigationBarComponent.args = {
  isOpen: false,
};
