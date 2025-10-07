import { render, screen } from '@testing-library/react';
import App from './App';

test('renders customer sign up form', () => {
  render(<App />);
  const formElement = screen.getByText(/customer sign up form/i);
  expect(formElement).toBeInTheDocument();
});
