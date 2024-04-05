// import necessary react testing library helpers here
// import the Counter component here
import { fireEvent, render, screen } from '@testing-library/react';
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component here
    render(<Counter />);
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  const state = screen.getByTestId("count"); // returns object 
  expect(state.textContent).toBe("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  const state = screen.getByTestId("count");
  fireEvent.click(screen.getByText("+"));
  expect(state.textContent).toBe("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  const state = screen.getByTestId("count");
  fireEvent.click(screen.getByText("-"));
  expect(state.textContent).toBe("-1");

});
