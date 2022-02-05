import {
  render,
  waitFor,
  screen,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import HomePage from "../index";
import sampleResponse from "./sample.json";
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users", (req, res, ctx) => {
    return res(ctx.json(sampleResponse));
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Home page", () => {
  test("should display loading text", async () => {
    render(<HomePage />);

    const loading = await screen.getByText("Loading Data");
    expect(loading).toBeInTheDocument();
  });

  test("should render item", async () => {
    render(<HomePage />);
    await waitForElementToBeRemoved(() => screen.getByText("Loading Data"));

    await waitFor(() => screen.queryByTestId("items-container"));

    let item = await screen.findByTestId("row-item-1");
    expect(item).toBeInTheDocument();
  });

  test("should render 3 items", async () => {
    render(<HomePage />);
    await waitForElementToBeRemoved(() => screen.getByText("Loading Data"));

    await waitFor(() => screen.queryByTestId("items-container"));

    let items = await screen.findAllByTestId(/row-item/i);
    expect(items.length).toEqual(3);
  });
});
