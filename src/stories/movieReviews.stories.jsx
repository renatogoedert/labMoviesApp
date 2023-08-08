import React from "react";
import MovieReviews from "../components/movieReviews";
import SampleData from "./sampleData";
import { MemoryRouter } from "react-router";

export default {
  title: "Reviews/Moview reviews",
  component: MovieReviews,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <MovieReviews movie={SampleData}/>;

Basic.storyName = "Default";