import { render, screen } from '@testing-library/react';
import App from './App';

test('contains News App title', () => {

  // Arrange
  render(<App />);

  // Act
  const AppElement = screen.getByText(/NEWS APP/i);

  // Assert
  expect(AppElement).toBeInTheDocument();
});