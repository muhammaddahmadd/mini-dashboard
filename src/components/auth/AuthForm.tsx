import React, { useState } from 'react';
import type { FormEvent, ChangeEvent, MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/slices/authSlice';
import type { AppDispatch } from '../../store/store';

interface FormData {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

const AuthForm: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  });
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const userData = {
      id: Date.now().toString(),
      email: formData.email,
      name: `${formData.firstName || 'John'} ${formData.lastName || 'Doe'}`,
    };
    dispatch(login(userData));// triggering of auth
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          {isLogin ? 'Login' : 'Sign Up'}
        </h2>
        
        <div className="space-y-4">
          {!isLogin && (
            <>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required={!isLogin}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                required={!isLogin}
              />
            </>
          )}
          
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
          
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            required
          />
          
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition-colors font-medium"
          >
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </div>
        
        <p className="text-center mt-4 text-gray-600">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-blue-500 hover:underline ml-1"
          >
            {isLogin ? 'Sign Up' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;