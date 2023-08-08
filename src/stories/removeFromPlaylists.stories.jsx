import React from "react";
import RemoveFromPlaylistsIcon from "../components/cardIcons/removeFromPlaylists";
import SampleData from "./sampleData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Card Icons/Remove from Playlist",
  component: RemoveFromPlaylistsIcon,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <RemoveFromPlaylistsIcon movie={SampleData} name={"Name"}/>;

Basic.storyName = "Default";