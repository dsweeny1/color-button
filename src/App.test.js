import { getByTestId, render, screen, fireEvent } from '@testing-library/react';
import { logRoles } from '@testing-library/react';
import App from './App';
import {replaceCamelWithSpaces} from './App'

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText("Learn Testing Library");
//   // can also write this as written below, /learn testing library/i is a regular expression, the 'i' indicating case insensitive, meaning any variations of learn testing library/ Learn Testing Library/ lEARN tESTING lIBRARY, would be acceptable
//   //const linkElement = screen.getByText(/learn testing library/i);
//   expect(linkElement).toBeInTheDocument();
// });

test('button has correct initial color', () => {
  const { container } = render(<App />)
  logRoles(container)

  //find element with a role of button and text of 'Change to blue'
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  
  // expect the background color to be red
  expect(colorButton).toHaveStyle({ backgroundColor: 'red'})
});
test('button turns blue when clicked', () => {
  render(<App />)
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })

  expect(colorButton).toHaveStyle({ backgroundColor: 'red'})

  fireEvent.click(colorButton)

  expect(colorButton).toHaveStyle({ backgroundColor: 'blue'})

  expect(colorButton.textContent).toBe('Change to red')
})

test('initial conditions', () => {
  render(<App />)

  //check that button starts out enabled
  const colorButton = screen.getByRole('button', { name: 'Change to blue' })
  expect(colorButton).toBeEnabled()
  //check that the checkbox starts out unchecked
  const checkbox = screen.getByRole('checkbox')
  expect(checkbox).not.toBeChecked()
})

test('if button is disabled', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})

  fireEvent.click(checkbox)
  expect(colorButton).toBeDisabled()

  fireEvent.click(checkbox)
  expect(colorButton).toBeEnabled()
})

test('if background color changes from red to gray when disabled', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'})

  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
})

test('if background color changes from blue to gray when disabled', () => {
  render(<App />)
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' })
  const colorButton = screen.getByRole('button', { name: 'Change to blue'})

  expect(colorButton).toHaveStyle({backgroundColor: 'red'})
  fireEvent.click(colorButton)
  expect(colorButton).toHaveStyle({backgroundColor: 'blue'})
  fireEvent.click(checkbox)
  expect(colorButton).toHaveStyle({backgroundColor: 'gray'})
})

describe('spaces before camel-case letters', () => {
  test('work for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red')
  })
  test('works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue')
  })
  test('works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red')
  })
})

// React Testing Library helps with:
  // Rendering components into virtual DOM
  // Searching virtual DOM
  // Interacting with virtual DOM
// React Testing Library drawbacks:
  // Needs a test runner
    // Find tests, run them, make assertions

// Jest
  // comes with create-react-app
  // is recommended by Testing Library


// Unit Tests
  // tests one unit (class, components, etc) of code in isolation

// Integration Tests
  // testing interaction between micro-services, components, etc

// Functional Tests
  // testing a particular function
  // testing specific behavior of a function

// Acceptance / End-to-End tests
  // Cypress or Selenium
  // uses an actual browser and server

  // Functional Testing vs Unit Testing
    // Unit Testing
        // you want your tests to be as isolated as possible
        // you mock your dependencies and data, using test versions/ fake data
        // you'll test the state of that component/class bc you don't have external information/dependencies to compare to
        // Pros: very easy to pinpoint failures
        // Cons: 
          // 1) further away from how users actually interact with the software 
          // 2) more likely to break with refactoring, once you make a change to the function it may cause the test to fail
      // Functional Testing
        // going to include all relevant units for a particular behavior/user flow 
        // Pros: 
          // closer to how users interact with the software
          // means your testing is Robust --> if you refactor how code is written, as long as the behavior stays the same, your tests should still pass
        // Cons: 
          // more difficult to debug failing tests
          // tests not coupled closely with the code, so it's more difficult to tell which parts of the code are causing the tests to fail

// When to Unit Test
  // When functions are separate from components
  // when functions are used by several components
  // when functions have complex logic -- when it's too difficult to test with functional tests
    // ie. when there are too many edge cases 