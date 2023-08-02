import React from "react";
import ActorDetails from "../components/actorDetails";
import SampleActor from "./sampleActorData";
import SampleCredits from "./sampleActorCreditData";
import { MemoryRouter } from "react-router";
import MoviesContextProvider from "../contexts/moviesContext";

export default {
  title: "Actor Details Page/ActorDetails",
  component: ActorDetails,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => <MoviesContextProvider>{Story()}</MoviesContextProvider>,
  ],
};

export const Basic = () => <ActorDetails actor={SampleActor} actorCredits={SampleCredits}/>;

Basic.storyName = "Default";
