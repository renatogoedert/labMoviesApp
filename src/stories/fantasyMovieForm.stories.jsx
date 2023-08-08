import React from "react";
import FantasyMovieForm from "../components/fantasyMovieForm";
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
  title: "Fantasy Movie/Fantasy movie form",
  component: FantasyMovieForm,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
    (Story) => (
        <QueryClientProvider client={queryClient}>{Story()}</QueryClientProvider>
      ),
  ],
};

export const Basic = () => <FantasyMovieForm genre={["Action"]} handleChange={{}} handleDateChange={{}}/>;

Basic.storyName = "Default";