import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/client/app';

describe('App Component', () => {
  test('renders the main application', () => {
    render(<App />);
    const linkElement = screen.getByText(/your main content/i);
    expect(linkElement).toBeInTheDocument();
  });
});