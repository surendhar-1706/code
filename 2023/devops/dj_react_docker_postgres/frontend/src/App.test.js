import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Welcome Text', () => {
  render(<App />);
  const Title = screen.getByText(/Welcome, team Decentral/i);
  expect(Title).toBeInTheDocument();
});
