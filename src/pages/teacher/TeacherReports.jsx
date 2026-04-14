import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  ChevronRight,
  BarChart2,
  Calendar,
  Layers,
  ArrowUpDown,
  FileSpreadsheet,
  Clock3
} from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';
import StatusChip from '../../components/StatusChip';

const TeacherReports = () => {
  const [activeTab, setActiveTab] = useState('detailed'); // 'summary' or 'detailed'

  const reportsSummary = [
    { title: "Physics 101 - Weekly Attendance", date: "April 12, 2026", type: "Attendance", status: "Ready" },
    { title: "Quantum Computing - Midterm Progress", date: "April 10, 2026", type: "Academic", status: "Generated" },
    { title: "Lab: Electronics - Safety Compliance", date: "April 08, 2026", type: "Safety", status: "Archived" },
  ];

  const attendanceDetails = [
    { name: "Zayed Al Nahyan", date: "Apr 14, 2026", period: "Period 01", status: "Present", inTime: "08:35 AM", outTime: "09:30 AM" },
    { name: "Fatima Al Hashimi", date: "Apr 14, 2026", period: "Period 01", status: "Absent", inTime: "-", outTime: "-" },
    { name: "Omar Al Marzooqi", date: "Apr 14, 2026", period: "Period 01", status: "Late", inTime: "08:50 AM", outTime: "09:30 AM" },
    { name: "Maryam Al Falasi", date: "Apr 14, 2026", period: "Period 02", status: "Present", inTime: "10:02 AM", outTime: "11:30 AM" },
    { name: "Sultan Al Qasimi", date: "Apr 14, 2026", period: "Period 02", status: "Early Exit", inTime: "10:00 AM", outTime: "10:45 AM" },
  ];

  return (
    <div className="max-w-[1700px] mx-auto space-y-10 animate-in fade-in duration-700 p-4 font-bold">
      
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-indigo-50/50 text-indigo-600 rounded-full text-[10px] font-black uppercase tracking-[3px] border border-indigo-100">
            <Layers size={12} fill="currentColor" />
            Insights Engine v2.0
          </div>
          <h1 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">
            Attendance <span className="text-blue-600 italic">Intelligence</span>
          </h1>
          <p className="text-slate-400 font-bold text-sm tracking-[4px] uppercase mt-1">Cross-session analysis & granular reporting</p>
        </div>

        <div className="flex gap-4">
           <button className="flex items-center gap-3 bg-white border border-slate-200 text-slate-900 px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[2px] hover:bg-slate-50 transition-all shadow-sm active:scale-95">
             <Calendar size={18} />
             Schedule Auto-Report
           </button>
           <button className="flex items-center gap-3 bg-slate-900 text-white px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[2px] hover:translate-y-[-2px] transition-all shadow-2xl shadow-slate-200 active:scale-95">
             <Download size={18} />
             Export All Data
           </button>
        </div>
      </div>

      {/* Analytics Tabs */}
      <div className="flex gap-4 border-b border-slate-100 pb-2">
        <button 
          onClick={() => setActiveTab('detailed')}
          className={`px-8 py-4 rounded-t-3xl text-[10px] font-black uppercase tracking-[3px] transition-all ${activeTab === 'detailed' ? 'bg-white border-x border-t border-slate-100 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Detailed Records
        </button>
        <button 
          onClick={() => setActiveTab('summary')}
          className={`px-8 py-4 rounded-t-3xl text-[10px] font-black uppercase tracking-[3px] transition-all ${activeTab === 'summary' ? 'bg-white border-x border-t border-slate-100 text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
        >
          Summary Repositories
        </button>
      </div>

      {/* Filtration Workspace */}
      <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[3rem] border border-white shadow-[20px_20px_60px_rgba(0,0,0,0.02)] flex flex-wrap items-center gap-6">
         <div className="flex items-center gap-3 bg-slate-100/50 border border-slate-100/50 px-6 py-4 rounded-2xl min-w-[350px]">
            <Search size={18} className="text-slate-400" />
            <input type="text" placeholder="Filter by Class, Subject or Date..." className="bg-transparent border-none outline-none text-xs text-slate-700 font-bold w-full uppercase tracking-widest placeholder:text-slate-300" />
         </div>
         
         <div className="flex items-center gap-4">
            <select className="bg-white border border-slate-100 rounded-2xl px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm outline-none">
               <option>Select Class</option>
               <option>Year 2 - CS</option>
               <option>Year 4 - CS</option>
            </select>
            <select className="bg-white border border-slate-100 rounded-2xl px-6 py-4 text-[10px] font-black uppercase tracking-widest text-slate-500 shadow-sm outline-none">
               <option>Select Subject</option>
               <option>Physics 101</option>
               <option>Quantum Computing</option>
            </select>
            <div className="bg-white border border-slate-100 rounded-2xl px-6 py-4 flex items-center gap-3 shadow-sm">
               <Calendar size={14} className="text-slate-400" />
               <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Date Range</span>
            </div>
         </div>

         <div className="ml-auto">
            <button className="p-4 bg-slate-50 text-slate-400 rounded-2xl hover:text-blue-600 hover:bg-blue-50 transition-all active:scale-90">
               <Filter size={20} />
            </button>
         </div>
      </div>

      {/* Main Table Portal */}
      <div className="bg-white rounded-[4rem] border border-slate-100 shadow-[20px_20px_60px_rgba(0,0,0,0.01)] overflow-hidden">
        {activeTab === 'detailed' ? (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="pl-12 pr-8 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Student Name</th>
                  <th className="px-8 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Date</th>
                  <th className="px-8 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100">Period</th>
                  <th className="px-8 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-center">Status</th>
                  <th className="px-8 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 border-x border-slate-100">In Time</th>
                  <th className="px-8 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 border-r border-slate-100">Out Time</th>
                  <th className="pr-12 pl-8 py-8 text-[11px] font-black text-slate-400 uppercase tracking-widest border-b border-slate-100 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {attendanceDetails.map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50/40 transition-all group">
                    <td className="pl-12 pr-8 py-8">
                       <h4 className="font-black text-slate-900 tracking-tight text-lg uppercase">{row.name}</h4>
                    </td>
                    <td className="px-8 py-8 text-xs font-black text-slate-500 uppercase tracking-widest">{row.date}</td>
                    <td className="px-8 py-8">
                       <span className="bg-slate-100 px-3 py-1 rounded-lg text-[10px] font-black text-slate-600 uppercase tracking-widest">{row.period}</span>
                    </td>
                    <td className="px-8 py-8 text-center">
                       <StatusChip status={row.status} />
                    </td>
                    <td className="px-8 py-8">
                       <div className="flex items-center gap-2 text-xs font-black text-emerald-600">
                          <Clock3 size={14} />
                          {row.inTime}
                       </div>
                    </td>
                    <td className="px-8 py-8">
                       <div className="flex items-center gap-2 text-xs font-black text-rose-600">
                          <Clock3 size={14} />
                          {row.outTime}
                       </div>
                    </td>
                    <td className="pr-12 pl-8 py-8 text-right">
                       <button className="p-3 bg-slate-50 text-slate-300 rounded-xl hover:text-blue-600 hover:shadow-lg transition-all opacity-0 group-hover:opacity-100">
                          <FileSpreadsheet size={18} />
                       </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6">
            <ProfessionalTable 
              columns={[
                { label: "Report Title", key: "title", primary: true },
                { label: "Date Created", key: "date" },
                { label: "Category", key: "type" },
                { label: "Status", key: "status", status: true }
              ]}
              data={reportsSummary}
              title="Academic Repositories"
              hideControls={false}
            />
          </div>
        )}
      </div>

    </div>
  );
};

export default TeacherReports;
