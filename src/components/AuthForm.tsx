import React, { useState } from 'react';
import { Mail, Lock, ArrowRight } from 'lucide-react';
import type { AuthView } from '../types';

interface AuthFormProps {
  onSubmit: (email: string, password: string) => void;
  view: AuthView;
  setView: (view: AuthView) => void;
}

export default function AuthForm({ onSubmit, view, setView }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <div className="w-full max-w-md space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900">
          {view === 'login' ? 'Welcome back' : 'Create your account'}
        </h2>
        <p className="mt-2 text-gray-600">
          {view === 'login'
            ? 'Sign in to access your portfolio'
            : 'Start your investment journey today'}
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Mail className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <div className="mt-1 relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </div>
          </div>
        </div>

        <div>
          <button
            type="submit"
            className="group relative w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              <ArrowRight className="h-5 w-5" />
            </span>
            {view === 'login' ? 'Sign in' : 'Create account'}
          </button>
        </div>

        <div className="text-center">
          <button
            type="button"
            onClick={() => setView(view === 'login' ? 'register' : 'login')}
            className="text-sm text-indigo-600 hover:text-indigo-500"
          >
            {view === 'login'
              ? "Don't have an account? Sign up"
              : 'Already have an account? Sign in'}
          </button>
        </div>
      </form>
    </div>
  );
}