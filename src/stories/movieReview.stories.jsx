import React from "react";
import MovieReview from "../components/movieReview";
import SampleData from "./sampleData";
import { MemoryRouter } from "react-router";

export default {
  title: "Reviews/Moview review",
  component: MovieReview,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => (
  <MovieReview
    review={{
      author: "MovieGuys",
      content:
        "Hidden Strike is a functional East meets West, military action thriller. There's reasonable chemistry between Jackie Chan and John Cena",
    }}
  />
);

Basic.storyName = "Default";
