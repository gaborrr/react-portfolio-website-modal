import { render, screen } from '@testing-library/react';
import App from './App';
import profileData from "./profiledata.json";


describe("profileData", () => {

  test('json not null', () => {
    expect(profileData).not.toBeNull();
  });

  test('json length not 0', () => {
    expect(profileData.length).not.toBe(0);
  });

  test('json item .id has to be number', () => {
    expect(profileData[0].id).toBeGreaterThanOrEqual(0);
  });

  test('json item .title not empty', () => {
    expect(profileData[0].title).not.toBe('');
  });

  test('json item .img not empty', () => {
    expect(profileData[0].img).toBeTruthy();
  });

  test('json item .imgalt not empty', () => {
    expect(profileData[0].imgalt).toBeTruthy();
  });

  test('json item .technologies not empty', () => {
    expect(profileData[0].technologies).toBeTruthy();
  });

  test('json item .role not empty', () => {
    expect(profileData[0].role).toBeTruthy();
  });

});

test('renders google.com', () => {
  render(<App />);
  const linkElement = screen.getByText(/google.com 1/i);
  expect(linkElement).toBeInTheDocument();
});

