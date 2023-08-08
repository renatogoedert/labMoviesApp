import React from "react";
import ReviewForm from "../components/reviewForm";
import SampleData from "./sampleData";
import { MemoryRouter } from "react-router";

export default {
  title: "Reviews/Review Form",
  component: ReviewForm,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <ReviewForm movie={SampleData}/>;

Basic.storyName = "Default";