import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Download, 
  CheckCircle2, 
  XCircle, 
  Clock3,
  ChevronLeft,
  Save,
  QrCode,
  UserCheck,
  MoreVertical,
  ArrowUpDown,
  FileSpreadsheet
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import StatusChip from '../../components/StatusChip';

const DesktopAttendanceHeader = ({ title, subtitle, stats, onMarkAllPresent }) => (
  <div className="bg-white px-10 py-12 rounded-[3.5rem] border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row justify-between items-center gap-10 relative overflow-hidden">
    <div className="relative z-10 flex flex-col gap-3">
      <div className="flex items-center gap-2 text-blue-600 font-black text-[10px] uppercase tracking-[3px] bg-blue-50/50 w-fit px-4 py-1.5 rounded-full border border-blue-100/50">
        <div className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
        Live Session Management
      </div>
      <h1 className="text-6xl font-black text-slate-900 tracking-tighter leading-none">
        {title}
      </h1>
      <p className="text-slate-400 font-bold text-sm tracking-[4px] uppercase mt-2">{subtitle}</p>
    </div>

    <div className="flex items-center gap-14 relative z-10 bg-slate-50/30 p-8 rounded-[2.5rem] border border-slate-100/50 backdrop-blur-sm">
      {stats.map((stat, i) => (
        <div key={i} className="flex flex-col items-center gap-1">
          <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
          <span className={`text-4xl font-black tracking-tighter ${stat.color}`}>{stat.value}</span>
        </div>
      ))}
      <div className="w-px h-14 bg-slate-200/50" />
      <div className="flex gap-4">
         <button 
           onClick={onMarkAllPresent}
           className="flex items-center gap-3 bg-emerald-600 text-white px-8 py-5 rounded-2xl text-[10px] font-black uppercase tracking-[2px] transition-all hover:bg-emerald-700 hover:scale-105 active:scale-95 shadow-xl shadow-emerald-100"
         >
           <CheckCircle2 size={18} />
           Mark All Present
         </button>
         <button className="p-5 bg-slate-900 text-white rounded-2xl hover:bg-slate-800 transition-all shadow-xl shadow-slate-200 group active:scale-95">
           <Save size={22} className="group-hover:scale-110 transition-transform" />
         </button>
      </div>
    </div>
    
    <div className="absolute top-0 right-0 w-80 h-80 bg-blue-50/30 rounded-full -mr-40 -mt-40 blur-3xl" />
  </div>
);

const AttendanceScreen = () => {
  const navigate = useNavigate();
  const [students, setStudents] = useState([
    { id: 'STU001', name: 'Zayed Al Nahyan', attendance: 'Present', lastMarked: '08:35 AM', department: 'Computer Science', course: 'B.Tech', status: 'Enrolled' },
    { id: 'STU002', name: 'Fatima Al Hashimi', attendance: 'Absent', lastMarked: '-', department: 'Computer Science', course: 'B.Tech', status: 'On Leave' },
    { id: 'STU003', name: 'Omar Al Marzooqi', attendance: 'Late', lastMarked: '08:50 AM', department: 'Computer Science', course: 'B.Tech', status: 'Enrolled' },
    { id: 'STU004', name: 'Maryam Al Falasi', attendance: 'Present', lastMarked: '08:32 AM', department: 'Computer Science', course: 'B.Tech', status: 'Enrolled' },
    { id: 'STU005', name: 'Sultan Al Qasimi', attendance: 'Present', lastMarked: '08:30 AM', department: 'Computer Science', course: 'B.Tech', status: 'Enrolled' },
    { id: 'STU006', name: 'Amna Rashid', attendance: 'Present', lastMarked: '08:33 AM', department: 'Computer Science', course: 'B.Tech', status: 'Enrolled' },
  ]);

  const updateAttendance = (id, status) => {
    setStudents(students.map(s => s.id === id ? { ...s, attendance: status, lastMarked: (status === 'Present' || status === 'Late' || status === 'Early Exit') ? new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : '-' } : s));
  };

  const handleMarkAllPresent = () => {
    const time = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setStudents(students.map(s => ({ ...s, attendance: 'Present', lastMarked: time })));
  };

  return (
    <div className="max-w-[1700px] mx-auto space-y-12 font-['Outfit'] animate-in fade-in duration-1000 p-4 font-bold">
      
      {/* Navigation Breadcrumb */}
      <div className="flex justify-between items-center">
        <button 
          onClick={() => navigate('/teacher/dashboard')}
          className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[3px] text-slate-400 hover:text-blue-600 transition-all"
        >
          <div className="w-8 h-8 rounded-full bg-white border border-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:border-blue-100 transition-all">
            <ChevronLeft size={14} />
          </div>
          Return to Dashboard
        </button>
        <div className="text-[10px] font-black text-slate-400 tracking-[3px] uppercase">
          Session ID: <span className="text-slate-900 border-b-2 border-blue-600 pb-1">AMS-77291</span>
        </div>
      </div>

      {/* Main Web Header */}
      <DesktopAttendanceHeader 
        title={<>Mark <span className="text-blue-600 italic">Attendance</span></>}
        subtitle="Quantum Computing (QC-402) • CSE • Semester 04"
        onMarkAllPresent={handleMarkAllPresent}
        stats={[
          { label: "Enrolled", value: "42", color: "text-slate-900" },
          { label: "Present", value: students.filter(s => s.attendance === 'Present').length, color: "text-emerald-500" },
          { label: "Late Intake", value: students.filter(s => s.attendance === 'Late').length, color: "text-amber-500" },
        ]}
      />

      {/* Complex Web Workspace */}
      <div className="space-y-8">
        
        {/* Advanced Filters & Controls Bar */}
        <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[3.5rem] border border-white shadow-[20px_20px_60px_rgba(0,0,0,0.02)] flex flex-col xl:flex-row items-center justify-between gap-8">
           <div className="flex items-center gap-8 w-full lg:w-auto">
              <div className="flex items-center gap-3 bg-slate-100/50 border border-slate-200/50 px-6 py-4 rounded-[2rem] w-full lg:w-[500px] focus-within:bg-white focus-within:ring-4 focus-within:ring-blue-50/50 transition-all shadow-inner">
                 <Search size={20} className="text-slate-400" />
                 <input 
                    type="text" 
                    placeholder="Search by student identity, ID or enrollment status..." 
                    className="bg-transparent border-none outline-none text-sm text-slate-700 font-bold placeholder:text-slate-400 w-full" 
                 />
              </div>
              <div className="hidden lg:flex items-center gap-4">
                 <button className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-lg transition-all active:scale-95 shadow-sm">
                    <Filter size={20} />
                 </button>
                 <button className="p-4 bg-white border border-slate-100 rounded-2xl text-slate-400 hover:text-blue-600 hover:border-blue-100 hover:shadow-lg transition-all active:scale-95 shadow-sm">
                    <ArrowUpDown size={20} />
                 </button>
              </div>
           </div>

           <div className="flex items-center gap-4 w-full lg:w-auto justify-end">
              <span className="text-[10px] font-black text-slate-400 uppercase tracking-[3px] mr-6">Export Intelligence:</span>
              <button className="flex items-center gap-3 bg-emerald-50 text-emerald-600 px-8 py-4.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-emerald-100 transition-all border border-emerald-100 shadow-sm overflow-hidden relative group active:scale-95">
                 <FileSpreadsheet size={18} />
                 XLS Snapshot
                 <div className="absolute inset-0 bg-emerald-200/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
              </button>
              <button className="flex items-center gap-3 bg-indigo-50 text-indigo-600 px-8 py-4.5 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-indigo-100 transition-all border border-indigo-100 shadow-sm group active:scale-95">
                 <Download size={18} />
                 PDF Manifest
              </button>
           </div>
        </div>

        {/* Desktop Attendance Table */}
        <div className="bg-white rounded-[4rem] border border-slate-100 shadow-[20px_20px_60px_rgba(0,0,0,0.01)] overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 uppercase tracking-[2px]">
                  <th className="pl-12 pr-8 py-8 text-[11px] font-black text-slate-400 border-b border-slate-100 text-center w-24">Initial</th>
                  <th className="px-8 py-8 text-[11px] font-black text-slate-400 border-b border-slate-100">Student Identity</th>
                  <th className="px-8 py-8 text-[11px] font-black text-slate-400 border-b border-slate-100 text-center">Live Status</th>
                  <th className="px-8 py-8 text-[11px] font-black text-slate-400 border-b border-slate-100">Logging Entry</th>
                  <th className="pr-12 pl-8 py-8 text-[11px] font-black text-slate-400 border-b border-slate-100 text-right">Interactive Interface</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {students.map((student) => (
                  <tr key={student.id} className="hover:bg-slate-50/40 transition-all group">
                    <td className="pl-12 pr-8 py-8">
                       <div className="flex justify-center">
                          <div className={`w-14 h-14 rounded-[1.25rem] bg-gradient-to-br border border-slate-100 flex items-center justify-center font-black text-lg shadow-sm transition-all duration-500
                             ${student.attendance === 'Present' ? 'from-emerald-50 to-emerald-100 text-emerald-600 border-emerald-200' : 'from-slate-50 to-slate-100 text-slate-400'}
                          `}>
                             {student.name.split(' ').map(n => n[0]).join('')}
                          </div>
                       </div>
                    </td>
                    <td className="px-8 py-8">
                      <div>
                        <h4 className="font-black text-slate-900 tracking-tight text-lg group-hover:text-blue-600 transition-colors uppercase">{student.name}</h4>
                        <div className="flex items-center gap-3 mt-1.5">
                           <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest bg-blue-50 px-2 py-0.5 rounded-md">{student.id}</span>
                           <span className="w-1.5 h-1.5 rounded-full bg-slate-200" />
                           <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{student.department} • {student.course}</span>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <div className="flex justify-center scale-110">
                        <StatusChip status={student.attendance} />
                      </div>
                    </td>
                    <td className="px-8 py-8">
                      <div className="flex items-center gap-4 text-xs font-black text-slate-600 bg-slate-100/50 w-fit px-4 py-2 rounded-xl border border-slate-200/50">
                         <Clock3 size={16} className={student.lastMarked === '-' ? 'text-slate-300' : 'text-emerald-500'} />
                         {student.lastMarked === '-' ? <span className="text-slate-300 uppercase tracking-widest italic text-[10px]">No Log Yet</span> : student.lastMarked}
                      </div>
                    </td>
                    <td className="pr-12 pl-8 py-8">
                      <div className="flex items-center justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        <button 
                          onClick={() => updateAttendance(student.id, 'Present')}
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${student.attendance === 'Present' ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-200 scale-110' : 'bg-slate-50 text-slate-400 hover:bg-emerald-50 hover:text-emerald-500 hover:shadow-lg'}`}
                          title="Mark Present"
                        >
                          <CheckCircle2 size={22} />
                        </button>
                        <button 
                          onClick={() => updateAttendance(student.id, 'Absent')}
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${student.attendance === 'Absent' ? 'bg-rose-600 text-white shadow-xl shadow-rose-200 scale-110' : 'bg-slate-50 text-slate-400 hover:bg-rose-50 hover:text-rose-500 hover:shadow-lg'}`}
                          title="Mark Absent"
                        >
                          <XCircle size={22} />
                        </button>
                        <button 
                          onClick={() => updateAttendance(student.id, 'Late')}
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${student.attendance === 'Late' ? 'bg-amber-600 text-white shadow-xl shadow-amber-200 scale-110' : 'bg-slate-50 text-slate-400 hover:bg-amber-50 hover:text-amber-500 hover:shadow-lg'}`}
                          title="Mark Late"
                        >
                          <Clock3 size={22} />
                        </button>
                        <button 
                          onClick={() => updateAttendance(student.id, 'Early Exit')}
                          className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all ${student.attendance === 'Early Exit' ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-110' : 'bg-slate-50 text-slate-400 hover:bg-blue-50 hover:text-blue-500 hover:shadow-lg'}`}
                          title="Mark Early Exit"
                        >
                          <Download size={20} className="rotate-180" />
                        </button>
                        <div className="w-px h-8 bg-slate-200 mx-3" />
                        <button className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 hover:shadow-md transition-all active:scale-90">
                           <MoreVertical size={22} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-10 border-t border-slate-50 bg-slate-50/40 flex justify-between items-center px-12">
             <div className="flex items-center gap-4">
                <div className="flex -space-x-3">
                   {[1,2,3].map(i => <div key={i} className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white" />)}
                </div>
                <p className="text-[11px] font-black text-slate-400 uppercase tracking-[2px]">
                   Session Progress: <span className="text-slate-900">Marked {students.filter(s => s.lastMarked !== '-').length} of {students.length} students</span>
                </p>
             </div>
             <button className="flex items-center gap-3 bg-slate-900 text-white px-10 py-5 rounded-2xl text-[11px] font-black uppercase tracking-[3px] hover:translate-y-[-4px] active:translate-y-0 shadow-2xl shadow-slate-300 transition-all group">
                <Save size={20} className="group-hover:rotate-12 transition-transform" />
                Submit Final Records
             </button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default AttendanceScreen;
