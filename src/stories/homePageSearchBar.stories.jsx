import React, { useState } from "react";
import HomePageSearchBar from "../components/homePageSearchBar";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {

  title: "Home Page/Homepage Search Bar",
  component: HomePageSearchBar,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <HomePageSearchBar/>;

Basic.storyName = "Default";