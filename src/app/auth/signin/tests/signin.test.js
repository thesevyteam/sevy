import { loginUser } from '@/api/auth';
import SignIn from '@/path/to/your/SignIn';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({
  useRouter: jest.fn(),
}));

jest.mock('@/api/auth', () => ({
  loginUser: jest.fn(),
}));

describe('SignIn component', () => {
  beforeEach(() => {
    useRouter.mockReturnValue({
      push: jest.fn(),
    });
    loginUser.mockResolvedValue({ data: { email: 'test@test.com' } });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the SignIn component', () => {
    render(<SignIn />);
    const emailInput = screen.getByPlaceholderText('abc@ijk.xyz');
    const passwordInput = screen.getByPlaceholderText('********');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test('handles form submission and successful login', async () => {
    render(<SignIn />);
    fireEvent.change(screen.getByPlaceholderText('abc@ijk.xyz'), {
      target: { value: 'test@test.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('********'), {
      target: { value: 'password' },
    });

    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => expect(loginUser).toHaveBeenCalledTimes(1));

    expect(useRouter().push).toHaveBeenCalledWith('/');
  });

  test('handles form submission and failed login', async () => {
    loginUser.mockRejectedValueOnce({
      response: { data: { error: 'Invalid credentials' } },
    });

    render(<SignIn />);
    fireEvent.change(screen.getByPlaceholderText('abc@ijk.xyz'), {
      target: { value: 'test@test.com' },
    });
    fireEvent.change(screen.getByPlaceholderText('********'), {
      target: { value: 'wrong-password' },
    });

    fireEvent.click(screen.getByText('Sign In'));

    await waitFor(() => expect(loginUser).toHaveBeenCalledTimes(1));

    expect(useRouter().push).toHaveBeenCalledTimes(0);
    expect(screen.getByText('Invalid credentials')).toBeInTheDocument();
  });

  test('toggles password visibility', () => {
    render(<SignIn />);
    const passwordInput = screen.getByPlaceholderText('********');
    const toggleButton = screen.getByRole('button');

    expect(passwordInput.type).toBe('password');

    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe('text');

    fireEvent.click(toggleButton);
    expect(passwordInput.type).toBe('password');
  });
});
