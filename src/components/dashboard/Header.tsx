import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/slices/authSlice';
import type { RootState, AppDispatch } from '../../store/store';

const Header: React.FC = () => {
    const { user } = useSelector((state: RootState) => state.auth);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <header className="bg-white shadow-sm border-b">
            <div className="container mx-auto px-4">
                <div className="flex flex-col sm:flex-row justify-between items-center py-3 sm:py-0 sm:h-16 space-y-2 sm:space-y-0">
                    <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Dashboard</h1>

                    <div className="flex items-center space-x-3 sm:space-x-4">
                        <span className="text-xs sm:text-sm text-gray-600">
                            Welcome, {user?.name}
                        </span>
                        <button
                            onClick={() => dispatch(logout())}
                            className="text-xs sm:text-sm text-red-600 hover:text-red-800 transition-colors duration-200"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;