import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  CalendarCheck, 
  FileSearch, 
  LogOut,
  Zap,
  GraduationCap
} from 'lucide-react';

const TeacherSidebar = ({ onLogout }) => {
  const menuItems = [
    { icon: Home, label: "Dashboard", path: "/teacher/dashboard" },
    { icon: CalendarCheck, label: "Attendance", path: "/teacher/attendance" },
    { icon: FileSearch, label: "My Reports", path: "/teacher/reports" },
  ];

  return (
    <div className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-slate-100 flex flex-col p-6 z-[100] transition-all duration-300">
      {/* Brand Section */}
      <div className="flex items-center gap-3 px-3 mb-12">
        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center shadow-lg shadow-blue-100">
          <GraduationCap className="text-white" size={24} />
        </div>
        <div>
          <h2 className="text-xl font-black text-slate-900 tracking-tighter leading-none">PRO <span className="text-blue-600">PUPIL</span></h2>
          <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">Teacher Portal</p>
        </div>
      </div>

      {/* Navigation Groups */}
      <div className="flex-1 space-y-8">
        <div>
          <p className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] mb-6 px-3">Main Menu</p>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `
                  flex items-center gap-4 px-4 py-3.5 rounded-2xl transition-all duration-300 group
                  ${isActive 
                    ? 'bg-blue-600 text-white shadow-xl shadow-blue-100' 
                    : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'}
                `}
              >
                <item.icon size={20} />
                <span className="font-black text-xs uppercase tracking-widest">{item.label}</span>
                {item.path === '/teacher/dashboard' && (
                  <div className="ml-auto">
                    <Zap size={10} fill="currentColor" className="opacity-50" />
                  </div>
                )}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>

      {/* Footer / Logout */}
      <div className="pt-6 border-t border-slate-50">
        <button 
          onClick={onLogout}
          className="flex items-center gap-4 px-4 py-4 w-full rounded-2xl text-rose-500 hover:bg-rose-50 transition-all group"
        >
          <div className="p-2.5 rounded-xl bg-rose-50 text-rose-500 group-hover:bg-rose-100 transition-colors">
            <LogOut size={20} />
          </div>
          <span className="font-black text-xs uppercase tracking-widest">Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default TeacherSidebar;
