import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  CalendarCheck, 
  BarChart3, 
  UserCircle 
} from 'lucide-react';

const TeacherBottomNav = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-slate-100 px-6 py-3 flex justify-between items-center z-50 shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
      <NavLink 
        to="/teacher/dashboard" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-blue-600' : 'text-slate-400'}`}
      >
        {({ isActive }) => (
          <>
            <Home size={22} className={isActive ? 'fill-blue-100' : ''} />
            <span className="text-[10px] font-black uppercase tracking-widest">Home</span>
          </>
        )}
      </NavLink>

      <NavLink 
        to="/teacher/attendance" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-blue-600' : 'text-slate-400'}`}
      >
        <CalendarCheck size={22} />
        <span className="text-[10px] font-black uppercase tracking-widest">Mark</span>
      </NavLink>

      <NavLink 
        to="/teacher/reports" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-blue-600' : 'text-slate-400'}`}
      >
        <BarChart3 size={22} />
        <span className="text-[10px] font-black uppercase tracking-widest">Reports</span>
      </NavLink>

      <NavLink 
        to="/profile" 
        className={({ isActive }) => `flex flex-col items-center gap-1 transition-all ${isActive ? 'text-blue-600' : 'text-slate-400'}`}
      >
        <UserCircle size={22} />
        <span className="text-[10px] font-black uppercase tracking-widest">Profile</span>
      </NavLink>
    </div>
  );
};

export default TeacherBottomNav;
