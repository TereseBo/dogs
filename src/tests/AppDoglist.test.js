import { render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import Doglist from '../pages/Doglist';

test('Initially renders loading message', () => {
  render(<App><Doglist /></App>);
  const loadMsg = screen.getByText(/Loading/i);
  expect(loadMsg).toBeInTheDocument();
});

test('Renders doglist on expected fetch-response', async () => {
  const fakeDoglist = {
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
      appenzeller: [],
      australian: [
        "shepherd"
      ]
    },
    status: "success"
  }
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(fakeDoglist)
    })
  );
  render(<App><Doglist /></App>);
  const firstItem = await waitFor(() => screen.getByText(/affenpinscher/i))
  const lastItem = await waitFor(() => screen.getByText(/australian/i))
  expect(firstItem).toBeInTheDocument();
  expect(lastItem).toBeInTheDocument();
});

test('Renders error message on wrong servercode', async () => {
  const fakeDoglist =
  {
    message: {
      affenpinscher: [],
      african: [],
      airedale: [],
      akita: [],
      appenzeller: [],
      australian: [
        "shepherd"
      ]
    },
    status: "success"
  }
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      status: 400,
      json: () => Promise.resolve(fakeDoglist)
    })
  );
  render(<App><Doglist /></App>);
  const errMsg = await waitFor(() => screen.getByText(/wrong/i))
  expect(errMsg).toBeInTheDocument();
});
