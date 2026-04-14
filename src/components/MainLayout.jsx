import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

const MainLayout = ({ onLogout }) => {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex min-h-screen bg-[#f0f4f8] text-slate-800 font-sans antialiased overflow-hidden">
      {/* Background Decorative Blur blobs for Glassmorphism feel */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-60 z-0"></div>
      <div className="fixed bottom-[-10%] right-[-10%] w-[30%] h-[30%] bg-indigo-100 rounded-full blur-[100px] opacity-60 z-0"></div>

      {/* Glassmorphism Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />
      
      <div className={`flex-1 transition-all duration-300 ease-in-out relative z-10 ${isSidebarOpen ? 'ml-72' : 'ml-20'}`}>
        <Header toggleSidebar={() => setSidebarOpen(!isSidebarOpen)} onLogout={onLogout} />
        
        <main className="mt-20 p-8 min-h-[calc(100vh-80px)]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
