import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  UserCheck, 
  Calendar, 
  Database, 
  Settings, 
  Laptop, 
  FileText, 
  BarChart,
  ChevronDown,
  Plus,
  Table,
  Upload,
  BookOpen,
  MapPin,
  Clock,
  Activity,
  UserPlus
} from 'lucide-react';

const SidebarItem = ({ icon: Icon, label, hasSubmenu = false, to, submodules = [], isOpen, toggleOpen, collapsed }) => {
  return (
    <div className="mb-2">
      <div 
        onClick={() => hasSubmenu && toggleOpen()}
        className={`flex items-center justify-between px-4 py-3 cursor-pointer transition-all duration-300 rounded-xl group
          ${isOpen ? 'bg-blue-50/50' : 'hover:bg-white/40'}`}
      >
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg transition-all duration-300 ${isOpen ? 'bg-blue-500 text-white shadow-lg' : 'bg-white text-slate-500 group-hover:bg-blue-100 group-hover:text-blue-600'}`}>
            <Icon size={20} />
          </div>
          {!collapsed && <span className={`text-sm font-semibold transition-all duration-300 ${isOpen ? 'text-slate-900' : 'text-slate-600'}`}>{label}</span>}
        </div>
        {!collapsed && hasSubmenu && (
          <ChevronDown size={16} className={`text-slate-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-slate-800' : ''}`} />
        )}
      </div>

      {!collapsed && hasSubmenu && isOpen && (
        <div className="ml-10 mt-1 space-y-1 overflow-hidden transition-all duration-500 ease-in-out">
          {submodules.map((sub, idx) => (
            <NavLink
              key={idx}
              to={sub.to}
              className={({ isActive }) => 
                `flex items-center gap-2 px-3 py-2 text-xs font-medium rounded-lg transition-all duration-200 
                ${isActive ? 'text-blue-600 bg-blue-50' : 'text-slate-500 hover:text-blue-500 hover:bg-slate-50'}`
              }
            >
              <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-blue-400"></div>
              {sub.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen: isExpanded, toggleSidebar }) => {
  const [openMenus, setOpenMenus] = useState({
    students: false,
    faculty: false,
    timetable: false,
    master: false,
    device: false,
    analytics: false
  });

  const toggleMenu = (menu) => {
    setOpenMenus(prev => ({
      ...prev,
      [menu]: !prev[menu]
    }));
  };

  return (
    <aside 
      className={`fixed left-4 top-4 bottom-4 z-50 transition-all duration-500 ease-out flex flex-col
        ${isExpanded ? 'w-64' : 'w-20'} 
        bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-3xl overflow-hidden`}
    >
      <div className="h-20 flex items-center justify-center relative mb-4">
        <div className={`flex items-center font-black tracking-tighter transition-all duration-300 ${isExpanded ? 'text-2xl' : 'text-sm'}`}>
          <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">PRO</span>
          <span className="text-slate-800">-PUPIL</span>
        </div>
        <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-blue-500 animate-pulse"></div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 scrollbar-hide flex flex-col gap-1">
        <NavLink 
          to="/dashboard"
          className={({ isActive }) => 
            `flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group
            ${isActive ? 'bg-blue-500 text-white shadow-xl shadow-blue-200' : 'text-slate-600 hover:bg-white/40'}`
          }
        >
          <LayoutDashboard size={20} />
          {isExpanded && <span className="text-sm font-bold">Dashboard</span>}
        </NavLink>

        <SidebarItem 
          icon={Users} 
          label="Students" 
          hasSubmenu={true} 
          isOpen={openMenus.students}
          toggleOpen={() => toggleMenu('students')}
          collapsed={!isExpanded}
          submodules={[
            { label: 'Add', to: '/students/add' },
            { label: 'Details', to: '/students/details' },
            { label: 'Bulk Import', to: '/students/bulk-import' },
            { label: 'Course Import', to: '/students/course-import' }
          ]}
        />

        <SidebarItem 
          icon={UserCheck} 
          label="Faculty" 
          hasSubmenu={true} 
          isOpen={openMenus.faculty}
          toggleOpen={() => toggleMenu('faculty')}
          collapsed={!isExpanded}
          submodules={[
            { label: 'Add', to: '/faculty/add' },
            { label: 'Details', to: '/faculty/details' },
            { label: 'Assignment', to: '/faculty/assignment' },
            { label: 'Course Import', to: '/faculty/course-import' },
            { label: 'Bulk Import', to: '/faculty/bulk-import' }
          ]}
        />

        <SidebarItem 
          icon={Calendar} 
          label="Timetable" 
          hasSubmenu={true} 
          isOpen={openMenus.timetable}
          toggleOpen={() => toggleMenu('timetable')}
          collapsed={!isExpanded}
          submodules={[
            { label: 'Management', to: '/timetable/management' },
            { label: 'Details', to: '/timetable/details' },
            { label: 'Timeslot', to: '/timetable/timeslot' },
            { label: 'Periods', to: '/timetable/periods' },
            { label: 'Overall', to: '/timetable/overall' }
          ]}
        />

        <SidebarItem 
          icon={Database} 
          label="Master" 
          hasSubmenu={true} 
          isOpen={openMenus.master}
          toggleOpen={() => toggleMenu('master')}
          collapsed={!isExpanded}
          submodules={[
            { label: 'Department Management', to: '/master/department' },
            { label: 'Subject Management', to: '/master/subject' },
            { label: 'Section Management', to: '/master/section' },
            { label: 'Semester Management', to: '/master/semester' },
            { label: 'Faculty Type Management', to: '/master/faculty-type' },
            { label: 'State Management', to: '/master/state' },
            { label: 'City Management', to: '/master/city' },
            { label: 'Region Management', to: '/master/region' },
            { label: 'Academic Year Mgt.', to: '/master/academic-year' },
            { label: 'Block No Management', to: '/master/block' },
            { label: 'Course Management', to: '/master/course' },
            { label: 'Blood Group Mgt.', to: '/master/blood-group' }
          ]}
        />

        <NavLink to="/settings" className="flex items-center gap-3 px-4 py-3 text-slate-600 rounded-xl hover:bg-white/40 transition-all duration-300 font-semibold">
          <Settings size={20} />
          {isExpanded && <span className="text-sm font-semibold">Settings</span>}
        </NavLink>

        <SidebarItem 
          icon={Laptop} 
          label="Device" 
          hasSubmenu={true} 
          isOpen={openMenus.device}
          toggleOpen={() => toggleMenu('device')}
          collapsed={!isExpanded}
          submodules={[
            { label: 'Add', to: '/device/add' },
            { label: 'Details', to: '/device/details' }
          ]}
        />

        <NavLink to="/access-logs/file-logs" className="flex items-center gap-3 px-4 py-3 text-slate-600 rounded-xl hover:bg-white/40 transition-all duration-300 font-semibold">
          <FileText size={20} />
          {isExpanded && <span className="text-sm font-semibold">Access Logs</span>}
        </NavLink>

        <SidebarItem 
          icon={BarChart} 
          label="Analytics" 
          hasSubmenu={true} 
          isOpen={openMenus.analytics}
          toggleOpen={() => toggleMenu('analytics')}
          collapsed={!isExpanded}
          submodules={[
            { label: 'Student Report', to: '/analytics/student' },
            { label: 'Faculty Report', to: '/analytics/faculty' }
          ]}
        />
      </div>

      {isExpanded && (
        <div className="p-4 mt-auto">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 text-white shadow-xl">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Trial Version</p>
            <p className="text-xs font-medium">Pro-Pupil V2.0</p>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
