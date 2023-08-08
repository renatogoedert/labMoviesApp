import React from "react";
import AddToFavouritesActorIcon from "../components/cardIcons/addToFavouritesActor";
import SampleActor from "./sampleActorData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

export default {
  title: "Card Icons/Add Actor Favourites",
  component: AddToFavouritesActorIcon,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <AddToFavouritesActorIcon actor={SampleActor} />;

Basic.storyName = "Default";