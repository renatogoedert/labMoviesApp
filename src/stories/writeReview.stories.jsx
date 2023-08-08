import React from "react";
import WriteReviewIcon from "../components/cardIcons/writeReview";
import SampleData from "./sampleData";
import { MemoryRouter } from "react-router";

export default {
  title: "Card Icons/Write Review",
  component: WriteReviewIcon,
  decorators: [
    (Story) => <MemoryRouter initialEntries={["/"]}>{Story()}</MemoryRouter>,
  ],
};

export const Basic = () => <WriteReviewIcon movie={SampleData} />;

Basic.storyName = "Default";
