import React, { useState } from 'react';
import Header from './Header';
import NavigationTabs from './NavigationTabs';
import SalesCard from '../cards/SalesCard';
import ProfileForm from '../cards/ProfileForm';
import NotificationsPanel from '../cards/NotificationsPanel';
import TasksList from '../cards/TasksList';

type TabType = 'overview' | 'profile' | 'notifications' | 'tasks';

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <NavigationTabs activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="mx-auto px-4 py-4 sm:py-6 md:py-8 main">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-4">
            <SalesCard />
            <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 md:col-span-2 lg:col-span-3">
              <h2 className="text-lg sm:text-xl font-medium text-gray-800 mb-3 sm:mb-4">Welcome to your Dashboard</h2>
              <p className="text-sm sm:text-base text-gray-600">
                This is a pixel-perfect React + Redux dashboard prototype featuring:
              </p>
              <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm text-gray-600">
                <li>• Authentication with local persistence</li>
                <li>• Profile management with image upload</li>
                <li>• Interactive notifications system</li>
                <li>• Drag-and-drop task management</li>
                <li>• Responsive design matching provided mockups</li>
              </ul>
            </div>
          </div>
        )}
        
        {activeTab === 'profile' && (
          <div className="flex justify-center px-4 sm:px-6">
            <ProfileForm />
          </div>
        )}
        
        {activeTab === 'notifications' && (
          <div className="flex justify-center px-4 sm:px-6">
            <NotificationsPanel />
          </div>
        )}
        
        {activeTab === 'tasks' && (
          <div className="flex justify-center px-4 sm:px-6">
            <TasksList />
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;