import { render, waitFor } from "@testing-library/react";
import App, { DOC_TITLE } from "./App";

describe('application render successfully', () => {
  it("the app should be render and have the correct title", async () => {
    render(<App />);
    await waitFor(() => expect(document.title).toEqual(DOC_TITLE));
  });
})
