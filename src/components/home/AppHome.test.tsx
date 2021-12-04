import { render, screen } from '@testing-library/react';
import AppHome from './AppHome';

test('renders learn react link', () => {
  render(<AppHome />);
  const linkElement = screen.getByText(/Welcome to Your Adidas Team/i);
  expect(linkElement).toBeInTheDocument();
});