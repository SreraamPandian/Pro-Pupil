import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import TeacherSidebar from './TeacherSidebar';

const TeacherLayout = ({ onLogout }) => {
  // Check auth
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const role = localStorage.getItem('userRole');

  if (!isLoggedIn || role !== 'teacher') {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-['Outfit']">
      {/* Premium Sidebar */}
      <TeacherSidebar onLogout={onLogout} />

      {/* Main Framework Content */}
      <main className="flex-1 ml-72 min-h-screen relative">
        {/* Background Decorative Elements */}
        <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-blue-50/50 rounded-full blur-[120px] -z-10 animate-pulse" />
        <div className="fixed bottom-0 left-72 w-[300px] h-[300px] bg-indigo-50/50 rounded-full blur-[100px] -z-10" />

        <div className="p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default TeacherLayout;
