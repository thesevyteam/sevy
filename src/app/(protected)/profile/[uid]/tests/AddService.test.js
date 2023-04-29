import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddService from './AddService';

describe('AddService component', () => {
  test('renders AddService without crashing', () => {
    const closeModal = jest.fn();
    render(<AddService closeModal={closeModal} />);
    expect(screen.getByText('Add Service')).toBeInTheDocument();
  });

  test('submitting negative values for duration and price', async () => {
    const closeModal = jest.fn();
    const handleSubmit = jest.spyOn(AddService.prototype, 'handleSubmit');
    render(<AddService closeModal={closeModal} />);

    const durationInput = screen.getByLabelText('Estimated Duration (hrs)');
    const priceInput = screen.getByLabelText('Price');

    // Enter negative values for duration and price
    fireEvent.change(durationInput, { target: { value: -1 } });
    fireEvent.change(priceInput, { target: { value: -1 } });

    // Click on the "Add Service" button
    const submitButton = screen.getByText('Add Service');
    userEvent.click(submitButton);

    // Expect the handleSubmit function to be called
    expect(handleSubmit).toHaveBeenCalled();

    // Add assertions to check if the alert is called with the expected messages
    const alertSpy = jest.spyOn(window, 'alert');
    expect(alertSpy).toHaveBeenCalledWith('Duration cannot be negative');
    expect(alertSpy).toHaveBeenCalledWith('Price cannot be negative');

    // Clean up the spies
    handleSubmit.mockRestore();
    alertSpy.mockRestore();
  });
});
