import React from 'react';
import { 
  Users, 
  Calendar, 
  Clock, 
  Bell, 
  ChevronRight,
  TrendingUp,
  AlertCircle,
  MoreVertical,
  Activity,
  Zap,
  BookOpen,
  ClipboardCheck,
  BarChart3
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import DashboardCharts from '../../components/DashboardCharts';
import ProfessionalTable from '../../components/ProfessionalTable';

const TeacherStatCard = ({ icon: Icon, label, value, color, bg }) => (
  <div className="bg-white p-6 rounded-[2.5rem] border border-slate-100 shadow-[20px_20px_60px_rgba(0,0,0,0.02)] group hover:shadow-[20px_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500">
    <div className="flex justify-between items-start mb-6">
      <div className={`w-12 h-12 ${bg} ${color} rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500`}>
        <Icon size={24} />
      </div>
      <button className="text-slate-300 hover:text-slate-500 transition-colors">
        <MoreVertical size={18} />
      </button>
    </div>
    <div className="space-y-1">
      <p className="text-[10px] font-black uppercase tracking-[2px] text-slate-400">{label}</p>
      <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{value}</h3>
    </div>
  </div>
);

const TeacherDashboard = () => {
  const navigate = useNavigate();
  const teacherName = "Dr. Ahmed Al Mansouri";
  const today = new Date().toLocaleDateString('en-AE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

  const schedule = [
    { id: 1, subject: "Physics 101", class: "Year 2 - CS", time: "08:30 AM - 09:30 AM", status: "Completed", students: 45 },
    { id: 2, subject: "Quantum Computing", class: "Year 4 - CS", time: "10:00 AM - 11:30 AM", status: "Ongoing", active: true, students: 38 },
    { id: 3, subject: "Lab: Electronics", class: "Year 2 - CS", time: "01:30 PM - 03:00 PM", status: "Upcoming", students: 42 },
  ];

  return (
    <div className="max-w-[1600px] mx-auto space-y-8 animate-in fade-in duration-700">
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-widest">
            <Activity size={10} fill="currentColor" />
            Active Session Context
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
            Salem, <span className="text-blue-600 font-medium italic">{teacherName}</span>
          </h1>
          <p className="text-slate-400 font-bold text-sm tracking-widest uppercase mt-1">{today}</p>
        </div>

        <div className="flex gap-4">
           <button 
             onClick={() => navigate('/teacher/attendance')}
             className="flex items-center gap-3 bg-slate-900 text-white px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-[2px] hover:translate-y-[-2px] transition-all shadow-xl shadow-slate-200"
           >
             <ClipboardCheck size={18} />
             Mark Attendance
           </button>
        </div>
      </div>

      {/* Main Insights Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <TeacherStatCard icon={Users} label="Total Students" value="142" color="text-blue-600" bg="bg-blue-50" />
        <TeacherStatCard icon={BookOpen} label="Courses" value="06" color="text-indigo-600" bg="bg-indigo-50" />
        <TeacherStatCard icon={TrendingUp} label="Avg Attendance" value="94.2%" color="text-emerald-600" bg="bg-emerald-50" />
        <TeacherStatCard icon={Bell} label="Alerts" value="02" color="text-rose-600" bg="bg-rose-50" />
      </div>

      {/* Analytics and Schedule Split */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-stretch">
        
        {/* Left: Ongoing & Class Trends */}
        <div className="xl:col-span-2 space-y-8">
           {/* Ongoing Class Focus */}
           <div className="bg-blue-600 rounded-[3rem] p-10 text-white shadow-2xl shadow-blue-100 overflow-hidden relative group">
              <div className="relative z-10 flex justify-between items-center">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 backdrop-blur-md text-white rounded-full text-[9px] font-black uppercase tracking-widest">
                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                    Currently Teaching
                  </div>
                  <h2 className="text-4xl font-black tracking-tight">Quantum Computing</h2>
                  <div className="flex items-center gap-6 text-blue-100/80 font-bold text-sm">
                    <span className="flex items-center gap-2"><Clock size={16} /> 10:00 AM - 11:30 AM</span>
                    <span className="flex items-center gap-2"><Users size={16} /> Room 402 • 38 Students</span>
                  </div>
                  <button className="bg-white text-blue-600 px-8 py-3.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-50 transition-colors shadow-lg">
                    View Class List
                  </button>
                </div>
                <div className="hidden lg:block w-48 h-48 bg-white/10 rounded-[3rem] border border-white/10 p-8 transform rotate-12 group-hover:rotate-0 transition-transform duration-700">
                    <BarChart3 size={112} className="text-white/20" />
                </div>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl" />
           </div>

           {/* Attendance Trends */}
           <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col h-[400px]">
              <div className="flex justify-between items-center mb-8">
                 <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center">
                       <TrendingUp size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">Attendance Retention</h3>
                      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Last 7 Academic Sessions</p>
                    </div>
                 </div>
                 <select className="bg-slate-50 border-none rounded-xl px-4 py-2 outline-none text-[10px] font-black uppercase tracking-widest text-slate-500 cursor-pointer">
                    <option>Weekly View</option>
                    <option>Monthly View</option>
                 </select>
              </div>
              <div className="flex-1 w-full">
                 <DashboardCharts type="area" />
              </div>
           </div>
        </div>

        {/* Right: Daily Schedule Sidebar */}
        <div className="bg-white p-8 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col">
           <div className="flex justify-between items-center mb-10">
              <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                 <Calendar className="text-blue-600" size={20} />
                 Daily Routine
              </h3>
              <button className="text-[10px] font-black text-blue-600 uppercase tracking-widest hover:underline">Full View</button>
           </div>

           <div className="space-y-6 flex-1">
             {schedule.map((item) => (
               <div key={item.id} className={`relative pl-8 group cursor-pointer ${!item.active ? 'opacity-50 grayscale' : ''}`}>
                  <div className={`absolute left-0 top-0 bottom-0 w-0.5 rounded-full transition-all duration-500 ${item.active ? 'bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]' : 'bg-slate-200 group-hover:bg-slate-400'}`} />
                  <div className="space-y-1">
                    <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">{item.time}</span>
                    <h4 className="font-black text-slate-800 leading-tight group-hover:text-blue-600 transition-colors">{item.subject}</h4>
                    <div className="flex items-center gap-2">
                       <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.class}</span>
                       <span className="w-1 h-1 rounded-full bg-slate-200" />
                       <span className="text-[10px] font-black text-slate-500">{item.students} Students</span>
                    </div>
                  </div>
                  {item.active && (
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 transition-all">
                      <ChevronRight size={18} />
                    </div>
                  )}
               </div>
             ))}
           </div>

           {/* Notifications/Reminders Block */}
           <div className="mt-10 p-6 bg-amber-50 rounded-[2rem] border border-amber-100 space-y-4">
              <div className="flex items-center gap-2 text-amber-700 font-extrabold text-[10px] uppercase tracking-widest">
                 <AlertCircle size={14} />
                 System Alerts
              </div>
              <div className="space-y-3">
                 <p className="text-xs font-bold text-slate-600 leading-relaxed">
                   Attendance not marked for <span className="text-amber-700">Physics 101</span>.
                 </p>
                 <div className="w-full h-1 bg-amber-200/50 rounded-full overflow-hidden">
                    <div className="w-2/3 h-full bg-amber-500 rounded-full" />
                 </div>
              </div>
           </div>
        </div>

      </div>

      {/* Reports Quick Look / Data Table Section */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
           <h3 className="text-2xl font-black text-slate-900 tracking-tighter">Academic Performance <span className="text-blue-600">Overview</span></h3>
           <button className="text-[10px] font-black text-slate-400 uppercase tracking-[2px] hover:text-blue-600 transition-colors">Generate Comprehensive Report</button>
        </div>
        
        <div className="bg-white rounded-[3rem] border border-slate-100 shadow-sm overflow-hidden p-2">
           <div className="[&>div]:border-none [&>div]:shadow-none [&>div]:bg-transparent">
             <ProfessionalTable 
               columns={[
                 { label: "Class", key: "class", primary: true },
                 { label: "Subject", key: "subject" },
                 { label: "Performance", key: "performance" },
                 { label: "Status", key: "status", status: true }
               ]}
               data={[
                 { class: "Year 2 - CS", subject: "Comp Architecture", performance: "88%", status: "Stable" },
                 { class: "Year 4 - CS", subject: "Quantum Computing", performance: "92%", status: "Excellence" },
                 { class: "Year 1 - IT", subject: "Foundations", performance: "76%", status: "Attention" }
               ]}
               title=""
               hideHeader={true}
             />
           </div>
        </div>
      </div>

    </div>
  );
};

export default TeacherDashboard;
