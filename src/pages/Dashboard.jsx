import React from 'react';
import { 
  Users, 
  UserCheck, 
  Calendar, 
  TrendingUp, 
  ArrowUpRight, 
  Zap,
  MoreVertical,
  Activity,
  Award,
  Search,
  Filter,
  Download,
  PieChart as PieIcon,
  BarChart as BarIcon
} from 'lucide-react';
import DashboardCharts from '../components/DashboardCharts';
import ProfessionalTable from '../components/ProfessionalTable';

const PremiumStatCard = ({ icon: Icon, label, value, subValue, subLabel, color, bg }) => (
  <div className="bg-white p-6 rounded-[2rem] border border-slate-100 shadow-[20px_20px_60px_rgba(0,0,0,0.02)] hover:shadow-[20px_20px_60px_rgba(0,0,0,0.05)] transition-all duration-500 group h-full">
    <div className="flex justify-between items-start mb-6">
      <div className={`w-12 h-12 ${bg} ${color} rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-500`}>
        <Icon size={24} />
      </div>
      <button className="text-slate-300 hover:text-slate-500 transition-colors">
        <MoreVertical size={18} />
      </button>
    </div>
    
    <div className="space-y-3">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[2px] text-slate-400 mb-1">{label}</p>
        <h3 className="text-3xl font-black text-slate-900 tracking-tighter">{value}</h3>
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-slate-50">
        <div className="flex flex-col">
          <span className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{subLabel}</span>
          <span className="text-xs font-black text-slate-700">{subValue}</span>
        </div>
        <div className="w-7 h-7 rounded-full bg-slate-50 flex items-center justify-center">
            <ArrowUpRight size={12} className={color} />
        </div>
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const timetableColumns = [
    { label: "Staff", key: "Staff", primary: true },
    { label: "Block", key: "Block" },
    { label: "Class Room", key: "Class Room" },
    { label: "Course", key: "Course" },
    { label: "From Time", key: "From Time" },
    { label: "To Time", key: "To Time" },
    { label: "Created At", key: "Created At" }
  ];

  const timetableData = [
    {
      "Staff": "Dr. Ahmed Al Mansouri", "Block": "Block A", "Class Room": "Room 402", "Course": "Computer Science",
      "From Time": "08:30 AM", "To Time": "09:30 AM", "Created At": "2026-04-15"
    },
    {
      "Staff": "Prof. Sarah Khan", "Block": "Block B", "Class Room": "Room 105", "Course": "Business Analytics",
      "From Time": "10:00 AM", "To Time": "11:00 AM", "Created At": "2026-04-15"
    },
    {
      "Staff": "Engr. Zayed Rashid", "Block": "Block C", "Class Room": "Room 202", "Course": "Civil Engineering",
      "From Time": "11:30 AM", "To Time": "12:30 PM", "Created At": "2026-04-15"
    },
    {
      "Staff": "Ms. Fatima Hassan", "Block": "Block A", "Class Room": "Room 301", "Course": "Arabic Literature",
      "From Time": "02:00 PM", "To Time": "03:00 PM", "Created At": "2026-04-15"
    }
  ];

  return (
    <div className="w-full max-w-[1600px] mx-auto space-y-8 pb-12 px-6 font-['Outfit'] overflow-x-hidden">
      
      {/* Header - Aligned */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pt-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-[9px] font-black uppercase tracking-widest">
            <Zap size={10} fill="currentColor" />
            Live Insights: UAE Region
          </div>
          <h1 className="text-5xl font-black text-slate-900 tracking-tighter">
            Super Admin <span className="text-blue-600 italic">Dashboard</span>
          </h1>
          <p className="text-slate-400 font-medium text-base tracking-tight">
            Institutional metrics and real-time operational monitoring.
          </p>
        </div>

        <div className="flex items-center gap-4 bg-white p-2 rounded-2xl border border-slate-100 shadow-sm">
           <div className="flex flex-col px-4 border-r border-slate-100">
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest">Sync Status</span>
              <span className="text-[10px] font-black text-emerald-500 uppercase flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                System Active
              </span>
           </div>
           <div className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center text-white shadow-lg">
              <Activity size={18} />
           </div>
        </div>
      </div>

      {/* Grid: 4 Stat Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <PremiumStatCard icon={Users} label="Total Students" value="1,284" subLabel="Growth Today" subValue="+142" color="text-blue-600" bg="bg-blue-50" />
        <PremiumStatCard icon={UserCheck} label="Attendance" value="94.2%" subLabel="Daily Avg" subValue="890 Present" color="text-emerald-600" bg="bg-emerald-50" />
        <PremiumStatCard icon={Award} label="Success Rate" value="98.2%" subLabel="Academic Year" subValue="2023/24" color="text-indigo-600" bg="bg-indigo-50" />
        <PremiumStatCard icon={Calendar} label="Active Classes" value="156" subLabel="Real-time" subValue="Peak Load" color="text-rose-600" bg="bg-rose-50" />
      </div>

      {/* Charts Section - Equal Height & Baseline Aligned */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
         <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col h-[450px]">
            <div className="flex justify-between items-center mb-6">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center">
                    <BarIcon size={16} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Registration Trends</h3>
               </div>
               <button className="text-slate-300 hover:text-slate-900"><MoreVertical size={18} /></button>
            </div>
            <div className="flex-1 w-full overflow-hidden">
               <DashboardCharts type="area" />
            </div>
         </div>

         <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm flex flex-col h-[450px]">
            <div className="flex justify-between items-center mb-6">
               <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-rose-50 text-rose-600 rounded-lg flex items-center justify-center">
                    <PieIcon size={16} />
                  </div>
                  <h3 className="text-xl font-black text-slate-900 tracking-tight">Gender Distribution</h3>
               </div>
               <button className="text-slate-300 hover:text-slate-900"><MoreVertical size={18} /></button>
            </div>
            <div className="flex-1 w-full overflow-hidden">
               <DashboardCharts type="pie" />
            </div>
         </div>
      </div>

      {/* Control Bar - Single Horizontal Line Alignment */}
      <div className="bg-white px-8 py-5 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-6 w-full md:w-auto">
           <h3 className="text-xl font-black text-slate-900 whitespace-nowrap">Today's Timetable</h3>
           <div className="hidden md:block w-px h-6 bg-slate-100" />
           <div className="flex items-center gap-2 text-slate-400 text-[10px] font-black uppercase tracking-widest">
              <span>Show</span>
              <select className="bg-slate-50 border-none rounded-lg px-2 py-1 outline-none text-slate-900 cursor-pointer hover:bg-slate-100 transition-colors appearance-none text-center min-w-[50px]">
                 <option>10</option>
                 <option>25</option>
              </select>
              <span>Records</span>
           </div>
        </div>
        
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 px-4 py-2.5 rounded-xl text-slate-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100 transition-all flex-1 md:flex-initial">
            <Search size={14} />
            <input type="text" placeholder="Quick search..." className="bg-transparent border-none outline-none text-xs text-slate-700 placeholder:text-slate-400 w-full md:w-48" />
          </div>
          <button className="flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-50 transition-all whitespace-nowrap">
             <Filter size={14} />
             Filter
          </button>
          <button className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-widest hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 whitespace-nowrap">
             <Download size={14} />
             Export Data
          </button>
        </div>
      </div>

      {/* Table Section - Clean start below controls */}
      <div className="bg-white rounded-[2.5rem] border border-slate-100 shadow-sm overflow-hidden p-2">
         <div className="[&>div]:border-none [&>div]:shadow-none [&>div]:bg-transparent [&>div]:rounded-none">
          <ProfessionalTable 
            columns={timetableColumns} 
            data={timetableData} 
            title="" 
            hideHeader={true}
            hideControls={true}
          />
         </div>
      </div>

    </div>
  );
};

export default Dashboard;
