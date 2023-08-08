import React from "react";
import AddToPlaylistIcon from "../components/cardIcons/addToPlaylist";
import SampleData from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Card Icons/Add to Playlist",
  component: AddToPlaylistIcon,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <AddToPlaylistIcon movie={SampleData} />;

Basic.storyName = "Default";
