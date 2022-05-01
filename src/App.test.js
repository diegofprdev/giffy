import { render, screen } from '@testing-library/react';
import App from './App';

test('renders without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/Giffy/i);
  expect(linkElement).toBeInTheDocument();
});
