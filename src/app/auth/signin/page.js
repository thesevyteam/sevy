'use client';
import { loginUser } from '@/api/auth';
import { useAuth } from '@/context/AuthContext';
import LoadingIndicator from '@/shared/components/LoadingIndicator';
import Button from '@/shared/components/button';
import Logo from '@/shared/components/logo';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { RiEye2Line, RiEyeCloseLine, RiLoginCircleFill } from 'react-icons/ri';

function SignIn() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();
  const { setUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Loging in user...');
    setLoading(true);
    const userData = {
      email: email,
      password: password,
    };

    try {
      const response = await loginUser(userData);
      setUser(response.data);
      router.push('/');
      console.log('User logged in:', response);
      setError('');
    } catch (error) {
      setError(error.response.data.error);
      console.error('Error registering user:', error);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      <div className="hidden lg:flex w-1/2 bg-primary items-center justify-center overflow-hidden relative">
        <Image
          src={
            'https://images.unsplash.com/photo-1501520158826-76df880863a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=100'
          }
          alt="Man Mowing Lawn"
          fill
          style={{ objectFit: 'cover', objectPosition: 'center' }}
          className="flip-horizontal"
        />
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center">
        {loading ? (
          <LoadingIndicator />
        ) : (
          <>
            <div className="text-center mb-3 md:mb-5 w-4/5 md:w-3/5">
              <Logo href={'#'} className={'justify-center mb-3'} />
              <h1 className="text-xl font-semibold mb-1">Welcome to Sevy</h1>
              <p className="text-gray-500">Sign in to access your account</p>
            </div>
            <div className="text-center mb-3 md:mb-5 w-4/5 md:w-3/5">
              <div className="h-10 bg-primary w-full flex gap-2 rounded-md shadow-md items-center justify-between p-2 cursor-pointer active:scale-95 transition-all duration-200 hover:shadow-lg hover:bg-primary-600">
                <p className="text-white">Sign In with Google</p>
                <div className="bg-white rounded-md flex items-center justify-center p-1">
                  <FcGoogle style={{ width: 18, height: 18 }} />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between w-4/5 md:w-3/5">
              <div className="flex-1 border-b h-0.5 border-gray-400"></div>
              <p className="px-3 text-gray-500 text-sm">Or</p>
              <div className="flex-1 border-b h-0.5 border-gray-400"></div>
            </div>
            <form className="w-4/5 md:w-3/5" onSubmit={handleSubmit}>
              <div className="mb-4">
                {error && <p className="error my-3 text-center">{error}</p>}
                <label className="label" htmlFor="email">
                  Email
                </label>
                <input
                  className="input"
                  id="email"
                  type="email"
                  placeholder="abc@ijk.xyz"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="mb-5">
                <label className="label" htmlFor="password">
                  Password
                </label>
                <div className="flex w-full relative">
                  <div
                    className="absolute right-3 top-3 text-primary cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <RiEye2Line /> : <RiEyeCloseLine />}
                  </div>
                  <input
                    className="input mb-3"
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <a
                  className="inline-block align-baseline font-bold text-sm text-primary hover:text-primary-900"
                  href="#"
                >
                  Forgot Password?
                </a>
                <>
                  <Button
                    text={'Sign In'}
                    icon={
                      <RiLoginCircleFill style={{ width: 16, height: 16 }} />
                    }
                  />
                </>
              </div>
            </form>
            <div className="mt-6 text-center">
              <p className="text-gray-500">
                Don&apos;t have an account?{' '}
                <Link
                  className="font-bold text-primary hover:text-primary-900"
                  href="/auth/signup"
                >
                  Sign Up
                </Link>
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default SignIn;
