import React from 'react';
import { Menu, Search, Bell, UserCircle, Settings, LogOut } from 'lucide-react';

const Header = ({ toggleSidebar, onLogout }) => {
  return (
    <header className="h-20 flex items-center justify-between px-8 fixed top-0 right-0 left-0 z-40 bg-white/20 backdrop-blur-md border-b border-white/40">
      <div className="flex items-center gap-6">
        <button 
          onClick={toggleSidebar}
          className="text-slate-600 hover:bg-white/60 p-2.5 rounded-xl transition-all duration-300 backdrop-blur-md border border-white/20 shadow-sm"
        >
          <Menu size={20} />
        </button>

        {/* Stunning Search Bar - Neomorphism feel */}
        <div className="hidden md:flex items-center bg-white/50 backdrop-blur-md border border-white/40 px-4 py-2.5 rounded-2xl w-80 shadow-inner group transition-all duration-300 focus-within:ring-2 focus-within:ring-blue-200">
          <Search size={18} className="text-slate-400 group-focus-within:text-blue-500" />
          <input 
            type="text" 
            placeholder="Search anything..." 
            className="bg-transparent border-none outline-none ml-2 text-sm text-slate-700 placeholder-slate-400 w-full"
          />
        </div>
      </div>
      
      <div className="flex items-center gap-4">
        {/* Actions */}
        <div className="flex items-center gap-2">
          <button className="p-2.5 text-slate-500 hover:bg-white/60 rounded-xl transition-colors relative group">
            <Bell size={20} />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
          </button>
          <button className="p-2.5 text-slate-500 hover:bg-white/60 rounded-xl transition-colors">
            <Settings size={20} />
          </button>
          <button 
            onClick={onLogout}
            className="p-2.5 text-rose-500 hover:bg-rose-50 rounded-xl transition-colors flex items-center gap-2 font-black text-xs"
          >
            <LogOut size={20} />
            <span className="hidden lg:block uppercase tracking-widest">Logout</span>
          </button>
        </div>

        {/* Premium Profile Glassmorphic Plate */}
        <div className="flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white/40 px-4 py-2 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer group">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-800 leading-none mb-0.5">Admin Account</p>
            <p className="text-[10px] text-blue-600 font-bold uppercase tracking-wider">Super Admin</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-200 group-hover:scale-105 transition-transform duration-300">
            <UserCircle size={28} strokeWidth={1.5} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
