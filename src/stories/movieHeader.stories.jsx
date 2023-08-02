import React, { useState } from "react";
import MovieHeader from "../components/headerMovie";
import SampleMovie from "./sampleData";
import { MemoryRouter } from "react-router";
import { action } from "@storybook/addon-actions";

const [page, setPage] =  useState();

export default {

  title: "Movie Details Page/MovieHeader",
  component: MovieHeader,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <MovieHeader movie={SampleMovie} currentPage={1} setCurrentPage={setPage}/>;

Basic.storyName = "Default";
