import { render, screen } from '@testing-library/react';
import App from './App';

test('renders google.com', () => {
  render(<App />);
  const linkElement = screen.getByText(/google.com/i);
  expect(linkElement).toBeInTheDocument();
});
