import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppHeader from './AppHeader';

test('renders Header', () => {
  render(
    <Router>
      <AppHeader />
    </Router>,
  )
  const linkHome = screen.getByText(/Home/i);
  expect(linkHome).toBeInTheDocument();
});