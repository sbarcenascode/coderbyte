import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from '../index';

describe('HomeScreen Counter', () => {
  it('renders initial counter value of 0', () => {
    const { getByTestId } = render(<HomeScreen />);
    const counterValue = getByTestId('counter-value');
    expect(counterValue.props.children).toBe(0);
  });

  it('increments counter when + button is pressed', () => {
    const { getByTestId } = render(<HomeScreen />);
    const incrementButton = getByTestId('increment-button');
    const counterValue = getByTestId('counter-value');

    fireEvent.press(incrementButton);
    expect(counterValue.props.children).toBe(1);
  });

  it('decrements counter when - button is pressed', () => {
    const { getByTestId } = render(<HomeScreen />);
    const decrementButton = getByTestId('decrement-button');
    const counterValue = getByTestId('counter-value');

    fireEvent.press(decrementButton);
    expect(counterValue.props.children).toBe(-1);
  });

  it('resets counter to 0 when reset button is pressed', () => {
    const { getByTestId } = render(<HomeScreen />);
    const incrementButton = getByTestId('increment-button');
    const resetButton = getByTestId('reset-button');
    const counterValue = getByTestId('counter-value');

    // First increment a few times
    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);
    expect(counterValue.props.children).toBe(2);

    // Then reset
    fireEvent.press(resetButton);
    expect(counterValue.props.children).toBe(0);
  });

  it('handles multiple operations correctly', () => {
    const { getByTestId } = render(<HomeScreen />);
    const incrementButton = getByTestId('increment-button');
    const decrementButton = getByTestId('decrement-button');
    const counterValue = getByTestId('counter-value');

    fireEvent.press(incrementButton);
    fireEvent.press(incrementButton);
    fireEvent.press(decrementButton);
    expect(counterValue.props.children).toBe(1);
  });
}); 