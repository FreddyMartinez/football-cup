import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import AppHome from './AppHome';

test('renders home', () => {
  render(
    <Router>
      <AppHome />
    </Router>,
  )
  const welcomeText = screen.getByText(/Welcome to Your Adidas Team/i);
  expect(welcomeText).toBeInTheDocument();
});

test('Home has two buttons', () => {
  render(
    <Router>
      <AppHome />
    </Router>,
  );
  const buttonst = screen.getAllByRole('button')
  expect(buttonst.length).toBe(2);

  const linkCreate = screen.getByText(/Create Team/i);
  expect(linkCreate).toBeInTheDocument();

  const linkMyTeams = screen.getByText(/My Teams/i);
  expect(linkMyTeams).toBeInTheDocument();
});