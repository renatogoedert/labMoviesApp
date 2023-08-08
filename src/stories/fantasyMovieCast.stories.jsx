import React from "react";
import FantasyMovieCast from "../components/fantasyMovieCast";
import SampleCreditData from "./sampleCreditData";
import SampleActorCreditData from "./sampleActorCreditData";
import { MemoryRouter } from "react-router";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 360000,
        refetchInterval: 360000,
        refetchOnWindowFocus: false,
      },
    },
  });

export default {
  title: "Fantasy Movie/Fantasy movie cast",
  component: FantasyMovieCast,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => (
        <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
      ),
  ],
};

export const Basic = () => <FantasyMovieCast movieCredits={SampleCreditData} setMovieCredits={SampleActorCreditData}/>;

Basic.storyName = "Default";