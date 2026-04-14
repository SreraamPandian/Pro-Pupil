import React from 'react';
import { FileText, Search, RotateCcw, Calendar } from 'lucide-react';
import ProfessionalTable from '../../components/ProfessionalTable';

const FileLogs = () => {
  const columns = [
    { label: 'Timestamp', key: 'time', primary: true },
    { label: 'Event Type', key: 'type' },
    { label: 'Description', key: 'desc' },
    { label: 'Origin', key: 'origin' },
    { label: 'Status', key: 'status' },
  ];

  const data = [
    { 
      time: "14-04-2026 10:22 AM", type: "Login Success", desc: "User Admin logged in from 192.168.1.5", origin: "Web Dashboard", 
      status: <span className="text-emerald-600 font-bold">Success</span> 
    },
    { 
      time: "14-04-2026 09:15 AM", type: "DB Backup", desc: "Scheduled database backup completed successfully", origin: "System Core", 
      status: <span className="text-emerald-600 font-bold">Success</span> 
    },
    { 
      time: "14-04-2026 08:44 AM", type: "API Error", desc: "Device H0001 connection timeout", origin: "Device API", 
      status: <span className="text-rose-500 font-bold">Failed</span> 
    },
  ];

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Page Header */}
      <div className="flex items-center gap-5">
        <div className="w-16 h-16 rounded-[1.5rem] bg-white border border-white/40 shadow-[10px_10px_30px_#d1d9e6,-10px_-10px_30px_#ffffff] flex items-center justify-center text-blue-600">
          <FileText size={32} strokeWidth={1.5} />
        </div>
        <div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-1">File Logs</h1>
          <p className="text-slate-500 font-medium tracking-wide">Review and analyze system access logs and event history.</p>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="bg-white/60 backdrop-blur-xl rounded-[2.5rem] border border-white/40 p-8 shadow-sm">
        <div className="flex items-end gap-6 max-w-2xl">
          <div className="flex flex-col gap-2 flex-1">
            <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">-- Select Date --</label>
            <div className="relative group">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-blue-500 transition-colors">
                <Calendar size={16} />
              </div>
              <input type="text" defaultValue="07-04-2026" className="w-full bg-white/50 border border-white/40 pl-11 pr-4 py-3 rounded-2xl text-sm font-medium text-slate-700 shadow-inner focus:ring-2 focus:ring-blue-200 outline-none transition-all" />
            </div>
          </div>
          <button className="bg-blue-600 text-white px-10 py-3.5 rounded-2xl font-black shadow-lg shadow-blue-200 hover:bg-blue-700 active:scale-95 transition-all flex items-center justify-center gap-2 mb-0.5">
            <Search size={18} />
            SEARCH
          </button>
          <button className="bg-white text-slate-400 border border-slate-100 px-6 py-3.5 rounded-2xl font-black shadow-sm hover:bg-slate-50 active:scale-95 transition-all flex items-center justify-center gap-2 mb-0.5">
            <RotateCcw size={18} />
            CLEAR
          </button>
        </div>
      </div>

      <ProfessionalTable title="Recent Access Activity" data={data} columns={columns} />
    </div>
  );
};

export default FileLogs;
