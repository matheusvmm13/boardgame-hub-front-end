import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navigationbar from "../components/navigationbar/Navigationbar";

export default {
  title: "Navbar",
  component: Navigationbar,
};

const Template = (args) => (
  <BrowserRouter>
    <Navigationbar {...args} />
  </BrowserRouter>
);

export const NavigationBarComponent = Template.bind({});

NavigationBarComponent.args = {
  isOpen: false,
};
