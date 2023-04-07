import { render, screen, waitFor } from '@testing-library/react';
import Dogdetails from '../pages/Dogdetails';

test('Initially renders loading message', () => {
  render(<Dogdetails />);
  const loadMsg = screen.getByText(/Loading/i);
  expect(loadMsg).toBeInTheDocument();
});

test('Renders images on expected fetch-response', async () => {
  const fakeImglist = {
      message: [
          "https://images.dog.ceo/breeds/sharpei/noel.jpg",
          "https://images.dog.ceo/breeds/cockapoo/Guri7.jpg",
          "https://images.dog.ceo/breeds/hound-ibizan/n02091244_1635.jpg"
      ],
      status: "success"
  }
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      status: 200,
      json: () => Promise.resolve(fakeImglist)
    })
  );
  render(<Dogdetails />);
  const images = await waitFor(() => screen.getAllByRole('img'))
  expect(images.length).toBe(3);
});

test('Renders error message on unexpected fetch-response', async () => {
  const fakeImglist = {
    message: [
        "https://images.dog.ceo/breeds/sharpei/noel.jpg",
        "https://images.dog.ceo/breeds/cockapoo/Guri7.jpg",
        "https://images.dog.ceo/breeds/hound-ibizan/n02091244_1635.jpg"
    ],
    status: "success"
}
  jest.spyOn(global, "fetch").mockImplementation(() =>
    Promise.resolve({
      status: 400,
      json: () => Promise.resolve(fakeImglist)
    })
  );
  render(<Dogdetails />);
  const errMsg = await waitFor(() => screen.getByText(/wrong/i))
  expect(errMsg).toBeInTheDocument();
});
