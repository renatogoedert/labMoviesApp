import React from "react";
import AddToFavouritesIcon from "../components/cardIcons/addToFavourites";
import SampleData from "./sampleData";
import { MemoryRouter } from "react-router";

export default {
  title: "Card Icons/Add Favourites",
  component: AddToFavouritesIcon,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <AddToFavouritesIcon movie={SampleData} />;

Basic.storyName = "Default";
