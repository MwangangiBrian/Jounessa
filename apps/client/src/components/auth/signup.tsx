import { Link } from 'react-router-dom';
import { Header } from '../header';

export function Signup() {
  return (
    <>
    <Header />
      <div>Signup</div>
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center">Signup</h2>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-2 font-medium">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-2 font-medium">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-medium text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Sign Up
            </button>
          </form>
          <div>
            <p>
              Already have an account? <Link to="/auth/login">Sign in</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
