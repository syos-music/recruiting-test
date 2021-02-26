import { render, screen } from "@testing-library/react";
import { MockedProvider } from "@apollo/client/testing";

import App from "./App";

const mocks = [];

test("renders `Hello World!`", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <App />
    </MockedProvider>
  );

  const textElement = screen.getByText(/Hello World!/);
  expect(textElement).toBeInTheDocument();
});
