import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadUser } from './store/slices/authSlice';
import AuthForm from './components/auth/AuthForm';
import Dashboard from './components/dashboard/Dashboard';
import type { RootState, AppDispatch } from './store/store';

const App: React.FC = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <div className="min-h-screen w-full bg-gray-50">
      {isAuthenticated ? <Dashboard /> : <AuthForm />}
    </div>
  );
};

export default App;